import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import BrancheSeoSchema from '@/components/BrancheSeoSchema'
import BrancheDetailContent from '@/components/BrancheDetailContent'
import AerzteBrancheContent from '@/components/branchen/AerzteBrancheContent'
import ZahnaerzteBrancheContent from '@/components/branchen/ZahnaerzteBrancheContent'
import HandwerkerBrancheContent from '@/components/branchen/HandwerkerBrancheContent'
import SteuerberaterBrancheContent from '@/components/branchen/SteuerberaterBrancheContent'
import AnwaelteBrancheContent from '@/components/branchen/AnwaelteBrancheContent'
import ImmobilienmaklerBrancheContent from '@/components/branchen/ImmobilienmaklerBrancheContent'
import RestaurantsBrancheContent from '@/components/branchen/RestaurantsBrancheContent'
import PhysiotherapeutenBrancheContent from '@/components/branchen/PhysiotherapeutenBrancheContent'
import HotelsBrancheContent from '@/components/branchen/HotelsBrancheContent'
import KfzWerkstattBrancheContent from '@/components/branchen/KfzWerkstattBrancheContent'
import { getAllBrancheSlugs, getBrancheBySlug } from '@/lib/branchen'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllBrancheSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = getBrancheBySlug(params.slug)
  if (!data) return { title: 'Branche' }

  return {
    title: { absolute: data.metaTitle },
    description: data.metaDescription,
    ...(data.focusKeyword ? { keywords: data.focusKeyword } : {}),
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      ...(data.slug === 'kfz-werkstatt'
        ? {
            images: [
              {
                url: `${SITE_URL}/images/blog/kfz-werkstatt-thumbnail.webp`,
                width: 1200,
                height: 630,
                alt: data.metaTitle,
              },
            ],
          }
        : {}),
    },
  }
}

export default function BranchePage({ params }: PageProps) {
  const data = getBrancheBySlug(params.slug)
  if (!data) notFound()

  const path = `/branchen/${data.slug}`

  return (
    <>
      <BrancheSeoSchema
        path={path}
        pageTitle={data.name}
        name={data.name}
        metaDescription={data.metaDescription}
        faqs={data.faqs}
      />
      <Header />
      <main className="pt-24">
        <div
          className={
            data.slug === 'aerzte' || data.slug === 'zahnaerzte' || data.slug === 'handwerker' || data.slug === 'steuerberater' || data.slug === 'anwaelte' || data.slug === 'immobilienmakler' || data.slug === 'restaurants' || data.slug === 'physiotherapeuten' || data.slug === 'hotels' || data.slug === 'kfz-werkstatt'
              ? 'py-12 sm:py-16'
              : 'mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16'
          }
        >
          {data.slug === 'aerzte' ? (
            <AerzteBrancheContent />
          ) : data.slug === 'zahnaerzte' ? (
            <ZahnaerzteBrancheContent />
          ) : data.slug === 'handwerker' ? (
            <HandwerkerBrancheContent />
          ) : data.slug === 'steuerberater' ? (
            <SteuerberaterBrancheContent />
          ) : data.slug === 'anwaelte' ? (
            <AnwaelteBrancheContent />
          ) : data.slug === 'immobilienmakler' ? (
            <ImmobilienmaklerBrancheContent />
          ) : data.slug === 'restaurants' ? (
            <RestaurantsBrancheContent />
          ) : data.slug === 'physiotherapeuten' ? (
            <PhysiotherapeutenBrancheContent />
          ) : data.slug === 'hotels' ? (
            <HotelsBrancheContent />
          ) : data.slug === 'kfz-werkstatt' ? (
            <KfzWerkstattBrancheContent />
          ) : (
            <BrancheDetailContent data={data} />
          )}
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
