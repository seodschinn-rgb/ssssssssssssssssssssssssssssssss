/**
 * Blog-Kategorien für die SEO-Agentur – Unterkategorien der Blog-Übersicht
 */

export interface BlogCategory {
  slug: string
  title: string
  shortDescription: string
  icon: string
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: 'seo-grundlagen',
    title: 'SEO Grundlagen',
    shortDescription: 'Einstieg in Suchmaschinenoptimierung, Begriffe und erste Schritte.',
    icon: 'search',
  },
  {
    slug: 'local-seo',
    title: 'Local SEO & Google Business',
    shortDescription: 'Sichtbarkeit vor Ort, Google Business Profile und lokale Rankings.',
    icon: 'map',
  },
  {
    slug: 'technisches-seo',
    title: 'Technisches SEO',
    shortDescription: 'Core Web Vitals, Indexierung, Ladezeiten und technische Optimierung.',
    icon: 'cog',
  },
  {
    slug: 'content-keywords',
    title: 'Content & Keywords',
    shortDescription: 'Keyword-Recherche, OnPage-Optimierung und Content-Strategie.',
    icon: 'document',
  },
  {
    slug: 'linkaufbau',
    title: 'Linkaufbau & OffPage',
    shortDescription: 'Backlinks, Autorität und nachhaltiger Linkaufbau.',
    icon: 'link',
  },
  {
    slug: 'branchen-praxis',
    title: 'Branchen & Praxis',
    shortDescription: 'SEO für Handwerk, Gastronomie, Ärzte und andere Branchen.',
    icon: 'chart',
  },
  {
    slug: 'muenchen-bayern',
    title: 'München & Bayern',
    shortDescription: 'Regionaler Fokus: SEO für Unternehmen in München und Bayern.',
    icon: 'map',
  },
  {
    slug: 'tipps-tools',
    title: 'Tipps & Tools',
    shortDescription: 'Praktische Tipps, Tools und Best Practices für den Alltag.',
    icon: 'cog',
  },
]

export function getBlogCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug)
}

export function getAllBlogCategorySlugs(): string[] {
  return BLOG_CATEGORIES.map((c) => c.slug)
}
