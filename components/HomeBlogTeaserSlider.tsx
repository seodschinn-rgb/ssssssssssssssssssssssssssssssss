'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { BlogTeaserItem } from '@/lib/blog-posts'

/** Kurzer Teaser, Endung an Wortgrenze — kein harter Zeilenumbruch durch line-clamp */
function shortTeaser(text: string, maxLen = 88): string {
  const t = text.trim().replace(/\s+/g, ' ')
  if (t.length <= maxLen) return t
  const slice = t.slice(0, maxLen)
  const lastSpace = slice.lastIndexOf(' ')
  let base = lastSpace > 32 ? slice.slice(0, lastSpace) : slice.replace(/\s+\S*$/, '').trimEnd()
  if (base.length < 20) base = slice.trimEnd()
  return `${base}…`
}

function getScrollStep(scroller: HTMLElement): number {
  const first = scroller.querySelector('li')
  if (!first) return 0
  const style = getComputedStyle(scroller)
  const gap = parseFloat(style.gap || style.columnGap) || 12
  return first.getBoundingClientRect().width + gap
}

export default function HomeBlogTeaserSlider({ items }: { items: BlogTeaserItem[] }) {
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const max = scrollWidth - clientWidth
    const eps = 4
    setCanPrev(scrollLeft > eps)
    setCanNext(scrollLeft < max - eps)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    const ro = new ResizeObserver(updateArrows)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      ro.disconnect()
    }
  }, [updateArrows, items.length])

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    const step = getScrollStep(el)
    if (step <= 0) return
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const arrowBtn =
    'flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-full border border-zinc-200 bg-white text-zinc-800 shadow-sm transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 disabled:pointer-events-none disabled:opacity-25 sm:h-11 sm:w-11'

  return (
    <div className="flex items-stretch gap-2 sm:gap-3">
      <button
        type="button"
        onClick={() => scrollByDir(-1)}
        disabled={!canPrev}
        aria-label="Vorherige Blog-Artikel"
        className={arrowBtn}
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <ul
        ref={scrollerRef}
        className="flex min-h-0 min-w-0 flex-1 snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain py-1 scroll-smooth touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        role="list"
        aria-label="Blog-Artikel"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault()
            scrollByDir(-1)
          }
          if (e.key === 'ArrowRight') {
            e.preventDefault()
            scrollByDir(1)
          }
        }}
      >
        {items.map((item, index) => (
          <li
            key={item.href}
            className="min-w-0 shrink-0 snap-start flex-[0_0_calc((100%-0.75rem)/2)] md:flex-[0_0_calc((100%-3rem)/3)]"
          >
            <Link
              href={item.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/70 bg-white shadow-md shadow-zinc-200/30 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50"
            >
              <div className="shrink-0 bg-white p-2 sm:p-2.5">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    width={640}
                    height={400}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="absolute inset-2 rounded-md object-cover object-center transition-transform duration-500 ease-out [transform-origin:center] will-change-transform sm:inset-2.5 group-hover:scale-[1.06]"
                  />
                </div>
              </div>
              <div className="flex flex-col p-4 sm:p-5">
                <h3 className="text-base font-bold leading-snug text-zinc-900 transition-colors group-hover:text-indigo-600 sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-snug text-zinc-600 sm:text-sm">{shortTeaser(item.description)}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 transition-all group-hover:gap-3 sm:mt-4 sm:text-sm">
                  Zum Artikel
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => scrollByDir(1)}
        disabled={!canNext}
        aria-label="Nächste Blog-Artikel"
        className={arrowBtn}
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
