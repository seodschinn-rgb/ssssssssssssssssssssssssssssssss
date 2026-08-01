import Link from 'next/link'

export default function KnowledgeList() {
  return (
    <section className="knowledge" id="wissen" aria-labelledby="wissen-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">06</span>
            <span className="rail" />
            Wissen
          </p>
          <h2 id="wissen-heading">SEO-Wissen: Guides für bessere Google-Rankings</h2>
          <p className="lead">
            Im Blog teilen wir unser Know-how: praxisnah, aktuell und kostenlos. Hier eine Auswahl zum Einstieg.
          </p>
        </div>
        <div className="k-list stagger">
          <article className="k-item rv">
            <div>
              <span className="tag">Kosten</span>
              <h3>
                <Link href="/blog/seo-kosten">SEO Kosten 2026: Was kostet Suchmaschinenoptimierung wirklich?</Link>
              </h3>
              <p>Monatliche SEO-Kosten, Stundensätze, Freelancer vs. Agentur und Budget-Empfehlungen.</p>
            </div>
          </article>
          <article className="k-item rv">
            <div>
              <span className="tag">Audit</span>
              <h3>
                <Link href="/blog/seo-audit-checkliste">SEO Audit 2026: Der komplette Leitfaden mit Checkliste</Link>
              </h3>
              <p>Was geprüft wird, was es kostet und wie du ein Audit selbst durchführst.</p>
            </div>
          </article>
          <article className="k-item rv">
            <div>
              <span className="tag">Local SEO</span>
              <h3>
                <Link href="/blog/local-seo-guide">Local SEO Guide 2026: So wirst du lokal bei Google gefunden</Link>
              </h3>
              <p>Google Business Profile, Bewertungen, Citations und KI-Suche für lokale Unternehmen.</p>
            </div>
          </article>
          <article className="k-item rv">
            <div>
              <span className="tag">KI-Suche</span>
              <h3>
                <Link href="/blog/ai-overviews-optimieren">
                  Google AI Overviews: wie du deine Inhalte dafür optimierst
                </Link>
              </h3>
              <p>Was „Übersicht mit KI" ist, wie Google Quellen auswählt und wie du zitiert wirst.</p>
            </div>
          </article>
          <article className="k-item rv">
            <div>
              <span className="tag">Technik</span>
              <h3>
                <Link href="/blog/schema-markup-anleitung">
                  Schema Markup & strukturierte Daten: Die praktische Anleitung mit Code-Beispielen
                </Link>
              </h3>
              <p>JSON-LD zum Kopieren für jeden wichtigen Typ, mit Test-Workflow.</p>
            </div>
          </article>
          <article className="k-item rv">
            <div>
              <span className="tag">Tools</span>
              <h3>
                <Link href="/blog/seo-tools-anfaenger">SEO-Tools für Anfänger: Welche du 2026 wirklich brauchst</Link>
              </h3>
              <p>Die ehrliche Übersicht: kostenlose Tools, deutsche Alternativen und was du dir sparen kannst.</p>
            </div>
          </article>
        </div>
        <p className="sec-foot rv">
          <Link className="arrow-link" href="/blog">
            Alle Artikel im Blog ansehen
          </Link>
        </p>
      </div>
    </section>
  )
}
