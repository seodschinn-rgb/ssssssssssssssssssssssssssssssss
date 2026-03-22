'use client'

import { useState } from 'react'
import Link from 'next/link'
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
    activeFilter === FILTER_ALL ? posts : posts.filter((p) => p.category === activeFilter)

  return (
    <section className="px-6 py-12" aria-labelledby="blog-posts-heading">
      <div className="mx-auto max-w-4xl">
        <h2 id="blog-posts-heading" className="sr-only">
          Blog-Artikel
        </h2>

        <div className="mb-10">
          <p className="mb-3 text-sm font-medium text-zinc-500">Kategorie filtern</p>
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

        {filteredPosts.length > 0 ? (
          <ul
            key={activeFilter}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
          >
            {filteredPosts.map((post) => {
              const category = categories.find((c) => c.slug === post.category)
              return (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-lg"
                  >
                    {post.image && (
                      <div className="flex aspect-[16/10] w-full shrink-0 items-center justify-center bg-zinc-50/50 p-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.image}
                          alt={post.imageAlt ?? post.title}
                          className="h-full w-full object-contain object-center"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      {category && (
                        <span className="mb-3 inline-block w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          {category.title}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-zinc-900 transition-colors group-hover:text-indigo-600">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-zinc-600">
                        {post.metaDescription}
                      </p>
                      <span className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-indigo-600 transition-all group-hover:gap-3">
                        Artikel lesen
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-zinc-200 bg-zinc-50/50 px-8 py-16 text-center">
            <p className="text-zinc-600">In dieser Kategorie sind noch keine Artikel vorhanden.</p>
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
