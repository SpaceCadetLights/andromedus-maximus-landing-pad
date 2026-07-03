import { hero } from '../../data/pageContent'
import { siteAssets } from '../../data/siteAssets'
import { FeaturePillRow } from '../FeaturePillRow/FeaturePillRow'
import { Button } from '../ui/Button/Button'
import { PlayIcon } from '../ui/icons'
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section id="top" className={styles.hero} aria-label="Andromeda Maxima hero">
      <div className={styles.media}>
        <img
          className={styles.image}
          src={siteAssets.hero.desktop}
          alt="Andromeda Maxima kinetic chandelier suspended above a marble dining table in a dark luxury interior"
          fetchPriority="high"
        />
        <div className={styles.veil} aria-hidden="true" />
        <div className={styles.orbit} aria-hidden="true" />
      </div>

      <div className={`section ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={`eyebrow ${styles.eyebrow}`}>{hero.eyebrow}</span>
          <h1 className={`display-title ${styles.title}`}>{hero.title}</h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>
          <p className={styles.body}>{hero.body}</p>

          <div className={`btn-row ${styles.actions}`}>
            {hero.actions.map((action) => (
              <Button key={action.label} href={action.href} variant={action.variant}>
                {action.label}
              </Button>
            ))}
          </div>

          <FeaturePillRow />
        </div>

        <a className={styles.motion} href="#nebula" aria-label={hero.motionLabel}>
          <span className={styles.motionPlay}>
            <PlayIcon width={18} height={18} />
          </span>
          <span className={styles.motionLabel}>{hero.motionLabel}</span>
        </a>
      </div>
    </section>
  )
}
