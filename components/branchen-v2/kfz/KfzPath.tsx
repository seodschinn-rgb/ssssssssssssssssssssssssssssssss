export default function KfzPath() {
  return (
    <section className="path-wrap" id="kunden-weg" aria-labelledby="path-heading">
      <div className="wrap path-grid">
        <figure className="path-figure rv">
          <img
            src="/images/blog/kfz-beratung.webp"
            alt="Serviceberater und Kunde besprechen unter einem Auto auf der Hebebühne die anstehende Reparatur"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
          />
          <figcaption>Vertrauen entsteht an der Hebebühne. Gefunden wird bei Google.</figcaption>
        </figure>
        <div>
          <div className="sec-head rv" style={{ marginBottom: 0 }}>
            <p className="eyebrow">
              <span className="num">03</span>
              <span className="rail" />
              Der Weg zum Termin
            </p>
            <h2 id="path-heading">So entscheidet sich, wen der Kunde anruft</h2>
            <p className="lead">
              Drei Momente, drei Chancen für deinen Betrieb. SEO sorgt dafür, dass du in jedem davon stattfindest.
            </p>
          </div>
          <ol className="path-steps">
            <li className="rv">
              <span className="p-num" aria-hidden="true">
                01
              </span>
              <h3>Das Auto meldet sich</h3>
              <p>
                Warnleuchte, Geräusch, Plakette abgelaufen: Die Suche startet meist mobil und mit klarer Absicht, oft
                mit Stadtteil im Suchbegriff.
              </p>
            </li>
            <li className="rv">
              <span className="p-num" aria-hidden="true">
                02
              </span>
              <h3>Maps trifft die Vorauswahl</h3>
              <p>
                Verglichen wird im Maps-Pack: Nähe, Öffnungszeiten, Sterne, Fotos. Ein vollständiges, gepflegtes Profil
                bringt dich in diese Auswahl.
              </p>
            </li>
            <li className="rv">
              <span className="p-num" aria-hidden="true">
                03
              </span>
              <h3>Der Anruf</h3>
              <p>
                Angerufen wird, wo Vertrauen entsteht: echte Bilder, beantwortete Bewertungen und eine Leistungsseite,
                die genau den Service erklärt, den der Kunde gerade braucht.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
