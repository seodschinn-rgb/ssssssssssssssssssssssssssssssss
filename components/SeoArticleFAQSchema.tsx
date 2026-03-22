import { jsonLdStringify } from '@/lib/safe-json-ld'

/**
 * FAQ-Schema für die „Häufig gestellte Fragen“-Sektion im SEO-Artikel auf der Startseite.
 */
const faqs = [
  {
    name: 'Wo findet man das SEO-Büro einer Agentur in München?',
    text: 'Die physische Präsenz einer SEO-Agentur in München wird üblicherweise auf der offiziellen Website unter "Kontakt" oder im "Impressum" detailliert angegeben. Viele Agenturen bieten zudem flexible Arbeitsmodelle an, die sowohl persönliche Treffen vor Ort als auch digitale Besprechungen ermöglichen.',
  },
  {
    name: 'Gibt es Referenzen oder Fallstudien von SEO-Projekten in meiner Branche?',
    text: 'Ja, eine professionelle SEO-Agentur wie SEO München legt großen Wert auf Transparenz und den Nachweis ihrer Expertise. Wir präsentieren Ihnen gerne spezifische Referenzen und relevante Fallstudien aus Ihrer Branche, um Ihnen einen konkreten Einblick in unsere erfolgreichen Projekte und deren messbare Ergebnisse zu geben.',
  },
  {
    name: 'Wie transparent ist der gesamte Arbeitsprozess einer SEO-Agentur?',
    text: 'Transparenz ist das Fundament einer vertrauensvollen Zusammenarbeit. Der Prozess beginnt mit einer detaillierten Analyse und der Entwicklung einer maßgeschneiderten Strategie, gefolgt von der Implementierung und kontinuierlichen Optimierung. Regelmäßige Reportings und persönliche Ansprechpartner gewährleisten, dass Sie jederzeit über den Fortschritt informiert sind.',
  },
  {
    name: 'Welche SEO-Agentur ist die beste für mein Unternehmen in München?',
    text: 'Die "beste" SEO-Agentur in München ist jene, die Ihre spezifischen Geschäftsziele versteht, über nachweisliche Expertise im lokalen Markt verfügt und einen transparenten, ergebnisorientierten Ansatz verfolgt. Achten Sie auf eine Agentur, die nicht nur technische Optimierung bietet, sondern auch strategisch berät und langfristige Partnerschaften anstrebt.',
  },
  {
    name: 'Was sind die wichtigsten KPIs zur Messung des SEO-Erfolgs?',
    text: 'Um den Erfolg von SEO-Maßnahmen zu messen, sind mehrere Key Performance Indicators entscheidend: Organischer Traffic (Besucher über unbezahlte Suche), Keyword-Rankings (Positionen in den SERPs), Conversion-Rate (Anfragen & Käufe) und Core Web Vitals (Ladezeiten & UX).',
  },
  {
    name: 'Bietet SEO München auch individuelle Angebote außerhalb der Standardpakete an?',
    text: 'Absolut. Jedes Unternehmen und jede Branche hat einzigartige Anforderungen an die Suchmaschinenoptimierung. Daher entwickeln wir bei SEO München neben unseren bewährten Standardpaketen selbstverständlich auch maßgeschneiderte SEO-Strategien und individuelle Angebote, die exakt auf Ihre spezifischen Ziele und Ihr Budget zugeschnitten sind.',
  },
]

export default function SeoArticleFAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.name,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.text,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdStringify(schema) }}
    />
  )
}
