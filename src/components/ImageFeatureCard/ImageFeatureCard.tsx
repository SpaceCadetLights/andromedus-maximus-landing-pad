import type { CtaLink } from '../../data/pageContent'
import { Button } from '../ui/Button/Button'
import { ArrowRight } from '../ui/icons'
import styles from './ImageFeatureCard.module.css'

type ImageFeatureCardProps = {
  eyebrow?: string
  title: string
  body: string
  cta: CtaLink
  imageSrc: string | null
  imageAlt: string
  /** Placeholder note shown when imageSrc is missing */
  missingLabel?: string
}

export function ImageFeatureCard({
  eyebrow,
  title,
  body,
  cta,
  imageSrc,
  imageAlt,
  missingLabel,
}: ImageFeatureCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {imageSrc ? (
          <img
            className={styles.image}
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={styles.placeholder} role="img" aria-label={imageAlt}>
            <span className={styles.placeholderText}>{missingLabel ?? 'Image coming soon'}</span>
          </div>
        )}
        <div className={styles.mediaVeil} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        {eyebrow ? <span className={`eyebrow no-rule ${styles.eyebrow}`}>{eyebrow}</span> : null}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.body}>{body}</p>
        <Button href={cta.href} variant="ghost" className={styles.cta}>
          {cta.label}
          <ArrowRight width={16} height={16} />
        </Button>
      </div>
    </article>
  )
}
