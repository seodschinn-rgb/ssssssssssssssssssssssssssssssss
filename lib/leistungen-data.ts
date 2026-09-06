import { SERVICE_PAGES } from './service-pages'

/**
 * Zentrale Daten für SEO-Leistungen – Basis für Übersichts- und Detailseiten
 */

export interface LeistungContent {
  title: string
  metaDescription: string
  shortDescription: string
  heroSubline: string
  /** Optional: Hero-Bild (z. B. /images/blog/…-thumbnail.webp), stabil ohne CLS */
  heroImage?: string
  heroImageAlt?: string
  intro: string
  benefits: { title: string; text: string }[]
  process: { step: number; title: string; description: string }[]
  ctaHeadline: string
  ctaText: string
}

export interface Leistung {
  slug: string
  title: string
  shortDescription: string
  icon: 'search' | 'map' | 'cog' | 'chart' | 'link' | 'document' | 'audit'
  color: 'blue' | 'emerald' | 'violet' | 'amber' | 'rose' | 'cyan' | 'indigo'
}

export const LEISTUNGEN: Leistung[] = [
  {
    slug: 'seo-audit',
    title: 'SEO-Audit',
    shortDescription:
      'Technik, Inhalte und Suchdaten prüfen. Du erhältst priorisierte Aufgaben mit betroffenen Seiten, Begründung und Zuständigkeit.',
    icon: 'audit',
    color: 'indigo',
  },
  {
    slug: 'keyword-recherche',
    title: 'Keyword-Recherche',
    shortDescription:
      'Suchanfragen nach Nachfrage, Suchintention und Angebotsnähe bewerten und passenden bestehenden oder geplanten Seiten zuordnen.',
    icon: 'search',
    color: 'blue',
  },
  {
    slug: 'local-seo',
    title: 'Local SEO',
    shortDescription:
      'Lokale Leistungsseiten, Unternehmensdaten und berechtigte Google-Unternehmensprofile auf dein tatsächliches Einzugsgebiet abstimmen.',
    icon: 'map',
    color: 'emerald',
  },
  {
    slug: 'technisches-seo',
    title: 'Technisches SEO',
    shortDescription:
      'Crawling, Indexierung, Rendering und Core Web Vitals untersuchen. Fehler gezielt beheben und die Umsetzung kontrollieren.',
    icon: 'cog',
    color: 'violet',
  },
  {
    slug: 'reporting-kpis',
    title: 'Reporting & KPIs',
    shortDescription: 'Suchleistung, Anfragen und Messlücken auseinanderhalten. Verständliche Berichte mit konkreten nächsten Schritten.',
    icon: 'chart',
    color: 'amber',
  },
  {
    slug: 'linkaufbau',
    title: 'Linkaufbau',
    shortDescription: 'Linkprofil und relevante Themen prüfen, passende redaktionelle Kontakte finden und individuelle Ansprache vorbereiten.',
    icon: 'link',
    color: 'rose',
  },
  {
    slug: 'onpage-optimierung',
    title: 'OnPage-Optimierung',
    shortDescription: 'Inhalte, Metadaten und interne Links gezielt verbessern – passend zur Suchintention und Aufgabe jeder einzelnen Seite.',
    icon: 'document',
    color: 'cyan',
  },
  {
    slug: 'geo-agentur',
    title: 'GEO Agentur',
    shortDescription:
      'Markendarstellung und Quellen in KI-Antworten dokumentieren. Inhalte verbessern und Veränderungen mit ihren Grenzen messen.',
    icon: 'search',
    color: 'violet',
  },
]

/** Compatibility view for navigation and service overview; detail copy has one source. */
export const LEISTUNGEN_CONTENT: Record<string, LeistungContent> = Object.fromEntries(
  LEISTUNGEN.flatMap(service => {
    const page = SERVICE_PAGES[service.slug]
    if (!page) return []
    return [[service.slug, {
      title: service.title,
      metaDescription: page.description,
      shortDescription: service.shortDescription,
      heroSubline: page.eyebrow,
      intro: page.intro,
      benefits: page.deliverables,
      process: page.process.map((step, index) => ({ step: index + 1, title: step.title, description: step.text })),
      ctaHeadline: `${service.title}: Lass uns dein Vorhaben besprechen.`,
      ctaText: `${service.title} anfragen`,
    }]]
  })
)

export function getLeistungBySlug(slug: string): Leistung | undefined {
  return LEISTUNGEN.find(l => l.slug === slug)
}

export function getLeistungContent(slug: string): LeistungContent | undefined {
  return LEISTUNGEN_CONTENT[slug]
}

export function getAllLeistungSlugs(): string[] {
  return LEISTUNGEN.map(l => l.slug)
}
