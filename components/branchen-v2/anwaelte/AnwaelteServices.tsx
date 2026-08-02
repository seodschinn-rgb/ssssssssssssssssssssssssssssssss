import Link from 'next/link'

export default function AnwaelteServices() {
  return (
    <section className="services" id="leistungen-kanzlei" aria-labelledby="leistungen-heading">
      <div className="mesh" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">02</span>
            <span className="rail" />
            Was wir für Kanzleien tun
          </p>
          <h2 id="leistungen-heading">SEO, übersetzt in deine Rechtsgebiete</h2>
          <p className="lead">
            Kanzleien haben besondere SEO-Anforderungen: Vertrauensaufbau, umkämpfte Suchbegriffe und ein Berufsrecht,
            das den Ton setzt. Das sind die Hebel mit dem größten Effekt.
          </p>
        </div>
        <div className="bento stagger">
          <article className="card lift tile-a rv">
            <h3>Google Business Profile für Kanzleien</h3>
            <p>
              Dein Profil entscheidet, ob deine Kanzlei im Maps-Pack erscheint, wenn jemand „Anwalt Mietrecht München“
              sucht. Wir bauen es vollständig aus und verzahnen es mit{' '}
              <Link href="/leistungen/local-seo">Local SEO</Link> für deinen Standort.
            </p>
            <ul className="check">
              <li>Hauptkategorie „Rechtsanwalt“, Nebenkategorien je Fachgebiet</li>
              <li>Alle Rechtsgebiete einzeln als Leistungen angelegt</li>
              <li>Echte Kanzlei- und Team-Fotos statt Stockbilder</li>
            </ul>
            <div className="tags">
              <span className="tag">Maps-Pack</span>
              <span className="tag">Laufende Betreuung</span>
            </div>
          </article>
          <article className="card lift tile-b rv">
            <h3>Rechtsgebiet-Seiten: eine Seite pro Fachgebiet</h3>
            <p>
              Der häufigste Struktur-Fehler: alle Rechtsgebiete auf einer Seite. Wir bauen eigene, sauber optimierte
              Seiten für Arbeitsrecht, Mietrecht oder Familienrecht, als Teil der{' '}
              <Link href="/leistungen/onpage-optimierung">OnPage-Optimierung</Link>.
            </p>
            <div className="tags">
              <span className="tag">Seitenstruktur</span>
              <span className="tag">OnPage</span>
            </div>
          </article>
          <article className="card lift rv">
            <h3>Mandanten-Content statt Juristensprache</h3>
            <p>
              Mandanten fragen „Kann mein Vermieter mir kündigen?“, nicht „außergerichtliche Vertretung“. Wir
              beantworten echte Fragen aus Mandantensicht, sachlich und verständlich.
            </p>
            <div className="tags">
              <span className="tag">Ratgeber-Content</span>
            </div>
          </article>
          <article className="card lift rv">
            <h3>Bewertungen mit Augenmaß</h3>
            <p>
              Bewertungen schaffen Vertrauen, gerade bei Kanzleien. Wir richten dir ein Bewertungs-Setup mit
              Antwort-Routine ein, das die anwaltliche Verschwiegenheit respektiert: keine Falldetails, keine gekauften
              Rezensionen.
            </p>
            <div className="tags">
              <span className="tag">Vertrauen</span>
            </div>
          </article>
          <article className="card lift tile-geo tile-e rv">
            <h3>
              <Link href="/leistungen/geo-agentur">GEO: Sichtbar in der KI-Suche</Link>
            </h3>
            <p>
              Fristen, Kosten, Rechte: Juristische Fragen beantwortet Google zunehmend direkt per KI. Strukturierte,
              faktenbasierte Inhalte sorgen dafür, dass deine Kanzlei dort als Quelle auftaucht.
            </p>
            <span className="b-link">Zur GEO-Agentur</span>
          </article>
          <article className="card lift tile-f rv">
            <h3>
              <Link href="/leistungen/keyword-recherche">Keywords: Rechtsgebiet + Stadtteil</Link>
            </h3>
            <p>
              „Anwalt Arbeitsrecht München“ ist hart umkämpft, „Fachanwalt Mietrecht Schwabing“ deutlich leichter zu
              besetzen. Wir priorisieren die Begriffe mit echter Mandatsabsicht.
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
