import { BRANCHEN_HUB_CARDS, BRANCHEN_HUB_V2_FAQS } from '@/lib/branchen/hub-v2'
import { SITE_ORIGIN } from '@/lib/canonical'
import { jsonLdStringify } from '@/lib/safe-json-ld'

const PAGE_URL = `${SITE_ORIGIN}/branchen`
const TITLE = 'Branchen-SEO München: SEO für Ärzte, Handwerk & Kanzleien'
const DESCRIPTION =
  'Branchenspezifisches SEO in München: eigene Strategien für Ärzte, Handwerker, Kanzleien und 7 weitere Branchen. Transparente Preise, kostenlose Beratung.'

export default function BranchenHubSchema() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Start', item: SITE_ORIGIN },
          { '@type': 'ListItem', position: 2, name: 'Branchen', item: PAGE_URL },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': PAGE_URL,
        url: PAGE_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: 'de',
        isPartOf: { '@type': 'WebSite', name: 'SEO München', url: SITE_ORIGIN },
        breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
        mainEntity: {
          '@type': 'ItemList',
          itemListOrder: 'https://schema.org/ItemListOrderAscending',
          numberOfItems: BRANCHEN_HUB_CARDS.length,
          itemListElement: BRANCHEN_HUB_CARDS.map((card, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: card.schemaName,
            url: `${SITE_ORIGIN}/branchen/${card.slug}`,
          })),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: BRANCHEN_HUB_V2_FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdStringify(graph) }}
    />
  )
}
