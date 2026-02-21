import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import BlogPostList from '@/components/BlogPostList'
import { BLOG_CATEGORIES } from '@/lib/blog-categories'
import { getAllPosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: { absolute: 'Blog | SEO Agentur München' },
  description: 'SEO-Tipps, Branchen-Insights und Best Practices für Suchmaschinenoptimierung. Themen: Local SEO, Technisches SEO, Content, Linkaufbau, München & Bayern.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', url: '/' },
        { name: 'Blog', url: '/blog' },
      ]} />
      <Header />
      <main>
        <section className="pt-28 pb-12 px-6 text-center bg-gradient-to-b from-zinc-50 to-white">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900">Blog</h1>
          <p className="mt-4 max-w-xl mx-auto text-zinc-600">
            SEO-Tipps, Branchen-Insights und Best Practices für Ihre Sichtbarkeit bei Google.
          </p>
        </section>
        <BlogPostList posts={posts} categories={BLOG_CATEGORIES} />
      </main>
      <Footer />
    </>
  )
}
