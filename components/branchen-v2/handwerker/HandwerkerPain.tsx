import Link from 'next/link'

export default function HandwerkerPain() {
  return (
    <section className="pain" id="realitaet" aria-labelledby="realitaet-heading">
      <div className="wrap pain-grid">
        <div className="pain-copy rv">
          <p className="eyebrow">
            <span className="num">01</span>
            <span className="rail" />
            Die Realität
          </p>
          <h2 id="realitaet-heading">Volle Auftragsbücher heute, Funkstille morgen?</h2>
          <p className="lead">
            Jahrzehntelang lief das Handwerk über Empfehlungen. Dieses System trägt immer weniger: Wer online nicht
            sichtbar ist, taucht bei der Vergabe vieler Aufträge gar nicht erst auf. Und selbst wer empfohlen wird, wird
            vorher gegoogelt.
          </p>
          <p className="pain-foot" style={{ marginBottom: 0 }}>
            <Link className="arrow-link" href="/leistungen/seo-audit">
              Wo dein Betrieb heute steht, zeigt das SEO-Audit
            </Link>
          </p>
        </div>
        <ul className="pain-list stagger">
          <li className="pain-item rv">
            <span className="x" aria-hidden="true">
              ×
            </span>
            <div>
              <h3>Deine Website existiert, aber Google ignoriert sie</h3>
              <p>
                Wer in deinem Viertel nach deinem Gewerk sucht, findet andere Betriebe. Nicht, weil sie besser arbeiten,
                sondern weil ihre Website besser aufgestellt ist.
              </p>
            </div>
          </li>
          <li className="pain-item rv">
            <span className="x" aria-hidden="true">
              ×
            </span>
            <div>
              <h3>Portale liefern Aufträge, aber zu deren Bedingungen</h3>
              <p>
                Vermittlungsplattformen wie MyHammer bringen Anfragen, kassieren dafür Provision und drücken über den
                direkten Preisvergleich deine Marge. Eigene Google-Sichtbarkeit erreicht Kunden ohne Mittelsmann.
              </p>
            </div>
          </li>
          <li className="pain-item rv">
            <span className="x" aria-hidden="true">
              ×
            </span>
            <div>
              <h3>Das „zu beschäftigt“-Paradox</h3>
              <p>
                In der Saison stapeln sich die Aufträge, Marketing hat keine Priorität. Wird es ruhiger, fehlt plötzlich
                die Sichtbarkeit. SEO braucht Vorlauf: Wer im Herbst startet, wird gefunden, wenn die Auftragslage
                dünner wird.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
