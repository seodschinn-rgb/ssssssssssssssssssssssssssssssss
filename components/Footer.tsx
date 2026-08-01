import Link from 'next/link'

function BrandMarkDark() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path
        d="M3 20 L10 20 L16 14 L23 14"
        stroke="#60A5FA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 8 L8 8 L13 13"
        stroke="#FBBF24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity=".8"
      />
      <circle cx="10" cy="20" r="2.4" fill="#05080F" stroke="#60A5FA" strokeWidth="1.6" />
      <circle cx="16" cy="14" r="2.4" fill="#05080F" stroke="#60A5FA" strokeWidth="1.6" />
      <circle cx="8" cy="8" r="2.4" fill="#05080F" stroke="#FBBF24" strokeWidth="1.6" />
    </svg>
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
