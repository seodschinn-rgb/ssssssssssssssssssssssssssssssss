export default function AnwaelteBand() {
  return (
    <section className="band-wrap" id="mandat" aria-labelledby="mandat-heading">
      <div className="wrap band">
        <figure className="band-visual rv" style={{ margin: 0 }}>
          <img
            src="/images/blog/anwaelte-mandat.webp"
            alt="Mandantengespräch am Konferenztisch einer Kanzlei, Hände mit Füller über einem Dokument"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="band-copy rv">
          <p className="eyebrow">
            <span className="num">03</span>
            <span className="rail" />
            Mandat im Blick
          </p>
          <h2 id="mandat-heading">Vom Google-Treffer zum unterschriebenen Mandat</h2>
          <p className="lead">
            SEO endet nicht beim Klick. Die Anfrage, die über deine Website reinkommt, soll zum Erstgespräch werden und
            zum Mandat.
          </p>
          <ul className="band-points">
            <li>
              Kontaktwege ohne Hürden: Telefonnummer sofort anklickbar, kurzes Formular, klare Angaben zu Ablauf und
              Erstberatung
            </li>
            <li>
              Inhalte, die Vertrauen aufbauen: echte Fotos, nachvollziehbare Schwerpunkte, verständliche Antworten statt
              Fachjargon
            </li>
            <li>
              Monatliches Reporting mit dem, was zählt: Rankings, Besucher und Mandatsanfragen je Rechtsgebiet
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
