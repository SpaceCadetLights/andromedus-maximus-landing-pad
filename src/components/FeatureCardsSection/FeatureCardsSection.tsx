import { featureCards } from '../../data/pageContent'
import { siteAssets } from '../../data/siteAssets'
import { ImageFeatureCard } from '../ImageFeatureCard/ImageFeatureCard'
import styles from './FeatureCardsSection.module.css'

const altMap: Record<string, string> = {
  remote: 'Nebula touch remote for the Andromeda Maxima chandelier',
  craftsmanship: 'Close-up of the Andromeda Maxima chandelier showing premium materials',
  proStage: 'Two Andromeda Maxima Pro Edition chandeliers on a concert stage',
}

export function FeatureCardsSection() {
  return (
    <section id="products" className={`section ${styles.wrap}`} aria-label="Product highlights">
      <div className={styles.grid}>
        {featureCards.map((card) => (
          <ImageFeatureCard
            key={card.id}
            eyebrow={card.eyebrow}
            title={card.title}
            body={card.body}
            cta={card.cta}
            imageSrc={siteAssets.cards[card.imageKey]}
            imageAlt={altMap[card.imageKey]}
            missingLabel="Remote photo coming soon"
          />
        ))}
      </div>
    </section>
  )
}
