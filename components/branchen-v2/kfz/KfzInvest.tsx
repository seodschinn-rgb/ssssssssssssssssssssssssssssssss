import Link from 'next/link'

export default function KfzInvest() {
  return (
    <section className="invest" id="investition" aria-labelledby="invest-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">06</span>
            <span className="rail" />
            Investition
          </p>
          <h2 id="invest-heading">Was kostet SEO für deine Werkstatt?</h2>
          <p className="lead">
            Kein Blackbox-Budget: Unsere Pakete stehen mit Preisen und Leistungsumfang offen auf der Website, auch für
            das KFZ-Gewerbe.
          </p>
        </div>
        <div className="teaser-box rv">
          <p>
            <strong style={{ color: 'var(--ink)' }}>Unsere Empfehlung für freie Werkstätten:</strong> der Einstieg mit
            dem Starter-Paket ab 990 EUR im Monat, mit Google Business Profile, Leistungsseiten und Bewertungsaufbau.
            Alle 5 Pakete von 990 bis 2.990 EUR im Monat findest du mit Vergleichstabelle auf der Preisseite.{' '}
            <Link href="/preise">Alle SEO-Pakete für deine Werkstatt vergleichen</Link>
          </p>
        </div>
        <div className="invest-note rv">
          <p>
            Zur Einordnung: Ein Werkstattkunde kommt selten nur für einen einzelnen Service, aus der HU wird oft auch
            der Bremsen- oder Ölservice. Was ein zusätzlicher Stammkunde für deinen Betrieb wert ist, rechnen wir im
            Erstgespräch gemeinsam durch, mit deinen Zahlen statt Musterrechnungen.
          </p>
        </div>
      </div>
    </section>
  )
}
