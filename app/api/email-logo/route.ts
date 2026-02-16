import { NextResponse } from 'next/server'

/**
 * Liefert das Logo für E-Mails (Bestätigungs-Mail).
 * In Netlify: Umgebungsvariable EMAIL_LOGO_BASE64 setzen (Base64-String der Logo-PNG).
 * Alternativ: logo.png in website/public/ legen – dann wird /logo.png von Netlify ausgeliefert.
 */
const EMAIL_LOGO_BASE64 = process.env.EMAIL_LOGO_BASE64

export async function GET() {
  if (!EMAIL_LOGO_BASE64) {
    return new NextResponse('Logo nicht konfiguriert (EMAIL_LOGO_BASE64 fehlt)', { status: 404 })
  }
  try {
    const buffer = Buffer.from(EMAIL_LOGO_BASE64, 'base64')
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400',
      },
    })
  } catch {
    return new NextResponse('Ungültiges Logo-Format', { status: 500 })
  }
}
