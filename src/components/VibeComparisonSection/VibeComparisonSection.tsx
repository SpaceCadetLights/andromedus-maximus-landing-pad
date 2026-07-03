import { vibe } from '../../data/pageContent'
import { siteAssets } from '../../data/siteAssets'
import { SwapIcon } from '../ui/icons'
import styles from './VibeComparisonSection.module.css'

export function VibeComparisonSection() {
  return (
    <section id="vibe" className={`section ${styles.wrap}`} aria-label="Every vibe, every moment">
      <div className={styles.layout}>
        <div className={styles.copy}>
          <span className="eyebrow">{vibe.eyebrow}</span>
          <h2 className={`display-title ${styles.title}`}>{vibe.title}</h2>
          <p className={styles.body}>{vibe.body}</p>
        </div>

        <div className={styles.cards}>
          <article className={`${styles.card} ${styles.refined}`}>
            <img
              className={styles.image}
              src={siteAssets.vibe.refinedDinner}
              alt="Andromeda Maxima in warm white above an elegant dinner table"
              loading="lazy"
              decoding="async"
            />
            <div className={styles.cardVeil} aria-hidden="true" />
            <header className={styles.cardHead}>
              <h3 className={styles.cardTitle}>{vibe.cards.refined.title}</h3>
              <span className={styles.cardTag}>{vibe.cards.refined.tag}</span>
            </header>
            <img
              className={styles.slider}
              src={siteAssets.vibe.warmCoolSlider}
              alt={vibe.cards.refined.sliderLabel}
              loading="lazy"
              decoding="async"
            />
          </article>

          <div className={styles.swap} aria-hidden="true">
            <SwapIcon width={22} height={22} />
          </div>

          <article className={`${styles.card} ${styles.expressive}`}>
            <img
              className={styles.image}
              src={siteAssets.vibe.expressiveCelebration}
              alt="Andromeda Maxima in vivid full-spectrum color for an expressive celebration"
              loading="lazy"
              decoding="async"
            />
            <div className={styles.cardVeil} aria-hidden="true" />
            <header className={styles.cardHead}>
              <h3 className={styles.cardTitle}>{vibe.cards.expressive.title}</h3>
              <span className={styles.cardTag}>{vibe.cards.expressive.tag}</span>
            </header>
            <img
              className={styles.slider}
              src={siteAssets.vibe.vividSlider}
              alt={vibe.cards.expressive.sliderLabel}
              loading="lazy"
              decoding="async"
            />
          </article>
        </div>
      </div>
    </section>
  )
}
