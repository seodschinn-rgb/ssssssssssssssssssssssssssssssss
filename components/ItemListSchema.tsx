import { jsonLdStringify } from '@/lib/safe-json-ld'
import { LEISTUNGEN } from '@/lib/leistungen-data'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

interface Item {
  name: string
  url: string
  description: string
}

interface ItemListSchemaProps {
  name?: string
  description?: string
  items?: Item[]
}

const DEFAULT_ITEMS: Item[] = LEISTUNGEN.map(({ title, slug, shortDescription }) => ({
  name: title, url: `/leistungen/${slug}`, description: shortDescription,
}))

export default function ItemListSchema({
  name = 'SEO Leistungen',
  description = 'Unsere SEO-Leistungen für Unternehmen in München und Bayern.',
  items = DEFAULT_ITEMS,
}: ItemListSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: item.name,
        description: item.description,
        url: `${SITE_URL}${item.url}`,
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
