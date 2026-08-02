import { KFZ_META_DESCRIPTION, KFZ_V2_FAQS } from '@/lib/branchen/kfz-v2'
import { SITE_ORIGIN } from '@/lib/canonical'
import { jsonLdStringify } from '@/lib/safe-json-ld'

const PAGE_URL = `${SITE_ORIGIN}/branchen/kfz-werkstatt`

export default function KfzSchema() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Start', item: SITE_ORIGIN },
          { '@type': 'ListItem', position: 2, name: 'Branchen', item: `${SITE_ORIGIN}/branchen` },
          { '@type': 'ListItem', position: 3, name: 'KFZ-Werkstätten', item: PAGE_URL },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${PAGE_URL}#service`,
        name: 'SEO für KFZ-Werkstätten in München',
        serviceType: 'Suchmaschinenoptimierung',
        description: KFZ_META_DESCRIPTION,
        url: PAGE_URL,
        provider: {
          '@type': 'Organization',
          name: 'SEO München',
          url: SITE_ORIGIN,
        },
        areaServed: { '@type': 'City', name: 'München' },
        audience: { '@type': 'Audience', audienceType: 'Freie KFZ-Werkstätten und Autohäuser' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: KFZ_V2_FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(graph) }} />
  )
}
