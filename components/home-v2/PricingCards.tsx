import Link from 'next/link'

export default function PricingCards() {
  return (
    <section className="pricing" id="preise" aria-labelledby="preise-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">05</span>
            <span className="rail" />
            Investition
          </p>
          <h2 id="preise-heading">Was kostet SEO in München? Transparente Preise</h2>
          <p className="lead">
            Keine versteckten Kosten, keine Knebelverträge. Unsere Pakete sind klar strukturiert: du weißt von Anfang
            an, was du bekommst.
          </p>
        </div>
        <div className="price-cards stagger">
          <article className="card lift price-card rv">
            <h3 className="p-name">Starter</h3>
            <p className="p-price">
              990 EUR <small>/ Monat</small>
            </p>
            <p className="p-for">Für lokale Unternehmen & Startups, die bei Google sichtbar werden wollen.</p>
            <Link className="arrow-link" href="/preise">
              Details ansehen
            </Link>
          </article>
          <article className="card lift price-card reco rv">
            <span className="reco-badge">Empfehlung für KMU</span>
            <h3 className="p-name">Growth</h3>
            <p className="p-price">
              1.590 EUR <small>/ Monat</small>
            </p>
            <p className="p-for">Für wachsende KMU, die aus Sichtbarkeit planbare Anfragen machen wollen.</p>
            <Link className="arrow-link" href="/preise">
              Details ansehen
            </Link>
          </article>
          <article className="card lift price-card rv">
            <h3 className="p-name">Business</h3>
            <p className="p-price">
              2.390 EUR <small>/ Monat</small>
            </p>
            <p className="p-for">Für etablierte Mittelständler in umkämpften Münchner Märkten.</p>
            <Link className="arrow-link" href="/preise">
              Details ansehen
            </Link>
          </article>
        </div>
        <div className="price-more rv">
          <p className="price-row" style={{ margin: 0 }}>
            <span className="pr-name">Professional</span>
            <span className="pr-for">Ambitionierte Unternehmen</span>
            <span className="pr-price">2.590 EUR/Monat</span>
          </p>
          <p className="price-row" style={{ margin: 0 }}>
            <span className="pr-name">Enterprise</span>
            <span className="pr-for">Großunternehmen & komplexe Projekte</span>
            <span className="pr-price">2.990 EUR/Monat</span>
          </p>
        </div>
        {/* /preise-Teaser: Wortlaut wie im Juli geliefert und live verifiziert. Nicht anfassen. */}
        <div className="teaser-box rv">
          <p>
            <strong style={{ color: 'var(--ink)' }}>Alle Details zu den Paketen:</strong> 5 SEO-Pakete mit festen
            Monatspreisen von 990 bis 2.990 EUR, inklusive Leistungsumfang je Paket, Vergleichstabelle und FAQ. Du
            siehst schon vor dem Erstgespräch, was du bekommst und was es kostet.{' '}
            <Link href="/preise">Alle SEO-Pakete und Preise im Detail</Link>
          </p>
        </div>
        <div className="info-box rv">
          <p>
            <strong style={{ color: 'var(--amber)' }}>Gut zu wissen:</strong> Ein einzelner Klick auf „SEO Agentur
            München" kostet bei Google Ads über 15 EUR. Organische Sichtbarkeit amortisiert sich in der Regel nach
            wenigen Monaten und liefert dann dauerhaft Besucher ohne Klickkosten.
          </p>
        </div>
        <div className="price-foot rv">
          <p>
            Nicht sicher, welches Paket passt? Im kostenlosen Erstgespräch analysieren wir deine Situation und
            empfehlen die passende Lösung, ohne Verkaufsdruck.
          </p>
          <p className="price-links">
            <Link className="arrow-link" href="/kontakt">
              Unverbindlich beraten lassen
            </Link>
            <Link className="arrow-link" href="/blog/seo-kosten">
              Detaillierter SEO-Kosten-Guide
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
