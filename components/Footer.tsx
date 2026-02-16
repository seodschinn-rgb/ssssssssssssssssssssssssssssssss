'use client'

import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/preise', label: 'Preise' },
  { href: '/blog', label: 'Blog' },
  { href: '/standorte', label: 'Standorte' },
  { href: '/kontakt', label: 'Kontakt' },
]

const legalLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/agb', label: 'AGB' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-200 bg-zinc-50/80" role="contentinfo">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Rechtliches</h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold text-zinc-900">SEO Agentur München</h3>
            <p className="mt-4 text-sm text-zinc-600 max-w-sm">
              Professionelle Suchmaschinenoptimierung für Unternehmen in München und Bayern.
            </p>
            <a
              href="mailto:info@seomuenchen.com"
              className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              info@seomuenchen.com
            </a>
            <a
              href="tel:+4915565087694"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Jetzt anrufen: +49 155 65087694
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-200">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Venus Management GbR. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
