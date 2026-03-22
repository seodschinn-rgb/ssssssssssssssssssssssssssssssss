'use client'

import { useEffect, useId, useRef, useState } from 'react'

type Phase = 'before' | 'after'

const TITLE_AFTER = 'Schreiner München | Schreinerei & Maßanfertigung'
const TITLE_BEFORE =
  'Schreinerei München – Handwerk, Qualität, Service und mehr über unsere Firma in Bayern'

const META_AFTER =
  'Schreinerei München: Maßmöbel, Küchen & Reparaturen. Jetzt Termin für Ihr Projekt in Sendling & Umgebung — schnelle Beratung, faire Preise.'

const META_BEFORE =
  'Willkommen in unserer Schreinerei in München. Wir sind Ihr Partner für alles rund ums Holz, Möbel, Küchen, Einbauschränke, Reparaturen und individuelle Lösungen für Privat und Gewerbe in der Region.'

const STRUCTURE_ROWS: {
  tag: string
  labelBefore: string
  labelAfter: string
  pctBefore: number
  pctAfter: number
  colorBefore: string
  colorAfter: string
}[] = [
  {
    tag: 'H1',
    labelBefore: 'Willkommen',
    labelAfter: 'Schreiner München',
    pctBefore: 30,
    pctAfter: 100,
    colorBefore: 'from-amber-400 to-orange-500',
    colorAfter: 'from-blue-500 to-indigo-600',
  },
  {
    tag: 'H2',
    labelBefore: 'Über uns',
    labelAfter: 'Leistungen & Referenzen',
    pctBefore: 38,
    pctAfter: 82,
    colorBefore: 'from-amber-400 to-orange-500',
    colorAfter: 'from-indigo-500 to-violet-600',
  },
  {
    tag: 'H3',
    labelBefore: 'Unsere Arbeit',
    labelAfter: 'Maßmöbel & Küchen',
    pctBefore: 24,
    pctAfter: 64,
    colorBefore: 'from-amber-400 to-orange-500',
    colorAfter: 'from-sky-500 to-blue-600',
  },
  {
    tag: 'H3',
    labelBefore: 'Sonstiges',
    labelAfter: 'Reparatur & Service',
    pctBefore: 20,
    pctAfter: 58,
    colorBefore: 'from-amber-400 to-orange-500',
    colorAfter: 'from-sky-500 to-blue-600',
  },
  {
    tag: 'H2',
    labelBefore: 'Kontakt',
    labelAfter: 'Kontakt & Anfahrt',
    pctBefore: 34,
    pctAfter: 76,
    colorBefore: 'from-amber-400 to-orange-500',
    colorAfter: 'from-indigo-500 to-violet-600',
  },
]

const METRICS = {
  before: {
    readability: 48,
    readabilityHint: 'Anspruchsvoll',
    keywordPct: '0,7',
    keywordBarPct: 14,
    keywordHint: 'Zu niedrig',
    titleCounter: '68/60',
    metaCounter: '198/160',
  },
  after: {
    readability: 78,
    readabilityHint: 'Gut lesbar',
    keywordPct: '2,4',
    keywordBarPct: 38,
    keywordHint: 'Im Zielbereich',
    titleCounter: '52/60',
    metaCounter: '148/160',
  },
} as const

function CheckIcon({ sm, lg }: { sm?: boolean; lg?: boolean }) {
  const box = lg ? (sm ? 'h-3.5 w-3.5' : 'h-5 w-5') : sm ? 'h-3 w-3' : 'h-4 w-4'
  const ico = lg ? (sm ? 'h-2.5 w-2.5' : 'h-3 w-3') : sm ? 'h-2 w-2' : 'h-2.5 w-2.5'
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ${box}`}>
      <svg className={ico} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  )
}

function WarnIcon({ sm, lg }: { sm?: boolean; lg?: boolean }) {
  const box = lg ? (sm ? 'h-3.5 w-3.5' : 'h-5 w-5') : sm ? 'h-3 w-3' : 'h-4 w-4'
  const ico = lg ? (sm ? 'h-2.5 w-2.5' : 'h-3 w-3') : sm ? 'h-2 w-2' : 'h-2.5 w-2.5'
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-700 ${box}`}>
      <svg className={ico} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    </span>
  )
}

type Props = { large?: boolean }

export default function FallstudieSeoDashboard({ large = false }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const introStaggerRef = useRef(true)
  const [run, setRun] = useState(false)
  const [phase, setPhase] = useState<Phase>('after')

  const donutGradientGoodId = useId().replace(/:/g, '')
  const donutGradientWarnId = useId().replace(/:/g, '')

  const donutR = large ? 40 : 34
  const donutPx = large ? 96 : 72
  const vb = large ? 96 : 80
  const center = large ? 48 : 40
  const strokeW = large ? 9 : 8
  const c = 2 * Math.PI * donutR

  const m = METRICS[phase]
  const isAfter = phase === 'after'
  const donutOffset =
    run && c > 0 ? c * (1 - m.readability / 100) : c

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const reduced =
      typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    const start = () => setRun(true)

    if (reduced) {
      start()
      return
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          start()
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '60px 0px' }
    )
    io.observe(el)

    const fallback = window.setTimeout(start, 1800)
    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  useEffect(() => {
    if (!run) return
    const t = window.setTimeout(() => {
      introStaggerRef.current = false
    }, 2200)
    return () => window.clearTimeout(t)
  }, [run])

  const stagger = (i: number) =>
    run && introStaggerRef.current && phase === 'after' ? `${120 + i * 90}ms` : '0ms'

  const t = {
    shell: large
      ? 'w-full min-w-0 max-w-full rounded-2xl border border-indigo-200/90 bg-white p-4 shadow-md shadow-indigo-900/[0.06] ring-1 ring-indigo-100 sm:p-5 lg:rounded-3xl lg:p-6 lg:shadow-lg'
      : 'w-full max-w-[380px] rounded-2xl border border-indigo-200/90 bg-white p-3 shadow-lg shadow-indigo-900/10 ring-1 ring-indigo-100/80 sm:p-4',
    winDots: large ? 'h-2.5 w-2.5' : 'h-2 w-2',
    winLabel: large ? 'text-[11px] sm:text-xs' : 'text-[10px]',
    sectionPad: large ? 'p-3 sm:p-4' : 'p-2.5 sm:p-3',
    label: large ? 'text-xs sm:text-[13px]' : 'text-[11px]',
    icon: large ? 'h-4 w-4 sm:h-[18px] sm:w-[18px]' : 'h-3.5 w-3.5',
    titleBody: large ? 'px-3 py-2.5 text-xs sm:text-sm' : 'px-2.5 py-2 text-[11px]',
    structureRow: large ? 'text-[11px] sm:text-xs' : 'text-[10px]',
    barH: large ? 'h-2' : 'h-1.5',
    metaBody: large ? 'px-3 py-2.5 text-[11px] sm:text-xs leading-relaxed' : 'px-2.5 py-2 text-[10px] leading-relaxed',
    donutNum: large ? 'text-xl sm:text-2xl' : 'text-lg',
    smallNote: large ? 'text-[11px] sm:text-xs' : 'text-[10px]',
    kwBar: large ? 'h-2.5' : 'h-2',
    kwKnob: large ? 'h-3.5 w-3.5' : 'h-3 w-3',
    spaceY: large ? 'space-y-3 sm:space-y-3.5' : 'space-y-2.5',
    gridGap: large ? 'gap-3 sm:gap-3.5' : 'gap-2.5',
    innerGap: large ? 'gap-3' : 'gap-2.5',
    /** Feste Mindesthöhen: kein Layout-Shift beim Vorher/Nachher-Wechsel */
    titleBlockMinH: large ? 'min-h-[5rem] sm:min-h-[5.25rem]' : 'min-h-[3.5rem]',
    metaBlockMinH: large ? 'min-h-[4.35rem] sm:min-h-[4.65rem]' : 'min-h-[3.85rem]',
    tabRowMinH: large ? '' : 'min-h-[2.75rem]',
    hintRowMinH: large ? 'min-h-[1.375rem]' : 'min-h-[1.125rem]',
  }

  const knobHalf = large ? 7 : 6
  const kwBarPct = m.keywordBarPct
  const kwKnobLeft = run ? `calc(${kwBarPct}% - ${knobHalf}px)` : `-${knobHalf}px`

  return (
    <div
      ref={rootRef}
      className={`fallstudie-seo-dashboard ${t.shell}`}
      role="region"
      aria-label="Vergleich: OnPage SEO vor und nach der Optimierung (Demo)"
    >
      <div className={`mb-3 flex items-center gap-2 border-b border-indigo-100 pb-3 ${large ? 'sm:pb-3.5' : 'pb-2.5'}`}>
        <span className={`${t.winDots} rounded-full bg-red-400/90`} />
        <span className={`${t.winDots} rounded-full bg-amber-400/90`} />
        <span className={`${t.winDots} rounded-full bg-emerald-500/90`} />
        <span className={`ml-1 font-semibold uppercase tracking-wider text-indigo-500 ${t.winLabel}`}>
          OnPage-Analyse · Demo
        </span>
      </div>

      {/* Vorher / Nachher */}
      {large ? (
        <div className="mb-3 min-w-0 sm:mb-4" role="tablist" aria-label="Zeitpunkt der Analyse">
          <p className="m-0 mb-2 text-xs font-medium text-zinc-600 sm:text-sm">OnPage-Status im Vergleich</p>
          <div className="flex min-w-0 gap-1 rounded-2xl border border-indigo-200/80 bg-indigo-50/70 p-1 shadow-inner">
            <button
              type="button"
              role="tab"
              aria-selected={phase === 'before'}
              className={`min-w-0 flex-1 rounded-xl px-2 py-2 text-center transition-all duration-300 sm:px-3 ${
                phase === 'before'
                  ? 'bg-white text-amber-900 shadow-sm ring-1 ring-amber-200/90'
                  : 'text-indigo-600/85 hover:bg-white/60 hover:text-indigo-800'
              }`}
              onClick={() => {
                introStaggerRef.current = false
                setPhase('before')
              }}
            >
              <span className="block text-xs font-semibold leading-tight sm:text-sm">Vorher</span>
              <span className="mt-0.5 block text-[10px] font-normal leading-snug text-zinc-500 sm:text-[11px]">
                Projektstart
              </span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={phase === 'after'}
              className={`min-w-0 flex-1 rounded-xl px-2 py-2 text-center transition-all duration-300 sm:px-3 ${
                phase === 'after'
                  ? 'bg-white text-indigo-900 shadow-sm ring-1 ring-indigo-200/90'
                  : 'text-indigo-600/85 hover:bg-white/60 hover:text-indigo-800'
              }`}
              onClick={() => {
                introStaggerRef.current = false
                setPhase('after')
              }}
            >
              <span className="block text-xs font-semibold leading-tight sm:text-sm">Nachher</span>
              <span className="mt-0.5 block text-[10px] font-normal leading-snug text-zinc-500 sm:text-[11px]">
                Monat 5
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between ${t.tabRowMinH}`}
          role="tablist"
          aria-label="Zeitpunkt der Analyse"
        >
          <p className="m-0 shrink-0 font-medium text-zinc-600 sm:min-w-0 text-[10px] sm:text-xs">
            OnPage-Status im Vergleich
          </p>
          <div className="inline-flex min-w-0 max-w-full shrink-0 rounded-full border border-indigo-200/80 bg-indigo-50/60 p-0.5 text-[10px] shadow-inner sm:text-xs">
            <button
              type="button"
              role="tab"
              aria-selected={phase === 'before'}
              className={`min-w-0 rounded-full px-2 py-1.5 font-semibold transition-all duration-300 sm:px-4 ${
                phase === 'before'
                  ? 'bg-white text-amber-800 shadow-sm ring-1 ring-amber-200/80'
                  : 'text-indigo-600/80 hover:text-indigo-800'
              }`}
              onClick={() => {
                introStaggerRef.current = false
                setPhase('before')
              }}
            >
              Vorher
              <span className="hidden font-normal text-zinc-500 sm:inline"> · Start</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={phase === 'after'}
              className={`min-w-0 rounded-full px-2 py-1.5 font-semibold transition-all duration-300 sm:px-4 ${
                phase === 'after'
                  ? 'bg-white text-indigo-800 shadow-sm ring-1 ring-indigo-200/80'
                  : 'text-indigo-600/80 hover:text-indigo-800'
              }`}
              onClick={() => {
                introStaggerRef.current = false
                setPhase('after')
              }}
            >
              Nachher
              <span className="hidden font-normal text-zinc-500 sm:inline"> · M.&nbsp;5</span>
            </button>
          </div>
        </div>
      )}

      <div className={t.spaceY}>
        <div
          className={`rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50/80 to-white shadow-sm transition-colors duration-500 ${t.sectionPad} sm:rounded-2xl ${
            !isAfter ? 'border-amber-200/60 from-amber-50/40' : ''
          }`}
        >
          <div className="mb-2 flex items-center justify-between gap-2 sm:mb-2.5">
            <div className={`flex items-center gap-2 font-semibold text-indigo-900 ${t.label}`}>
              <svg className={`${t.icon} shrink-0 text-indigo-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Title Tag
            </div>
            <div className={`flex items-center gap-1.5 ${t.smallNote} ${isAfter ? 'text-emerald-700' : 'text-amber-800'}`}>
              <span
                className={`tabular-nums font-medium ${isAfter ? 'text-indigo-600' : 'text-amber-700'}`}
              >
                {m.titleCounter}
              </span>
              {isAfter ? <CheckIcon lg={large} /> : <WarnIcon lg={large} />}
            </div>
          </div>
          <p
            key={phase + '-title'}
            className={`rounded-lg border font-medium leading-snug shadow-inner transition-colors duration-500 ${t.titleBody} ${t.titleBlockMinH} ${
              isAfter
                ? 'border-indigo-100/80 bg-white text-zinc-800'
                : 'border-amber-200/70 bg-amber-50/30 text-zinc-700'
            }`}
          >
            {isAfter ? TITLE_AFTER : TITLE_BEFORE}
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${t.gridGap}`}>
          <div
            className={`rounded-xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50/50 shadow-sm transition-colors duration-500 ${t.sectionPad} sm:rounded-2xl ${
              !isAfter ? 'border-amber-200/50 to-amber-50/20' : ''
            }`}
          >
            <div className="mb-2 flex items-center justify-between sm:mb-2.5">
              <div className={`flex items-center gap-2 font-semibold text-indigo-900 ${t.label}`}>
                <svg className={`${t.icon} shrink-0 text-violet-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Struktur
              </div>
              {isAfter ? <CheckIcon lg={large} /> : <WarnIcon lg={large} />}
            </div>
            <ul className={large ? 'space-y-2.5' : 'space-y-2'}>
              {STRUCTURE_ROWS.map((row, i) => {
                const pct = run ? (isAfter ? row.pctAfter : row.pctBefore) : 0
                const color = isAfter ? row.colorAfter : row.colorBefore
                const label = isAfter ? row.labelAfter : row.labelBefore
                return (
                  <li key={`${row.tag}-${i}`} className={t.structureRow}>
                    <div className="mb-1 flex justify-between gap-2 text-zinc-600">
                      <span className="font-mono font-semibold text-indigo-600">{row.tag}</span>
                      <span className="min-w-0 truncate text-zinc-500">{label}</span>
                    </div>
                    <div className={`overflow-hidden rounded-full bg-indigo-100/90 ring-1 ring-indigo-200/40 ${t.barH}`}>
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${color} transition-[width] duration-[900ms] ease-out`}
                        style={{
                          width: `${pct}%`,
                          transitionDelay: stagger(i),
                        }}
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={`flex flex-col ${t.innerGap}`}>
            <div
              className={`flex flex-1 items-center rounded-xl border border-indigo-100 bg-gradient-to-br from-white to-blue-50/40 shadow-sm transition-colors duration-500 ${t.sectionPad} sm:rounded-2xl ${
                !isAfter ? 'border-amber-200/50 to-amber-50/25' : ''
              }`}
            >
              <div className="relative shrink-0" style={{ width: donutPx, height: donutPx }}>
                <svg className="-rotate-90" width={donutPx} height={donutPx} viewBox={`0 0 ${vb} ${vb}`} aria-hidden>
                  <circle cx={center} cy={center} r={donutR} fill="none" stroke="rgb(224 231 255)" strokeWidth={strokeW} />
                  <circle
                    cx={center}
                    cy={center}
                    r={donutR}
                    fill="none"
                    stroke={isAfter ? `url(#${donutGradientGoodId})` : `url(#${donutGradientWarnId})`}
                    strokeWidth={strokeW}
                    strokeLinecap="round"
                    strokeDasharray={c}
                    strokeDashoffset={donutOffset}
                    style={{
                      transition: 'stroke-dashoffset 1.1s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                  <defs>
                    <linearGradient id={donutGradientGoodId} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                    <linearGradient id={donutGradientWarnId} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                  </defs>
                </svg>
                <span
                  className={`absolute inset-0 flex items-center justify-center font-bold tabular-nums transition-colors duration-500 ${t.donutNum} ${
                    isAfter ? 'text-indigo-900' : 'text-amber-900'
                  }`}
                >
                  {m.readability}
                </span>
              </div>
              <div className="min-w-0 flex-1 pl-1 sm:pl-2">
                <div className={`flex items-center gap-2 font-semibold text-indigo-900 ${t.label}`}>
                  <svg className={`${t.icon} shrink-0 text-indigo-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Lesbarkeit
                </div>
                <p className={`mt-1 text-zinc-500 ${t.smallNote}`}>Flesch-Score</p>
                <p
                  className={`mt-1.5 flex items-center gap-1.5 font-medium ${t.smallNote} ${t.hintRowMinH} ${
                    isAfter ? 'text-emerald-700' : 'text-amber-800'
                  }`}
                >
                  {m.readabilityHint}
                  {isAfter ? <CheckIcon sm lg={large} /> : <WarnIcon sm lg={large} />}
                </p>
              </div>
            </div>

            <div
              className={`rounded-xl border border-indigo-100 bg-gradient-to-br from-white to-violet-50/30 shadow-sm transition-colors duration-500 ${t.sectionPad} sm:rounded-2xl ${
                !isAfter ? 'border-amber-200/50 to-amber-50/20' : ''
              }`}
            >
              <div className={`mb-2 flex items-center justify-between sm:mb-2.5 ${t.label}`}>
                <div className="flex items-center gap-2 font-semibold text-indigo-900">
                  <svg className={`${t.icon} shrink-0 text-indigo-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Keyword
                </div>
                <span
                  className={`tabular-nums font-semibold transition-colors duration-500 ${
                    isAfter ? 'text-indigo-600' : 'text-amber-700'
                  }`}
                >
                  {m.keywordPct}%
                </span>
              </div>
              <div className={`relative overflow-hidden rounded-full bg-indigo-100 ring-1 ring-indigo-200/50 ${t.kwBar}`}>
                <div
                  className={`absolute left-0 top-0 h-full rounded-full transition-[width] duration-[900ms] ease-out ${
                    isAfter ? 'bg-gradient-to-r from-indigo-600 to-violet-600' : 'bg-gradient-to-r from-amber-500 to-orange-500'
                  }`}
                  style={{
                    width: run ? `${kwBarPct}%` : '0%',
                    transitionDelay: stagger(4),
                  }}
                />
                <div
                  className={`absolute top-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md ring-1 transition-[left] duration-[900ms] ease-out ${t.kwKnob} ${
                    isAfter ? 'bg-indigo-500 ring-indigo-200' : 'bg-amber-500 ring-amber-200'
                  }`}
                  style={{
                    left: kwKnobLeft,
                    transitionDelay: stagger(4),
                  }}
                />
              </div>
              <p
                className={`mt-2 flex items-center gap-1.5 font-medium ${t.smallNote} ${t.hintRowMinH} ${
                  isAfter ? 'text-emerald-700' : 'text-amber-800'
                }`}
              >
                {m.keywordHint}
                {isAfter ? <CheckIcon sm lg={large} /> : <WarnIcon sm lg={large} />}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50/60 to-white shadow-sm transition-colors duration-500 ${t.sectionPad} sm:rounded-2xl ${
            !isAfter ? 'border-amber-200/60 from-amber-50/35' : ''
          }`}
        >
          <div className="mb-2 flex items-center justify-between sm:mb-2.5">
            <div className={`flex items-center gap-2 font-semibold text-indigo-900 ${t.label}`}>
              <svg className={`${t.icon} shrink-0 text-blue-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Meta Description
            </div>
            <div className={`flex items-center gap-1.5 ${t.smallNote} ${isAfter ? 'text-emerald-700' : 'text-amber-800'}`}>
              <span className={`tabular-nums font-medium ${isAfter ? 'text-indigo-600' : 'text-amber-700'}`}>
                {m.metaCounter}
              </span>
              {isAfter ? <CheckIcon lg={large} /> : <WarnIcon lg={large} />}
            </div>
          </div>
          <p
            key={phase + '-meta'}
            className={`line-clamp-3 rounded-lg border text-zinc-700 shadow-inner transition-colors duration-500 ${t.metaBody} ${t.metaBlockMinH} ${
              isAfter ? 'border-indigo-100/80 bg-white' : 'border-amber-200/70 bg-amber-50/30'
            }`}
          >
            {isAfter ? META_AFTER : META_BEFORE}
          </p>
        </div>
      </div>
    </div>
  )
}
