'use client'

import { useState, useEffect } from 'react'
import BlogTableOfContents from './BlogTableOfContents'

const ARTICLE_SELECTOR = '[data-blog-article]'
const HEADER_OFFSET_PX = 88 // Platz unter dem Header (5.5rem)

/** Höhe des eingeklappten TOC-Buttons, für Spacer im Layout */
export const BLOG_TOC_MOBILE_COLLAPSED_HEIGHT = '3.25rem' // ~52px

/**
 * Findet das erste Inhaltsverzeichnis (ol mit Anker-Links) im Artikel.
 */
function getInlineTocElement(): Element | null {
  const article = document.querySelector(ARTICLE_SELECTOR)
  if (!article) return null
  const lists = article.querySelectorAll('ol')
  for (const ol of Array.from(lists)) {
    if (ol.querySelectorAll('li a[href^="#"]').length > 0) return ol
  }
  return null
}

/**
 * Auf Mobile/Tablet: Inhaltsverzeichnis erscheint erst, wenn man am TOC im Text vorbeigescrollt hat,
 * bleibt dann fixed unter dem Header mit Abstand. Nur unter lg sichtbar.
 */
export default function BlogTocMobileCollapsible() {
  const [open, setOpen] = useState(false)
  const [showFixedToc, setShowFixedToc] = useState(false)

  useEffect(() => {
    const inlineToc = getInlineTocElement()
    if (!inlineToc) return

    const check = () => {
      const rect = inlineToc.getBoundingClientRect()
      // TOC-Kasten anzeigen, wenn das TOC im Text nach oben aus dem Bereich unter dem Header gewandert ist
      setShowFixedToc(rect.top < HEADER_OFFSET_PX)
    }

    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  if (!showFixedToc) return null

  return (
    <div
      className="lg:hidden fixed left-0 right-0 z-30 px-4 sm:px-6 transition-opacity duration-200"
      style={{ top: `${HEADER_OFFSET_PX}px` }}
    >
      <div className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-2 py-3 px-4 text-left text-sm font-semibold text-zinc-900 hover:bg-zinc-50 transition-colors"
          aria-expanded={open}
          aria-controls="blog-toc-mobile-content"
        >
          <span>Inhaltsverzeichnis</span>
          <svg
            className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          id="blog-toc-mobile-content"
          className={`border-t border-zinc-100 overflow-hidden transition-[max-height] duration-200 ease-out ${open ? 'max-h-[min(50vh,400px)]' : 'max-h-0'}`}
          aria-hidden={!open}
        >
          <div className="max-h-[min(50vh,400px)] overflow-y-auto py-2 px-3">
            <BlogTableOfContents hideTitle />
          </div>
        </div>
      </div>
    </div>
  )
}
