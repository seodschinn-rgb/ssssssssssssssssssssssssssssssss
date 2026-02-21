/**
 * Blog-Posts – Metadaten und Zuordnung zu Kategorien
 */

import { keywordMappingAnleitungContent } from './blog-posts/keyword-mapping-anleitung-content'

export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  content: string
  /** Optional: Pfad zum Thumbnail (z. B. /images/blog/slug.png) */
  image?: string
  /** Alt-Text für das Thumbnail (für Barrierefreiheit & SEO) */
  imageAlt?: string
}

const POSTS: BlogPost[] = [
  {
    slug: 'keyword-mapping-anleitung',
    title: 'Keyword Mapping Anleitung: In 5 Schritten zur optimalen SEO-Strategie',
    metaTitle: 'Keyword Mapping Anleitung: In 5 Schritten zur perfekten SEO-Strategie',
    metaDescription:
      'Erfahren Sie in dieser umfassenden Keyword Mapping Anleitung, wie Sie Ihre Suchbegriffe strategisch organisieren, Duplicate Content vermeiden und Ihre Google Rankings deutlich verbessern.',
    category: 'content-keywords',
    content: keywordMappingAnleitungContent,
    image: '/images/blog/keyword%20mapping%20anleitung%20(1).webp',
    imageAlt: 'Keyword Mapping Anleitung: Suchbegriffe strategisch organisieren für bessere SEO-Ergebnisse',
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug)
}

export function getAllBlogPostSlugs(): string[] {
  return POSTS.map((p) => p.slug)
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return POSTS.filter((p) => p.category === categorySlug)
}

export function getAllPosts(): BlogPost[] {
  return [...POSTS]
}
