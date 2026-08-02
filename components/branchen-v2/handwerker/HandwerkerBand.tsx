export default function HandwerkerBand() {
  return (
    <section className="band-wrap" id="vor-ort" aria-labelledby="vor-ort-heading">
      <div className="wrap band">
        <figure className="band-visual rv" style={{ margin: 0 }}>
          <img
            src="/images/blog/handwerker-beratung.webp"
            alt="Handwerker und Kunde besprechen Baupläne auf einer hellen Baustelle"
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
            Vor Ort
          </p>
          <h2 id="vor-ort-heading">Vom Google-Treffer zum unterschriebenen Angebot</h2>
          <p className="lead">
            SEO endet nicht beim Klick. Die Anfrage, die über deine Website reinkommt, soll zum Vor-Ort-Termin werden
            und zum Auftrag.
          </p>
          <ul className="band-points">
            <li>
              Anfragewege ohne Hürden: Click-to-Call, kurzes Formular, klare Leistungsbeschreibung mit Einsatzgebiet
            </li>
            <li>
              Inhalte, die Vertrauen aufbauen: echte Projektfotos, nachvollziehbarer Ablauf, klare Angaben zu deinem
              Angebot
            </li>
            <li>
              Monatliches Reporting, das du zwischen zwei Baustellen lesen kannst: Rankings, Anrufe, Anfragen
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
