import { jsonLdStringify } from '@/lib/safe-json-ld'
import { getCityFAQs } from '@/lib/faq-data'
import { BUSINESS_ADDRESS } from '@/lib/business-identity'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

interface BreadcrumbItem {
  name: string
  url: string
}

interface CityPageSchemaProps {
  cityName: string
  breadcrumbItems: BreadcrumbItem[]
  businessDescription: string
}

/**
 * Ein einziges JSON-LD mit @graph für die Standort-Seite.
 * Verhindert "Duplicate field FAQPage" in der Search Console, da nur ein FAQPage-Block ausgegeben wird.
 */
export default function CityPageSchema({
  cityName,
  breadcrumbItems,
  businessDescription,
}: CityPageSchemaProps) {
  const faqs = getCityFAQs(cityName)

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
        })),
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#organization`,
        name: 'SEO München',
        description: businessDescription,
        address: BUSINESS_ADDRESS,
        areaServed: [
          cityName,
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
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
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
