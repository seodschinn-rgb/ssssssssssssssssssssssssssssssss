'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GradientBlobs } from './ModernGraphics'
import GoogleSearchAnimationSafe from './GoogleSearchAnimationSafe'

interface HeroProps {
  headline?: string
  subheadline?: string
  /** Optionaler Absatz mit Links unter der Subheadline (nur Client-Komponente als Eltern) */
  subheadlineExtra?: ReactNode
  /** Zeigt die kompakte Link-Zeile (Erstgespräch · Leistungen) wie auf der Startseite v2 */
  showHomeSecondaryLinks?: boolean
  showCTA?: boolean
  showSearchAnimation?: boolean
}

const defaultProps = {
  headline: 'SEO Agentur München',
  subheadline:
    'Suchmaschinenoptimierung für Unternehmen in Bayern. Mehr Sichtbarkeit bei Google, mehr Kunden – mit messbarem Erfolg.',
  showCTA: true,
  showSearchAnimation: false,
}

function HomeSecondaryLinks() {
  return (
    <p className="m-0">
      <Link href="/kontakt" prefetch className="text-zinc-900 hover:text-blue-600">
        <strong>Kostenloses SEO-Erstgespräch sichern</strong>
      </Link>
      <span className="text-zinc-400 mx-2" aria-hidden>
        ·
      </span>
      <Link href="/leistungen" prefetch className="text-blue-600 font-medium hover:underline">
        Unsere Leistungen
      </Link>
    </p>
  )
}

export default function Hero({
  headline = defaultProps.headline,
  subheadline = defaultProps.subheadline,
  subheadlineExtra,
  showHomeSecondaryLinks = false,
  showCTA = defaultProps.showCTA,
  showSearchAnimation = defaultProps.showSearchAnimation,
}: HeroProps) {
  return (
    <section
      className={`relative min-h-0 md:min-h-[70svh] lg:min-h-[min(92svh,880px)] flex flex-col justify-start md:justify-center px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-32 pb-12 sm:pb-16 md:pb-20 ${
        showSearchAnimation ? 'overflow-x-hidden overflow-y-visible' : 'overflow-hidden'
      }`}
      aria-labelledby="hero-heading"
    >
      {showSearchAnimation && (
        <>
          <GradientBlobs />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-6xl w-full min-w-0">
        {showSearchAnimation ? (
          <>
            <div className="flex flex-col md:max-w-2xl md:mx-auto lg:mx-0 lg:max-w-none lg:flex-row lg:items-start lg:justify-between lg:gap-12">
              <div className="flex-1 min-w-0 md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-2xl">
                <motion.span
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 mb-4 md:mb-6 lg:mb-8"
                >
                  #1 SEO Agentur München
                </motion.span>
                <motion.h1
                  id="hero-heading"
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.28] tracking-tight text-balance pb-1"
                >
                  {headline.includes(':') ? (
                    <>
                      <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent leading-[1.4] pb-0.5">
                        {headline.split(':')[0].trim()}
                      </span>
                      <span className="block mt-2 text-zinc-700 font-semibold">
                        {headline.split(':').slice(1).join(':').trim()}
                      </span>
                    </>
                  ) : (
                    <span className="text-indigo-950">
                      {headline}
                    </span>
                  )}
                </motion.h1>
                <motion.p
                  initial={false}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-4 md:mt-6 lg:mt-8 text-base sm:text-lg md:text-lg text-zinc-600 leading-relaxed max-w-xl"
                >
                  {subheadline}
                </motion.p>
                {(subheadlineExtra || showHomeSecondaryLinks) ? (
                  <motion.div
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="mt-3 md:mt-4 text-base text-zinc-600 leading-relaxed max-w-xl"
                  >
                    {subheadlineExtra ?? (showHomeSecondaryLinks ? <HomeSecondaryLinks /> : null)}
                  </motion.div>
                ) : null}
                {showCTA && (
                  <motion.div
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    className="mt-3 sm:mt-5 md:mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3 flex-shrink-0"
                  >
                    <Link href="/kontakt" prefetch className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3.5 sm:px-8 sm:py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] touch-manipulation">
                      Kostenloses SEO-Erstgespräch sichern
                    </Link>
                    <Link href="/leistungen" prefetch className="inline-flex items-center justify-center rounded-2xl border-2 border-zinc-200 bg-white/80 backdrop-blur-sm px-6 py-3.5 sm:px-8 sm:py-4 text-base font-semibold text-zinc-900 hover:border-zinc-300 hover:bg-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] touch-manipulation">
                      Unsere Leistungen
                    </Link>
                  </motion.div>
                )}
                <motion.div
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-3 sm:mt-5 md:mt-6 lg:mt-8 grid grid-cols-2 md:grid-cols-2 lg:flex lg:flex-wrap gap-2 md:gap-3 lg:gap-3"
                >
                  <span className="inline-flex items-center gap-2 rounded-xl lg:rounded-full bg-zinc-100/90 md:bg-zinc-100/80 px-3 py-2.5 md:py-3 md:px-4 lg:py-2 text-xs sm:text-sm text-zinc-700 ring-1 ring-zinc-200/60 backdrop-blur-sm min-w-0">
                    <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span className="break-words">47+ Unternehmen vertrauen uns</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl lg:rounded-full bg-accent/10 px-3 py-2.5 md:py-3 md:px-4 lg:py-2 text-xs sm:text-sm text-zinc-800 ring-1 ring-accent/20 min-w-0">
                    <span className="font-bold text-accent flex-shrink-0">+312%</span>
                    <span className="break-words">mehr Traffic (Ø Kundenergebnis)</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl lg:rounded-full bg-amber-50 px-3 py-2.5 md:py-3 md:px-4 lg:py-2 text-xs sm:text-sm text-zinc-700 ring-1 ring-amber-200/60 min-w-0">
                    <span className="font-semibold text-zinc-900 break-words">Erste Seite bei Google — 3–6 Mon.</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl lg:rounded-full bg-zinc-100/90 md:bg-zinc-100/80 px-3 py-2.5 md:py-3 md:px-4 lg:py-2 text-xs sm:text-sm text-zinc-700 ring-1 ring-zinc-200/60 min-w-0">
                    <span className="font-bold text-accent flex-shrink-0">100+</span>
                    <span className="break-words">Projekte erfolgreich umgesetzt</span>
                  </span>
                </motion.div>
              </div>
              <div className="mt-10 sm:mt-8 md:mt-8 lg:mt-0 lg:shrink-0 w-full min-w-0 md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-none lg:w-[420px] h-[480px] sm:h-[520px] md:h-[520px] lg:h-[560px]">
                <GoogleSearchAnimationSafe />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <motion.h1
                id="hero-heading"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 leading-[1.1] tracking-tight"
              >
                {headline}
              </motion.h1>

              <motion.p
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed"
              >
                {subheadline}
              </motion.p>
              {(subheadlineExtra || showHomeSecondaryLinks) ? (
                <motion.div
                  initial={false}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed"
                >
                  {subheadlineExtra ?? (showHomeSecondaryLinks ? <HomeSecondaryLinks /> : null)}
                </motion.div>
              ) : null}

              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex flex-wrap justify-center gap-3"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100/80 px-4 py-2 text-sm text-zinc-700 ring-1 ring-zinc-200/60 backdrop-blur-sm">
                  <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  47+ Unternehmen vertrauen uns
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm text-zinc-800 ring-1 ring-accent/20">
                  <span className="font-bold text-accent">+312%</span> mehr Traffic (Ø Kundenergebnis)
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm text-zinc-700 ring-1 ring-amber-200/60">
                  <span className="font-semibold text-zinc-900">Erste Seite bei Google</span> — 3–6 Mon.
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100/80 px-4 py-2 text-sm text-zinc-700 ring-1 ring-zinc-200/60">
                  <span className="font-bold text-accent">100+</span> Projekte erfolgreich umgesetzt
                </span>
              </motion.div>

              {showCTA && (
                <motion.div
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link href="/kontakt" prefetch className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-all duration-200 shadow-card hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98]">
                    Kostenloses SEO-Erstgespräch sichern
                  </Link>
                  <Link href="/leistungen" prefetch className="inline-flex items-center justify-center rounded-lg border-2 border-zinc-200 bg-white px-8 py-4 text-base font-semibold text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 transition-colors duration-200 hover:scale-[1.02] active:scale-[0.98]">
                    Unsere Leistungen
                  </Link>
                </motion.div>
              )}
            </div>
          </>
        )}
      </div>

      {!showSearchAnimation && (
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-12 w-8 items-start justify-center rounded-full border-2 border-zinc-300 p-2">
          <span className="inline-block h-3 w-1.5 animate-bounce rounded-full bg-zinc-400" aria-hidden />
        </div>
      </div>
      )}
    </section>
  )
}
