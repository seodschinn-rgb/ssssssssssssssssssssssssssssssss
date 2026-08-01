import Link from 'next/link'

export default function BranchenMiniRoute() {
  return (
    <section className="mroute-wrap" id="arbeitsweise" aria-labelledby="prozess-heading">
      <div className="wrap">
        <div className="sec-head rv" style={{ marginBottom: 0 }}>
          <p className="eyebrow">
            <span className="num">03</span>
            <span className="rail" />
            So arbeiten wir
          </p>
          <h2 id="prozess-heading">Eine Route, zehn Branchen</h2>
          <p className="lead">
            Der Weg ist immer derselbe, die Inhalte sind es nie: Analyse, Strategie und Umsetzung folgen deiner Branche
            und deinem Wettbewerb.
          </p>
        </div>
        <ol className="mroute rv">
          <li className="done">
            <span className="mr-step">Station 01</span>
            <span className="mr-name">Erstgespräch & Analyse</span>
          </li>
          <li className="done">
            <span className="mr-step">Station 02</span>
            <span className="mr-name">Strategie & Keywords</span>
          </li>
          <li className="done">
            <span className="mr-step">Station 03</span>
            <span className="mr-name">Umsetzung</span>
          </li>
          <li className="done">
            <span className="mr-step">Station 04</span>
            <span className="mr-name">Monitoring & Skalierung</span>
          </li>
          <li className="terminus">
            <span className="mr-step">Endstation</span>
            <span className="mr-name">Anfragen & Ausbau</span>
          </li>
        </ol>
        <p className="rv" style={{ margin: 0 }}>
          <Link className="arrow-link" href="/#prozess">
            Die komplette Sichtbarkeits-Route ansehen
          </Link>
        </p>
      </div>
    </section>
  )
}
