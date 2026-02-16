'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const pakete = [
  {
    id: 'starter',
    name: 'Starter',
    beschreibung: 'Ideal für den Einstieg und kleine Websites.',
    preis: 990,
    zeile: 'pro Monat',
    features: [
      'SEO-Audit beim Einstieg',
      'Bis zu 20 Keywords',
      '2 qualitative Blogbeiträge pro Monat',
      'Bis zu 5 Produktbeschreibungen (SEO-optimiert)',
      '1 Betreuungscall pro Monat (30 Min.)',
      'OnPage-Optimierung & technisches SEO-Check',
      'Monatliches Reporting',
      'E-Mail-Support',
    ],
    highlight: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    beschreibung: 'Für wachsende Unternehmen mit mehr Sichtbarkeit.',
    preis: 1590,
    zeile: 'pro Monat',
    features: [
      'SEO-Audit beim Einstieg',
      'Bis zu 50 Keywords',
      '5 qualitative Blogbeiträge pro Monat',
      'Bis zu 10 Produktbeschreibungen',
      '2 Betreuungscalls pro Monat (je 30 Min.)',
      'Keyword-Recherche & Strategie',
      'OnPage + technisches SEO',
      'Google Business Optimierung',
      'Monatliches Reporting',
      'Telefon-Support',
    ],
    highlight: false,
  },
  {
    id: 'business',
    name: 'Business',
    beschreibung: 'Unser beliebtestes Paket für mittelständische Unternehmen.',
    preis: 2390,
    zeile: 'pro Monat',
    features: [
      'SEO-Audit beim Einstieg',
      'Bis zu 100 Keywords',
      '10 qualitative Blogbeiträge pro Monat',
      'Bis zu 18 Produktbeschreibungen',
      '2 Betreuungscalls pro Monat (je 45 Min.)',
      'Vollständige SEO-Strategie',
      'Local SEO & Google Maps',
      'Linkaufbau (bis 5 Links/Monat)',
      'Wöchentliches Reporting',
      'Dedizierter Ansprechpartner',
    ],
    highlight: true,
  },
  {
    id: 'professional',
    name: 'Professional',
    beschreibung: 'Umfassende Betreuung für ambitionierte Ziele.',
    preis: 2590,
    zeile: 'pro Monat',
    features: [
      'SEO-Audit beim Einstieg',
      'Bis zu 200 Keywords',
      '15 qualitative Blogbeiträge pro Monat',
      'Bis zu 22 Produktbeschreibungen',
      '3 Betreuungscalls pro Monat (je 45 Min.)',
      'Komplettes SEO-Paket & intensiver Linkaufbau',
      'Content-Strategie & redaktionelle Begleitung',
      'Wettbewerbsanalyse',
      'Wöchentliches Reporting',
      'Prioritäts-Support',
    ],
    highlight: false,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    beschreibung: 'Komplettbetreuung für große Projekte.',
    preis: 2990,
    zeile: 'pro Monat',
    features: [
      'SEO-Audit beim Einstieg',
      'Unbegrenzte Keywords',
      '25 qualitative Blogbeiträge pro Monat',
      'Bis zu 25 Produktbeschreibungen',
      'Wöchentliche Betreuungscalls (je 60 Min.)',
      'Dedizierter SEO-Manager',
      'Strategie-Workshops & Multi-Standort-SEO',
      'Tägliches Monitoring',
      'Direkter Ansprechpartner',
    ],
    highlight: false,
  },
]

export default function PreisePageContent() {
  return (
    <section className="pt-28 pb-24 px-6">
      <div className="absolute inset-0 top-0 h-64 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Preise</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mt-2">
            Transparente SEO-Pakete
          </h1>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            Wählen Sie das Paket, das zu Ihren Zielen passt. In jedem Paket enthalten: qualitative Blogbeiträge, 
            SEO-optimierte Produktbeschreibungen und regelmäßige Betreuungscalls. Alle Preise als monatlicher Retainer – 
            ohne versteckte Kosten. Mindestlaufzeit in der Regel 6 Monate.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="inline-flex items-center gap-2 text-zinc-600">
              <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
              </span>
              Qualitative Blogbeiträge
            </span>
            <span className="inline-flex items-center gap-2 text-zinc-600">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </span>
              Produktbeschreibungen (SEO)
            </span>
            <span className="inline-flex items-center gap-2 text-zinc-600">
              <span className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </span>
              Betreuungscalls
            </span>
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-indigo-600 font-medium hover:text-indigo-700">
              Blog ansehen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pakete.map((paket, i) => (
            <motion.article
              key={paket.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative rounded-2xl border-2 bg-white p-6 sm:p-7 flex flex-col ${
                paket.highlight
                  ? 'border-indigo-500 shadow-xl shadow-indigo-500/15 ring-2 ring-indigo-500/20'
                  : 'border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow-md transition-all'
              }`}
            >
              {paket.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-semibold">
                  Beliebt
                </div>
              )}
              <div className="mb-4">
                <h2 className="text-xl font-bold text-zinc-900">{paket.name}</h2>
                <p className="mt-1 text-sm text-zinc-500">{paket.beschreibung}</p>
              </div>
              <div className="mt-auto">
                <p className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-zinc-900">{paket.preis.toLocaleString('de-DE')} €</span>
                  <span className="text-sm text-zinc-500">{paket.zeile}</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {paket.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-zinc-700">
                      <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kontakt"
                  className={`mt-6 block w-full text-center rounded-xl py-3.5 text-sm font-semibold transition-all ${
                    paket.highlight
                      ? 'bg-indigo-500 text-white hover:bg-indigo-600 shadow-md'
                      : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
                  }`}
                >
                  Anfragen
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-zinc-500 mb-6">
            Individuelle Wünsche? Wir erstellen Ihnen gerne ein maßgeschneidertes Angebot.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-200"
          >
            Kostenloses SEO-Gespräch
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
