import { jsonLdStringify } from '@/lib/safe-json-ld'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

const OFFERS = [
  {
    name: 'Starter',
    description: 'Für lokale Unternehmen und Startups in München',
    price: '990',
  },
  {
    name: 'Growth',
    description: 'Für wachsende KMU, die planbar Anfragen gewinnen wollen',
    price: '1590',
  },
  {
    name: 'Business',
    description: 'Für etablierte Mittelständler mit klaren Umsatzzielen',
    price: '2390',
  },
  {
    name: 'Professional',
    description: 'Für ambitionierte Unternehmen in umkämpften Märkten',
    price: '2590',
  },
  {
    name: 'Enterprise',
    description: 'Für Großunternehmen und komplexe Projekte',
    price: '2990',
  },
] as const

export default function PreiseServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/preise#service`,
        name: 'Suchmaschinenoptimierung',
        serviceType: 'Suchmaschinenoptimierung (SEO)',
        description:
          'Monatliche SEO-Betreuung für Unternehmen in München und Bayern: fünf transparente SEO-Pakete von 990 bis 2.990 EUR pro Monat, mit festem Ansprechpartner und monatlichem Reporting.',
        url: `${SITE_URL}/preise`,
        provider: {
          '@type': 'Organization',
          name: 'SEO München',
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/logo.png`,
          },
        },
        areaServed: [
          { '@type': 'City', name: 'München' },
          { '@type': 'State', name: 'Bayern' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'SEO-Pakete',
          itemListElement: OFFERS.map((offer) => ({
            '@type': 'Offer',
            name: offer.name,
            description: offer.description,
            url: `${SITE_URL}/preise`,
            price: offer.price,
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: offer.price,
              priceCurrency: 'EUR',
              unitCode: 'MON',
              unitText: 'Monat',
            },
          })),
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdStringify(schema) }}
    />
  )
}
