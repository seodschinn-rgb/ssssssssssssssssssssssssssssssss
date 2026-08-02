import Link from 'next/link'

export default function KfzSpec() {
  return (
    <section className="specs" id="besonderheiten" aria-labelledby="specs-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">04</span>
            <span className="rail" />
            Besonderheiten
          </p>
          <h2 id="specs-heading">Was Werkstatt-SEO anders macht</h2>
          <p className="lead">
            Kaum eine Branche ist so lokal, so mobil und so saisonal wie das KFZ-Gewerbe. Drei Punkte, sachlich
            eingeordnet.
          </p>
        </div>
        <div className="spec-rows stagger">
          <article className="spec-row rv">
            <div>
              <h3>Maps &amp; Bewertungen entscheiden zuerst</h3>
              <p>
                Wer eine Werkstatt sucht, vergleicht selten zehn Websites: Das Maps-Pack ist die Vorauswahl, Bewertungen
                sind das Zünglein an der Waage. Profilpflege ist deshalb Daueraufgabe statt Einmal-Aktion. Wie du dein
                Profil Schritt für Schritt aufbaust, zeigt unser{' '}
                <Link href="/blog/google-business-profile-optimieren">Google-Business-Profile-Leitfaden</Link>.
              </p>
            </div>
          </article>
          <article className="spec-row rv">
            <div>
              <h3>Eine Seite je Reparaturart, mit saisonalem Vorlauf</h3>
              <p>
                Der Suchende will keinen Bauchladen, sondern seinen Service im eigenen Viertel. Eigene Leistungsseiten
                je Reparaturart lassen sich gezielt auf Kombinationen aus Service und Stadtteil optimieren. Saisonthemen
                wie Reifenwechsel brauchen dabei Vorlauf: Die Seite muss stehen und indexiert sein, bevor die Nachfrage
                anzieht.
              </p>
            </div>
          </article>
          <article className="spec-row rv">
            <div>
              <h3>Bestehen im Ketten-Wettbewerb</h3>
              <p>
                Ketten haben Budget, freie Werkstätten haben Nähe und einen Namen im Viertel. Genau das belohnt die
                lokale Suche: Google gewichtet lokale Relevanz hoch, und mit Stadtteil-Keywords, echten Bewertungen und
                einem gepflegten Profil kann ein freier Betrieb die Ketten in seinem Einzugsgebiet überholen, ohne deren
                Werbebudget.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
