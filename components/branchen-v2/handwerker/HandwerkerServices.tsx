import Link from 'next/link'

export default function HandwerkerServices() {
  return (
    <section className="services" id="leistungen-handwerk" aria-labelledby="leistungen-heading">
      <div className="mesh" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">02</span>
            <span className="rail" />
            Was wir für Handwerker tun
          </p>
          <h2 id="leistungen-heading">SEO, übersetzt in dein Gewerk</h2>
          <p className="lead">
            Handwerksbetriebe haben andere SEO-Anforderungen als Onlineshops oder Praxen. Das sind die Hebel mit dem
            größten Effekt, in der Reihenfolge, in der wir sie typischerweise umsetzen.
          </p>
        </div>
        <div className="bento stagger">
          <article className="card lift tile-a rv">
            <h3>Google Business Profile & Maps</h3>
            <p>
              Bei Suchen wie „Elektriker in meiner Nähe“ entscheidet dein Profil, ob dein Betrieb im Maps-Pack erscheint.
              Wir bauen es vollständig aus und betreuen es laufend,{' '}
              <Link href="/blog/google-business-profile-optimieren">wie im GBP-Leitfaden beschrieben</Link>.
            </p>
            <ul className="check">
              <li>Haupt- und Nebenkategorien passend zu deinem Gewerk</li>
              <li>Leistungen, Öffnungs- und Notdienst-Zeiten vollständig gepflegt</li>
              <li>Echte Projektfotos statt Stockbilder, regelmäßig aktualisiert</li>
            </ul>
            <div className="tags">
              <span className="tag">Maps-Pack</span>
              <span className="tag">Laufende Betreuung</span>
            </div>
          </article>
          <article className="card lift tile-b rv">
            <h3>Leistungsseiten je Gewerk-Leistung</h3>
            <p>
              Der häufigste Struktur-Fehler: alle Leistungen auf einer Seite. Wir bauen eine eigene Seite pro Leistung,
              von Badsanierung bis Wärmepumpe, damit Google dich der richtigen Suche zuordnet.
            </p>
            <div className="tags">
              <span className="tag">Seitenstruktur</span>
              <span className="tag">OnPage</span>
            </div>
          </article>
          <article className="card lift rv">
            <h3>Lokale Keywords: Gewerk + Stadtteil</h3>
            <p>
              „Elektriker München“ ist stark umkämpft, „Elektriker Schwabing“ deutlich leichter zu besetzen und genauso
              wertvoll. Wir priorisieren die Begriffe, die Anfragen bringen.
            </p>
            <div className="tags">
              <span className="tag">Keyword-Strategie</span>
            </div>
          </article>
          <article className="card lift rv">
            <h3>Bewertungen systematisch aufbauen</h3>
            <p>
              Bewertungen sind im Handwerk ein harter Vertrauens- und Ranking-Faktor. Wir richten dir ein
              Bewertungs-Setup mit direktem Link und Antwort-Routine ein, ohne gekaufte Rezensionen.
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
              Google beantwortet immer mehr Fragen direkt mit KI. Strukturierte, faktenbasierte Inhalte auf deiner
              Website sorgen dafür, dass dein Betrieb dort als Quelle auftaucht.
            </p>
            <span className="b-link">Zur GEO-Agentur</span>
          </article>
          <article className="card lift tile-f rv">
            <h3>
              <Link href="/leistungen/technisches-seo">Technik: Mobile-First & Ladezeit</Link>
            </h3>
            <p>
              Die meisten lokalen Suchen kommen vom Smartphone. Wir sorgen für schnelle Ladezeiten, saubere mobile
              Darstellung und strukturierte Daten, damit Google deinen Betrieb korrekt versteht.
            </p>
            <span className="b-link">Zum technischen SEO</span>
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
