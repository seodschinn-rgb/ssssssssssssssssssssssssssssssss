import Link from 'next/link'

export default function RestaurantsPain() {
  return (
    <section className="pain" id="realitaet" aria-labelledby="realitaet-heading">
      <div className="wrap pain-grid">
        <div className="pain-copy rv">
          <p className="eyebrow">
            <span className="num">01</span>
            <span className="rail" />
            Die Realität
          </p>
          <h2 id="realitaet-heading">Gutes Essen allein füllt keine Tische mehr</h2>
          <p className="lead">
            Du stehst den ganzen Tag in der Küche und gibst alles für Qualität. Aber ob ein neuer Gast davon erfährt,
            entscheidet sich vorher: bei Google, in Maps und in den Bewertungen. Qualität ist die Voraussetzung,
            Sichtbarkeit macht daraus volle Tische.
          </p>
          <p className="pain-foot" style={{ marginBottom: 0 }}>
            <Link className="arrow-link" href="/leistungen/seo-audit">
              Wo dein Restaurant heute steht, zeigt das SEO-Audit
            </Link>
          </p>
        </div>
        <ul className="pain-list stagger">
          <li className="pain-item rv">
            <span className="x" aria-hidden="true">
              ×
            </span>
            <div>
              <h3>Plattformen ranken vor deiner eigenen Website</h3>
              <p>
                Bestellportale wie Lieferando legen eigene Seiten für Restaurants an, die bei der Suche nach deinem
                Namen oft vor deiner Website erscheinen. Jede Bestellung über diesen Umweg kostet dich Provision, bei
                den dünnen Margen der Gastronomie ein echtes Problem.
              </p>
            </div>
          </li>
          <li className="pain-item rv">
            <span className="x" aria-hidden="true">
              ×
            </span>
            <div>
              <h3>Gäste entscheiden in Maps, bevor sie deine Website je sehen</h3>
              <p>
                Sterne-Bewertung, Fotos, Öffnungszeiten: Das Maps-Profil ist dein Schaufenster. Wer dort unvollständig
                oder mit veralteten Zeiten auftaucht, verliert den Gast an das Lokal drei Straßen weiter.
              </p>
            </div>
          </li>
          <li className="pain-item rv">
            <span className="x" aria-hidden="true">
              ×
            </span>
            <div>
              <h3>Die Speisekarte als PDF: dein bester Content, unsichtbar</h3>
              <p>
                Deine Gerichte wären perfekte Suchbegriffe, von hausgemachter Pasta bis zum Schnitzel. Als PDF oder Foto
                kann Google sie kaum lesen, und Gäste können auf dem Smartphone nur mühsam zoomen.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
