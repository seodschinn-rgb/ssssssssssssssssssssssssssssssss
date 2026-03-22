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

export default function BlogCategoriesGrid() {
  return (
    <section className="relative overflow-hidden px-6 py-16" aria-labelledby="blog-categories-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50/50 to-blue-50/30" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-200/20 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 id="blog-categories-heading" className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            Blog-Themen entdecken
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-600">
            Wählen Sie eine Kategorie – hier erscheinen künftig Artikel zu SEO, Local SEO, Content und mehr.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BLOG_CATEGORIES.map((cat, i) => {
            const colors = colorStyles[colorKeys[i % colorKeys.length]]
            return (
              <article key={cat.slug}>
                <Link
                  href={`/blog/${cat.slug}`}
                  className={`group flex h-full flex-col rounded-2xl border-2 bg-white p-6 shadow-md ${colors.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <span
                    className={`mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.icon} transition-all duration-300`}
                  >
                    <LeistungIcons icon={cat.icon as IconName} className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 transition-colors group-hover:text-zinc-800">{cat.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600">{cat.shortDescription}</p>
                  <span
                    className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3 ${colors.link}`}
                  >
                    Artikel anzeigen
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
