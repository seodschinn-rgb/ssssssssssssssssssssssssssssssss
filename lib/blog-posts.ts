/**
 * Blog-Posts – Metadaten und Zuordnung zu Kategorien
 */

import { keywordMappingAnleitungContent } from './blog-posts/keyword-mapping-anleitung-content'
import { schemaMarkupAnleitungContent } from './blog-posts/schema-markup-anleitung-content'

export interface BlogPostFAQ {
  question: string
  answer: string
}

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
  /** Optional: FAQs für FAQPage-Schema (Rich Snippets) */
  faqs?: BlogPostFAQ[]
}

const POSTS: BlogPost[] = [
  {
    slug: 'schema-markup-anleitung',
    title: 'Schema Markup Anleitung: Strukturierte Daten für bessere Google Rankings',
    metaTitle: 'Schema Markup Anleitung: Strukturierte Daten für bessere Google Rankings',
    metaDescription:
      'Umfassende Schema Markup Anleitung: Lernen Sie, wie Sie strukturierte Daten implementieren, testen und optimieren, um Rich Snippets zu erzielen und Ihre Google Rankings zu verbessern. Für Unternehmen in München & Bayern.',
    category: 'technisches-seo',
    content: schemaMarkupAnleitungContent,
    image: '/images/blog/schema%20markup%20anleitung%20(1).webp',
    imageAlt: 'Schema Markup Anleitung: Strukturierte Daten und JSON-LD für bessere Google Rankings',
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen strukturierten Daten und unstrukturierten Daten?',
        answer:
          'Strukturierte Daten folgen einem vordefinierten Datenmodell und sind leicht maschinenlesbar (z. B. Datenbanken, Tabellen, Schema Markup). Unstrukturierte Daten bestehen aus Rohdaten wie Textdokumenten, Bildern oder Videos – etwa 80 % der Unternehmensdaten.',
      },
      {
        question: 'Kann Schema Markup auch für Bilder und Videos verwendet werden?',
        answer:
          'Ja. Für Videos wird das VideoObject-Schema empfohlen (Titel, Beschreibung, Thumbnail-URL, Upload-Datum, Video-URL), um in Google-Videokarussells und als Rich Snippets zu erscheinen. ImageObject-Markup definiert Bilder präziser für Suchmaschinen.',
      },
      {
        question: 'Wie aktuell muss Schema Markup gehalten werden, um wirksam zu sein?',
        answer:
          'Die Aktualität ist entscheidend. Google nutzt strukturierte Daten für aktuelle Infos zu Preisen, Verfügbarkeit oder Bewertungen. Veraltete Daten können dazu führen, dass Rich Snippets nicht angezeigt werden. Schema Markup regelmäßig prüfen und bei Änderungen anpassen; dateModified für präzise Datumsangaben nutzen.',
      },
      {
        question: 'Verringert Schema Markup die Ladezeit meiner Website?',
        answer:
          'Nein. JSON-LD ist sehr leichtgewichtig und wird oft asynchron geladen, sodass es den Aufbau der Seite nicht blockiert. Schema Markup kann durch bessere Rich Snippets und höhere Klickrate indirekt zur SEO-Leistung beitragen.',
      },
      {
        question: 'Ist es möglich, Schema Markup manuell zu erstellen, oder brauche ich immer ein Tool?',
        answer:
          'Schema Markup lässt sich manuell erstellen, besonders mit JSON-LD – das bietet maximale Flexibilität für individuelle oder dynamische Strukturen. Tools wie der Merkle Generator oder Googles Markup-Hilfe sind effizienter und fehlerärmer, besonders für Einsteiger.',
      },
    ],
  },
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
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen Keyword Mapping und Keyword-Recherche?',
        answer: 'Die Keyword-Recherche ist der Prozess des Findens und Analysierens von Suchbegriffen, die Nutzer verwenden, um Informationen, Produkte oder Dienstleistungen zu finden. Hierbei werden Suchvolumen, Wettbewerb und die Suchintention ermittelt. Keyword Mapping hingegen ist der strategische Prozess, bei dem die gefundenen Keywords bestimmten Seiten Ihrer Website zugeordnet werden. Ziel ist es, eine klare Struktur zu schaffen, Keyword-Kannibalisierung zu vermeiden und sicherzustellen, dass jede Seite eine spezifische Suchintention bedient.',
      },
      {
        question: 'Kann ich Keyword Mapping auch ohne spezielle Tools durchführen?',
        answer: 'Grundsätzlich ist Keyword Mapping auch ohne kostenpflichtige Spezialtools möglich, insbesondere für kleinere Projekte. Man kann Tabellenkalkulationsprogramme wie Google Sheets oder Microsoft Excel nutzen, um Keywords zu organisieren und URLs zuzuordnen. Für die initiale Keyword-Recherche bieten kostenlose Optionen wie der Google Keyword Planner erste Anhaltspunkte. Allerdings wird der Prozess bei größeren Websites durch professionelle SEO-Tools wie SISTRIX oder Ahrefs erheblich effizienter und datengestützter.',
      },
      {
        question: 'Wie erkenne ich Keyword-Kannibalisierung durch falsches Mapping?',
        answer: 'Keyword-Kannibalisierung tritt auf, wenn mehrere Seiten Ihrer Website versuchen, für dasselbe oder ein sehr ähnliches Keyword zu ranken. Anzeichen dafür sind unter anderem der plötzliche Verlust von Rankings oder Traffic für ein bestimmtes Keyword, volatile Ranking-Positionen, bei denen unterschiedliche URLs erscheinen, oder wenn bei einer site:ihredomain.de "keyword"-Suche mehrere interne URLs angezeigt werden. Eine regelmäßige Überprüfung in der Google Search Console kann helfen, solche Konflikte frühzeitig zu identifizieren.',
      },
      {
        question: 'Wie oft sollte ich meine Keyword-Map überprüfen und anpassen?',
        answer: 'Die Häufigkeit hängt von der Dynamik Ihrer Branche, der Frequenz neuer Inhalte und Googles Algorithmus-Updates ab. Als Faustregel gilt: eine grundlegende Überprüfung mindestens ein- bis zweimal pro Jahr. Bei größeren Änderungen an der Website-Struktur, der Einführung neuer Produkte oder nach signifikanten Wettbewerbsentwicklungen sollte die Keyword-Map proaktiver angepasst werden.',
      },
      {
        question: 'Ist Keyword Mapping auch für kleinere Websites oder lokale Unternehmen relevant?',
        answer: 'Ja, absolut. Es hilft, die begrenzte Anzahl an Inhaltsseiten strategisch optimal zu nutzen, Keyword-Kannibalisierung zu vermeiden und sich auf die relevantesten Suchbegriffe zu konzentrieren. Insbesondere für lokale Unternehmen ermöglicht es die gezielte Ausrichtung auf regionale Suchanfragen wie „SEO Agentur München" oder „Friseur in Schwabing", um potenzielle Kunden in der Nähe effektiv zu erreichen. Eine klar definierte Keyword-Strategie ist unabhängig von der Größe der Website die Grundlage für nachhaltigen SEO-Erfolg.',
      },
    ],
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
