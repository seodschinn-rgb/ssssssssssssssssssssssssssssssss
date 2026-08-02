import Link from 'next/link'

export default function HotelsInvest() {
  return (
    <section className="invest" id="investition" aria-labelledby="invest-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">06</span>
            <span className="rail" />
            Investition
          </p>
          <h2 id="invest-heading">Was kostet SEO für dein Hotel?</h2>
          <p className="lead">
            Hotellerie heißt Wettbewerb mit Plattformen und Ketten. Dafür braucht es mehr Einsatz als in einem rein
            lokalen Markt, aber keine Blackbox-Preise.
          </p>
        </div>
        <div className="teaser-box rv">
          <p>
            <strong style={{ color: 'var(--ink)' }}>Unsere Empfehlung für Hotels:</strong> das Growth-Paket ab 1.590
            EUR im Monat, mit Local SEO, Destination-Content, Technik und Buchungsstrecken-Optimierung. Alle 5 Pakete
            von 990 bis 2.990 EUR im Monat stehen offen auf der Website, inklusive Leistungsumfang und Vergleichstabelle.{' '}
            <Link href="/preise">Pakete und Preise für dein Hotel im Überblick</Link>
          </p>
        </div>
        <div className="invest-note rv">
          <p>
            Zur Einordnung: Jede Direktbuchung spart die Portal-Provision und bringt dir die Gästedaten. Ab welchem
            Buchungsvolumen sich das für dein Haus rechnet, rechnen wir im Erstgespräch gemeinsam durch, mit deinen
            Zahlen statt Musterrechnungen.
          </p>
        </div>
      </div>
    </section>
  )
}
