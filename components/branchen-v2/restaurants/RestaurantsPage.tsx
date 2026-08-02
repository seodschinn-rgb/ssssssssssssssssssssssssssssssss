import '@/app/branchen-restaurants-v2.css'
import BranchenInteractions from '@/components/branchen-v2/BranchenInteractions'
import RestaurantsHero from './RestaurantsHero'
import RestaurantsPain from './RestaurantsPain'
import RestaurantsServices from './RestaurantsServices'
import RestaurantsBand from './RestaurantsBand'
import RestaurantsSpec from './RestaurantsSpec'
import RestaurantsInvest from './RestaurantsInvest'
import RestaurantsFaq from './RestaurantsFaq'
import RestaurantsContactCta from './RestaurantsContactCta'

export default function RestaurantsPage() {
  return (
    <div className="branche-restaurants-v2">
      <a className="skip" href="#main">
        Zum Inhalt springen
      </a>
      <main id="main">
        <RestaurantsHero />
        <RestaurantsPain />
        <RestaurantsServices />
        <RestaurantsBand />
        <RestaurantsSpec />
        <RestaurantsInvest />
        <RestaurantsFaq />
        <RestaurantsContactCta />
      </main>
      <BranchenInteractions rootSelector=".branche-restaurants-v2" />
    </div>
  )
}
