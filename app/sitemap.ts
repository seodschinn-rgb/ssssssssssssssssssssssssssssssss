import type { MetadataRoute } from 'next'
import { LEISTUNGEN } from '@/lib/leistungen-data'
import { CITIES } from '@/lib/seo-data'
import { getAllPosts } from '@/lib/blog-posts'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

/**
 * Sitemap – strukturiert nach Bereichen (für Menschen lesbar, für Suchmaschinen neutral).
 * Die Reihenfolge der URLs hat keinen Einfluss auf das Crawling oder Ranking.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // 1. Statische Hauptseiten
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

  // 2. Leistungsseiten (aus leistungen-data.ts)
  const leistungenPages: MetadataRoute.Sitemap = LEISTUNGEN.map((l) => ({
    url: `${BASE_URL}/leistungen/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // 3. Standortseiten (aus seo-data.ts)
  const standortePages: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${BASE_URL}/standorte/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // 4. Blog-Artikel (aus blog-posts.ts), alphabetisch nach Slug für stabile Reihenfolge
  const blogPages: MetadataRoute.Sitemap = getAllPosts()
    .slice()
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

  return [...staticPages, ...leistungenPages, ...standortePages, ...blogPages]
}
