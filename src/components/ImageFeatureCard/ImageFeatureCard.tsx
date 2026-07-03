import type { CtaLink } from '../../data/pageContent'
import type { VideoAsset } from '../../data/siteAssets'
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
  /** When set, the media area renders a looping video instead of the image */
  video?: VideoAsset
  /**
   * Lets a transparent video break out of its media box and float above the
   * card content for a 3D "pop-out" effect. Only meaningful with `video`.
   */
  floating?: boolean
}

export function ImageFeatureCard({
  eyebrow,
  title,
  body,
  cta,
  imageSrc,
  imageAlt,
  missingLabel,
  video,
  floating = false,
}: ImageFeatureCardProps) {
  return (
    <article className={`${styles.card} ${floating ? styles.floatingCard : ''}`}>
      <div className={`${styles.media} ${floating ? styles.floatingMedia : ''}`}>
        {video ? (
          <video
            className={`${styles.image} ${floating ? styles.floatingVideo : ''}`}
            aria-label={imageAlt}
            poster={floating ? undefined : video.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={video.webm} type="video/webm" />
            <source src={video.mp4} type="video/mp4" />
          </video>
        ) : imageSrc ? (
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
        {floating ? null : <div className={styles.mediaVeil} aria-hidden="true" />}
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
