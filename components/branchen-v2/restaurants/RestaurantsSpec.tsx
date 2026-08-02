import Link from 'next/link'

export default function RestaurantsSpec() {
  return (
    <section className="spec" id="gastro-spezifika" aria-labelledby="spec-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">04</span>
            <span className="rail" />
            Gastro-Spezifika
          </p>
          <h2 id="spec-heading">Maps, Speisekarte, Reservierung: das Gastro-Dreieck</h2>
          <p className="lead">
            Drei Stationen entscheiden, ob aus einer Suche ein Gast wird. Wir optimieren alle drei, damit keine
            Reservierung auf dem Weg verloren geht. Die Grundlagen erklärt unser{' '}
            <Link href="/blog/local-seo-guide">Local-SEO-Guide</Link>.
          </p>
        </div>
        <div className="spec-grid stagger">
          <article className="card lift rv">
            <span className="spec-idx" aria-hidden="true">
              04.1
            </span>
            <h3>Gefunden werden in Maps</h3>
            <p>
              Vollständiges Profil, korrekte Kategorie, aktuelle Öffnungszeiten, starke Fotos und frische Beiträge zur
              Wochenkarte. Konsistente Angaben in allen Verzeichnissen stützen das Ranking.
            </p>
          </article>
          <article className="card lift rv">
            <span className="spec-idx" aria-hidden="true">
              04.2
            </span>
            <h3>Überzeugen mit der Karte</h3>
            <p>
              Die Karte ist die meistbesuchte Seite deiner Website. Als HTML-Text mit Kennzeichnung von vegetarischen und
              veganen Gerichten wird sie lesbar für Google und bequem für Gäste.
            </p>
          </article>
          <article className="card lift rv">
            <span className="spec-idx" aria-hidden="true">
              04.3
            </span>
            <h3>Reservieren ohne Umweg</h3>
            <p>
              Reservierungslink im Profil, Click-to-Call auf der Website, klare Hinweise zu Stoßzeiten: Je kürzer der Weg
              zum Tisch, desto seltener springt ein Gast ab und desto weniger läuft über Portale.
            </p>
          </article>
        </div>
        <div
          className="query-rail rv"
          role="img"
          aria-label="Saisonale Suchfenster: Biergarten München von Mai bis September, Restaurant nähe Theresienwiese zur Wiesn, Weihnachtsfeier Restaurant München ab November"
        >
          <span className="q-label">Saisonale Suchfenster</span>
          <span className="query-chip">
            biergarten münchen <small>Mai bis September</small>
          </span>
          <span className="query-chip">
            restaurant nähe theresienwiese <small>zur Wiesn</small>
          </span>
          <span className="query-chip">
            weihnachtsfeier restaurant münchen <small>ab November</small>
          </span>
        </div>
        <p className="note rv" style={{ margin: '1rem 0 0' }}>
          Saisonale Inhalte gehen bei uns 2 bis 3 Monate vor der Saison live, damit Google sie rechtzeitig indexiert.
        </p>
        <p className="sec-foot rv note">
          Du führst ein Hotel mit Restaurant? Dann lohnt auch ein Blick auf{' '}
          <Link href="/branchen/hotels">SEO für Hotels</Link>.
        </p>
      </div>
    </section>
  )
}
