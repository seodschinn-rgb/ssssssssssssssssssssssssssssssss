import type { MetadataRoute } from 'next'
import { LEISTUNGEN } from '@/lib/leistungen-data'
import { CITIES } from '@/lib/seo-data'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/leistungen`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/standorte`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/agb`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const leistungenPages: MetadataRoute.Sitemap = LEISTUNGEN.map((l) => ({
    url: `${BASE_URL}/leistungen/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const standortePages: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${BASE_URL}/standorte/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...leistungenPages, ...standortePages]
}
