const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

const homepageFaqs = [
  {
    q: 'Was kostet eine SEO Agentur in München?',
    a: 'Die Kosten variieren je nach Umfang: von einer einmaligen SEO-Beratung bis zur monatlichen Full-Service-Betreuung. Wir bieten transparente Pakete – im kostenlosen Erstgespräch klären wir Ihren Bedarf und erstellen ein passendes Angebot.',
  },
  {
    q: 'Wie lange dauert es, bis SEO wirkt?',
    a: 'Erste Verbesserungen zeigen sich meist nach 3–6 Monaten. Nachhaltige Top-10-Rankings für wettbewerbsstarke Keywords benötigen oft 6–12 Monate. Wir setzen auf langfristige Strategien statt kurzfristiger Tricks.',
  },
  {
    q: 'Was ist der Unterschied zwischen SEO und SEA?',
    a: 'SEO (Suchmaschinenoptimierung) bringt organischen, unbezahlten Traffic. SEA sind bezahlte Anzeigen bei Google. SEO wirkt langfristig und kosteneffizient – Sie zahlen keinen Cent pro Klick.',
  },
  {
    q: 'Betreut ihr auch Unternehmen außerhalb von München?',
    a: 'Ja. Von München aus betreuen wir Kunden in ganz Bayern – Garching, Starnberg, Freising, Augsburg, Regensburg und viele weitere Städte. Beratung und Umsetzung erfolgen remote; Vor-Ort-Termine sind bei Bedarf möglich.',
  },
  {
    q: 'Brauche ich Local SEO oder klassisches SEO?',
    a: 'Das hängt von Ihrem Geschäftsmodell ab: Lokale Unternehmen (Handwerk, Gastronomie, Ärzte) profitieren stark von Local SEO und Google Business Profile. E-Commerce oder überregionale Dienstleister brauchen eher klassisches SEO mit Fokus auf Keywords und technische Optimierung.',
  },
]

/** FAQs aus der SEO-Artikel-Sektion (einmalig hier für Schema, keine zweite FAQPage). */
const seoArticleFaqs = [
  { q: 'Wo findet man das SEO-Büro einer Agentur in München?', a: 'Die physische Präsenz einer SEO-Agentur in München wird üblicherweise auf der offiziellen Website unter "Kontakt" oder im "Impressum" detailliert angegeben. Viele Agenturen bieten zudem flexible Arbeitsmodelle an, die sowohl persönliche Treffen vor Ort als auch digitale Besprechungen ermöglichen.' },
  { q: 'Gibt es Referenzen oder Fallstudien von SEO-Projekten in meiner Branche?', a: 'Ja, eine professionelle SEO-Agentur wie SEO München legt großen Wert auf Transparenz und den Nachweis ihrer Expertise. Wir präsentieren Ihnen gerne spezifische Referenzen und relevante Fallstudien aus Ihrer Branche, um Ihnen einen konkreten Einblick in unsere erfolgreichen Projekte und deren messbare Ergebnisse zu geben.' },
  { q: 'Wie transparent ist der gesamte Arbeitsprozess einer SEO-Agentur?', a: 'Transparenz ist das Fundament einer vertrauensvollen Zusammenarbeit. Der Prozess beginnt mit einer detaillierten Analyse und der Entwicklung einer maßgeschneiderten Strategie, gefolgt von der Implementierung und kontinuierlichen Optimierung. Regelmäßige Reportings und persönliche Ansprechpartner gewährleisten, dass Sie jederzeit über den Fortschritt informiert sind.' },
  { q: 'Welche SEO-Agentur ist die beste für mein Unternehmen in München?', a: 'Die "beste" SEO-Agentur in München ist jene, die Ihre spezifischen Geschäftsziele versteht, über nachweisliche Expertise im lokalen Markt verfügt und einen transparenten, ergebnisorientierten Ansatz verfolgt. Achten Sie auf eine Agentur, die nicht nur technische Optimierung bietet, sondern auch strategisch berät und langfristige Partnerschaften anstrebt.' },
  { q: 'Was sind die wichtigsten KPIs zur Messung des SEO-Erfolgs?', a: 'Um den Erfolg von SEO-Maßnahmen zu messen, sind mehrere Key Performance Indicators entscheidend: Organischer Traffic (Besucher über unbezahlte Suche), Keyword-Rankings (Positionen in den SERPs), Conversion-Rate (Anfragen & Käufe) und Core Web Vitals (Ladezeiten & UX).' },
  { q: 'Bietet SEO München auch individuelle Angebote außerhalb der Standardpakete an?', a: 'Absolut. Jedes Unternehmen und jede Branche hat einzigartige Anforderungen an die Suchmaschinenoptimierung. Daher entwickeln wir bei SEO München neben unseren bewährten Standardpaketen selbstverständlich auch maßgeschneiderte SEO-Strategien und individuelle Angebote, die exakt auf Ihre spezifischen Ziele und Ihr Budget zugeschnitten sind.' },
]

const allHomepageFaqs = [...homepageFaqs, ...seoArticleFaqs]

/**
 * Ein einziges JSON-LD mit @graph für die Startseite.
 * Verhindert Duplikate (z. B. FAQPage) und entspricht der Google-Empfehlung.
 */
export default function HomePageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: 'SEO Agentur München',
        description:
          'Professionelle Suchmaschinenoptimierung und Local SEO für Unternehmen in München und Bayern.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'München',
          addressRegion: 'Bayern',
          addressCountry: 'DE',
        },
        areaServed: [
          'München',
          'Garching',
          'Starnberg',
          'Freising',
          'Augsburg',
          'Bayern',
        ],
        serviceType: [
          'Suchmaschinenoptimierung',
          'SEO Beratung',
          'Local SEO',
          'Technisches SEO',
        ],
        url: SITE_URL,
      },
      {
        '@type': 'WebSite',
        name: 'SEO Agentur München',
        url: SITE_URL,
        description:
          'Professionelle SEO Agentur in München. Suchmaschinenoptimierung, Local SEO und SEO Beratung für Unternehmen in Bayern.',
        inLanguage: 'de-DE',
        publisher: {
          '@type': 'Organization',
          name: 'SEO Agentur München',
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/logo.png`,
          },
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/standorte?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: allHomepageFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
