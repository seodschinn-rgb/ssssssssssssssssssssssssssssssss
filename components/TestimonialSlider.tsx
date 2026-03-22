'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import HomeSectionLabel from '@/components/HomeSectionLabel'

const testimonials = [
  {
    quote:
      'Vor der Zusammenarbeit kamen 2–3 Anfragen pro Woche über die Website. Nach 5 Monaten SEO-Optimierung sind es 8–10. Besonders die Local-SEO-Maßnahmen haben unsere Maps-Sichtbarkeit komplett verändert.',
    author: 'Sarah K.',
    role: 'Inhaberin, Schreinerei in München-Sendling',
  },
  {
    quote:
      'Früher wussten wir nicht, ob unsere Website überhaupt Patienten bringt. Jetzt sehen wir im monatlichen Report: 40 % unserer Neupatienten finden uns über Google. Das hat unser Marketing komplett verändert.',
    author: 'Dr. Michael R.',
    role: 'Zahnarztpraxis München-Schwabing',
  },
  {
    quote:
      'Unsere vorherige Agentur lieferte 12 Monate lang bunte Reports — aber null Ranking-Verbesserung. Bei SEO München hatten wir nach 4 Monaten messbar mehr Traffic. Der Unterschied: Hier wird nicht geredet, sondern gemacht.',
    author: 'Thomas B.',
    role: 'Geschäftsführer, IT-Dienstleister München',
  },
]

function StarRow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 text-amber-400/90 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function AuthorAvatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase()
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700"
      aria-hidden
    >
      {initial}
    </div>
  )
}

export default function TestimonialSlider() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  const slideCount = testimonials.length

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = 'smooth') => {
      const el = scrollerRef.current
      if (!el) return
      const w = el.clientWidth
      if (w <= 0) return
      const i = Math.max(0, Math.min(index, slideCount - 1))
      el.scrollTo({ left: i * w, behavior: reducedMotion ? 'auto' : behavior })
      setActiveIndex(i)
    },
    [slideCount, reducedMotion]
  )

  const goPrev = useCallback(() => {
    scrollToIndex(activeIndex - 1 < 0 ? slideCount - 1 : activeIndex - 1)
  }, [activeIndex, scrollToIndex, slideCount])

  const goNext = useCallback(() => {
    scrollToIndex((activeIndex + 1) % slideCount)
  }, [activeIndex, scrollToIndex, slideCount])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const fn = () => setReducedMotion(mq.matches)
    mq.addEventListener?.('change', fn) ?? mq.addListener(fn)
    return () => mq.removeEventListener?.('change', fn) ?? mq.removeListener?.(fn)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    let raf = 0
    const sync = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const w = el.clientWidth
        if (w <= 0) return
        const i = Math.round(el.scrollLeft / w)
        const clamped = Math.max(0, Math.min(i, slideCount - 1))
        setActiveIndex((prev) => (prev === clamped ? prev : clamped))
      })
    }

    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [slideCount])

  const activeIndexRef = useRef(activeIndex)
  activeIndexRef.current = activeIndex

  useEffect(() => {
    const el = scrollerRef.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth
      if (w <= 0) return
      el.scrollTo({ left: activeIndexRef.current * w, behavior: 'auto' })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const m = window.matchMedia('(min-width: 768px)')
    if (!m.matches) return

    const tick = () => {
      const el = scrollerRef.current
      if (!el) return
      const w = el.clientWidth
      if (w <= 0) return
      const current = Math.round(el.scrollLeft / w)
      const next = (Math.max(0, Math.min(current, slideCount - 1)) + 1) % slideCount
      el.scrollTo({ left: next * w, behavior: 'smooth' })
      setActiveIndex(next)
    }

    const id = window.setInterval(tick, 6500)
    return () => window.clearInterval(id)
  }, [reducedMotion, slideCount])

  const navBtnClass =
    'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-colors hover:border-indigo-200 hover:bg-indigo-50/50 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 md:h-11 md:w-11'

  return (
    <section
      className="border-y border-zinc-200/80 bg-zinc-50 py-20 md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-3 flex justify-center">
            <HomeSectionLabel>Referenzen</HomeSectionLabel>
          </div>
          <h2
            id="testimonials-heading"
            className="text-balance text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-[2rem] md:leading-snug"
          >
            Was Kunden über uns sagen
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
            Auszüge aus Projekten in München und Umgebung — wischen oder Pfeile zum Weiterschalten.
          </p>
        </div>

        <div className="flex w-full items-center justify-center gap-2 sm:gap-3 md:gap-4">
          <button type="button" onClick={goPrev} aria-label="Vorherige Bewertung" className={`${navBtnClass} hidden sm:flex`}>
            <svg className="h-4 w-4 md:h-[18px] md:w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div
            className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm ring-1 ring-black/[0.03] lg:rounded-3xl"
            role="region"
            aria-label="Kundenbewertungen"
          >
            <div
              ref={scrollerRef}
              tabIndex={0}
              className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth outline-none [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500/40 [&::-webkit-scrollbar]:hidden"
              style={{ WebkitOverflowScrolling: 'touch' }}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') {
                  e.preventDefault()
                  goPrev()
                }
                if (e.key === 'ArrowRight') {
                  e.preventDefault()
                  goNext()
                }
              }}
            >
              {testimonials.map((item, i) => (
                <article
                  key={i}
                  id={`testimonial-slide-${i}`}
                  aria-hidden={i !== activeIndex}
                  className="w-full min-w-0 shrink-0 snap-center snap-always px-5 py-6 sm:px-8 sm:py-7 lg:px-10"
                  aria-labelledby={`testimonial-quote-${i}`}
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10 lg:gap-12">
                    <div className="min-w-0 flex-1">
                      <StarRow className="mb-3 justify-start" />
                      <blockquote
                        id={`testimonial-quote-${i}`}
                        className="text-sm leading-relaxed text-zinc-600 sm:text-[15px] sm:leading-relaxed"
                      >
                        „{item.quote}“
                      </blockquote>
                    </div>

                    <footer className="flex shrink-0 items-center gap-3 border-t border-zinc-100 pt-5 md:w-48 md:flex-col md:items-start md:border-l md:border-t-0 md:pl-8 md:pt-0 lg:w-52">
                      <AuthorAvatar name={item.author} />
                      <div className="min-w-0 text-left">
                        <p className="text-sm font-semibold text-zinc-900">{item.author}</p>
                        <p className="mt-0.5 text-xs leading-snug text-zinc-500 sm:text-sm">{item.role}</p>
                      </div>
                    </footer>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex justify-center gap-1.5 border-t border-zinc-100 bg-zinc-50/50 px-4 py-3.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Bewertung ${i + 1} von ${slideCount} anzeigen`}
                  aria-current={i === activeIndex ? 'true' : undefined}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === activeIndex ? 'w-6 bg-indigo-600' : 'w-1.5 bg-zinc-300 hover:bg-zinc-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <button type="button" onClick={goNext} aria-label="Nächste Bewertung" className={`${navBtnClass} hidden sm:flex`}>
            <svg className="h-4 w-4 md:h-[18px] md:w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2 sm:hidden">
          <button type="button" onClick={goPrev} aria-label="Vorherige Bewertung" className={navBtnClass}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button type="button" onClick={goNext} aria-label="Nächste Bewertung" className={navBtnClass}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
