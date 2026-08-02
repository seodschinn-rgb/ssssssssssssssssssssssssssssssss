import Link from 'next/link'

export default function RestaurantsServices() {
  return (
    <section className="services" id="leistungen-gastro" aria-labelledby="leistungen-heading">
      <div className="mesh" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">02</span>
            <span className="rail" />
            Was wir für Restaurants tun
          </p>
          <h2 id="leistungen-heading">SEO, übersetzt in deine Küche</h2>
          <p className="lead">
            Gastronomie hat eigene SEO-Regeln: Maps schlägt Website, Bewertungen schlagen Werbetexte, und die Speisekarte
            ist dein wichtigster Inhalt. Das sind die Hebel mit dem größten Effekt.
          </p>
        </div>
        <div className="bento stagger">
          <article className="card lift tile-a rv">
            <h3>Google Business Profile &amp; Maps</h3>
            <p>
              Bei Restaurant-Suchen fällt die Entscheidung meist direkt in Google Maps. Wir bauen dein Profil
              vollständig aus und verzahnen es mit <Link href="/leistungen/local-seo">Local SEO</Link> für dein Viertel.
            </p>
            <ul className="check">
              <li>Korrekte Hauptkategorie, zum Beispiel „Italienisches Restaurant“ statt nur „Restaurant“</li>
              <li>Attribute gepflegt: Terrasse, Reservierung, vegetarische Optionen</li>
              <li>Reservierungslink und Speisekarte direkt im Profil</li>
            </ul>
            <div className="tags">
              <span className="tag">Maps-Pack</span>
              <span className="tag">Laufende Betreuung</span>
            </div>
          </article>
          <article className="card lift tile-b rv">
            <h3>Speisekarten-SEO: HTML statt PDF</h3>
            <p>
              Wir setzen deine Karte als durchsuchbaren Text um, mit Gerichten, Beschreibungen, Preisen und Menu-Schema.
              So versteht Google, was bei dir auf den Tisch kommt, und Gäste lesen die Karte bequem am Handy.
            </p>
            <div className="tags">
              <span className="tag">Menu-Schema</span>
              <span className="tag">Mobile</span>
            </div>
          </article>
          <article className="card lift rv">
            <h3>Bewertungen als Gäste-Magnet</h3>
            <p>
              Zufriedene Gäste bewerten selten von selbst. Wir richten dir QR-Codes, Bewertungslink und eine
              Antwort-Routine ein, auch für kritische Stimmen. Gekaufte Bewertungen sind tabu.
            </p>
            <div className="tags">
              <span className="tag">Vertrauen</span>
            </div>
          </article>
          <article className="card lift rv">
            <h3>Food-Fotos, die ranken</h3>
            <p>
              Eigene Fotos deiner Gerichte und Räume statt Stockbilder: mit Alt-Texten und sauberer Benennung ranken sie
              in der Bildersuche und machen dein Profil unverwechselbar.
            </p>
            <div className="tags">
              <span className="tag">Bildersuche</span>
            </div>
          </article>
          <article className="card lift tile-geo tile-e rv">
            <h3>
              <Link href="/leistungen/geo-agentur">GEO: Sichtbar in der KI-Suche</Link>
            </h3>
            <p>
              „Wo gibt es die beste Pasta in Haidhausen?“ beantwortet zunehmend eine KI. Strukturierte Infos zu Küche,
              Preisen und Besonderheiten sorgen dafür, dass dein Restaurant in diesen Antworten auftaucht.
            </p>
            <span className="b-link">Zur GEO-Agentur</span>
          </article>
          <article className="card lift tile-f rv">
            <h3>
              <Link href="/leistungen/keyword-recherche">Stadtteil- &amp; Saison-Keywords</Link>
            </h3>
            <p>
              „Restaurant München“ ist hart umkämpft, „Italiener Haidhausen“ oder „Frühstück Schwabing“ deutlich
              leichter, und näher an deinen Gästen. Dazu planen wir saisonale Themen rechtzeitig ein.
            </p>
            <span className="b-link">Zur Keyword-Recherche</span>
          </article>
        </div>
        <p className="sec-foot rv">
          <Link className="arrow-link" href="/leistungen">
            Alle SEO-Leistungen im Detail ansehen
          </Link>
        </p>
      </div>
    </section>
  )
}
