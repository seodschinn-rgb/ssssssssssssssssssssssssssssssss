'use client'

import { useEffect, useState } from 'react'

const ARTICLE_SELECTOR = '[data-blog-article]'
const HEADING_SELECTOR = 'h2[id]'

export interface TocItem {
  id: string
  text: string
}

/**
 * Liest die Punkte aus dem Inhaltsverzeichnis im Artikeltext (erstes ol mit Anker-Links).
 * So entsprechen die Bezeichnungen in der Sidebar exakt denen im Text.
 */
function getTocFromInlineList(article: Element): TocItem[] {
  const lists = article.querySelectorAll('ol')
  for (const ol of Array.from(lists)) {
    const links = ol.querySelectorAll<HTMLAnchorElement>('li a[href^="#"]')
    if (links.length === 0) continue
    const items: TocItem[] = []
    for (const a of Array.from(links)) {
      const href = a.getAttribute('href')
      if (!href || href === '#') continue
      const id = href.slice(1).trim()
      const text = a.textContent?.trim()
      if (id && text) items.push({ id, text })
    }
    if (items.length > 0) return items
  }
  return []
}

/**
 * Fallback: Liest Überschriften (h2 mit id) aus dem Artikel.
 */
function getTocFromHeadings(article: Element): TocItem[] {
  const headings = article.querySelectorAll<HTMLHeadingElement>(HEADING_SELECTOR)
  const list: TocItem[] = []
  headings.forEach((h) => {
    const id = h.getAttribute('id')
    if (id && h.textContent) {
      list.push({ id, text: h.textContent.trim() })
    }
  })
  return list
}

export default function BlogTableOfContents({ hideTitle = false }: { hideTitle?: boolean }) {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const article = document.querySelector(ARTICLE_SELECTOR)
    if (!article) return

    const inlineItems = getTocFromInlineList(article)
    const list = inlineItems.length > 0 ? inlineItems : getTocFromHeadings(article)
    setItems(list)

    if (list.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )

    list.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  if (items.length === 0) return null

  return (
    <nav
      aria-label="Inhaltsverzeichnis"
      className="blog-toc"
    >
      {!hideTitle && (
        <p className="text-sm font-bold text-zinc-900 mb-3">Inhaltsverzeichnis</p>
      )}
      <ul className={`space-y-1.5 text-sm ${hideTitle ? '' : 'max-h-[50vh] overflow-y-auto lg:max-h-none lg:overflow-visible'}`}>
        {items.map(({ id, text }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block py-1 pr-2 rounded-r border-l-2 pl-3 -ml-px transition-colors ${
                activeId === id
                  ? 'border-indigo-600 text-indigo-600 font-medium bg-indigo-50/80'
                  : 'border-transparent text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
