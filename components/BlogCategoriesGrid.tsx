'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BLOG_CATEGORIES } from '@/lib/blog-categories'
import LeistungIcons from './LeistungIcons'

type IconName = 'search' | 'map' | 'cog' | 'chart' | 'link' | 'document'

const colorStyles: Record<string, { icon: string; border: string; link: string }> = {
  blue: { icon: 'bg-blue-500/15 text-blue-600 group-hover:bg-blue-500 group-hover:text-white', border: 'border-blue-200 hover:border-blue-400', link: 'text-blue-600' },
  emerald: { icon: 'bg-emerald-500/15 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white', border: 'border-emerald-200 hover:border-emerald-400', link: 'text-emerald-600' },
  violet: { icon: 'bg-violet-500/15 text-violet-600 group-hover:bg-violet-500 group-hover:text-white', border: 'border-violet-200 hover:border-violet-400', link: 'text-violet-600' },
  amber: { icon: 'bg-amber-500/15 text-amber-600 group-hover:bg-amber-500 group-hover:text-white', border: 'border-amber-200 hover:border-amber-400', link: 'text-amber-600' },
  rose: { icon: 'bg-rose-500/15 text-rose-600 group-hover:bg-rose-500 group-hover:text-white', border: 'border-rose-200 hover:border-rose-400', link: 'text-rose-600' },
  cyan: { icon: 'bg-cyan-500/15 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white', border: 'border-cyan-200 hover:border-cyan-400', link: 'text-cyan-600' },
  indigo: { icon: 'bg-indigo-500/15 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white', border: 'border-indigo-200 hover:border-indigo-400', link: 'text-indigo-600' },
  teal: { icon: 'bg-teal-500/15 text-teal-600 group-hover:bg-teal-500 group-hover:text-white', border: 'border-teal-200 hover:border-teal-400', link: 'text-teal-600' },
}

const colorKeys = ['blue', 'emerald', 'violet', 'amber', 'rose', 'cyan', 'indigo', 'teal'] as const

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function BlogCategoriesGrid() {
  return (
    <section className="py-16 px-6 relative overflow-hidden" aria-labelledby="blog-categories-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50/50 to-blue-50/30" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 id="blog-categories-heading" className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Blog-Themen entdecken
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            Wählen Sie eine Kategorie – hier erscheinen künftig Artikel zu SEO, Local SEO, Content und mehr.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {BLOG_CATEGORIES.map((cat, i) => {
            const colors = colorStyles[colorKeys[i % colorKeys.length]]
            return (
              <motion.article key={cat.slug} variants={item}>
                <Link
                  href={`/blog/${cat.slug}`}
                  className={`group flex flex-col h-full rounded-2xl bg-white p-6 shadow-md border-2 ${colors.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                >
                  <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.icon} transition-all duration-300 mb-4 shrink-0`}>
                    <LeistungIcons icon={cat.icon as IconName} className="w-6 h-6" />
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-zinc-800 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-zinc-600 text-sm leading-relaxed line-clamp-3">
                    {cat.shortDescription}
                  </p>
                  <span className={`mt-4 inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all ${colors.link}`}>
                    Artikel anzeigen
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
