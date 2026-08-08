export default function FounderSpotlight() {
  return (
    <section className="person" id="persoenlich" aria-labelledby="persoenlich-heading">
      <div className="mesh" aria-hidden="true" />
      <div className="wrap person-grid" style={{ position: 'relative' }}>
        <div className="person-visual rv">
          <img
            src="/images/julian-schaefer.jpg"
            alt="Julian Schäfer, Gründer und SEO-Stratege bei SEO München"
            width={1200}
            height={1500}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="person-side">
          <div className="rv">
            <p className="eyebrow">
              <span className="num">04</span>
              <span className="rail" />
              Persönlich
            </p>
            <h2 id="persoenlich-heading">
              <span className="sr-only">Dein Ansprechpartner: </span>
              <span className="person-name">Julian Schäfer</span>
            </h2>
            <p className="person-role">Gründer & SEO-Stratege · Dein Ansprechpartner</p>
            <p className="lead">
              Bei uns arbeitest du nicht mit wechselnden Teams, sondern mit einem festen Ansprechpartner, der dein
              Projekt von Tag 1 kennt. Persönlich, direkt erreichbar und verantwortlich für deine Ergebnisse.
            </p>
            <p style={{ color: 'var(--dim)' }}>
              Spezialisiert auf datengetriebene Suchmaschinenoptimierung für KMU und lokale Dienstleister in München
              und Bayern. Von der Analyse bis zur Umsetzung aus einer Hand.
            </p>
          </div>
          <ul className="person-points rv">
            <li>Ein Ansprechpartner für Strategie und Umsetzung, keine Übergaben zwischen Abteilungen</li>
            <li>Direkter Draht per Telefon und E-Mail, Antwort innerhalb von 24 Stunden</li>
            <li>Verantwortung für Ergebnisse: monatliche Reports, die du verstehst</li>
          </ul>
          <div className="cta-row rv">
            <a className="btn btn-primary" href="tel:+4915233524138">
              Jetzt anrufen: +49 152 33524138
            </a>
            <a className="btn btn-ghost" href="mailto:info@seomuenchen.com">
              E-Mail schreiben
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
