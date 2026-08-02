import Link from 'next/link'

export default function KfzProof() {
  return (
    <section className="proof" id="beweis" aria-labelledby="proof-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">05</span>
            <span className="rail" />
            Woran wir uns messen lassen
          </p>
          <h2 id="proof-heading">Ergebnisse statt großer Worte</h2>
        </div>
        <div className="proof-grid">
          <div className="proof-copy rv">
            <p className="lead" style={{ color: 'var(--dim)' }}>
              Was in deinem Einzugsgebiet möglich ist, zeigen wir dir im kostenlosen Erstgespräch, mit echten
              Projektverläufen aus der Google Search Console. Öffentlich freigegeben sind bisher Projektstimmen aus
              anderen Branchen, eine davon liest du hier: Local SEO wirkt in der Werkstatt nach denselben Regeln wie im
              Handwerk.
            </p>
            <p className="gsc">
              <span aria-hidden="true">ℹ</span>
              <span>
                Wir dokumentieren jedes Projekt in der Google Search Console: Impressionen, Klicks und Rankings statt
                bunter Agentur-Folien.
              </span>
            </p>
            <p style={{ margin: '1.4rem 0 0' }}>
              <Link className="arrow-link" href="/#referenzen">
                Alle freigegebenen Projektstimmen auf der Startseite
              </Link>
            </p>
          </div>
          <figure className="card lift quote-card rv">
            <blockquote>
              Vor der Zusammenarbeit kamen <strong>2 bis 3 Anfragen pro Woche</strong> über die Website. Nach 5 Monaten
              SEO-Optimierung sind es <strong>8 bis 10</strong>. Besonders die Local-SEO-Maßnahmen haben unsere
              Maps-Sichtbarkeit komplett verändert.
            </blockquote>
            <figcaption className="quote-meta">
              <span className="avatar" aria-hidden="true">
                SK
              </span>
              <p className="who">
                <b>Sarah K.</b>, Inhaberin, Schreinerei in München-Sendling
                <span>Projektstimme, Name gekürzt. Andere Branche, gleiches Prinzip: lokale Sichtbarkeit.</span>
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
