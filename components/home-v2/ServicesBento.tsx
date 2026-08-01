import Link from 'next/link'

export default function ServicesBento() {
  return (
    <section className="services" id="leistungen" aria-labelledby="leistungen-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">02</span>
            <span className="rail" />
            Was du bekommst
          </p>
          <h2 id="leistungen-heading">SEO-Leistungen in München: Von Audit bis Optimierung</h2>
          <p className="lead">
            Wir finden heraus, was Google von deiner Website erwartet, und setzen genau das um. Jede
            Maßnahme wird nach Impact priorisiert: die größten Hebel zuerst.
          </p>
        </div>
        <div className="bento stagger">
          <article className="card lift tile-a rv">
            <h3>
              <Link href="/leistungen/seo-audit">SEO-Audit</Link>
            </h3>
            <p>
              Umfassende Analyse deiner Website: Stärken, Schwächen und konkrete
              Handlungsempfehlungen. OnPage, Technik, Backlinks und Content, alles auf dem
              Prüfstand.
            </p>
            <ul className="check">
              <li>OnPage, Technik und Content im Detail geprüft</li>
              <li>Backlink-Profil und Wettbewerbsvergleich</li>
              <li>Priorisierte Maßnahmenliste statt PDF-Friedhof</li>
            </ul>
            <div className="tags">
              <span className="tag">OnPage-Analyse</span>
              <span className="tag">Technisches SEO</span>
            </div>
          </article>
          <article className="card lift tile-b rv">
            <h3>
              <Link href="/leistungen/keyword-recherche">Keyword-Recherche</Link>
            </h3>
            <p>
              Wir finden die Suchbegriffe, die deine Zielgruppe tatsächlich nutzt: von
              reichweitenstarken Keywords bis zu profitablen Long-Tail-Chancen.
            </p>
            <div className="tags">
              <span className="tag">Zielgruppenorientierung</span>
              <span className="tag">Long-Tail-Strategie</span>
            </div>
          </article>
          <article className="card lift rv">
            <h3>
              <Link href="/leistungen/local-seo">Local SEO München</Link>
            </h3>
            <p>
              Google Business Profile, lokale Suchergebnisse und Maps-Optimierung. Damit Kunden in
              München und Umgebung zuerst dich finden.
            </p>
            <div className="tags">
              <span className="tag">Google Business Profile</span>
              <span className="tag">Lokale Landingpages</span>
            </div>
          </article>
          <article className="card lift rv">
            <h3>
              <Link href="/leistungen/technisches-seo">Technisches SEO & Optimierung</Link>
            </h3>
            <p>
              Core Web Vitals, Crawling, Indexierung und Ladezeit: die technische Grundlage, auf der
              gute Rankings erst möglich werden.
            </p>
            <div className="tags">
              <span className="tag">Core Web Vitals</span>
              <span className="tag">Indexierung & Crawling</span>
            </div>
          </article>
          <article className="card lift tile-geo tile-e rv">
            <h3>
              <Link href="/leistungen/geo-agentur">GEO: Sichtbar in der KI-Suche</Link>
            </h3>
            <p>
              Google AI Overviews, ChatGPT und Perplexity verändern, wie Kunden suchen. Mit GEO
              (Generative Engine Optimization) bleibt dein Unternehmen auch dort sichtbar, wo KI die
              Antworten schreibt.
            </p>
            <span className="b-link">Zur GEO-Agentur</span>
          </article>
          <article className="card lift tile-f rv">
            <h3>
              <Link href="/branchen">SEO für deine Branche</Link>
            </h3>
            <p>
              Du suchst SEO für deine Branche, zum Beispiel Praxis, Handwerk oder Kanzlei? Im
              Branchen-SEO-Hub findest du Leitfäden, typische Fehler und Maßnahmen für München und
              Umgebung.
            </p>
            <span className="b-link">Zum Branchen-Hub</span>
          </article>
        </div>
        <p className="sec-foot rv">
          <Link className="arrow-link" href="/leistungen">
            Alle Leistungen im Detail (inkl. OnPage, Beratung und Monitoring)
          </Link>
        </p>
      </div>
    </section>
  )
}
