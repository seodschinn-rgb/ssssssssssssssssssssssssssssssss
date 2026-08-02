import Link from 'next/link'

export default function HotelsProof() {
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
              Was in deinem Markt möglich ist, zeigen wir dir im kostenlosen Erstgespräch, mit echten Projektverläufen
              aus der Google Search Console. Öffentlich freigegeben sind bisher Projektstimmen aus anderen Branchen,
              eine davon liest du hier.
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
              Früher wussten wir nicht, ob unsere Website überhaupt Patienten bringt. Jetzt sehen wir im monatlichen
              Report: <strong>40 % unserer Neupatienten finden uns über Google.</strong> Das hat unser Marketing
              komplett verändert.
            </blockquote>
            <figcaption className="quote-meta">
              <span className="avatar" aria-hidden="true">
                MR
              </span>
              <p className="who">
                <b>Dr. Michael R.</b>, Zahnarztpraxis München-Schwabing
                <span>Projektstimme, Name gekürzt. Andere Branche, gleiches Prinzip: messbare Kanäle.</span>
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
