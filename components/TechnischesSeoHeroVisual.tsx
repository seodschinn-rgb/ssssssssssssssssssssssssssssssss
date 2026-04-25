'use client'

import { motion } from 'framer-motion'

function Gauge({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="grid grid-cols-[64px_1fr_44px] items-center gap-3">
      <div className="text-xs font-medium text-zinc-600">{label}</div>
      <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 ring-1 ring-zinc-200">
        <motion.div
          className={`h-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      </div>
      <div className="text-right text-xs font-semibold tabular-nums text-zinc-700">{value}</div>
    </div>
  )
}

export default function TechnischesSeoHeroVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none mx-auto mt-10 w-full max-w-3xl">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50" />
        <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="relative grid grid-cols-1 gap-6 p-6 sm:grid-cols-[1fr_260px] sm:p-8">
          {/* Left: CWV + checks */}
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
                    d="M11.25 6.75h9m-9 4.5h9m-9 4.5h9M3.75 7.5h3v3h-3v-3zm0 6h3v3h-3v-3z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900">Technisches SEO</p>
                <p className="text-xs text-zinc-500">Crawling • CWV • Rendering • Schema</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/70 ring-1 ring-zinc-200 backdrop-blur-sm p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold text-zinc-800">Core Web Vitals</p>
                <motion.span
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-600/15"
                  animate={{ opacity: [0.65, 1, 0.65] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Field Data
                </motion.span>
              </div>

              <div className="mt-3 space-y-2">
                <Gauge label="LCP" value={86} color="bg-indigo-600" />
                <Gauge label="INP" value={82} color="bg-indigo-500" />
                <Gauge label="CLS" value={91} color="bg-emerald-500" />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: 'Indexierung', text: 'Sitemap • Canonicals • noindex', tone: 'bg-indigo-600/10 text-indigo-800 ring-indigo-600/15' },
                { title: 'Rendering', text: 'SSR/SSG • JS-SEO • Hydration', tone: 'bg-emerald-600/10 text-emerald-800 ring-emerald-600/15' },
              ].map((card, idx) => (
                <motion.div
                  key={card.title}
                  className={`rounded-2xl p-4 ring-1 bg-white/70 backdrop-blur-sm ${card.tone}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.12 + idx * 0.08, ease: 'easeOut' }}
                >
                  <p className="text-xs font-semibold text-zinc-900">{card.title}</p>
                  <p className="mt-1 text-xs text-zinc-600">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: crawler + schema pulse */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-white/60 ring-1 ring-zinc-200 backdrop-blur-sm" />
            <div className="relative p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-zinc-700">Crawler</p>
                <motion.div
                  className="h-2 w-2 rounded-full bg-indigo-600"
                  animate={{ opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              <motion.div
                className="mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 p-4 shadow-lg shadow-indigo-600/20"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20"
                    animate={{ rotate: [0, 8, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2v3m0 14v3M4.93 4.93l2.12 2.12m9.9 9.9 2.12 2.12M2 12h3m14 0h3M4.93 19.07l2.12-2.12m9.9-9.9 2.12-2.12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 16a4 4 0 100-8 4 4 0 000 8z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </motion.div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-white">GSC + Logs + AI Bots</p>
                    <p className="mt-1 text-xs text-indigo-100">GPTBot • ClaudeBot • OAI‑SearchBot</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {[
                    { label: 'Sitemap OK', color: 'bg-emerald-400' },
                    { label: 'robots.txt OK', color: 'bg-emerald-400' },
                    { label: 'Schema valid', color: 'bg-amber-300' },
                  ].map((row, idx) => (
                    <motion.div
                      key={row.label}
                      className="flex items-center gap-2 text-xs text-white/95"
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.25 + idx * 0.08, ease: 'easeOut' }}
                    >
                      <span className={`h-2 w-2 rounded-full ${row.color}`} />
                      <span className="truncate">{row.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="mt-4 rounded-2xl bg-white/70 ring-1 ring-zinc-200 backdrop-blur-sm p-4"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.25, ease: 'easeOut' }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-zinc-800">Schema (JSON‑LD)</p>
                  <motion.span
                    className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-[11px] font-semibold text-indigo-700 ring-1 ring-indigo-600/15"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    valid
                  </motion.span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {['LocalBusiness', 'FAQPage', 'Service'].map((t, idx) => (
                    <motion.div
                      key={t}
                      className="rounded-xl bg-zinc-50 px-2.5 py-2 text-center text-[11px] font-semibold text-zinc-700 ring-1 ring-zinc-200"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.06, ease: 'easeOut' }}
                    >
                      {t}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

