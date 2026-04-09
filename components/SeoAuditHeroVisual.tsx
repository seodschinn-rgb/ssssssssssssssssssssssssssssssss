'use client'

import { motion } from 'framer-motion'

export default function SeoAuditHeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none mx-auto mt-10 w-full max-w-3xl"
    >
      <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-white shadow-sm">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50" />
        <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="relative grid grid-cols-1 gap-6 p-6 sm:grid-cols-[1fr_260px] sm:p-8">
          {/* Left: checklist */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-indigo-600/10 ring-1 ring-indigo-600/15 flex items-center justify-center">
                <svg
                  className="h-5 w-5 text-indigo-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900">SEO-Audit Dashboard</p>
                <p className="text-xs text-zinc-500">6 Bereiche • priorisiert • umsetzbar</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: 'Technik', value: 92, color: 'bg-indigo-600' },
                { label: 'OnPage', value: 78, color: 'bg-indigo-500' },
                { label: 'Content', value: 66, color: 'bg-amber-500' },
                { label: 'Backlinks', value: 54, color: 'bg-amber-500' },
                { label: 'Local SEO', value: 71, color: 'bg-indigo-500' },
                { label: 'AI/GEO', value: 63, color: 'bg-emerald-500' },
              ].map((row, idx) => (
                <div key={row.label} className="grid grid-cols-[92px_1fr_44px] items-center gap-3">
                  <div className="text-xs font-medium text-zinc-600">{row.label}</div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 ring-1 ring-zinc-200">
                    <motion.div
                      className={`h-full ${row.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${row.value}%` }}
                      transition={{ duration: 0.9, delay: 0.15 + idx * 0.07, ease: 'easeOut' }}
                    />
                  </div>
                  <div className="text-right text-xs font-semibold tabular-nums text-zinc-700">
                    {row.value}%
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-600/15">
                Quick Wins
              </span>
              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-500/20">
                Priorität: Hoch
              </span>
              <span className="rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-600/15">
                AI-Readiness
              </span>
            </div>
          </div>

          {/* Right: animated check / pulse */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-white/60 ring-1 ring-zinc-200 backdrop-blur-sm" />
            <div className="relative p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-zinc-700">Status</p>
                <motion.div
                  className="h-2 w-2 rounded-full bg-emerald-500"
                  animate={{ opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              <motion.div
                className="mt-4 grid place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 shadow-lg shadow-indigo-600/20"
                initial={{ y: 0 }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.svg
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                  initial={{ scale: 0.98 }}
                  animate={{ scale: [0.98, 1.02, 0.98] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
                    stroke="currentColor"
                    strokeWidth="2.0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                  />
                </motion.svg>
              </motion.div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                  <span className="text-xs text-zinc-600">Crawl abgeschlossen</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-xs text-zinc-600">Issues priorisiert</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs text-zinc-600">Plan bereit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

