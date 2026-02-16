import { NextResponse } from 'next/server'

function getEnv() {
  return {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NOTIFY_EMAIL: process.env.TERMIN_NOTIFY_EMAIL || process.env.ADMIN_EMAIL,
    EMAIL_FROM: process.env.EMAIL_FROM || 'SEO München <kontakt@seomuenchen.com>',
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com',
    EMAIL_LOGO_BASE64: process.env.EMAIL_LOGO_BASE64,
    EMAIL_LOGO_URL: process.env.EMAIL_LOGO_URL,
  }
}

function getLogoUrl(env: ReturnType<typeof getEnv>) {
  if (env.EMAIL_LOGO_URL) return env.EMAIL_LOGO_URL
  if (env.EMAIL_LOGO_BASE64) return `data:image/png;base64,${env.EMAIL_LOGO_BASE64}`
  return ''
}

function buildConfirmHtml(name: string, siteUrl: string, logoUrl: string, useLogoImage: boolean) {
  const logoBlock = useLogoImage
    ? `<img src="${logoUrl}" alt="SEO München" width="180" height="48" style="display: inline-block; max-width: 180px; height: auto;" />`
    : `<table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto;"><tr><td style="background-color: #4f46e5; border-radius: 10px; padding: 12px 24px;"><table role="presentation" cellspacing="0" cellpadding="0" align="center"><tr><td style="padding-right: 10px; vertical-align: middle;"><span style="font-size: 22px; color: white;">🔍</span></td><td style="vertical-align: middle;"><span style="font-size: 18px; font-weight: 700; color: white; letter-spacing: -0.02em;">SEO München</span></td></tr></table></td></tr></table>`
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Ihre Terminanfrage bei SEO München</title></head>
<body style="margin:0; padding:0; background-color:#f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f4f5;">
    <tr><td align="center" style="padding: 40px 20px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 560px; background-color:#ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.07);">
        <tr><td style="padding: 32px 40px 24px 40px; text-align: center; border-bottom: 1px solid #e4e4e7;"><a href="${siteUrl}" target="_blank" style="text-decoration: none;">${logoBlock}</a></td></tr>
        <tr><td style="padding: 32px 40px;">
          <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 700; color: #18181b;">Anfrage erhalten</h1>
          <p style="margin: 0 0 20px 0; font-size: 16px; color: #3f3f46; line-height: 1.6;">Hallo ${String(name).replace(/[<>]/g, '')},</p>
          <p style="margin: 0 0 24px 0; font-size: 16px; color: #3f3f46; line-height: 1.6;">vielen Dank für Ihre Terminanfrage. Wir haben Ihre Nachricht erhalten und melden uns <strong>innerhalb von 24 Stunden</strong> bei Ihnen.</p>
          <p style="margin: 0; font-size: 16px; color: #3f3f46;">Mit freundlichen Grüßen<br/><strong>Ihr Team von SEO München</strong></p>
        </td></tr>
        <tr><td style="padding: 20px 40px 28px 40px; text-align: center; border-top: 1px solid #e4e4e7;"><p style="margin: 0; font-size: 12px; color: #a1a1aa;"><a href="${siteUrl}" style="color: #4f46e5; text-decoration: none;">seomuenchen.com</a></p></td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
`
}

async function sendMail(apiKey: string, from: string, to: string, subject: string, html: string, replyTo?: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from,
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
  const env = getEnv()
  const siteUrl = env.SITE_URL
  const logoUrl = getLogoUrl(env)
  const useLogoImage = Boolean(env.EMAIL_LOGO_URL || env.EMAIL_LOGO_BASE64)

  try {
    const body = await request.json()
    const { name, email, phone, message, termin_datum, termin_uhrzeit, sendConfirmationOnly } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name und E-Mail sind erforderlich.' },
        { status: 400 }
      )
    }

    if (sendConfirmationOnly) {
      if (!env.RESEND_API_KEY?.trim()) {
        console.error('Termin Bestätigungs-Mail: RESEND_API_KEY fehlt. In Netlify: Site settings → Environment variables → RESEND_API_KEY setzen, Bereich "All" oder "Functions", dann neuen Deploy auslösen.')
        return NextResponse.json({ success: true, confirmationSent: false })
      }
      try {
        const html = buildConfirmHtml(name, siteUrl, logoUrl, useLogoImage)
        await sendMail(env.RESEND_API_KEY, env.EMAIL_FROM, email, 'Ihre Terminanfrage bei SEO München – wir melden uns in Kürze', html)
        return NextResponse.json({ success: true, confirmationSent: true })
      } catch (err) {
        console.error('Termin Bestätigungs-Mail Resend-Fehler:', err)
        return NextResponse.json({ success: true, confirmationSent: false })
      }
    }

    if (!env.NOTIFY_EMAIL) {
      return NextResponse.json(
        { error: 'TERMIN_NOTIFY_EMAIL oder ADMIN_EMAIL setzen.' },
        { status: 500 }
      )
    }
    if (!env.RESEND_API_KEY?.trim()) {
      console.log('Terminanfrage (kein RESEND_API_KEY):', { name, email })
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

    await sendMail(env.RESEND_API_KEY, env.EMAIL_FROM, env.NOTIFY_EMAIL, `📅 Neuer Termin: ${name} – ${terminText}`, adminHtml, email)

    try {
      const html = buildConfirmHtml(name, siteUrl, logoUrl, useLogoImage)
      await sendMail(env.RESEND_API_KEY, env.EMAIL_FROM, email, 'Ihre Terminanfrage bei SEO München – wir melden uns in Kürze', html)
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
