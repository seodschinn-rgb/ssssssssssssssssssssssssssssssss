export interface BrancheMassnahme {
  title: string
  body: string
}

export interface BrancheFaq {
  q: string
  a: string
}

export interface BranchePageData {
  slug: string
  /** Kurzname, z. B. „Ärzte“ */
  name: string
  /** Für Hub-Karte */
  hubTitle: string
  hubDescription: string
  hubEmoji: string
  metaTitle: string
  metaDescription: string
  /** Optional: für Meta keywords / SEO-Tools (z. B. Fokus-Keyword) */
  focusKeyword?: string
  h1: string
  /** CTA: Patienten, Kunden, Mandanten … */
  ctaNoun: string
  warumParagraphs: string[]
  statistik: string
  ohneSeoParagraph: string
  massnahmen: BrancheMassnahme[]
  fehler: string[]
  fallstudieTitle: string
  fallstudieParagraphs: string[]
  kostenParagraphs: string[]
  faqs: BrancheFaq[]
  /** Slugs für Cross-Links */
  relatedSlugs: string[]
}

export interface BrancheHubCard {
  slug: string
  title: string
  description: string
  emoji: string
}
