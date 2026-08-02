import Link from 'next/link'

export default function HotelsHero() {
  return (
    <section className="hero-s" aria-labelledby="hero-heading">
      <div className="mesh" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <nav aria-label="Brotkrumen-Navigation">
          <ol className="crumbs">
            <li>
              <Link href="/">Start</Link>
            </li>
            <li>
              <Link href="/branchen">Branchen</Link>
            </li>
            <li>
              <span aria-current="page">Hotels</span>
            </li>
          </ol>
        </nav>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              <span className="rail" />
              SEO für Hotels
            </p>
            <h1 id="hero-heading">
              <span className="h1-main">SEO für Hotels in München.</span>
              <span className="h1-sub">Direkt gebucht statt vermittelt.</span>
            </h1>
            <p className="sub">
              Buchungsportale bringen Reichweite, verlangen aber bei jeder Buchung Provision. Wir machen dein Haus dort
              sichtbar, wo Gäste wirklich suchen: bei Google, in Maps und in der KI-Suche. Damit mehr Gäste direkt bei
              dir buchen.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/kontakt">
                Kostenloses Erstgespräch sichern
              </Link>
            </div>
            <p className="cta-micro">unverbindlich, Antwort innerhalb von 24 Stunden</p>
            <ul className="hero-chips">
              <li>Direktbuchungs-Fokus</li>
              <li>Local SEO + Google Maps</li>
              <li>GEO für die KI-Reiseplanung</li>
            </ul>
          </div>
          <figure className="hero-visual rv">
            <span className="hero-badge" aria-hidden="true">
              Branche 09 / 10
            </span>
            <img
              src="/images/blog/branche-hotels.webp"
              alt="Rezeptionistin am Marmorempfang einer Hotellobby mit Messingleuchten"
              width={1200}
              height={800}
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>Gebucht wird, wo Sichtbarkeit und Vertrauen zusammenkommen.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
