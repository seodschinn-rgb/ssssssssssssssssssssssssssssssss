'use client'

import { motion } from 'framer-motion'

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      className={filled ? 'h-4 w-4 text-amber-400' : 'h-4 w-4 text-zinc-200'}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.539 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.783.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L1.044 9.397c-.783-.57-.38-1.81.588-1.81H5.81a1 1 0 00.95-.69l1.286-3.97z" />
    </svg>
  )
}

export default function LocalSeoHeroVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none mx-auto mt-10 w-full max-w-3xl">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50" />
        <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="relative p-6 sm:p-8">
          {/* Header line like Google business panel */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-white ring-1 ring-zinc-200 grid place-items-center">
                <svg
                  className="h-5 w-5 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 6-7.5 11-7.5 11s-7.5-5-7.5-11a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900">seomuenchen.com</p>
                <p className="text-xs text-zinc-500">Local SEO • München</p>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center justify-end gap-2">
                <span className="text-sm font-bold tabular-nums text-zinc-900">5,0</span>
                <div className="flex items-center gap-0.5">
                  <Star filled />
                  <Star filled />
                  <Star filled />
                  <Star filled />
                  <Star filled />
                </div>
              </div>
              <p className="text-xs text-zinc-500">Google Bewertungen</p>
            </div>
          </div>

          {/* Map pack style preview */}
          <div className="mt-6 grid gap-5 sm:grid-cols-[1fr_260px]">
            {/* Left: "knowledge panel" blocks */}
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Anrufen', tone: 'bg-indigo-600 text-white' },
                  { label: 'Route', tone: 'bg-white text-zinc-800 ring-1 ring-zinc-200' },
                  { label: 'Website', tone: 'bg-white text-zinc-800 ring-1 ring-zinc-200' },
                ].map((b, idx) => (
                  <motion.div
                    key={b.label}
                    className={`rounded-xl px-3 py-2 text-center text-xs font-semibold ${b.tone}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 + idx * 0.08, ease: 'easeOut' }}
                  >
                    {b.label}
                  </motion.div>
                ))}
              </div>

              <div className="rounded-2xl bg-white/70 ring-1 ring-zinc-200 backdrop-blur-sm p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-zinc-800">Standort-Signale</p>
                    <p className="text-xs text-zinc-600">NAP konsistent • Kategorien optimiert</p>
                  </div>
                  <span className="rounded-full bg-emerald-600/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-600/15">
                    Map Pack
                  </span>
                </div>

                <div className="mt-3 space-y-2">
                  {[
                    { label: 'Relevanz', value: 88, color: 'bg-indigo-600' },
                    { label: 'Distanz', value: 73, color: 'bg-indigo-500' },
                    { label: 'Prominenz', value: 81, color: 'bg-emerald-500' },
                  ].map((row, idx) => (
                    <div key={row.label} className="grid grid-cols-[88px_1fr_44px] items-center gap-3">
                      <div className="text-xs font-medium text-zinc-600">{row.label}</div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 ring-1 ring-zinc-200">
                        <motion.div
                          className={`h-full ${row.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${row.value}%` }}
                          transition={{ duration: 0.9, delay: 0.35 + idx * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                      <div className="text-right text-xs font-semibold tabular-nums text-zinc-700">
                        {row.value}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/70 ring-1 ring-zinc-200 backdrop-blur-sm p-4">
                  <p className="text-xs font-semibold text-zinc-800">Öffnungszeiten</p>
                  <p className="mt-1 text-xs text-zinc-600">Heute: 09:00–18:00</p>
                  <motion.div
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-600/15"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Jetzt geöffnet
                  </motion.div>
                </div>
                <div className="rounded-2xl bg-white/70 ring-1 ring-zinc-200 backdrop-blur-sm p-4">
                  <p className="text-xs font-semibold text-zinc-800">Rezensionen</p>
                  <p className="mt-1 text-xs text-zinc-600">Antwortquote • Textsignale</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      <Star filled />
                      <Star filled />
                      <Star filled />
                      <Star filled />
                      <Star filled />
                    </div>
                    <span className="text-xs font-semibold text-zinc-800">Top-Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: mini "map" card */}
            <div className="relative overflow-hidden rounded-2xl bg-white/70 ring-1 ring-zinc-200 backdrop-blur-sm">
              <div className="absolute inset-0">
                <svg
                  className="h-full w-full text-zinc-200"
                  viewBox="0 0 400 320"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M20 70 C 110 10, 180 130, 270 80 S 370 120, 390 40" stroke="currentColor" strokeWidth="2" />
                  <path d="M-10 210 C 70 180, 140 260, 220 220 S 330 230, 420 190" stroke="currentColor" strokeWidth="2" />
                  <path d="M70 0 L90 320" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
                  <path d="M220 0 L240 320" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
                  <path d="M0 120 L400 140" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
                  <path d="M0 260 L400 240" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
                </svg>
              </div>

              <div className="relative p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-zinc-700">Google Maps</p>
                  <span className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-[11px] font-semibold text-indigo-700 ring-1 ring-indigo-600/15">
                    München
                  </span>
                </div>

                <motion.div
                  className="mt-4 rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 p-4"
                  initial={{ y: 6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      className="mt-0.5 h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 grid place-items-center shadow-md shadow-indigo-600/20"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 6-7.5 11-7.5 11s-7.5-5-7.5-11a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </motion.div>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-zinc-900">SEO München • seomuenchen.com</p>
                      <p className="mt-1 text-xs text-zinc-600">Local SEO • Agentur</p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          <Star filled />
                          <Star filled />
                          <Star filled />
                          <Star filled />
                          <Star filled />
                        </div>
                        <span className="text-xs font-semibold text-zinc-800">Top‑3</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

