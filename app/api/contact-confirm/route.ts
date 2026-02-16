import { NextResponse } from 'next/server'

/**
 * Bestätigungs-Mail nach Absenden des Standard-Kontaktformulars (Startseite, Leistungen, etc.).
 * Nutzt dieselbe Resend-Logik wie /api/termin, eigener Pfad damit Netlify die Umgebungsvariablen zuverlässig lädt.
 */
const RESEND_API_KEY = process.env.RESEND_API_KEY
const EMAIL_FROM = process.env.EMAIL_FROM || 'SEO München <kontakt@seomuenchen.com>'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'
const EMAIL_LOGO_BASE64 = process.env.EMAIL_LOGO_BASE64
const LOGO_URL = process.env.EMAIL_LOGO_URL
  || (EMAIL_LOGO_BASE64 ? `data:image/png;base64,${EMAIL_LOGO_BASE64}` : '')
const USE_LOGO_IMAGE = Boolean(process.env.EMAIL_LOGO_URL || EMAIL_LOGO_BASE64)

const CONFIRM_HTML = (name: string) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Ihre Anfrage bei SEO München</title></head>
<body style="margin:0; padding:0; background-color:#f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f4f5;">
    <tr><td align="center" style="padding: 40px 20px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 560px; background-color:#ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.07);">
        <tr>
          <td style="padding: 32px 40px 24px 40px; text-align: center; border-bottom: 1px solid #e4e4e7;">
            <a href="${SITE_URL}" target="_blank" style="text-decoration: none;">
              ${USE_LOGO_IMAGE
                ? `<img src="${LOGO_URL}" alt="SEO München" width="180" height="48" style="display: inline-block; max-width: 180px; height: auto;" />`
                : `<table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto;"><tr><td style="background-color: #4f46e5; border-radius: 10px; padding: 12px 24px;"><table role="presentation" cellspacing="0" cellpadding="0" align="center"><tr><td style="padding-right: 10px; vertical-align: middle;"><span style="font-size: 22px; color: white;">🔍</span></td><td style="vertical-align: middle;"><span style="font-size: 18px; font-weight: 700; color: white;">SEO München</span></td></tr></table></td></tr></table>`
              }
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding: 32px 40px;">
            <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 700; color: #18181b;">Anfrage erhalten</h1>
            <p style="margin: 0 0 20px 0; font-size: 16px; color: #3f3f46; line-height: 1.6;">Hallo ${String(name).replace(/[<>]/g, '')},</p>
            <p style="margin: 0 0 24px 0; font-size: 16px; color: #3f3f46; line-height: 1.6;">vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und melden uns <strong>innerhalb von 24 Stunden</strong> bei Ihnen.</p>
            <p style="margin: 0; font-size: 16px; color: #3f3f46;">Mit freundlichen Grüßen<br/><strong>Ihr Team von SEO München</strong></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
`

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = body.name?.trim?.() ?? body.name ?? ''
    const email = body.email?.trim?.() ?? body.email ?? ''

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name und E-Mail sind erforderlich.' },
        { status: 400 }
      )
    }

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY nicht konfiguriert.' },
        { status: 500 }
      )
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: email,
        subject: 'Ihre Anfrage bei SEO München – wir melden uns in Kürze',
        html: CONFIRM_HTML(name),
      }),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      const msg = err?.message || err?.msg || 'E-Mail konnte nicht gesendet werden.'
      console.error('Resend (contact-confirm):', msg)
      return NextResponse.json({ error: msg }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('contact-confirm error:', e)
    return NextResponse.json(
      { error: e instanceof Error ? e.message : 'Ein Fehler ist aufgetreten.' },
      { status: 500 }
    )
  }
}
