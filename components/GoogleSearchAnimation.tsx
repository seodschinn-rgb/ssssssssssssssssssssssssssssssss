'use client'

import { useEffect, useState } from 'react'

const FULL_QUERY = 'SEO Agentur München'

const INITIAL_RESULTS = [
  { domain: 'seokratie.de', title: 'SEO Agentur München | Seokratie', position: 1 },
  { domain: 'timospecht.de', title: 'SEO Agentur München - Timo Specht', position: 2 },
  { domain: 'jsh.marketing', title: 'SEO Agentur München | JSH Marketing', position: 3 },
  { domain: 'netzbekannt.de', title: 'SEO Agentur München - Netzbekannt', position: 4 },
  { domain: 'seomuenchen.com', title: 'SEO Agentur München | Suchmaschinenoptimierung', position: 5, highlight: true },
]

const FINAL_RESULTS = [
  { domain: 'seomuenchen.com', title: 'SEO Agentur München | Suchmaschinenoptimierung', position: 1, highlight: true },
  { domain: 'seokratie.de', title: 'SEO Agentur München | Seokratie', position: 2 },
  { domain: 'timospecht.de', title: 'SEO Agentur München - Timo Specht', position: 3 },
  { domain: 'jsh.marketing', title: 'SEO Agentur München | JSH Marketing', position: 4 },
  { domain: 'netzbekannt.de', title: 'SEO Agentur München - Netzbekannt', position: 5 },
]

type Phase = 'typing' | 'searching' | 'results' | 'ranking'

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms)
  })
}

/**
 * Google-ähnliche Suchvorschau — eine Sequenz in einem Effect (kein mounted-Ref, kein Framer Motion).
 * Funktioniert zuverlässig mit React 18 Strict Mode.
 */
export default function GoogleSearchAnimation() {
  const [searchText, setSearchText] = useState('')
  const [phase, setPhase] = useState<Phase>('typing')
  const [displayResults, setDisplayResults] = useState(INITIAL_RESULTS)

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      setPhase('typing')
      setDisplayResults(INITIAL_RESULTS)
      setSearchText('')

      for (let i = 0; i <= FULL_QUERY.length; i++) {
        if (cancelled) return
        setSearchText(FULL_QUERY.slice(0, i))
        if (i < FULL_QUERY.length) await sleep(72)
      }

      if (cancelled) return
      setPhase('searching')
      await sleep(550)
      if (cancelled) return

      setDisplayResults(INITIAL_RESULTS)
      setPhase('results')
      await sleep(2400)
      if (cancelled) return

      setDisplayResults(FINAL_RESULTS)
      setPhase('ranking')
    })()

    return () => {
      cancelled = true
    }
  }, [])

  const showResults = phase === 'results' || phase === 'ranking'
  const showFooter = phase === 'ranking'

  return (
    <div className="relative isolate z-20 mx-auto flex h-[480px] w-full max-w-2xl flex-col sm:h-[520px] md:h-[520px] lg:h-[560px]">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl">
        {/* Header */}
        <div className="flex flex-shrink-0 items-center gap-3 border-b border-zinc-100 px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4 md:py-4 lg:py-5">
          <div className="flex gap-2 sm:gap-2.5">
            <span className="h-3 w-3 rounded-full bg-red-400 sm:h-3.5 sm:w-3.5" />
            <span className="h-3 w-3 rounded-full bg-amber-400 sm:h-3.5 sm:w-3.5" />
            <span className="h-3 w-3 rounded-full bg-emerald-400 sm:h-3.5 sm:w-3.5" />
          </div>
          <div className="flex min-w-0 flex-1 items-center justify-center">
            <div className="flex items-center gap-2 text-sm text-zinc-400 sm:text-base md:text-base">
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden>
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Google</span>
            </div>
          </div>
        </div>

        {/* Suchleiste */}
        <div className="flex-shrink-0 px-4 pb-4 pt-3 sm:px-4 sm:pb-5 sm:pt-4 md:pb-5 md:pt-4">
          <div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 transition-colors hover:bg-zinc-50 sm:px-5 sm:py-4 md:py-4">
            <svg
              className="h-5 w-5 shrink-0 text-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="min-h-[1.25rem] truncate text-sm text-zinc-900 sm:text-base">{searchText}</span>
            {phase === 'typing' && (
              <span className="inline-block h-4 w-0.5 shrink-0 animate-pulse bg-accent" aria-hidden />
            )}
            {phase === 'searching' && (
              <span className="ml-1 inline-flex gap-1" aria-hidden>
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.3s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.15s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400" />
              </span>
            )}
          </div>
        </div>

        {/* Ergebnisse — immer Platz reservieren, sichtbar per Opacity (vermeidet „leere“ Karte) */}
        <div
          className={`flex min-h-[200px] min-w-0 flex-1 flex-col border-t border-zinc-100 pt-2 transition-opacity duration-300 ease-out sm:min-h-[220px] sm:pt-4 md:pt-4 ${
            showResults ? 'opacity-100' : 'pointer-events-none select-none opacity-0'
          }`}
          aria-hidden={!showResults}
        >
          {showResults && (
            <div className="flex min-h-0 flex-1 flex-col justify-between gap-1 px-3 pb-3 pt-1 sm:gap-1.5 sm:px-4 sm:pb-5 md:gap-1.5 md:px-4 md:pb-5">
              {displayResults.map((result) => (
                <div
                  key={`${phase}-${result.domain}-${result.position}`}
                  className={`flex min-h-0 flex-1 items-center gap-2 rounded-lg px-3 py-2.5 transition-colors duration-300 sm:gap-3 sm:px-4 sm:py-3.5 md:py-3.5 lg:py-4 ${
                    result.highlight
                      ? 'bg-blue-600/[0.06] ring-2 ring-accent/30'
                      : 'bg-transparent'
                  }`}
                >
                  <span className="w-5 shrink-0 text-sm font-medium text-zinc-400 sm:w-6 sm:text-base">
                    {result.position}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs text-emerald-700 sm:text-sm">{result.domain}</p>
                    <p className="truncate text-sm font-medium text-zinc-800 sm:text-base">{result.title}</p>
                  </div>
                  {result.highlight && (
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent sm:h-8 sm:w-8 ${
                        phase === 'ranking' ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
                      } transition-transform duration-300`}
                    >
                      <svg className="h-4 w-4 text-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <p
        className={`mt-3 flex-shrink-0 py-1 text-center text-sm text-zinc-500 transition-opacity duration-500 sm:mt-4 sm:text-base md:mt-4 ${
          showFooter ? 'opacity-100' : 'opacity-0'
        }`}
      >
        So stellen wir Sie auf Platz 1.
      </p>
    </div>
  )
}
