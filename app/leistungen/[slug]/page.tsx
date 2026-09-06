import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceLanding from '@/components/ServiceLanding'
import { getAllLeistungSlugs, getLeistungBySlug } from '@/lib/leistungen-data'
import { SERVICE_PAGES } from '@/lib/service-pages'
import { absoluteCanonical } from '@/lib/canonical'

interface PageProps { params: { slug: string } }

export function generateStaticParams() {
  return getAllLeistungSlugs().map(slug => ({ slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = SERVICE_PAGES[params.slug]
  if (!getLeistungBySlug(params.slug) || !page) return { title: 'Seite nicht gefunden', robots: { index: false } }
  const url = absoluteCanonical(`/leistungen/${params.slug}`)
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: { title: page.title, description: page.description, url, type: 'website', locale: 'de_DE', siteName: 'SEO München' },
    twitter: { card: 'summary_large_image', title: page.title, description: page.description },
  }
}

export default function LeistungPage({ params }: PageProps) {
  const leistung = getLeistungBySlug(params.slug)
  const page = SERVICE_PAGES[params.slug]
  if (!leistung || !page) notFound()
  return <ServiceLanding slug={leistung.slug} name={leistung.title} page={page} />
}
