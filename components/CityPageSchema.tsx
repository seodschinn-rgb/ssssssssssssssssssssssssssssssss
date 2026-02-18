const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'
import { getCityFAQs } from '@/lib/faq-data'

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
        name: `SEO Agentur ${cityName}`,
        description: businessDescription,
        address: {
          '@type': 'PostalAddress',
          addressLocality: cityName,
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
