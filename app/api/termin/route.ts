import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const RESEND_API_KEY = process.env.RESEND_API_KEY
const NOTIFY_EMAIL = process.env.TERMIN_NOTIFY_EMAIL || process.env.ADMIN_EMAIL
const EMAIL_FROM = process.env.EMAIL_FROM || 'SEO Agentur <noreply@seomuenchen.com>'

const CONFIRM_HTML = (name: string) => `
  <h2>Anfrage erhalten</h2>
  <p>Hallo ${name},</p>
  <p>vielen Dank für Ihre Terminanfrage. Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.</p>
  <p>Bei Rückfragen erreichen Sie uns unter <a href="tel:+4915565087694">+49 155 65087694</a> oder per E-Mail an <a href="mailto:info@seomuenchen.com">info@seomuenchen.com</a>.</p>
  <p>Mit freundlichen Grüßen<br>Ihr Team von SEO München</p>
`

async function sendWithSendGrid(to: string, subject: string, html: string, replyTo?: string) {
  if (!SENDGRID_API_KEY) throw new Error('SENDGRID_API_KEY nicht gesetzt')
  sgMail.setApiKey(SENDGRID_API_KEY)
  await sgMail.send({
    to,
    from: EMAIL_FROM,
    replyTo: replyTo || undefined,
    subject,
    html,
  })
}

async function sendWithResend(to: string, subject: string, html: string, replyTo?: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM || 'SEO Agentur <onboarding@resend.dev>',
      to,
      replyTo: replyTo || undefined,
      subject,
      html,
    }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.message || err?.msg || 'E-Mail konnte nicht gesendet werden.')
  }
}

async function sendMail(to: string, subject: string, html: string, replyTo?: string) {
  if (SENDGRID_API_KEY) {
    await sendWithSendGrid(to, subject, html, replyTo)
  } else if (RESEND_API_KEY) {
    await sendWithResend(to, subject, html, replyTo)
  } else {
    throw new Error('Weder SENDGRID_API_KEY noch RESEND_API_KEY gesetzt.')
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, termin_datum, termin_uhrzeit, sendConfirmationOnly } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name und E-Mail sind erforderlich.' },
        { status: 400 }
      )
    }

    // Nur Bestätigungs-Mail an User (z. B. nach Formspree-Submit)
    if (sendConfirmationOnly) {
      if (!SENDGRID_API_KEY && !RESEND_API_KEY) {
        return NextResponse.json(
          { error: 'SENDGRID_API_KEY oder RESEND_API_KEY in .env.local setzen.' },
          { status: 500 }
        )
      }
      await sendMail(
        email,
        'Ihre Terminanfrage bei SEO München – wir melden uns in Kürze',
        CONFIRM_HTML(name)
      )
      return NextResponse.json({ success: true })
    }

    // Benachrichtigung an dich + Bestätigung an User
    if (!NOTIFY_EMAIL) {
      return NextResponse.json(
        { error: 'TERMIN_NOTIFY_EMAIL oder ADMIN_EMAIL in .env.local setzen.' },
        { status: 500 }
      )
    }
    if (!SENDGRID_API_KEY && !RESEND_API_KEY) {
      console.log('Terminanfrage (kein API-Key):', { name, email, phone, message, termin_datum, termin_uhrzeit })
      return NextResponse.json({
        success: true,
        message: 'SENDGRID_API_KEY (oder RESEND_API_KEY) und TERMIN_NOTIFY_EMAIL setzen für E-Mail-Versand.',
      })
    }

    const formattedDate = termin_datum
      ? new Date(termin_datum).toLocaleDateString('de-DE', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : '–'
    const terminText = termin_datum && termin_uhrzeit
      ? `${formattedDate} um ${termin_uhrzeit} Uhr`
      : 'Nicht angegeben'

    const adminHtml = `
      <h2>Neue Terminanfrage</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || '–'}</p>
      <p><strong>Gewünschter Termin:</strong> ${terminText}</p>
      <h3>Anliegen:</h3>
      <p>${message || '–'}</p>
    `

    await sendMail(
      NOTIFY_EMAIL,
      `📅 Neuer Termin: ${name} – ${terminText}`,
      adminHtml,
      email
    )

    // Bestätigungs-Mail an den User
    try {
      await sendMail(
        email,
        'Ihre Terminanfrage bei SEO München – wir melden uns in Kürze',
        CONFIRM_HTML(name)
      )
    } catch (e) {
      console.error('Bestätigungs-Mail Fehler:', e)
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('Termin API error:', e)
    const msg = e instanceof Error ? e.message : 'Ein Fehler ist aufgetreten.'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
