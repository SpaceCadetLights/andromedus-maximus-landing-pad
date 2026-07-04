import { SiteHeader } from './components/SiteHeader/SiteHeader'
import { HeroSection } from './components/HeroSection/HeroSection'
import { InteractiveModelSection } from './components/InteractiveModelSection/InteractiveModelSection'
import { NebulaControlSection } from './components/NebulaControlSection/NebulaControlSection'
import { VibeComparisonSection } from './components/VibeComparisonSection/VibeComparisonSection'
import { FeatureCardsSection } from './components/FeatureCardsSection/FeatureCardsSection'
import { DimensionsSection } from './components/DimensionsSection/DimensionsSection'
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
        <DimensionsSection />
        <TrustStrip />
        <InteractiveModelSection />
        <FooterCTA />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
