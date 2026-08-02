import Link from 'next/link'

export default function AnwaelteBerufsrecht() {
  return (
    <section className="spec" id="berufsrecht" aria-labelledby="spec-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">04</span>
            <span className="rail" />
            Kanzlei-Spezifika
          </p>
          <h2 id="spec-heading">Sichtbar werden, ohne beim Berufsrecht anzuecken</h2>
          <p className="lead">
            Anwaltliche Werbung muss sachlich und berufsbezogen sein. Für gutes SEO ist das kein Hindernis, sondern ein
            Qualitätsmerkmal: Sachliche Inhalte sind genau das, was Suchende und Suchmaschinen belohnen.
          </p>
        </div>
        <div className="spec-grid stagger">
          <article className="card lift rv">
            <span className="spec-idx" aria-hidden="true">
              04.1
            </span>
            <h3>Was gut funktioniert</h3>
            <ul className="list-ok">
              <li>Sachliche Rechtstipps und Fachbeiträge zu deinen Rechtsgebieten</li>
              <li>Transparente Informationen zu Ablauf und Kosten der Beratung</li>
              <li>Fachanwaltstitel sichtbar machen, wenn du ihn trägst: ein starkes Vertrauenssignal</li>
              <li>Mandantenstimmen nur mit ausdrücklicher Einwilligung</li>
            </ul>
          </article>
          <article className="card lift rv">
            <span className="spec-idx" aria-hidden="true">
              04.2
            </span>
            <h3>Worauf wir beim Texten achten</h3>
            <ul className="list-no">
              <li>
                Keine „Spezialist“- oder „Experte“-Labels ohne belegbaren Nachweis, stattdessen „Schwerpunkt“
              </li>
              <li>Keine Erfolgsversprechen und keine irreführenden Angaben</li>
              <li>
                Keine Falldetails in Bewertungsantworten oder Beiträgen: Die Verschwiegenheitspflicht gilt auch online
              </li>
            </ul>
          </article>
        </div>
        <div className="info-box rv">
          <p>
            <strong style={{ color: 'var(--amber)' }}>Wichtig:</strong> Wir liefern Marketing, keine Rechtsberatung. Die
            berufsrechtliche Prüfung deiner Inhalte nach BRAO und BORA bleibt bei dir und deiner Kammer. Genau deshalb
            formulieren wir von vornherein sachlich und zurückhaltend.
          </p>
        </div>
        <p className="sec-foot rv note">
          Ähnlich sensibel, ähnlich umkämpft: Auch Steuerkanzleien gewinnen Mandate über lokale Suche. Mehr dazu unter{' '}
          <Link href="/branchen/steuerberater">SEO für Steuerberater</Link>.
        </p>
      </div>
    </section>
  )
}
