import Link from 'next/link'

function BrandMarkDark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    </span>
  )
}

const LEISTUNG_LINKS = [
  { href: '/leistungen', label: 'Alle Leistungen' },
  { href: '/leistungen/seo-audit', label: 'SEO-Audit' },
  { href: '/leistungen/keyword-recherche', label: 'Keyword-Recherche' },
  { href: '/leistungen/local-seo', label: 'Local SEO' },
  { href: '/leistungen/technisches-seo', label: 'Technisches SEO' },
  { href: '/leistungen/geo-agentur', label: 'GEO-Agentur' },
] as const

const THEMEN_LINKS = [
  { href: '/branchen', label: 'Branchen-SEO' },
  { href: '/standorte', label: 'Standorte' },
  { href: '/preise', label: 'Preise' },
  { href: '/blog', label: 'Blog' },
  { href: '/blog/seo-kosten', label: 'SEO-Kosten-Guide' },
  { href: '/blog/local-seo-guide', label: 'Local-SEO-Guide' },
] as const

export default function Footer() {
  return (
    <footer id="site-footer" className="site-chrome site-footer dark" role="contentinfo">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" href="/" aria-label="SEO München, zur Startseite">
              <BrandMarkDark />
              <span>
                SEO<span className="muc">&nbsp;München</span>
              </span>
            </Link>
            <p>
              Suchmaschinenoptimierung und GEO für Unternehmen in München und Bayern. Ein Projekt der Venus Management
              GbR.
            </p>
          </div>
          <nav className="foot-col" aria-label="Leistungen">
            <h2>Leistungen</h2>
            <ul>
              {LEISTUNG_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="foot-col" aria-label="Themen">
            <h2>Themen</h2>
            <ul>
              {THEMEN_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="foot-col" aria-label="Kontakt und Rechtliches">
            <h2>Kontakt</h2>
            <ul>
              <li>
                <a href="tel:+4915565087694">+49 155 65087694</a>
              </li>
              <li>
                <a href="mailto:info@seomuenchen.com">info@seomuenchen.com</a>
              </li>
              <li>
                <Link href="/kontakt">Kostenloses Erstgespräch</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="foot-bottom">
          <p>© 2026 SEO München · Venus Management GbR</p>
          <ul>
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
            <li>
              <Link href="/datenschutz">Datenschutz</Link>
            </li>
            <li>
              <Link href="/agb">AGB</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
