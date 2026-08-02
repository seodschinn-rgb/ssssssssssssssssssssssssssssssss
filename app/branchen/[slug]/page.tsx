import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import BrancheSeoSchema from '@/components/BrancheSeoSchema'
import BrancheDetailContent from '@/components/BrancheDetailContent'
import AerzteBrancheContent from '@/components/branchen/AerzteBrancheContent'
import ZahnaerzteBrancheContent from '@/components/branchen/ZahnaerzteBrancheContent'
import SteuerberaterBrancheContent from '@/components/branchen/SteuerberaterBrancheContent'
import ImmobilienmaklerBrancheContent from '@/components/branchen/ImmobilienmaklerBrancheContent'
import PhysiotherapeutenBrancheContent from '@/components/branchen/PhysiotherapeutenBrancheContent'
import AnwaeltePage from '@/components/branchen-v2/anwaelte/AnwaeltePage'
import AnwaelteSchema from '@/components/branchen-v2/anwaelte/AnwaelteSchema'
import HandwerkerPage from '@/components/branchen-v2/handwerker/HandwerkerPage'
import HandwerkerSchema from '@/components/branchen-v2/handwerker/HandwerkerSchema'
import HotelsPage from '@/components/branchen-v2/hotels/HotelsPage'
import HotelsSchema from '@/components/branchen-v2/hotels/HotelsSchema'
import KfzPage from '@/components/branchen-v2/kfz/KfzPage'
import KfzSchema from '@/components/branchen-v2/kfz/KfzSchema'
import RestaurantsPage from '@/components/branchen-v2/restaurants/RestaurantsPage'
import RestaurantsSchema from '@/components/branchen-v2/restaurants/RestaurantsSchema'
import { getAllBrancheSlugs, getBrancheBySlug } from '@/lib/branchen'
import {
  ANWAELTE_FOCUS_KEYWORD,
  ANWAELTE_META_DESCRIPTION,
  ANWAELTE_META_TITLE,
} from '@/lib/branchen/anwaelte-v2'
import {
  HANDWERKER_FOCUS_KEYWORD,
  HANDWERKER_META_DESCRIPTION,
  HANDWERKER_META_TITLE,
} from '@/lib/branchen/handwerker-v2'
import { HOTELS_META_DESCRIPTION, HOTELS_META_TITLE } from '@/lib/branchen/hotels-v2'
import { KFZ_META_DESCRIPTION, KFZ_META_TITLE } from '@/lib/branchen/kfz-v2'
import {
  RESTAURANTS_META_DESCRIPTION,
  RESTAURANTS_META_TITLE,
} from '@/lib/branchen/restaurants-v2'
import { absoluteCanonical } from '@/lib/canonical'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllBrancheSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (params.slug === 'anwaelte') {
    return {
      title: { absolute: ANWAELTE_META_TITLE },
      description: ANWAELTE_META_DESCRIPTION,
      keywords: ANWAELTE_FOCUS_KEYWORD,
      robots: { index: true, follow: true },
      alternates: { canonical: absoluteCanonical('/branchen/anwaelte') },
      openGraph: {
        type: 'website',
        url: absoluteCanonical('/branchen/anwaelte'),
        siteName: 'SEO München',
        locale: 'de_DE',
        title: ANWAELTE_META_TITLE,
        description: ANWAELTE_META_DESCRIPTION,
      },
    }
  }

  if (params.slug === 'handwerker') {
    return {
      title: { absolute: HANDWERKER_META_TITLE },
      description: HANDWERKER_META_DESCRIPTION,
      keywords: HANDWERKER_FOCUS_KEYWORD,
      robots: { index: true, follow: true },
      alternates: { canonical: absoluteCanonical('/branchen/handwerker') },
      openGraph: {
        type: 'website',
        url: absoluteCanonical('/branchen/handwerker'),
        siteName: 'SEO München',
        locale: 'de_DE',
        title: HANDWERKER_META_TITLE,
        description: HANDWERKER_META_DESCRIPTION,
      },
    }
  }

  if (params.slug === 'hotels') {
    return {
      title: { absolute: HOTELS_META_TITLE },
      description: HOTELS_META_DESCRIPTION,
      robots: { index: true, follow: true },
      alternates: { canonical: absoluteCanonical('/branchen/hotels') },
      openGraph: {
        type: 'website',
        url: absoluteCanonical('/branchen/hotels'),
        siteName: 'SEO München',
        locale: 'de_DE',
        title: HOTELS_META_TITLE,
        description: HOTELS_META_DESCRIPTION,
      },
    }
  }

  if (params.slug === 'kfz-werkstatt') {
    return {
      title: { absolute: KFZ_META_TITLE },
      description: KFZ_META_DESCRIPTION,
      robots: { index: true, follow: true },
      alternates: { canonical: absoluteCanonical('/branchen/kfz-werkstatt') },
      openGraph: {
        type: 'website',
        url: absoluteCanonical('/branchen/kfz-werkstatt'),
        siteName: 'SEO München',
        locale: 'de_DE',
        title: KFZ_META_TITLE,
        description: KFZ_META_DESCRIPTION,
      },
    }
  }

  if (params.slug === 'restaurants') {
    return {
      title: { absolute: RESTAURANTS_META_TITLE },
      description: RESTAURANTS_META_DESCRIPTION,
      robots: { index: true, follow: true },
      alternates: { canonical: absoluteCanonical('/branchen/restaurants') },
      openGraph: {
        type: 'website',
        url: absoluteCanonical('/branchen/restaurants'),
        siteName: 'SEO München',
        locale: 'de_DE',
        title: RESTAURANTS_META_TITLE,
        description: RESTAURANTS_META_DESCRIPTION,
      },
    }
  }

  const data = getBrancheBySlug(params.slug)
  if (!data) return { title: 'Branche' }

  return {
    title: { absolute: data.metaTitle },
    description: data.metaDescription,
    ...(data.focusKeyword ? { keywords: data.focusKeyword } : {}),
    alternates: { canonical: absoluteCanonical(`/branchen/${params.slug}`) },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
    },
  }
}

export default function BranchePage({ params }: PageProps) {
  const data = getBrancheBySlug(params.slug)
  if (!data) notFound()

  if (data.slug === 'anwaelte') {
    return (
      <>
        <AnwaelteSchema />
        <Header />
        <AnwaeltePage />
        <Footer />
      </>
    )
  }

  if (data.slug === 'handwerker') {
    return (
      <>
        <HandwerkerSchema />
        <Header />
        <HandwerkerPage />
        <Footer />
      </>
    )
  }

  if (data.slug === 'hotels') {
    return (
      <>
        <HotelsSchema />
        <Header />
        <HotelsPage />
        <Footer />
      </>
    )
  }

  if (data.slug === 'kfz-werkstatt') {
    return (
      <>
        <KfzSchema />
        <Header />
        <KfzPage />
        <Footer />
      </>
    )
  }

  if (data.slug === 'restaurants') {
    return (
      <>
        <RestaurantsSchema />
        <Header />
        <RestaurantsPage />
        <Footer />
      </>
    )
  }

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
            data.slug === 'aerzte' ||
            data.slug === 'zahnaerzte' ||
            data.slug === 'steuerberater' ||
            data.slug === 'immobilienmakler' ||
            data.slug === 'physiotherapeuten'
              ? 'py-12 sm:py-16'
              : 'mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16'
          }
        >
          {data.slug === 'aerzte' ? (
            <AerzteBrancheContent />
          ) : data.slug === 'zahnaerzte' ? (
            <ZahnaerzteBrancheContent />
          ) : data.slug === 'steuerberater' ? (
            <SteuerberaterBrancheContent />
          ) : data.slug === 'immobilienmakler' ? (
            <ImmobilienmaklerBrancheContent />
          ) : data.slug === 'physiotherapeuten' ? (
            <PhysiotherapeutenBrancheContent />
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
