import Link from 'next/link'

export default function ProofModule() {
  return (
    <section className="proof" id="erfolge" aria-labelledby="erfolge-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">03</span>
            <span className="rail" />
            Woran wir uns messen lassen
          </p>
          <h2 id="erfolge-heading">Messbare Ergebnisse für unsere Kunden</h2>
          <p className="lead">
            Große Versprechen liest du überall. Wir zeigen dir lieber, woran wir uns messen lassen: an Verläufen aus
            der Google Search Console und an dem, was Kunden nach der Zusammenarbeit sagen.
          </p>
        </div>
        <div className="proof-grid stagger">
          <div className="proof-chart rv">
            {/* [GSC-SCREENSHOT: Sobald ein echter, anonymisierter GSC-Export mit Kundenfreigabe vorliegt,
                ersetzt er diese Beispiel-Grafik. Anonymisierungs- und Export-Regeln: Konzept-README §3.2.
                Die Beispiel-Grafik wird NIE als Kundendaten ausgegeben. */}
            <figure className="figure-card">
              <div className="fig-head">
                <span className="fig-title">Suchleistung · Beispielprojekt</span>
                <span className="badge-example">Beispiel-Darstellung</span>
              </div>
              <img
                src="/images/blog/homepage-redesign-gsc-beispiel.webp"
                alt="Beispiel-Darstellung: schematischer Verlauf von Impressionen und Klicks über zwölf Projektmonate, keine echten Kundendaten"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                Beispiel-Darstellung: So dokumentieren wir Projektverläufe in der Google Search Console. Keine echten
                Kundendaten.
              </figcaption>
            </figure>
          </div>
          <article className="card lift case rv">
            <div className="case-tags">
              <span className="tag">Fallstudie 01</span>
              <span className="tag">Paket: Growth</span>
            </div>
            <h3>Schreinerei in München-Sendling</h3>
            <dl>
              <div>
                <dt>Ausgangslage</dt>
                <dd>
                  Solide Arbeit, volle Auftragsbücher über Empfehlungen, aber bei Google praktisch unsichtbar. Wer in
                  Sendling nach einer Schreinerei suchte, fand andere.
                </dd>
              </div>
              <div>
                <dt>Maßnahmen</dt>
                <dd>
                  Technische Basis bereinigt, Google Business Profile aufgebaut, lokale Keyword-Strategie umgesetzt,
                  die wichtigsten Leistungen auf eigenen Seiten sichtbar gemacht. Dazu Content-Aufbau und eine
                  Bewertungsstrategie.
                </dd>
              </div>
              <div>
                <dt>Heute</dt>
                <dd>
                  Die Schreinerei wird in der lokalen Suche und über Google Maps gefunden und bekommt regelmäßig
                  Anfragen über die Website. Was das im Alltag bedeutet, erzählt die Inhaberin nebenan.
                </dd>
              </div>
            </dl>
          </article>
          <figure id="referenzen" className="card lift quote-card rv" style={{ margin: 0 }}>
            <blockquote>
              Vor der Zusammenarbeit kamen <strong>2 bis 3 Anfragen pro Woche</strong> über die Website. Nach 5
              Monaten SEO-Optimierung sind es <strong>8 bis 10</strong>. Besonders die Local-SEO-Maßnahmen haben
              unsere Maps-Sichtbarkeit komplett verändert.
            </blockquote>
            <figcaption className="quote-meta">
              <span className="avatar" aria-hidden="true">
                SK
              </span>
              <p className="who">
                <b>Sarah K.</b>, Inhaberin, Schreinerei in München-Sendling
                <span>Projektstimme, Name gekürzt</span>
              </p>
            </figcaption>
          </figure>
          <figure className="card lift quote-card rv" style={{ margin: 0 }}>
            <blockquote>
              Früher wussten wir nicht, ob unsere Website überhaupt Patienten bringt. Jetzt sehen wir im monatlichen
              Report: <strong>40 % unserer Neupatienten finden uns über Google.</strong> Das hat unser Marketing
              komplett verändert.
            </blockquote>
            <figcaption className="quote-meta">
              <span className="avatar" aria-hidden="true">
                MR
              </span>
              <p className="who">
                <b>Dr. Michael R.</b>, Zahnarztpraxis München-Schwabing
                <span>Projektstimme, Name gekürzt</span>
              </p>
            </figcaption>
          </figure>
          <figure className="card lift quote-card rv" style={{ margin: 0 }}>
            <blockquote>
              Unsere vorherige Agentur lieferte 12 Monate lang bunte Reports, aber null Ranking-Verbesserung. Bei SEO
              München hatten wir <strong>nach 4 Monaten messbar mehr Traffic</strong>. Der Unterschied: Hier wird
              nicht geredet, sondern gemacht.
            </blockquote>
            <figcaption className="quote-meta">
              <span className="avatar" aria-hidden="true">
                TB
              </span>
              <p className="who">
                <b>Thomas B.</b>, Geschäftsführer, IT-Dienstleister München
                <span>Projektstimme, Name gekürzt</span>
              </p>
            </figcaption>
          </figure>
          <article className="card lift case rv">
            <div className="case-tags">
              <span className="tag">Fallstudie 02</span>
              <span className="tag">Zahnarztpraxis</span>
            </div>
            <h3>Zahnarztpraxis in München-Schwabing</h3>
            <dl>
              <div>
                <dt>Ausgangslage</dt>
                <dd>
                  Die Praxis konnte vor der Zusammenarbeit nicht sagen, ob die eigene Website Patienten bringt.
                </dd>
              </div>
              <div>
                <dt>Fokus</dt>
                <dd>
                  Die lokale Sichtbarkeit der Praxis ausbauen und im monatlichen Reporting messbar machen, woher
                  Neupatienten tatsächlich kommen.
                </dd>
              </div>
              <div>
                <dt>Heute</dt>
                <dd>
                  Sichtbarkeit und Patientenanfragen sind im monatlichen Report nachvollziehbar. Wie sich das
                  anfühlt, sagt Dr. Michael R. nebenan am besten selbst.
                </dd>
              </div>
            </dl>
          </article>
        </div>
        <p className="sec-foot rv">
          Du willst wissen, was in deinem Markt möglich ist?{' '}
          <Link className="arrow-link" href="/kontakt">
            Im kostenlosen Erstgespräch zeigen wir dir dein SEO-Potenzial
          </Link>
        </p>
      </div>
    </section>
  )
}
