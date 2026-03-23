import Link from 'next/link'
import { BRANCHE_PAGES, BRANCHEN_HUB_FAQS } from '@/lib/branchen'
import { jsonLdStringify } from '@/lib/safe-json-ld'
import '@/components/branchen/branchen-hub.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

export default function BranchenHubContent() {
  const faqMainEntity = BRANCHEN_HUB_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  }))

  const breadcrumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Start', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Branchen', item: `${SITE_URL}/branchen` },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdStringify({
            '@context': 'https://schema.org',
            '@graph': [
              { '@type': 'BreadcrumbList', itemListElement: breadcrumbItems },
              { '@type': 'FAQPage', mainEntity: faqMainEntity },
            ],
          }),
        }}
      />

      <div className="branchen-hub">
        <h1>SEO für jede Branche in München — Mehr Kunden über Google</h1>

        <div className="intro">
          <p>
            Jede Branche hat eigene Spielregeln bei Google. Der Zahnarzt konkurriert mit anderen Suchbegriffen als
            der Immobilienmakler, und ein Handwerker braucht eine andere{' '}
            <Link href="/leistungen/local-seo">Local-SEO-Strategie</Link> als ein Restaurant. Genau deshalb setzen wir
            auf branchenspezifische Suchmaschinenoptimierung mit klarem München-Fokus.
          </p>
          <p>
            Über 46 Prozent aller Google-Suchen haben eine lokale Absicht. Wenn jemand in München nach deiner
            Dienstleistung sucht, muss dein Unternehmen sofort sichtbar sein — in den organischen Ergebnissen, im
            Local Pack und zunehmend auch in KI-generierten Antworten. Unsere{' '}
            <Link href="/leistungen">SEO-Leistungen</Link> sind auf die spezifischen Keywords, die
            Wettbewerbssituation und das Suchverhalten in deiner Branche abgestimmt. Das Ergebnis: qualifizierte
            Anfragen statt zufälliger Klicks.
          </p>
        </div>

        <div className="branchen-grid">
          {BRANCHE_PAGES.map((b) => (
            <Link key={b.slug} href={`/branchen/${b.slug}`} className="branchen-card">
              <span className="card-icon" aria-hidden>
                {b.hubEmoji}
              </span>
              <div className="card-title">{b.hubTitle}</div>
              <div className="card-desc">{b.hubDescription}</div>
              <span className="card-link">SEO für {b.name} entdecken</span>
            </Link>
          ))}
        </div>

        <h2>Warum branchenspezifisches SEO?</h2>

        <p>
          Allgemeines SEO reicht in den meisten Fällen nicht aus, um in umkämpften lokalen Märkten sichtbar zu werden.
          Jede Branche hat eigene Keywords, eigenes Suchverhalten und eigene Wettbewerbslandschaften. Ein
          Zahnarzt-Patient sucht anders als jemand, der einen Anwalt für Mietrecht braucht. Und ein Restaurant in
          Schwabing konkurriert mit völlig anderen Suchergebnissen als eine Handwerker-Firma in Sendling.
        </p>

        <p>
          Die Zahlen sprechen eine klare Sprache: Laut Google-Daten enden 76 Prozent aller lokalen Smartphone-Suchen
          innerhalb von 24 Stunden mit einem Besuch vor Ort. In München, einer Stadt mit hoher Smartphone-Nutzung und
          starkem Wettbewerb, entscheiden die ersten drei organischen Positionen und das Local Pack darüber, wer den
          Kunden bekommt und wer leer ausgeht.
        </p>

        <p>
          Branchenspezifisches SEO berücksichtigt genau diese Unterschiede. Wir analysieren, welche Suchbegriffe in
          deiner Branche das höchste Conversion-Potenzial haben, wie die SERP-Landschaft aussieht und welche
          Content-Formate Google für dein Themengebiet bevorzugt. Das bedeutet: statt generischer Optimierung bekommst
          du eine Strategie, die exakt auf die Suchintentionen deiner potenziellen Kunden zugeschnitten ist.
        </p>

        <p>
          Zusätzlich verändern KI-Suchergebnisse (AI Overviews, Chatbot-Antworten) die Spielregeln. In manchen Branchen
          wie Gesundheit oder Recht gelten besonders strenge{' '}
          <Link href="/blog">E-E-A-T-Anforderungen</Link>, die branchenspezifisches Know-how in der SEO-Strategie
          zwingend erfordern.
        </p>

        <h2>Unser Ansatz: Datengetrieben &amp; lokal</h2>

        <p>
          Bei SEO München verfolgen wir einen datengetriebenen Ansatz, der sich in drei Schritten zusammenfassen lässt:
          Analyse, Strategie, Umsetzung. Zunächst analysieren wir deine aktuelle Sichtbarkeit, die Keywords deiner
          Branche und die Strategien deiner lokalen Wettbewerber. Auf dieser Basis entwickeln wir eine individuelle
          SEO-Strategie — kein Standard-Paket, sondern maßgeschneidert für deine Branche und dein Einzugsgebiet.
        </p>

        <p>
          Was uns von anderen SEO-Agenturen unterscheidet: Wir kennen den Münchner Markt. Wir wissen, wie die lokale
          Wettbewerbssituation in einzelnen Stadtteilen aussieht und welche Branchen in welchen Bezirken besonders
          umkämpft sind. Dieses lokale Wissen fließt direkt in die Keyword-Recherche, die Content-Strategie und die{' '}
          <Link href="/leistungen/local-seo">Local-SEO-Optimierung</Link> ein.
        </p>

        <p>
          Darüber hinaus integrieren wir GEO (Generative Engine Optimization) in unsere Strategie. KI-Suchsysteme wie
          Google AI Overviews und ChatGPT-Search gewinnen an Bedeutung. Wir stellen sicher, dass dein Unternehmen
          nicht nur in klassischen Suchergebnissen, sondern auch in KI-generierten Antworten sichtbar bleibt. Das ist
          besonders relevant für Branchen mit hohem Informationsbedarf wie Gesundheit, Recht und Finanzen.
        </p>

        <p>
          Jede Maßnahme messen wir mit klaren KPIs: Rankings, organischer Traffic, Anfragen und Conversions. Du
          bekommst regelmäßige Reports, die zeigen, was funktioniert und wo wir nachjustieren. Transparenz und
          messbare Ergebnisse — darauf kannst du dich verlassen. Mehr zu unseren{' '}
          <Link href="/preise">Paketen und Preisen</Link> findest du auf der Preisseite.
        </p>

        <div className="faq-section">
          <h2 id="faq">Häufig gestellte Fragen</h2>

          {BRANCHEN_HUB_FAQS.map((f, index) => (
            <div key={f.q} className="faq-item">
              <div className="faq-q">{f.q}</div>
              <div className="faq-a">
                {index === 2 ? (
                  <p>
                    Die Kosten richten sich nach Branche und Wettbewerbssituation. Für lokale Dienstleister wie Ärzte,
                    Anwälte oder Handwerker starten unsere Pakete bei 990 EUR pro Monat (Starter). Branchen mit
                    stärkerem Online-Wettbewerb wie Immobilien oder Hotels benötigen in der Regel ein höheres Budget.
                    In einem <Link href="/kontakt">kostenlosen Erstgespräch</Link> analysieren wir deine Situation und
                    geben dir eine konkrete Einschätzung.
                  </p>
                ) : (
                  <p>{f.a}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h2>Bereit für mehr Sichtbarkeit in deiner Branche?</h2>
          <p>
            Wir analysieren deine aktuelle Google-Sichtbarkeit und zeigen dir, welches Potenzial in deiner Branche
            steckt. Kostenlos und ohne Bindung.
          </p>
          <Link href="/kontakt" className="cta-btn">
            Kostenloses Erstgespräch vereinbaren
          </Link>
        </div>

        <p
          style={{
            color: 'var(--text-light)',
            fontSize: '0.9rem',
            textAlign: 'center',
            marginTop: 16,
          }}
        >
          Innerhalb von 24 Stunden melden wir uns bei dir. Alternativ erreichst du uns direkt per Telefon oder E-Mail.
        </p>
      </div>
    </>
  )
}
