import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ArticleSchema from '@/components/ArticleSchema'
import BlogFAQSchema from '@/components/BlogFAQSchema'
import { getBlogCategoryBySlug, getAllBlogCategorySlugs } from '@/lib/blog-categories'
import {
  getBlogPostBySlug,
  getAllBlogPostSlugs,
  getPostsByCategory,
} from '@/lib/blog-posts'

const BLOG_ARTICLE_STYLE = `
article img.emoji,
article img.wp-smiley,
article .emoji,
article .entry-content img.emoji,
article .entry-content img.wp-smiley {
  width: 1em !important;
  height: 1em !important;
  display: inline !important;
  vertical-align: -0.1em !important;
  margin: 0 0.1em !important;
  padding: 0 !important;
  border: none !important;
  box-shadow: none !important;
}
/* Hierarchie wie im HTML: h1 = Titel, h2 = Hauptabschnitte, h3 = Unterabschnitte, h4 = z. B. Karten-Titel */
.blog-article h1 {
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.25;
  color: #18181b;
  margin-top: 0;
  margin-bottom: 1rem;
}
.blog-article h2 {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: #18181b;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}
.blog-article h2:first-of-type {
  margin-top: 0;
}
.blog-article h3 {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.4;
  color: #27272a;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
.blog-article h4 {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.4;
  color: #27272a;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
/* Standard-Textfarbe nur auf Artikel-Container – Blöcke mit eigenem Hintergrund behalten ihre Lesbarkeit (Text erbt von Box) */
.blog-article {
  color: #3f3f46;
}
.blog-article p {
  margin-bottom: 1rem;
  line-height: 1.65;
}
.blog-article a {
  color: #4f46e5;
  text-decoration: none;
}
.blog-article a:hover {
  text-decoration: underline;
}
/* Nummerierung im Inhaltsverzeichnis und für geordnete Listen */
.blog-article ol {
  list-style-type: decimal;
  list-style-position: outside;
  padding-left: 1.75rem;
  margin-bottom: 1rem;
}
.blog-article ol li {
  margin-bottom: 0.5rem;
}
.blog-article ul {
  list-style-type: disc;
  list-style-position: outside;
  padding-left: 1.75rem;
  margin-bottom: 1rem;
}
.blog-article ul li {
  margin-bottom: 0.5rem;
}
`

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const categories = getAllBlogCategorySlugs().map((slug) => ({ slug }))
  const posts = getAllBlogPostSlugs().map((slug) => ({ slug }))
  return [...categories, ...posts]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (post) {
    return {
      title: { absolute: post.metaTitle },
      description: post.metaDescription,
      openGraph: {
        title: post.metaTitle,
        description: post.metaDescription,
      },
    }
  }
  const category = getBlogCategoryBySlug(params.slug)
  if (category) {
    return {
      title: { absolute: `${category.title} | Blog | SEO Agentur München` },
      description: category.shortDescription,
      openGraph: {
        title: `${category.title} | Blog | SEO Agentur München`,
        description: category.shortDescription,
      },
    }
  }
  return { title: 'Blog' }
}

export default function BlogSlugPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug)
  const category = getBlogCategoryBySlug(params.slug)

  if (post) {
    const categoryMeta = getBlogCategoryBySlug(post.category)
    const breadcrumbItems = [
      { name: 'Startseite', url: '/' },
      { name: 'Blog', url: '/blog' },
      ...(categoryMeta
        ? [{ name: categoryMeta.title, url: `/blog/${post.category}` }]
        : []),
      { name: post.title, url: `/blog/${post.slug}` },
    ]

    return (
      <>
        <BreadcrumbSchema items={breadcrumbItems} />
        <ArticleSchema
          headline={post.title}
          description={post.metaDescription}
          url={`/blog/${post.slug}`}
          image={post.image}
          imageAlt={post.imageAlt}
        />
        {/* Pro Artikel nur ein FAQPage-Schema, um "Duplicate field FAQPage" in der Search Console zu vermeiden */}
        {post.faqs?.length ? <BlogFAQSchema faqs={post.faqs} /> : null}
        <style dangerouslySetInnerHTML={{ __html: BLOG_ARTICLE_STYLE }} />
        <Header />
        <main>
          <section className="pt-28 pb-8 px-6 bg-gradient-to-b from-zinc-50 to-white">
            <div className="mx-auto max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
                  <li>
                    <Link href="/" className="hover:text-zinc-900">
                      Startseite
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li>
                    <Link href="/blog" className="hover:text-zinc-900">
                      Blog
                    </Link>
                  </li>
                  {categoryMeta && (
                    <>
                      <li aria-hidden>/</li>
                      <li>
                        <Link href={`/blog/${post.category}`} className="hover:text-zinc-900">
                          {categoryMeta.title}
                        </Link>
                      </li>
                    </>
                  )}
                  <li aria-hidden>/</li>
                  <li className="text-zinc-900 font-medium truncate max-w-[180px] sm:max-w-none" aria-current="page">
                    {post.title}
                  </li>
                </ol>
              </nav>
            </div>
          </section>
          {post.image && (
            <div className="mx-auto max-w-3xl px-6 mb-8">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden bg-zinc-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          <article
            className="blog-article mx-auto max-w-3xl px-6 pb-24"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </main>
        <Footer />
      </>
    )
  }

  if (category) {
    const posts = getPostsByCategory(params.slug)
    const breadcrumbItems = [
      { name: 'Startseite', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: category.title, url: `/blog/${params.slug}` },
    ]

    return (
      <>
        <BreadcrumbSchema items={breadcrumbItems} />
        <Header />
        <main>
          <section className="pt-28 pb-12 px-6 bg-gradient-to-b from-zinc-50 to-white">
            <div className="mx-auto max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
                  <li>
                    <Link href="/" className="hover:text-zinc-900">
                      Startseite
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li>
                    <Link href="/blog" className="hover:text-zinc-900">
                      Blog
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li className="text-zinc-900 font-medium" aria-current="page">
                    {category.title}
                  </li>
                </ol>
              </nav>
              <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900">
                {category.title}
              </h1>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                {category.shortDescription}
              </p>
            </div>
          </section>
          <section className="py-12 px-6">
            <div className="mx-auto max-w-3xl">
              {posts.length > 0 ? (
                <ul className="space-y-4">
                  {posts.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="block rounded-xl border border-zinc-200 bg-white p-5 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all"
                      >
                        <h2 className="text-lg font-bold text-zinc-900">{p.title}</h2>
                        <p className="mt-1 text-sm text-zinc-600 line-clamp-2">
                          {p.metaDescription}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600">
                          Artikel lesen
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center rounded-2xl border-2 border-dashed border-zinc-200 bg-zinc-50/50 py-16 px-8">
                  <p className="text-zinc-600">
                    Hier erscheinen künftig Artikel zu <strong>{category.title}</strong>.
                  </p>
                  <Link
                    href="/blog"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Zurück zur Blog-Übersicht
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  notFound()
}
