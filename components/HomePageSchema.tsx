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
        mainEntity: homepageFaqs.map((faq) => ({
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
