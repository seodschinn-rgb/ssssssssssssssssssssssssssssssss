'use client'

/**
 * OnPage-Dashboard-Demo – bewusst „leicht“:
 * kein framer-motion `animate()`, kein filter:blur, kein backdrop-blur, keine Endlos-Shadows
 * (verhindert Abstürze / weiße Seite in manchen Browsern/Windows-Setups).
 */
import { motion } from 'framer-motion'
import { Component, type ReactNode, useEffect, useId, useState } from 'react'
import { SeoRankingVisual } from './ModernGraphics'

function useTickCount(target: number, durationMs: number) {
  const [v, setV] = useState(0)
  useEffect(() => {
    const steps = 24
    let frame = 0
    const id = setInterval(() => {
      frame++
      setV(Math.min(target, Math.round((target * frame) / steps)))
      if (frame >= steps) clearInterval(id)
    }, Math.max(16, Math.floor(durationMs / steps)))
    return () => clearInterval(id)
  }, [target, durationMs])
  return v
}

const structureRows = [
  { tag: 'H1' as const, label: 'SEO München', pct: 100, bar: 'from-sky-400 to-cyan-300' },
  { tag: 'H2' as const, label: 'Unsere Leistungen', pct: 76, bar: 'from-violet-400 to-fuchsia-400' },
  { tag: 'H3' as const, label: 'OnPage SEO', pct: 62, bar: 'from-emerald-400 to-teal-300' },
  { tag: 'H3' as const, label: 'Technical SEO', pct: 58, bar: 'from-emerald-400 to-teal-300' },
  { tag: 'H2' as const, label: 'Über uns', pct: 74, bar: 'from-violet-400 to-indigo-400' },
]

function SeoOnPageDashboardVisualInner() {
  const gid = useId().replace(/:/g, '')
  const fleschGradId = `flesch-${gid}`

  const titleNum = useTickCount(48, 700)
  const metaNum = useTickCount(148, 900)
  const linksNum = useTickCount(12, 500)
  const altNum = useTickCount(8, 400)
  const [kwDisplay, setKwDisplay] = useState('0,0')
  useEffect(() => {
    let n = 0
    const id = setInterval(() => {
      n += 1
      const t = Math.min(2.5, (2.5 * n) / 15)
      setKwDisplay(t.toFixed(1).replace('.', ','))
      if (n >= 15) clearInterval(id)
    }, 40)
    return () => clearInterval(id)
  }, [])

  const r = 28
  const c = 2 * Math.PI * r
  const fleschFrac = 0.72
  const [flesch, setFlesch] = useState(0)
  useEffect(() => {
    let n = 0
    const id = setInterval(() => {
      n += 1
      setFlesch(Math.min(72, Math.round((72 * n) / 20)))
      if (n >= 20) clearInterval(id)
    }, 45)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <span className="sr-only">Demo: OnPage-SEO-Übersicht</span>

      <div className="relative overflow-hidden rounded-2xl border border-indigo-400/30 bg-zinc-950 p-2.5 shadow-lg sm:p-3">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '12px 12px',
          }}
        />

        <div className="relative z-[1] space-y-2">
          <div className="rounded-xl border border-indigo-400/20 bg-zinc-900/90 p-2">
            <div className="mb-1 flex items-center justify-between gap-1">
              <span className="text-[9px] font-bold uppercase tracking-wide text-indigo-200/90">Title Tag</span>
              <span className="font-mono text-[9px] font-semibold text-emerald-400">
                {titleNum}/60 ✓
              </span>
            </div>
            <p className="rounded-lg bg-black/50 px-2 py-1.5 text-[9px] leading-snug text-zinc-200 ring-1 ring-white/10">
              SEO München: Lokale Suchmaschinenoptimierung
            </p>
          </div>

          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,46%)] gap-2">
            <div className="row-span-2 rounded-xl border border-indigo-400/20 bg-zinc-900/90 p-2">
              <div className="mb-1.5 text-[9px] font-bold uppercase text-indigo-200/90">Structure ✓</div>
              <div className="space-y-1.5">
                {structureRows.map((row, i) => (
                  <div key={`${row.tag}-${row.label}`} className="grid grid-cols-[22px_1fr] items-center gap-1">
                    <span
                      className={`text-[8px] font-extrabold ${
                        row.tag === 'H1' ? 'text-sky-300' : row.tag === 'H2' ? 'text-violet-300' : 'text-emerald-300'
                      }`}
                    >
                      {row.tag}
                    </span>
                    <div>
                      <span className="mb-0.5 block truncate text-[8px] text-zinc-500">{row.label}</span>
                      <div className="h-[5px] overflow-hidden rounded-full bg-black/60">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${row.bar}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${row.pct}%` }}
                          transition={{ duration: 0.6, delay: 0.05 + i * 0.06, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-indigo-400/20 bg-zinc-900/90 py-2">
              <span className="text-[8px] font-bold text-indigo-200/80">Readability</span>
              <span className="text-[7px] text-zinc-500">Flesch</span>
              <div className="relative my-1 h-[60px] w-[60px]">
                <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
                  <defs>
                    <linearGradient id={fleschGradId} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(39,39,42,0.95)" strokeWidth="7" />
                  <motion.circle
                    cx="32"
                    cy="32"
                    r={r}
                    fill="none"
                    stroke={`url(#${fleschGradId})`}
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={c}
                    initial={{ strokeDashoffset: c }}
                    animate={{ strokeDashoffset: c * (1 - fleschFrac) }}
                    transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-mono text-base font-bold text-emerald-300">
                  {flesch}
                </span>
              </div>
              <span className="text-[7px] text-emerald-400">Gut lesbar ✓</span>
            </div>

            <div className="rounded-xl border border-indigo-400/20 bg-zinc-900/90 p-2">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[8px] font-bold text-indigo-200/80">Keyword</span>
                <span className="font-mono text-[9px] font-bold text-sky-300">{kwDisplay}%</span>
              </div>
              <div className="relative h-2 overflow-hidden rounded-full bg-black/60">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400"
                  initial={{ width: '0%' }}
                  animate={{ width: '54%' }}
                  transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                />
              </div>
              <span className="mt-1 text-[7px] text-emerald-400">Optimal ✓</span>
            </div>
          </div>

          <div className="rounded-xl border border-indigo-400/20 bg-zinc-900/90 p-2">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase text-indigo-200/90">Meta</span>
              <span className="font-mono text-[9px] text-emerald-400">
                {metaNum}/160 ✓
              </span>
            </div>
            <p className="rounded-lg bg-black/50 px-2 py-1.5 text-[8px] leading-relaxed text-zinc-400 ring-1 ring-white/10">
              SEO München bietet professionelle Suchmaschinenoptimierung für lokale Unternehmen…
            </p>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            <div className="rounded-xl border border-indigo-400/15 bg-zinc-900/80 px-1 py-2 text-center">
              <div className="font-mono text-sm font-bold text-sky-300">{linksNum}</div>
              <div className="mt-0.5 text-[7px] font-semibold uppercase text-zinc-500">Links</div>
            </div>
            <div className="rounded-xl border border-indigo-400/15 bg-zinc-900/80 px-1 py-2 text-center">
              <div className="font-mono text-sm font-bold text-emerald-300">
                {altNum}/8
              </div>
              <div className="mt-0.5 text-[7px] font-semibold uppercase text-zinc-500">Alt</div>
            </div>
            <div className="rounded-xl border border-indigo-400/15 bg-zinc-900/80 px-1 py-2 text-center">
              <div className="bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text font-mono text-sm font-extrabold text-transparent">
                A+
              </div>
              <div className="mt-0.5 text-[7px] font-semibold uppercase text-zinc-500">Schema</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type BState = { hasError: boolean }

class DashboardErrorBoundary extends Component<{ children: ReactNode }, BState> {
  state: BState = { hasError: false }

  static getDerivedStateFromError(): BState {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto w-full max-w-[300px]">
          <p className="mb-2 text-center text-[10px] text-zinc-500">Ranking-Übersicht (Fallback)</p>
          <SeoRankingVisual compact />
        </div>
      )
    }
    return this.props.children
  }
}

/** Für ScreenshotsSection: Dashboard mit automatischem Fallback auf Ranking-Chart */
export function SeoOnPageDashboardVisual() {
  return (
    <DashboardErrorBoundary>
      <SeoOnPageDashboardVisualInner />
    </DashboardErrorBoundary>
  )
}
