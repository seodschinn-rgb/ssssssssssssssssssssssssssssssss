import Link from 'next/link'

export default function HandwerkerInvest() {
  return (
    <section className="invest" id="investition" aria-labelledby="invest-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">06</span>
            <span className="rail" />
            Investition
          </p>
          <h2 id="invest-heading">Was kostet SEO für deinen Betrieb?</h2>
          <p className="lead">
            Für Handwerksbetriebe empfehlen wir meist das Starter-Paket ab 990 EUR pro Monat. Es ist auf lokale Betriebe
            zugeschnitten: Google Business Profile, lokale Keyword-Strategie, Leistungsseiten und Bewertungs-Setup.
          </p>
        </div>
        <div className="teaser-box rv">
          <p>
            <strong style={{ color: 'var(--ink)' }}>Kalkulieren statt raten:</strong> 5 SEO-Pakete mit festen
            Monatspreisen von 990 bis 2.990 EUR, inklusive Leistungsumfang und Vergleichstabelle. Du siehst vor dem
            Erstgespräch, was du bekommst.{' '}
            <Link href="/preise">Feste Monatspreise statt Stundensätze: zu den SEO-Paketen</Link>
          </p>
        </div>
        <div className="invest-foot rv">
          <p className="note" style={{ margin: 0 }}>
            Kein Knebelvertrag: monatlich kündbar. Welches Paket zu deinem Gewerk und Wettbewerb passt, klären wir im
            kostenlosen Erstgespräch.
          </p>
        </div>
      </div>
    </section>
  )
}
