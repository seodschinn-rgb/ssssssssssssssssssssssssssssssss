import { jsonLdStringify } from '@/lib/safe-json-ld'
import { HOME_PAGE_FAQ_ITEMS } from '@/lib/home-page-faqs'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

/**
 * Ein einziges JSON-LD mit @graph für die Startseite.
 * FAQPage entspricht den sichtbaren FAQs auf der Startseite (Du-Form).
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
          'SEO Agentur München: datengetriebene Suchmaschinenoptimierung, Local SEO und messbare Rankings für KMU in Bayern.',
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
        mainEntity: HOME_PAGE_FAQ_ITEMS.map((faq) => ({
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
      dangerouslySetInnerHTML={{ __html: jsonLdStringify(schema) }}
    />
  )
}
