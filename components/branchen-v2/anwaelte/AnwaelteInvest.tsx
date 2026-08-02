import Link from 'next/link'

export default function AnwaelteInvest() {
  return (
    <section className="invest" id="investition" aria-labelledby="invest-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">05</span>
            <span className="rail" />
            Investition
          </p>
          <h2 id="invest-heading">Was kostet SEO für deine Kanzlei?</h2>
          <p className="lead">
            Der juristische Markt in München ist hochkompetitiv. Für Kanzleien empfehlen wir deshalb meist das
            Growth-Paket ab 1.590 EUR pro Monat: Rechtsgebiet-Seiten, Ratgeber-Content, Google Business Profile und
            laufende Optimierung.
          </p>
        </div>
        <div className="teaser-box rv">
          <p>
            <strong style={{ color: 'var(--ink)' }}>Planbar wie ein Honorar:</strong> 5 SEO-Pakete mit festen
            Monatspreisen von 990 bis 2.990 EUR, inklusive Leistungsumfang und Vergleichstabelle. Du weißt vor der
            Beauftragung, was du bekommst.{' '}
            <Link href="/preise">Kalkulierbare SEO-Kosten: zur Paketübersicht</Link>
          </p>
        </div>
        <div className="invest-foot rv">
          <p className="note" style={{ margin: 0 }}>
            Kein Knebelvertrag: monatlich kündbar. Welches Paket zu Rechtsgebieten und Wettbewerb passt, klären wir im
            kostenlosen Erstgespräch.
          </p>
        </div>
      </div>
    </section>
  )
}
