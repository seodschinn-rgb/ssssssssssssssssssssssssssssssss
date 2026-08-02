import Link from 'next/link'

export default function RestaurantsInvest() {
  return (
    <section className="invest" id="investition" aria-labelledby="invest-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">05</span>
            <span className="rail" />
            Investition
          </p>
          <h2 id="invest-heading">Was kostet SEO für dein Restaurant?</h2>
          <p className="lead">
            Gastronomie arbeitet mit dünnen Margen, das wissen wir. Für Restaurants empfehlen wir meist das
            Starter-Paket ab 990 EUR pro Monat: Google Business Profile, Keyword-Strategie fürs Viertel,
            Speisekarten-SEO und Bewertungs-Setup.
          </p>
        </div>
        <div className="teaser-box rv">
          <p>
            <strong style={{ color: 'var(--ink)' }}>Feste Preise statt Provision:</strong> 5 SEO-Pakete mit klaren
            Monatspreisen von 990 bis 2.990 EUR, inklusive Leistungsumfang und Vergleichstabelle. Keine
            Umsatzbeteiligung, keine versteckten Kosten.{' '}
            <Link href="/preise">Zur Preisseite mit allen fünf SEO-Paketen</Link>
          </p>
        </div>
        <div className="invest-foot rv">
          <p className="note" style={{ margin: 0 }}>
            Kein Knebelvertrag: monatlich kündbar. Welches Paket zu Küche, Lage und Wettbewerb passt, klären wir im
            kostenlosen Erstgespräch.
          </p>
        </div>
      </div>
    </section>
  )
}
