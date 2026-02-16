import { NextResponse } from 'next/server'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const NOTIFY_EMAIL = process.env.TERMIN_NOTIFY_EMAIL || process.env.ADMIN_EMAIL
const EMAIL_FROM = process.env.EMAIL_FROM || 'SEO München <kontakt@seomuenchen.com>'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'
const LOGO_URL = process.env.EMAIL_LOGO_URL || `${SITE_URL}/logo.png`

const CONFIRM_HTML = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ihre Terminanfrage bei SEO München</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f4f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 560px; background-color:#ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.07);">
          <tr>
            <td style="padding: 32px 40px 24px 40px; text-align: center; border-bottom: 1px solid #e4e4e7;">
              <a href="${SITE_URL}" target="_blank" style="text-decoration: none;">
                <img src="${LOGO_URL}" alt="SEO München" width="180" height="48" style="display: inline-block; max-width: 180px; height: auto;" />
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 40px;">
              <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 700; color: #18181b;">Anfrage erhalten</h1>
              <p style="margin: 0 0 20px 0; font-size: 15px; color: #71717a; line-height: 1.5;">Ihre Terminanfrage bei SEO München</p>
              <p style="margin: 0 0 20px 0; font-size: 16px; color: #3f3f46; line-height: 1.6;">Hallo ${name},</p>
              <p style="margin: 0 0 24px 0; font-size: 16px; color: #3f3f46; line-height: 1.6;">vielen Dank für Ihre Terminanfrage. Wir haben Ihre Nachricht erhalten und melden uns <strong>innerhalb von 24 Stunden</strong> bei Ihnen.</p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f5; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; color: #52525b;">Bei Rückfragen erreichen Sie uns:</p>
                    <p style="margin: 0; font-size: 15px; color: #3f3f46;">
                      <a href="tel:+4915565087694" style="color: #4f46e5; text-decoration: none;">+49 155 65087694</a><br/>
                      <a href="mailto:info@seomuenchen.com" style="color: #4f46e5; text-decoration: none;">info@seomuenchen.com</a>
                    </p>
                  </td>
                </tr>
              </table>
              <p style="margin: 0; font-size: 16px; color: #3f3f46; line-height: 1.6;">Mit freundlichen Grüßen<br/><strong>Ihr Team von SEO München</strong></p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px 40px 28px 40px; text-align: center; border-top: 1px solid #e4e4e7;">
              <p style="margin: 0; font-size: 12px; color: #a1a1aa;">
                <a href="${SITE_URL}" style="color: #4f46e5; text-decoration: none;">seomuenchen.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

async function sendMail(to: string, subject: string, html: string, replyTo?: string) {
  if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY nicht gesetzt')
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: EMAIL_FROM,
      to,
      replyTo: replyTo || undefined,
      subject,
      html,
    }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    const msg = err?.message || err?.msg || 'E-Mail konnte nicht gesendet werden.'
    console.error('Resend Fehler:', msg)
    throw new Error(msg)
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
      if (!RESEND_API_KEY) {
        return NextResponse.json(
          { error: 'RESEND_API_KEY in .env.local setzen.' },
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
    if (!RESEND_API_KEY) {
      console.log('Terminanfrage (kein RESEND_API_KEY):', { name, email, phone, message, termin_datum, termin_uhrzeit })
      return NextResponse.json({
        success: true,
        message: 'RESEND_API_KEY und TERMIN_NOTIFY_EMAIL setzen für E-Mail-Versand.',
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
