import Link from 'next/link'

export default function HotelsServices() {
  return (
    <section className="services" id="leistungen-hotels" aria-labelledby="services-heading">
      <div className="mesh" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">02</span>
            <span className="rail" />
            Was wir tun
          </p>
          <h2 id="services-heading">Hotel-SEO mit klarem Ziel: der Direktkanal</h2>
          <p className="lead">
            Sechs Bausteine, ein Auftrag: Gäste sollen dein Haus finden, ihm vertrauen und direkt bei dir buchen.
          </p>
        </div>
        <div className="bento stagger">
          <article className="card lift tile-a rv">
            <h3>
              <Link href="/leistungen/local-seo">Google Business Profile &amp; Local SEO</Link>
            </h3>
            <p>
              Dein Profil entscheidet mit, ob der Klick auf deiner Website landet oder beim Portal. Wir bauen es zum
              Buchungskanal aus.
            </p>
            <ul className="check">
              <li>Passende Kategorie und vollständige Ausstattungs-Attribute</li>
              <li>Professionelle Fotos von Zimmern, Frühstück und Haus</li>
              <li>Buchungslink direkt zu deiner Website, nicht zum Portal</li>
              <li>Google-Beiträge und Q&amp;A laufend gepflegt</li>
            </ul>
            <div className="tags">
              <span className="tag">Maps-Sichtbarkeit</span>
              <span className="tag">Hotel-Kategorien</span>
            </div>
          </article>
          <article className="card lift tile-b rv">
            <h3>
              <Link href="/leistungen/keyword-recherche">Destination-Content &amp; Keywords</Link>
            </h3>
            <p>
              Gäste suchen zuerst die Stadt, dann das Haus. Viertel-Guides, Veranstaltungen und Anreise-Tipps holen sie
              in der Planungsphase ab, bevor der Preisvergleich beginnt. Welche Themen sich lohnen, zeigt die
              Keyword-Recherche nach Lage, Hoteltyp und Reiseanlass.
            </p>
            <div className="tags">
              <span className="tag">Viertel-Guides</span>
              <span className="tag">Reiseanlässe</span>
            </div>
          </article>
          <article className="card lift rv">
            <h3>Bewertungen als Buchungsfaktor</h3>
            <p>
              Sterne entscheiden mit, wohin der Klick geht. Wir verankern den Bewertungsfluss im Check-out: dezent,
              systematisch und mit einer Antwort auf jede Rückmeldung.
            </p>
            <div className="tags">
              <span className="tag">Reputation</span>
            </div>
          </article>
          <article className="card lift rv">
            <h3>
              <Link href="/leistungen/technisches-seo">Technik &amp; Ladezeit</Link>
            </h3>
            <p>
              Core Web Vitals, strukturierte Hotel-Daten und eine Buchungsstrecke, die auf dem Smartphone genauso
              schnell ist wie das Portal.
            </p>
            <div className="tags">
              <span className="tag">Core Web Vitals</span>
            </div>
          </article>
          <article className="card lift tile-geo tile-e rv">
            <h3>
              <Link href="/leistungen/geo-agentur">GEO: Sichtbar in der KI-Reiseplanung</Link>
            </h3>
            <p>
              Reisende fragen KI-Assistenten nach dem passenden Hotel. Mit strukturierten, faktenbasierten Inhalten zu
              Zimmern, Lage und Ausstattung wird dein Haus in solchen Antworten genannt, von Google AI Overviews bis
              ChatGPT.
            </p>
            <span className="b-link">Zur GEO-Agentur</span>
          </article>
          <article className="card lift tile-f rv">
            <h3>Direktbuchungs-Optimierung</h3>
            <p>
              Sichtbarer Buchungs-Button auf jeder Seite, klar kommunizierte Direktbucher-Vorteile und ein Direktpreis,
              der mit dem Portal mindestens gleichzieht. Sichtbarkeit bringt den Gast, die Buchungsstrecke macht die
              Buchung.
            </p>
            <div className="tags">
              <span className="tag">Buchungsstrecke</span>
              <span className="tag">Direktbucher-Vorteile</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
