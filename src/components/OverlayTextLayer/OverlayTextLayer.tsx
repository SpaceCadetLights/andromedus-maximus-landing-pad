import type { OverlayBeat } from '../../data/siteContent'
import { getRangeVisibility } from '../../data/timeline'
import styles from './OverlayTextLayer.module.css'

type OverlayTextLayerProps = {
  progress: number
  beats: OverlayBeat[]
}

export function OverlayTextLayer({
  progress,
  beats,
}: OverlayTextLayerProps) {
  return (
    <div className={styles.layer}>
      {beats.map((beat) => {
        const visibility = getRangeVisibility(progress, beat.start, beat.end, 0.2)
        const isHidden = visibility <= 0.001

        return (
          <article
            key={beat.id}
            className={`${styles.beat} ${styles[beat.align ?? 'center']}`}
            style={{
              opacity: visibility,
              transform: `translate3d(0, ${18 * (1 - visibility)}px, 0)`,
              pointerEvents: isHidden ? 'none' : 'auto',
            }}
            aria-hidden={isHidden}
          >
            <div className={styles.panel}>
              {beat.eyebrow ? <span className="eyebrow">{beat.eyebrow}</span> : null}
              <h2>{beat.title}</h2>
              <p>{beat.body}</p>

              {beat.actions?.length ? (
                <div className={`button-row ${styles.actions}`}>
                  {beat.actions.map((action) => (
                    <a
                      key={action.label}
                      className={`button-link button-link-${action.variant}`}
                      href={action.href}
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        )
      })}
    </div>
  )
}
