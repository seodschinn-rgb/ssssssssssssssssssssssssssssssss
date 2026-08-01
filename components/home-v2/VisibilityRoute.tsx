import type { CSSProperties } from 'react'
import Link from 'next/link'

export default function VisibilityRoute() {
  return (
    <section className="route" id="prozess" aria-labelledby="route-heading">
      <div className="mesh" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">01</span>
            <span className="rail" />
            Sichtbarkeits-Route
          </p>
          <h2 id="route-heading">Von unsichtbar zu sichtbar: unser SEO-Prozess</h2>
          <p className="lead">
            Transparent, strukturiert und auf messbare Ergebnisse ausgerichtet: Jede Station hat ein klares Ziel, und
            du siehst jederzeit, wo dein Projekt gerade steht.
          </p>
        </div>
        <div className="route-grid">
          <ol className="route-line">
            <li className="station rv">
              <span className="st-label">Ausgangslage</span>
              <h3>Unsichtbar</h3>
              <p>Kommt dir das bekannt vor?</p>
              <ul className="pains">
                <li>
                  <span>
                    <b>Deine Website existiert, aber Google ignoriert sie.</b> Potenzielle Kunden suchen genau deine
                    Leistung und landen bei anderen.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Ohne Google Ads läuft nichts.</b> Monat für Monat fließt Budget in Anzeigen. Sobald du stoppst,
                    stoppt der Traffic.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Deine letzte Agentur hat nur geredet.</b> Schöne Präsentationen, vage Reports, aber keine
                    Rankings, die sich bewegen.
                  </span>
                </li>
              </ul>
            </li>
            <li className="station rv">
              <span className="st-label">Station 01 · Start</span>
              <h3>Erstgespräch & Analyse</h3>
              <p>
                Wir starten mit einem kostenlosen Erstgespräch und klären deine Ziele. Danach analysieren wir
                Website, Wettbewerb und Markt. Kein Smalltalk, sondern konkrete Erkenntnisse.
              </p>
            </li>
            <li className="station rv">
              <span className="st-label">Station 02 · Fundament</span>
              <h3>Strategie & Keyword-Recherche</h3>
              <p>
                Auf Basis der Analyse entsteht deine maßgeschneiderte SEO-Strategie: Welche Keywords haben das größte
                Potenzial? Wo liegen Quick Wins? Welche Seiten brauchen Optimierung? Klare Meilensteine, messbare
                Ziele.
              </p>
            </li>
            <li className="station rv">
              <span className="st-label">Station 03 · Aufbau</span>
              <h3>Umsetzung: Technik, Content & OnPage</h3>
              <p>
                Wir optimieren Seitenstruktur, Ladezeiten, Meta-Tags und Inhalte. Jede Maßnahme wird nach Impact
                priorisiert: die wichtigsten Hebel zuerst.
              </p>
            </li>
            <li className="station rv">
              <span className="st-label">Station 04 · Sichtbarkeit wächst</span>
              <h3>Monitoring, Reporting & Skalierung</h3>
              <p>
                Monatliche Reports zeigen dir, was sich bewegt: Rankings, Traffic, Anfragen. Wir passen die Strategie
                laufend an und skalieren, was funktioniert. Erste Effekte zeigen sich typischerweise nach 3 bis 6
                Monaten.
              </p>
            </li>
            <li className="station terminus rv">
              <span className="st-label">Endstation</span>
              <h3>Anfragen & Ausbau</h3>
              <p>
                Aus Sichtbarkeit wird Geschäft: Besucher mit konkreter Suchintention finden dich und werden zu
                Kontaktanfragen. Du besetzt dein Thema nachhaltig und bleibst mit SEO + GEO auch in der KI-Suche
                präsent.
              </p>
              <div className="route-cta">
                <Link className="btn btn-primary" href="/kontakt">
                  Kostenloses Erstgespräch vereinbaren
                </Link>
                <span className="note">unverbindlich und ohne Bindung</span>
              </div>
            </li>
          </ol>
          <div className="route-side rv">
            <div className="sticky">
              {/* Anonymisiertes SERP-Mockup: Muster-Domains, "deine-website.de" als Highlight.
                  Verhalten: typing (72 ms/Zeichen) -> results (550 ms) -> ranking (2.400 ms). Konzept-README §3.1 */}
              <div
                className="serp dark"
                id="serp"
                data-state="ranked"
                aria-label="Beispiel-Darstellung: anonymisierte Suchergebnisse, deine Website steigt von Platz 5 auf Platz 1"
              >
                <div className="serp-field">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                    <path d="M20 20 L16.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="serp-q">steuerberater münchen</span>
                  <span className="serp-caret" aria-hidden="true" />
                </div>
                <ol className="serp-list" aria-hidden="true">
                  <li className="serp-row hl" data-a="4" data-b="0" style={{ '--p': 0 } as CSSProperties}>
                    <span className="fav" />
                    <span className="meta">
                      <span className="dom">deine-website.de</span>
                      <span className="ttl">Deine Kanzlei | Steuerberater München</span>
                    </span>
                    <span className="serp-delta">▲ 4 Plätze</span>
                  </li>
                  <li className="serp-row" data-a="0" data-b="1" style={{ '--p': 1 } as CSSProperties}>
                    <span className="fav" />
                    <span className="meta">
                      <span className="dom">musterkanzlei-eins.de</span>
                      <span className="ttl">Steuerberater München | Musterkanzlei</span>
                    </span>
                  </li>
                  <li className="serp-row" data-a="1" data-b="2" style={{ '--p': 2 } as CSSProperties}>
                    <span className="fav" />
                    <span className="meta">
                      <span className="dom">beispiel-steuerberatung.de</span>
                      <span className="ttl">Steuerberatung in München Mitte</span>
                    </span>
                  </li>
                  <li className="serp-row" data-a="2" data-b="3" style={{ '--p': 3 } as CSSProperties}>
                    <span className="fav" />
                    <span className="meta">
                      <span className="dom">kanzlei-mustermann.de</span>
                      <span className="ttl">Steuerkanzlei München | Mustermann & Partner</span>
                    </span>
                  </li>
                  <li className="serp-row" data-a="3" data-b="4" style={{ '--p': 4 } as CSSProperties}>
                    <span className="fav" />
                    <span className="meta">
                      <span className="dom">musterfirma-muenchen.de</span>
                      <span className="ttl">Steuerberater in München und Umland</span>
                    </span>
                  </li>
                </ol>
                <span className="badge-example serp-label">Beispiel-Darstellung</span>
              </div>
              <p className="serp-caption">So sieht es aus, wenn SEO wirkt.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
