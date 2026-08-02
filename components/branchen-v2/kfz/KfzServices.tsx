import Link from 'next/link'

export default function KfzServices() {
  return (
    <section className="services" id="leistungen-kfz" aria-labelledby="services-heading">
      <div className="mesh" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">02</span>
            <span className="rail" />
            Was wir tun
          </p>
          <h2 id="services-heading">Werkstatt-SEO mit klarem Ziel: der Anruf</h2>
          <p className="lead">
            Sechs Bausteine, ein Auftrag: Wer in deinem Einzugsgebiet eine Werkstatt sucht, soll dich finden, dir
            vertrauen und anrufen.
          </p>
        </div>
        <div className="bento stagger">
          <article className="card lift tile-a rv">
            <h3>
              <Link href="/leistungen/local-seo">Google Business Profile &amp; Maps</Link>
            </h3>
            <p>
              Bei Suchen wie Werkstatt in meiner Nähe entscheidet dein Profil über den Platz im Maps-Pack. Wir bauen es
              zum stärksten Kanal deines Betriebs aus.
            </p>
            <ul className="check">
              <li>Haupt- und Nebenkategorien je Service sauber gesetzt</li>
              <li>Echte Werkstattfotos statt Symbolbilder</li>
              <li>Jede Leistung einzeln im Profil angelegt</li>
              <li>Öffnungszeiten, Beiträge und Q&amp;A laufend gepflegt</li>
            </ul>
            <div className="tags">
              <span className="tag">Maps-Pack</span>
              <span className="tag">Profil-Pflege</span>
            </div>
          </article>
          <article className="card lift tile-b rv">
            <h3>
              <Link href="/leistungen/onpage-optimierung">Leistungsseiten je Reparaturart</Link>
            </h3>
            <p>
              TÜV und HU, Reifenwechsel, Inspektion, Ölwechsel, Bremsen, Klimaservice: Jede Leistung bekommt eine
              eigene, optimierte Seite mit Ablauf, Preisrahmen und Kontakt. So versteht Google, wofür deine Werkstatt
              relevant ist.
            </p>
            <div className="tags">
              <span className="tag">OnPage-Struktur</span>
              <span className="tag">Service-Keywords</span>
            </div>
          </article>
          <article className="card lift rv">
            <h3>Bewertungen mit System</h3>
            <p>
              Autofahrer lesen Bewertungen, bevor sie anrufen. Wir richten deinen Bewertungsfluss ein: QR-Code bei der
              Fahrzeugrückgabe, Antworten auf jedes Feedback, keine gekauften Sterne.
            </p>
            <div className="tags">
              <span className="tag">Reputation</span>
            </div>
          </article>
          <article className="card lift rv">
            <h3>
              <Link href="/leistungen/technisches-seo">Technik &amp; Mobile</Link>
            </h3>
            <p>
              Werkstatt-Suchen passieren mobil, oft direkt am liegengebliebenen Auto. Deine Seite lädt schnell,
              funktioniert auf jedem Display und legt den Anruf-Button auf jede Seite.
            </p>
            <div className="tags">
              <span className="tag">Click-to-Call</span>
            </div>
          </article>
          <article className="card lift tile-geo tile-e rv">
            <h3>
              <Link href="/leistungen/geo-agentur">GEO: Antworten für die KI-Suche</Link>
            </h3>
            <p>
              Was kostet ein Ölwechsel in München? Solche Fragen beantwortet zunehmend die KI direkt in der Suche. Mit
              strukturierten Inhalten und klaren Fakten wird deine Werkstatt dort als Quelle genannt.
            </p>
            <span className="b-link">Zur GEO-Agentur</span>
          </article>
          <article className="card lift tile-f rv">
            <h3>Saisonales SEO</h3>
            <p>
              Reifenwechsel im Herbst und Frühjahr, Klimaservice im Frühsommer, Urlaubscheck vor den Ferien:
              Saisonseiten gehen mit Vorlauf online, damit sie indexiert sind und ranken, wenn die Nachfrage kommt.
            </p>
            <div className="tags">
              <span className="tag">Saison-Planung</span>
              <span className="tag">Content-Vorlauf</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
