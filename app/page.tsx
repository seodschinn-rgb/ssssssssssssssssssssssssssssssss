import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeatureGrid from '@/components/FeatureGrid'
import KeywordSection from '@/components/KeywordSection'
import ScreenshotsSection from '@/components/ScreenshotsSection'
import WhySeoSection from '@/components/WhySeoSection'
import Footer from '@/components/Footer'
import HomePageSchema from '@/components/HomePageSchema'
import SeoArticleFAQSchema from '@/components/SeoArticleFAQSchema'

// Below-fold sections: lazy load für kleinere Initial-Bundle
const ProcessSection = dynamic(() => import('@/components/ProcessSection'), { ssr: true })
const TestimonialSlider = dynamic(() => import('@/components/TestimonialSlider'), { ssr: true })
const CityLinks = dynamic(() => import('@/components/CityLinks'), { ssr: true })
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: true })
import SeoArticleSection from '@/components/SeoArticleSection'

export const metadata: Metadata = {
  title: { absolute: 'SEO Agentur München: Ihr Partner für Top-Rankings & mehr Sichtbarkeit' },
  description:
    'Die führende SEO Agentur in München für messbare Ranking-Verbesserungen und mehr organischen Traffic. Wir bringen Ihr Unternehmen auf die erste Google-Seite. Jetzt unverbindlich informieren!',
  openGraph: {
    title: 'SEO Agentur München: Ihr Partner für Top-Rankings & mehr Sichtbarkeit',
    description:
      'Die führende SEO Agentur in München für messbare Ranking-Verbesserungen und mehr organischen Traffic. Wir bringen Ihr Unternehmen auf die erste Google-Seite. Jetzt unverbindlich informieren!',
  },
}

export default function Home() {
  return (
    <>
      <HomePageSchema />
      <SeoArticleFAQSchema />
      <Header />
      <main>
        <Hero
          headline="SEO Agentur München: Ihr Experte für nachhaltige Sichtbarkeit & Top-Rankings"
          showSearchAnimation
        />
        <FeatureGrid />
        <WhySeoSection />
        <KeywordSection />
        <ScreenshotsSection />
        <ProcessSection />
        <TestimonialSlider />
        <CityLinks />
        <ContactSection />
        <SeoArticleSection />
      </main>
      <Footer />
    </>
  )
}
