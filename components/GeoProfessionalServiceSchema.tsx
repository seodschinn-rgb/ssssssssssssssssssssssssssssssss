import { jsonLdStringify } from '@/lib/safe-json-ld'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

/** JSON-LD ProfessionalService + OfferCatalog für die GEO-Leistungsseite */
export default function GeoProfessionalServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'SEO München — GEO Agentur',
    description:
      'Generative Engine Optimization (GEO) Agentur in München. Wir optimieren deine Sichtbarkeit in ChatGPT, Google AI Overviews, Perplexity und weiteren KI-Suchsystemen.',
    url: `${SITE_URL}/leistungen/geo-agentur`,
    areaServed: {
      '@type': 'City',
      name: 'München',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GEO Leistungen',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GEO Audit & AI-Visibility-Analyse' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content-Optimierung für KI-Zitation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Entity & Knowledge-Graph-Optimierung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technisches GEO' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Authority & Trust Building' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-Visibility-Monitoring & Reporting' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdStringify(schema) }}
    />
  )
}
