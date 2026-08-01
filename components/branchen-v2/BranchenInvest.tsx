import Link from 'next/link'

export default function BranchenInvest() {
  return (
    <section className="invest" id="investition" aria-labelledby="invest-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">04</span>
            <span className="rail" />
            Investition
          </p>
          <h2 id="invest-heading">Was kostet SEO für deine Branche?</h2>
          <p className="lead">
            Der Aufwand hängt vom Wettbewerb ab, die Preisstruktur nicht: Sie ist für jede Branche gleich transparent.
          </p>
        </div>
        <div className="teaser-box rv">
          <p>
            <strong style={{ color: 'var(--ink)' }}>Feste Monatspakete statt Blackbox:</strong> 5 SEO-Pakete von 990
            bis 2.990 EUR pro Monat, mit klarem Leistungsumfang und Vergleichstabelle. Welches Paket zu deinem
            Wettbewerbsumfeld passt, klären wir im Erstgespräch.{' '}
            <Link href="/preise">Das passende SEO-Paket für deine Branche finden</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
