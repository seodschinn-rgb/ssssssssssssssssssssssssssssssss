import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeatureGrid from '@/components/FeatureGrid'
import KeywordSection from '@/components/KeywordSection'
import ScreenshotsSection from '@/components/ScreenshotsSection'
import WhySeoSection from '@/components/WhySeoSection'
import ProcessSection from '@/components/ProcessSection'
import TestimonialSlider from '@/components/TestimonialSlider'
import CityLinks from '@/components/CityLinks'
import ContactSection from '@/components/ContactSection'
import SeoArticleSection from '@/components/SeoArticleSection'
import Footer from '@/components/Footer'
import HomePageSchema from '@/components/HomePageSchema'

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
      <Header />
      <main className="home-main">
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
