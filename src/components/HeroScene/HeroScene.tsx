import type { CtaLink } from '../../data/siteContent'
import styles from './HeroScene.module.css'

type HeroSceneProps = {
  content: {
    eyebrow: string
    title: string
    subtitle: string
    body: string
  }
  actions: CtaLink[]
}

export function HeroScene({ content, actions }: HeroSceneProps) {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.ambient} aria-hidden="true">
        <div className={styles.ring} />
        <div className={styles.core} />
        <div className={styles.gridGlow} />
      </div>

      <div className={`section-frame ${styles.inner}`}>
        <div className={styles.copy}>
          <span className="eyebrow">{content.eyebrow}</span>
          <h1>{content.title}</h1>
          <p className={styles.subtitle}>{content.subtitle}</p>
          <p className={styles.body}>{content.body}</p>

          <div className="button-row">
            {actions.map((action) => (
              <a
                key={action.label}
                className={`button-link button-link-${action.variant}`}
                href={action.href}
              >
                {action.label}
              </a>
            ))}
            <a className={`button-link button-link-ghost ${styles.inlineLink}`} href="#experience">
              Explore Sequence
            </a>
          </div>
        </div>

        <div className={styles.objectWrap} aria-hidden="true">
          <div className={styles.objectHalo} />
          <div className={styles.object}>
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={styles.captionCard}>
            <span className={styles.captionLabel}>Prototype Visual</span>
            <strong>Replace with final render still or video poster</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
