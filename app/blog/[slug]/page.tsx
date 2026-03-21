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
import BlogTableOfContents from '@/components/BlogTableOfContents'
import BlogTocDesktopWrapper from '@/components/BlogTocDesktopWrapper'
import BlogAuthorBox from '@/components/BlogAuthorBox'
import BlogReadingProgressBar from '@/components/BlogReadingProgressBar'
import BlogTocMobileCollapsible from '@/components/BlogTocMobileCollapsible'
import { getReadingTimeMinutes } from '@/lib/reading-time'

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
/* Floating TOC: Desktop = fixed (floating), blendet sich aus sobald Footer sichtbar; Mobile/Tablet = sticky oben */
.blog-toc-wrap {
  position: sticky;
  top: 5rem;
  align-self: start;
  z-index: 10;
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(8px);
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  margin-left: -1rem;
  margin-right: -1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-bottom: 1px solid #e4e4e7;
  margin-bottom: 0;
}
@media (min-width: 640px) {
  .blog-toc-wrap {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
@media (min-width: 1024px) {
  .blog-toc-wrap {
    position: sticky;
    top: 6rem;
    width: 220px;
    max-height: calc(100vh - 8rem);
    overflow-y: auto;
    z-index: 10;
    margin: 0;
    padding: 0;
    padding-top: 0.5rem;
    background: #fff;
    backdrop-filter: none;
    border-bottom: none;
  }
  .blog-toc-wrap--fixed {
    position: fixed;
    top: 6rem;
    left: max(1.5rem, calc((100vw - 72rem) / 2 + 1.5rem));
    z-index: 10;
    transition: opacity 0.2s ease, visibility 0.2s ease;
  }
  .blog-toc-wrap--fixed.blog-toc-wrap--hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
}
@media (max-width: 1023px) {
  .blog-toc-wrap {
    position: sticky;
    top: 5rem;
  }
}

/* Zusätzliche Styles für ältere/ausführliche Blog-HTMLs (z. B. OnPage-Checkliste)
   Wichtig: Alles ist auf .blog-article gescoped, damit es die restliche Seite nicht beeinflusst. */
.blog-article .intro-text {
  font-size: 1.1rem;
  color: #6B7280;
  line-height: 1.9;
  margin-bottom: 2rem;
}

.blog-article .stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1.5rem 0;
}
.blog-article .stat-card {
  background: #F9FAFB;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 1.25rem;
  text-align: center;
}
.blog-article .stat-card .stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #4F46E5;
  display: block;
}
.blog-article .stat-card .stat-label {
  font-size: 0.85rem;
  color: #6B7280;
  margin-top: 0.25rem;
}

.blog-article figure {
  margin: 2rem 0;
  background: #F9FAFB;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #E5E7EB;
}
.blog-article figure img {
  width: 100%;
  height: auto;
  display: block;
}
.blog-article figcaption {
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  color: #6B7280;
  text-align: center;
  background: #FFFFFF;
  border-top: 1px solid #E5E7EB;
}

.blog-article .checklist {
  background: #F9FAFB;
  border: 1px solid #E5E7EB;
  border-left: 4px solid #4F46E5;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}
.blog-article .checklist h3 {
  margin-top: 0;
  color: #4F46E5;
  font-size: 1.1rem;
}
.blog-article .checklist ul {
  list-style: none;
  padding: 0;
}
.blog-article .checklist li {
  padding: 0.4rem 0 0.4rem 2rem;
  position: relative;
  line-height: 1.6;
}
.blog-article .checklist li::before {
  content: '☐';
  position: absolute;
  left: 0;
  color: #4F46E5;
  font-size: 1.1rem;
}

.blog-article .tip-box {
  background: #FFFBEB;
  border-left: 4px solid #F59E0B;
  border-radius: 0 12px 12px 0;
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
  font-size: 0.95rem;
}
.blog-article .tip-box strong { color: #B45309; }

.blog-article .cta-box {
  background: linear-gradient(135deg, #EEF2FF, #C7D2FE);
  border: 2px solid #4F46E5;
  border-radius: 12px;
  padding: 2rem;
  margin: 2.5rem 0;
  text-align: center;
}
.blog-article .cta-box p { margin-bottom: 1rem; }

.blog-article .cta-button {
  display: inline-block;
  background: #4F46E5;
  color: #fff !important;
  padding: 0.85rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.2s;
}
.blog-article .cta-button:hover { background: #4338CA; }

.blog-article .priority-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1.5rem 0;
}
.blog-article .priority-card {
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid #E5E7EB;
}
.blog-article .priority-card h4 {
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.blog-article .priority-card ul {
  padding-left: 1.25rem;
  font-size: 0.9rem;
}
.blog-article .priority-card li { margin-bottom: 0.3rem; }
.blog-article .priority-card.high-low { background: #ECFDF5; border-color: #10B981; }
.blog-article .priority-card.high-low h4 { color: #10B981; }
.blog-article .priority-card.high-high { background: #EEF2FF; border-color: #4F46E5; }
.blog-article .priority-card.high-high h4 { color: #4F46E5; }
.blog-article .priority-card.low-low { background: #FFFBEB; border-color: #F59E0B; }
.blog-article .priority-card.low-low h4 { color: #B45309; }
.blog-article .priority-card.low-high { background: #F9FAFB; border-color: #E5E7EB; }
.blog-article .priority-card.low-high h4 { color: #6B7280; }

.blog-article .red-flag-list {
  list-style: none;
  padding-left: 0;
}
.blog-article .red-flag-list li {
  padding: 8px 0 8px 28px;
  position: relative;
}
.blog-article .red-flag-list li::before {
  content: "⚠";
  position: absolute;
  left: 0;
}

.blog-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 0.95rem;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #E5E7EB;
}
.blog-article th {
  background: #4F46E5;
  color: #fff;
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.9rem;
}
.blog-article td {
  padding: 0.65rem 1rem;
  border-bottom: 1px solid #E5E7EB;
}
.blog-article tr:nth-child(even) td { background: #F9FAFB; }
.blog-article tr:hover td { background: #EEF2FF; }

/* FAQ Accordion */
.blog-article .faq-item {
  background: #F9FAFB;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
}
.blog-article .faq-question {
  font-weight: 600;
  padding: 1rem 1.25rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1F2937;
}
.blog-article .faq-question:hover { background: #EEF2FF; }
.blog-article .faq-question::after {
  content: '+';
  font-size: 1.4rem;
  color: #4F46E5;
  font-weight: 700;
  flex-shrink: 0;
  margin-left: 1rem;
  transition: transform 0.2s;
}
.blog-article .faq-item.open .faq-question::after { content: '−'; }
.blog-article .faq-answer {
  padding: 0 1.25rem 1rem;
  display: none;
  color: #6B7280;
  line-height: 1.7;
}
.blog-article .faq-item.open .faq-answer { display: block; }

@media (max-width: 768px) {
  .blog-article .priority-grid { grid-template-columns: 1fr; }
  .blog-article .stat-grid { grid-template-columns: 1fr; }
}

/* SEO-Audit-Artikel & ähnliche „article-wrapper“-Layouts */
.blog-article .article-wrapper {
  --audit-primary: #4f46e5;
  --audit-primary-dark: #3730a3;
  --audit-primary-light: #eef2ff;
  --audit-secondary: #10b981;
  --audit-secondary-light: #ecfdf5;
  --audit-accent: #f59e0b;
  --audit-accent-light: #fffbeb;
  --audit-danger: #ef4444;
  --audit-text-primary: #1f2937;
  --audit-text-secondary: #6b7280;
  --audit-border: #e5e7eb;
  max-width: none;
  padding: 0;
  line-height: 1.8;
  color: var(--audit-text-primary);
}
.blog-article .article-wrapper h2 {
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: var(--audit-primary-dark);
  border-left: 4px solid var(--audit-primary);
  padding-left: 1rem;
}
.blog-article .article-wrapper h3 {
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: var(--audit-text-primary);
}
.blog-article .article-wrapper h4 {
  font-size: 1.05rem;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--audit-primary);
}
.blog-article .article-wrapper p {
  margin-bottom: 1rem;
}
.blog-article .article-wrapper a {
  color: var(--audit-primary);
  text-decoration: none;
  font-weight: 500;
}
.blog-article .article-wrapper a:hover {
  color: var(--audit-primary-dark);
  text-decoration: underline;
}
.blog-article .article-wrapper .intro {
  font-size: 1.1rem;
  color: var(--audit-text-secondary);
  border-left: 4px solid var(--audit-primary);
  padding: 1rem 1.25rem;
  background: var(--audit-primary-light);
  border-radius: 0 8px 8px 0;
  margin-bottom: 2rem;
}
.blog-article .article-wrapper .toc {
  background: #f9fafb;
  border: 1px solid var(--audit-border);
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 2rem;
}
.blog-article .article-wrapper .toc h3 {
  margin-top: 0;
  font-size: 1.1rem;
  color: var(--audit-primary);
}
.blog-article .article-wrapper .toc ol {
  padding-left: 1.25rem;
  margin-bottom: 0;
}
.blog-article .article-wrapper .toc li {
  margin-bottom: 0.35rem;
}
.blog-article .article-wrapper .toc a {
  font-weight: 400;
}
.blog-article .article-wrapper table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 0.95rem;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--audit-border);
}
.blog-article .article-wrapper th {
  background: var(--audit-primary);
  color: #fff;
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
}
.blog-article .article-wrapper td {
  padding: 0.65rem 1rem;
  border-bottom: 1px solid var(--audit-border);
}
.blog-article .article-wrapper tr:nth-child(even) td {
  background: #f9fafb;
}
.blog-article .article-wrapper ul,
.blog-article .article-wrapper ol {
  margin: 1rem 0;
  padding-left: 1.5rem;
}
.blog-article .article-wrapper li {
  margin-bottom: 0.5rem;
}
.blog-article .article-wrapper .tip-box {
  background: var(--audit-primary-light);
  border: 1px solid #c7d2fe;
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
}
.blog-article .article-wrapper .tip-box strong {
  color: var(--audit-primary-dark);
}
.blog-article .article-wrapper .warning-box {
  background: var(--audit-accent-light);
  border-left: 4px solid var(--audit-accent);
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
  border-radius: 0 8px 8px 0;
}
.blog-article .article-wrapper .danger-box {
  background: #fef2f2;
  border-left: 4px solid var(--audit-danger);
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
  border-radius: 0 8px 8px 0;
}
.blog-article .article-wrapper .stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}
.blog-article .article-wrapper .stat-card {
  background: var(--audit-primary-light);
  border-radius: 8px;
  padding: 1.25rem;
  text-align: center;
  border: 1px solid var(--audit-border);
}
.blog-article .article-wrapper .stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--audit-primary);
  display: block;
}
.blog-article .article-wrapper .stat-label {
  font-size: 0.85rem;
  color: var(--audit-text-secondary);
  margin-top: 0.25rem;
}
.blog-article .article-wrapper .checklist-section {
  background: #f9fafb;
  border: 2px solid var(--audit-primary);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}
.blog-article .article-wrapper .checklist-section h3 {
  margin-top: 0;
  color: var(--audit-primary);
}
.blog-article .article-wrapper .checklist-item {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--audit-border);
}
.blog-article .article-wrapper .checklist-item:last-child {
  border-bottom: none;
}
.blog-article .article-wrapper .check-icon {
  width: 22px;
  height: 22px;
  min-width: 22px;
  border: 2px solid var(--audit-primary);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  font-size: 0.75rem;
  color: var(--audit-primary);
}
.blog-article .article-wrapper .check-icon.priority-high {
  border-color: var(--audit-danger);
  color: var(--audit-danger);
}
.blog-article .article-wrapper .check-icon.priority-medium {
  border-color: var(--audit-accent);
  color: var(--audit-accent);
}
.blog-article .article-wrapper .cta-section {
  background: linear-gradient(135deg, var(--audit-primary), var(--audit-primary-dark));
  color: #fff;
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
  text-align: center;
}
.blog-article .article-wrapper .cta-section h3 {
  color: #fff;
  margin-top: 0;
}
.blog-article .article-wrapper .cta-section a {
  color: #fff;
  font-weight: 700;
  text-decoration: underline;
}
.blog-article .article-wrapper .cta-section a:hover {
  color: #e0e7ff;
}
/* Statische FAQ (nicht Accordion) — überschreibt globales .faq-answer { display:none } */
.blog-article .article-wrapper .faq-item {
  border-bottom: 1px solid var(--audit-border);
  padding: 1rem 0;
  margin-bottom: 0;
  border-radius: 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--audit-border);
}
.blog-article .article-wrapper .faq-item:last-child {
  border-bottom: none;
}
.blog-article .article-wrapper .faq-question {
  font-weight: 700;
  color: var(--audit-primary-dark);
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
  padding: 0;
  cursor: default;
  display: block;
}
.blog-article .article-wrapper .faq-question:hover {
  background: transparent;
}
.blog-article .article-wrapper .faq-question::after {
  content: none !important;
}
.blog-article .article-wrapper .faq-answer {
  display: block !important;
  padding: 0 !important;
  color: var(--audit-text-secondary);
}
.blog-article .article-wrapper figure {
  margin: 1.5rem 0;
  background: #f9fafb;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--audit-border);
}
.blog-article .article-wrapper figure img {
  width: 100%;
  height: auto;
  border-radius: 0;
  display: block;
}
.blog-article .article-wrapper figcaption {
  text-align: center;
  font-size: 0.85rem;
  color: var(--audit-text-secondary);
  padding: 0.5rem 1rem;
  background: #fff;
  border-top: 1px solid var(--audit-border);
  margin-top: 0;
}
.blog-article .article-wrapper .tool-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1.5rem 0;
}
.blog-article .article-wrapper .tool-card {
  padding: 1.25rem;
  border-radius: 8px;
  border: 2px solid var(--audit-border);
  background: #fff;
}
.blog-article .article-wrapper .tool-card.free {
  border-color: var(--audit-secondary);
}
.blog-article .article-wrapper .tool-card.premium {
  border-color: var(--audit-primary);
}
.blog-article .article-wrapper .tool-card h4 {
  margin-top: 0;
}
.blog-article .article-wrapper .tool-card ul {
  padding-left: 1rem;
  margin: 0.5rem 0;
}
.blog-article .article-wrapper .red-flag-list li {
  margin-bottom: 0.75rem;
}
.blog-article .article-wrapper .red-flag-list li strong {
  color: var(--audit-danger);
}
/* Globales .red-flag-list (Warn-Icon) im Audit-Artikel deaktivieren */
.blog-article .article-wrapper ul.red-flag-list {
  list-style: disc;
  padding-left: 1.5rem;
}
.blog-article .article-wrapper ul.red-flag-list li {
  padding-left: 0;
}
.blog-article .article-wrapper ul.red-flag-list li::before {
  content: none !important;
}
.blog-article .article-wrapper .step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--audit-primary);
  color: #fff;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  vertical-align: middle;
}
@media (max-width: 600px) {
  .blog-article .article-wrapper h2 {
    font-size: 1.25rem;
  }
  .blog-article .article-wrapper .stat-grid {
    grid-template-columns: 1fr 1fr;
  }
  .blog-article .article-wrapper .tool-comparison {
    grid-template-columns: 1fr;
  }
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
        <BlogReadingProgressBar />
        <Header />
        <main>
          <section className="pt-28 pb-6 sm:pb-8 px-4 sm:px-6 bg-gradient-to-b from-zinc-50 to-white lg:grid lg:grid-cols-[240px_1fr] lg:gap-10 lg:max-w-6xl lg:mx-auto lg:items-start">
            {/* Platzhalter für TOC-Spalte, damit Breadcrumb nicht überlappt */}
            <div className="hidden lg:block lg:col-start-1" aria-hidden />
            <div className="lg:col-start-2 max-w-none lg:max-w-3xl">
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
                  <li className="text-zinc-900 font-medium" aria-current="page">
                    {post.title}
                  </li>
                </ol>
              </nav>
            </div>
          </section>
          {/* Mobile/Tablet: Aufklappbares Inhaltsverzeichnis (fixed, erscheint erst nach dem TOC im Text) */}
          <BlogTocMobileCollapsible />
          {/* Thumbnail nur auf Mobile/Tablet oben (auf Desktop in der rechten Spalte) */}
          {post.image && (
            <div className="lg:hidden w-full px-4 sm:px-6 mb-8">
              <div className="relative w-full rounded-xl overflow-hidden bg-zinc-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          )}
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-[240px_1fr] lg:gap-10 lg:items-start overflow-visible">
            {/* Desktop: TOC fixed (floating), blendet sich aus sobald Footer sichtbar */}
            <div className="hidden lg:block lg:col-start-1">
              <div className="w-[240px] shrink-0" aria-hidden />
              <BlogTocDesktopWrapper />
            </div>
            <div className="lg:col-start-2 min-w-0 lg:px-0">
              {/* Thumbnail auf Desktop in rechter Spalte */}
              {post.image && (
                <div className="hidden lg:block mb-8">
                  <div className="relative w-full rounded-xl overflow-hidden bg-zinc-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              )}
              {/* Autorenbox auf jeder Artikel-Seite: unter Thumbnail, über Titel/Artikel */}
              <BlogAuthorBox
                authorName="Joel Siebert"
                readingMinutes={getReadingTimeMinutes(post.content)}
              />
              <article
                data-blog-article
                className="blog-article w-full max-w-none lg:max-w-3xl pb-24"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
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
