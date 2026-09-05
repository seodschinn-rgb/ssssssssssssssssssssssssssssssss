import { jsonLdStringify } from '@/lib/safe-json-ld'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

interface ArticleSchemaProps {
  headline: string
  description: string
  url: string
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  schemaType?: 'Article' | 'BlogPosting'
  publishedAt?: string
  updatedAt?: string
}

export default function ArticleSchema({
  headline,
  description,
  url,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  schemaType = 'Article',
  publishedAt,
  updatedAt,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    headline,
    description,
    url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
    ...(schemaType === 'BlogPosting' && {
      mainEntityOfPage: { '@type': 'WebPage', '@id': url.startsWith('http') ? url : `${SITE_URL}${url}` },
      inLanguage: 'de-DE',
    }),
    ...(publishedAt && { datePublished: publishedAt }),
    ...(updatedAt && { dateModified: updatedAt }),
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image.startsWith('http') ? image : `${SITE_URL}${image}`,
        ...(imageAlt && { caption: imageAlt }),
        ...(imageWidth && imageHeight && { width: imageWidth, height: imageHeight }),
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
      dangerouslySetInnerHTML={{ __html: jsonLdStringify(schema) }}
    />
  )
}
