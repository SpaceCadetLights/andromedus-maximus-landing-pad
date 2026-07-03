import { SiteHeader } from './components/SiteHeader/SiteHeader'
import { HeroSection } from './components/HeroSection/HeroSection'
import { NebulaControlSection } from './components/NebulaControlSection/NebulaControlSection'
import { VibeComparisonSection } from './components/VibeComparisonSection/VibeComparisonSection'
import { FeatureCardsSection } from './components/FeatureCardsSection/FeatureCardsSection'
import { TrustStrip } from './components/TrustStrip/TrustStrip'
import { FooterCTA } from './components/FooterCTA/FooterCTA'
import { SiteFooter } from './components/SiteFooter/SiteFooter'

function App() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <HeroSection />
        <NebulaControlSection />
        <VibeComparisonSection />
        <FeatureCardsSection />
        <TrustStrip />
        <FooterCTA />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
