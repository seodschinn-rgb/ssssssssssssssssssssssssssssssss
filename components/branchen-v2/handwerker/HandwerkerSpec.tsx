import Link from 'next/link'

export default function HandwerkerSpec() {
  return (
    <section className="spec" id="einzugsgebiet" aria-labelledby="spec-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">04</span>
            <span className="rail" />
            Handwerks-Spezifika
          </p>
          <h2 id="spec-heading">Einzugsgebiet und Notdienst: die zwei Hebel, die nur Handwerker haben</h2>
          <p className="lead">
            Dein Markt endet nicht am Ortsschild, und dein wertvollster Anruf kommt oft nachts. Beides bilden wir in der
            SEO-Strategie ab.
          </p>
        </div>
        <div className="spec-grid stagger">
          <article className="card lift rv">
            <span className="spec-idx" aria-hidden="true">
              04.1
            </span>
            <h3>Sichtbar im gesamten Einzugsgebiet</h3>
            <p>
              Dein Betrieb fährt dorthin, wo der Auftrag ist: vom Stadtteil nebenan bis ins Umland. Mit{' '}
              <Link href="/leistungen/local-seo">Local SEO</Link> bauen wir Sichtbarkeit entlang deines realen
              Einzugsgebiets auf, über Stadtteil-Seiten und lokale Signale statt einer einzigen „Wir über uns“-Seite. Wo
              wir in der Region arbeiten, siehst du auf der <Link href="/standorte">Standorte-Übersicht</Link>.
            </p>
          </article>
          <article className="card lift rv">
            <span className="spec-idx" aria-hidden="true">
              04.2
            </span>
            <h3>Notdienst-Suchen: gefunden werden, wenn es brennt</h3>
            <p>
              Wer nachts einen Rohrbruch hat, vergleicht keine fünf Angebote, sondern ruft den Betrieb an, den Google
              zuerst zeigt und der erreichbar ist. Wir bauen dir eine eigene Notdienst-Seite mit Click-to-Call,
              hinterlegen Notdienst-Zeiten im Profil und decken die Notdienst-Begriffe deines Gewerks ab.
            </p>
          </article>
        </div>
        <div
          className="query-rail rv"
          role="img"
          aria-label="Beispielhafte Suchanfragen: Klempner Notdienst München, Elektriker Schwabing, Dachdecker München Ost, Heizung Notdienst Pasing"
        >
          <span className="q-label">Typische Suchmuster</span>
          <span className="query-chip">klempner notdienst münchen</span>
          <span className="query-chip">elektriker schwabing</span>
          <span className="query-chip">dachdecker münchen ost</span>
          <span className="query-chip">heizung notdienst pasing</span>
        </div>
        <p className="sec-foot rv note">
          Übrigens: Auch Werkstätten leben von Maps, Bewertungen und Notfall-Suchen. Für Kollegen mit Hebebühne gibt es{' '}
          <Link href="/branchen/kfz-werkstatt">SEO für KFZ-Werkstätten</Link>.
        </p>
      </div>
    </section>
  )
}
