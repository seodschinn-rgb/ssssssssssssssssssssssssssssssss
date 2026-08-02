import Link from 'next/link'

export default function AnwaeltePain() {
  return (
    <section className="pain" id="realitaet" aria-labelledby="realitaet-heading">
      <div className="wrap pain-grid">
        <div className="pain-copy rv">
          <p className="eyebrow">
            <span className="num">01</span>
            <span className="rail" />
            Die Realität
          </p>
          <h2 id="realitaet-heading">Fachlich stark, online unsichtbar?</h2>
          <p className="lead">
            Deine Online-Präsenz ist der erste Eindruck, noch bevor ein Mandant dein Büro betritt. Wer bei Google nicht
            auftaucht, überlässt die Mandatsanfragen den Kanzleien, die dort stehen.
          </p>
          <p className="pain-foot" style={{ marginBottom: 0 }}>
            <Link className="arrow-link" href="/leistungen/seo-audit">
              Wo deine Kanzlei heute steht, zeigt das SEO-Audit
            </Link>
          </p>
        </div>
        <ul className="pain-list stagger">
          <li className="pain-item rv">
            <span className="x" aria-hidden="true">
              ×
            </span>
            <div>
              <h3>Die Kanzlei-Website beschreibt dich, nicht das Problem des Mandanten</h3>
              <p>
                „Vertretung in allen Belangen des Mietrechts“ sucht niemand. Mandanten googeln konkrete Fragen zu
                Kündigung, Abfindung oder Scheidung und landen bei der Kanzlei, die sie beantwortet.
              </p>
            </div>
          </li>
          <li className="pain-item rv">
            <span className="x" aria-hidden="true">
              ×
            </span>
            <div>
              <h3>Klicks auf Rechts-Keywords gehören zu den teuersten bei Google Ads</h3>
              <p>
                Wer Mandate nur über Anzeigen gewinnt, zahlt dauerhaft Spitzenpreise pro Klick. Organische Sichtbarkeit
                liefert denselben Traffic ohne laufende Klickkosten und wird mit jedem Monat wertvoller.
              </p>
            </div>
          </li>
          <li className="pain-item rv">
            <span className="x" aria-hidden="true">
              ×
            </span>
            <div>
              <h3>„Darf ich als Anwalt überhaupt werben?“</h3>
              <p>
                Diese Unsicherheit bremst viele Kanzleien aus. Dabei ist sachliche, berufsbezogene Information erlaubt
                und genau das ist gutes SEO. Auf Portalen wie anwalt.de stehst du dagegen immer direkt neben dem
                Wettbewerb.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
