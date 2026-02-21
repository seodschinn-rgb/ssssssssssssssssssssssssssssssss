'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import type { BlogPost } from '@/lib/blog-posts'
import type { BlogCategory } from '@/lib/blog-categories'

const FILTER_ALL = 'alle'

interface BlogPostListProps {
  posts: BlogPost[]
  categories: BlogCategory[]
}

export default function BlogPostList({ posts, categories }: BlogPostListProps) {
  const [activeFilter, setActiveFilter] = useState<string>(FILTER_ALL)

  const filteredPosts =
    activeFilter === FILTER_ALL
      ? posts
      : posts.filter((p) => p.category === activeFilter)

  return (
    <section className="py-12 px-6" aria-labelledby="blog-posts-heading">
      <div className="mx-auto max-w-4xl">
        <h2 id="blog-posts-heading" className="sr-only">
          Blog-Artikel
        </h2>

        {/* Kategorien-Filter */}
        <div className="mb-10">
          <p className="text-sm font-medium text-zinc-500 mb-3">Kategorie filtern</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter(FILTER_ALL)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeFilter === FILTER_ALL
                  ? 'bg-indigo-600 text-white'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              Alle
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setActiveFilter(cat.slug)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeFilter === cat.slug
                    ? 'bg-indigo-600 text-white'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Artikel-Liste */}
        {filteredPosts.length > 0 ? (
          <ul className="space-y-5 md:space-y-6">
            <AnimatePresence mode="wait">
              {filteredPosts.map((post, index) => {
                const category = categories.find((c) => c.slug === post.category)
                return (
                  <motion.li
                    key={post.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, delay: index * 0.03 }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col md:flex-row overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm hover:border-indigo-200 hover:shadow-lg md:hover:shadow-xl transition-all duration-300"
                    >
                      {post.image && (
                        <div className="w-full md:w-96 md:min-w-[22rem] md:shrink-0 bg-zinc-50/50 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl flex items-center justify-center p-1.5 md:p-2">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={post.image}
                            alt={post.imageAlt ?? post.title}
                            className="w-full h-auto max-h-52 md:max-h-56 object-contain object-center"
                          />
                        </div>
                      )}
                      <div className="p-5 md:p-6 md:flex-1 flex flex-col md:justify-center">
                        {category && (
                          <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 mb-3 w-fit">
                            {category.title}
                          </span>
                        )}
                        <h3 className="text-lg md:text-xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-zinc-600 text-sm leading-relaxed line-clamp-2">
                          {post.metaDescription}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 group-hover:gap-3 transition-all w-fit">
                          Artikel lesen
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </ul>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-zinc-200 bg-zinc-50/50 py-16 px-8 text-center">
            <p className="text-zinc-600">
              In dieser Kategorie sind noch keine Artikel vorhanden.
            </p>
            <button
              type="button"
              onClick={() => setActiveFilter(FILTER_ALL)}
              className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Alle Artikel anzeigen
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
