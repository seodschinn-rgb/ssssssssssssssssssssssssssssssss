import { jsonLdStringify } from '@/lib/safe-json-ld'
import { PREISE_PACKAGES } from '@/lib/preise-data'
import { BUSINESS_ADDRESS, BUSINESS_SERVICE_AREAS } from '@/lib/business-identity'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

export default function PreiseServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [{
      '@type': 'Service',
      '@id': `${SITE_URL}/preise#service`,
      name: 'Suchmaschinenoptimierung',
      serviceType: 'Suchmaschinenoptimierung (SEO)',
      description: 'Monatliche SEO-Betreuung für Unternehmen in München und Bayern: fünf SEO-Pakete von 990 bis 2.990 EUR pro Monat, mit festem Ansprechpartner und monatlichem Reporting.',
      url: `${SITE_URL}/preise`,
      provider: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'SEO München',
        url: SITE_URL,
        address: BUSINESS_ADDRESS,
      },
      areaServed: BUSINESS_SERVICE_AREAS,
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'SEO-Pakete',
        itemListElement: PREISE_PACKAGES.map(plan => ({
          '@type': 'Offer',
          name: plan.name,
          description: plan.target,
          url: `${SITE_URL}/preise#paket-${plan.id}`,
          price: String(plan.price),
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: String(plan.price),
            priceCurrency: 'EUR',
            unitCode: 'MON',
            unitText: 'Monat',
          },
        })),
      },
    }],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(schema) }} />
}
