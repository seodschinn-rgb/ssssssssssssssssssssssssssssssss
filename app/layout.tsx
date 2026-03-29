import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  /* swap: Text bleibt mit Fallback lesbar; optional kann in manchen Setups „leer“ wirken */
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'),
  title: {
    default: 'SEO Agentur München | Sichtbarkeit bei Google & KI-Suche',
    template: '%s | SEO Agentur München',
  },
  description:
    'Deine SEO Agentur in München: Suchmaschinenoptimierung für KMU und lokale Unternehmen. Fester Ansprechpartner, transparente Pakete. Jetzt kostenlos beraten lassen.',
  keywords: [
    'SEO Agentur München',
    'SEO München',
    'Suchmaschinenoptimierung München',
    'SEO Beratung München',
    'Local SEO München',
    'SEO Agentur Bayern',
  ],
  openGraph: {
    locale: 'de_DE',
    type: 'website',
    siteName: 'SEO Agentur München',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    // Erste Eintrag = Standard-Favicon. Google Search Console nutzt 48×48 PNG (/icon aus app/icon.tsx).
    icon: [
      { url: '/icon', type: 'image/png', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: [{ url: '/apple-icon', type: 'image/png', sizes: '180x180' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={dmSans.variable} suppressHydrationWarning>
      <body className="font-sans">{children}</body>
    </html>
  )
}
