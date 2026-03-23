import { jsonLdStringify } from '@/lib/safe-json-ld'
import type { BrancheFaq } from '@/lib/branchen'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

interface Props {
  path: string
  pageTitle: string
  name: string
  metaDescription: string
  faqs: BrancheFaq[]
}

export default function BrancheSeoSchema({ path, pageTitle, name, metaDescription, faqs }: Props) {
  const url = `${SITE_URL}${path}`

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Branchen', item: `${SITE_URL}/branchen` },
      { '@type': 'ListItem', position: 3, name: pageTitle, item: url },
    ],
  }

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const service = {
    '@type': 'Service',
    name: `SEO für ${name} in München`,
    serviceType: 'Suchmaschinenoptimierung',
    description: metaDescription,
    provider: {
      '@type': 'Organization',
      name: 'SEO München',
      url: SITE_URL,
    },
    areaServed: { '@type': 'City', name: 'München' },
    url,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLdStringify({
          '@context': 'https://schema.org',
          '@graph': [breadcrumb, faqSchema, service],
        }),
      }}
    />
  )
}
