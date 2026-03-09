/**
 * Blog-Posts – Metadaten und Zuordnung zu Kategorien
 */

import { keywordMappingAnleitungContent } from './blog-posts/keyword-mapping-anleitung-content'
import { schemaMarkupAnleitungContent } from './blog-posts/schema-markup-anleitung-content'
import { interneVerlinkungAnleitungContent } from './blog-posts/interne-verlinkung-anleitung-content'
import { onpageSeoChecklisteContent } from './blog-posts/onpage-seo-checkliste-content'
import { keywordRechercheAnleitungContent } from './blog-posts/keyword-recherche-anleitung-content'

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
    slug: 'keyword-recherche-anleitung',
    title: 'Keyword-Recherche Anleitung: Strategien für Top-Rankings und regionale Sichtbarkeit',
    metaTitle: 'Keyword-Recherche Anleitung: Schritt für Schritt zum richtigen Suchbegriff',
    metaDescription:
      'Keyword-Recherche Anleitung: Lerne Schritt für Schritt, wie du die richtigen Keywords findest, Tools nutzt & deine Google-Rankings in München nachhaltig steigerst.',
    category: 'content-keywords',
    content: keywordRechercheAnleitungContent,
    image: '/images/blog/keyword%20recherche%20anleitung%20(1).webp',
    imageAlt: 'Keyword-Recherche Anleitung: Schritt für Schritt zum richtigen Suchbegriff für bessere Google-Rankings in München',
    faqs: [
      {
        question: 'Wie lange dauert eine professionelle Keyword-Recherche?',
        answer:
          'Die Dauer hängt stark vom Umfang ab: kleine Projekte oft Tage bis eine Woche, mittelgroße Websites mehrere Wochen, internationale Projekte mehrere Monate. Entscheidend ist, ausreichend Zeit für eine gründliche Analyse einzuplanen.',
      },
      {
        question: 'Was kostet eine Keyword-Recherche von einer Agentur?',
        answer:
          'Die Kosten variieren je nach Projektumfang: kleine Projekte ca. 599 €–800 €, Stundensätze typisch 90 €–200 €, monatliche SEO-Betreuung oft 1.000 €–5.000 €. Wettbewerbsintensität und Detailtiefe beeinflussen den Preis.',
      },
      {
        question: 'Wie oft sollte eine Keyword-Map aktualisiert werden?',
        answer:
          'Mindestens einmal jährlich eine umfassende Überprüfung. Zusätzlich bei Google-Updates, Änderungen im Suchverhalten, neuen Produkten oder Märkten sowie Verschiebungen im Wettbewerb. Kontinuierliche SERP- und Leistungsbeobachtung ist wichtig.',
      },
      {
        question: "Wie erkennt man 'Fake'-Suchvolumen durch Bots oder saisonale Anomalien?",
        answer:
          'Bot-Traffic zeigt sich durch unnatürlich hohe Spitzen, untypische Regionen und extrem kurze Verweildauer. Saisonale Muster sind vorhersehbar – Google Trends hilft. Daten über mehrere Jahre vergleichen und verschiedene Keyword-Tools cross-referenzieren.',
      },
      {
        question: 'Wie führt man eine Keyword-Recherche für internationale Märkte durch?',
        answer:
          'Lokale Sprachen und Dialekte berücksichtigen, idealerweise mit Muttersprachlern arbeiten. Lokale Suchgewohnheiten und kulturelle Nuancen einbeziehen, länderspezifische Tool-Versionen nutzen und Wettbewerber in den Zielländern analysieren.',
      },
    ],
  },
  {
    slug: 'onpage-seo-checkliste',
    title: 'Onpage SEO Checkliste: Ihr Leitfaden für Top-Rankings in München und Bayern',
    metaTitle: 'Onpage SEO Checkliste: Ihr Leitfaden für Top-Rankings in München und Bayern',
    metaDescription:
      'Umfassende Onpage SEO Checkliste für Unternehmen in München & Bayern. Erfahren Sie, wie Sie Ihre Webseite technisch und inhaltlich optimieren und Top-Rankings erzielen.',
    category: 'content-keywords',
    content: onpageSeoChecklisteContent,
    image: '/images/blog/onpage%20seo%20checkliste%20(1).webp',
    imageAlt: 'Onpage SEO Checkliste: Leitfaden für Top-Rankings in München und Bayern',
    faqs: [
      {
        question: 'Wie prüfe ich, ob eine Webseite von Google indexiert ist?',
        answer:
          'Über die Google Search Console mit dem URL-Prüftool oder den Indexierungsbericht. Alternativ die site:-Abfrage in Google nutzen (z. B. site:ihredomain.de), um erfasste Seiten zu sehen.',
      },
      {
        question: 'Warum sind externe Quellen und Backlinks im Kontext der Onpage-Optimierung wichtig?',
        answer:
          'Ausgehende Links zu hochwertigen Quellen stärken Vertrauen und Relevanz. Backlinks (Offpage) von anderen Webseiten erhöhen die Domain-Autorität. Beides signalisiert Google gut recherchierte Inhalte und kann indirekt zu besseren Rankings führen.',
      },
      {
        question: 'Welche Rolle spielt Local SEO für Unternehmen in München und Bayern?',
        answer:
          'Local SEO ist Teil einer umfassenden Onpage-Strategie: lokale Keywords in Titeln und Inhalten, konsistente NAP-Daten (Name, Adresse, Telefon), Optimierung des Google-My-Business-Profils und standortspezifische Inhalte steigern die Sichtbarkeit vor Ort.',
      },
      {
        question: 'Wie optimiere ich die Usability über reine SEO-Aspekte hinaus?',
        answer:
          'Favicon für Wiedererkennung, Barrierefreiheit für bessere Nutzersignale und ein durchgängig responsives Design (Mobile-First) verbessern die User Experience und werden von Suchmaschinen positiv bewertet.',
      },
    ],
  },
  {
    slug: 'interne-verlinkung-anleitung',
    title: 'Interne Verlinkung Anleitung: Der Schlüssel zu mehr SEO-Sichtbarkeit für Ihre Website',
    metaTitle: 'Interne Verlinkung Anleitung: Der Schlüssel zu mehr SEO-Sichtbarkeit für Ihre Website',
    metaDescription:
      'Umfassende Anleitung zur internen Verlinkung: Erfahren Sie, wie Sie interne Links strategisch setzen, Linkjuice optimal verteilen und Ihre Google Rankings verbessern – mit Praxis-Tipps und WordPress-Guide.',
    category: 'content-keywords',
    content: interneVerlinkungAnleitungContent,
    image: '/images/blog/interne%20verlinkung%20anleitung%20(1).webp',
    imageAlt: 'Interne Verlinkung Anleitung: Teaserbild – SEO-Sichtbarkeit und Linkstruktur mit Siloing und Onlineshop-Strategien optimieren',
    faqs: [
      {
        question: 'Wie viele interne Links sollte eine Website haben?',
        answer:
          'Es gibt keine feste ideale Anzahl. Google empfiehlt eine „angemessene Anzahl", um die Navigation zu erleichtern und den Linkjuice zu verteilen. Wichtiger als die Menge sind Relevanz und strategische Platzierung; übermäßige Verlinkung kann die Linkkraft verwässern.',
      },
      {
        question: 'Können Seiten auch ohne externe Links gut ranken?',
        answer:
          'Ja. Hochwertige Inhalte zusammen mit einer starken internen Verlinkungsstruktur können die Sichtbarkeit deutlich verbessern. Interne Links verteilen den Linkjuice und helfen Suchmaschinen, alle relevanten Seiten zu entdecken und Autorität von starken auf schwächere Seiten zu übertragen.',
      },
      {
        question: 'Was ist der Unterschied zwischen den Statuscodes 404 und 410?',
        answer:
          '404 Not Found bedeutet „Seite nicht gefunden" – oft temporär, die Seite kann später wieder existieren. 410 Gone bedeutet „dauerhaft entfernt" – die Ressource wird nicht wiederhergestellt; Google entfernt 410-Seiten in der Regel schneller aus dem Index.',
      },
      {
        question: 'Wie oft sollten interne Links überprüft und aktualisiert werden?',
        answer:
          'Idealerweise vierteljährlich, mindestens halbjährlich. Nach einem Relaunch oder größeren Strukturänderungen sollten Sie sofort prüfen. Broken Links (404/410) sollten umgehend behoben werden, damit die Linkkraft optimal verteilt bleibt.',
      },
      {
        question: 'Gibt es spezifische Metriken, um den Erfolg zu verfolgen?',
        answer:
          'Ja: Crawltiefe und -frequenz, organische Sichtbarkeit, Keyword-Rankings sowie Verweildauer und Absprungrate. Tools wie Google Search Console, SISTRIX oder Ahrefs liefern wertvolle Einblicke für die Erfolgsmessung interner Verlinkung.',
      },
    ],
  },
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
