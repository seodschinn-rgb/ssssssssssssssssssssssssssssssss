const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

interface ArticleSchemaProps {
  headline: string
  description: string
  url: string
  image?: string
  imageAlt?: string
}

export default function ArticleSchema({
  headline,
  description,
  url,
  image,
  imageAlt,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image.startsWith('http') ? image : `${SITE_URL}${image}`,
        ...(imageAlt && { caption: imageAlt }),
      },
    }),
    publisher: {
      '@type': 'Organization',
      name: 'SEO Agentur München',
      url: SITE_URL,
    },
    author: {
      '@type': 'Organization',
      name: 'SEO Agentur München',
      url: SITE_URL,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
