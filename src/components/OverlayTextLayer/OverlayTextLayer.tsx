import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import type { OverlayGroup } from '../../data/siteContent'
import { computeBeatMotion } from '../../lib/overlayMotion'
import { CTAButton } from '../ui/CTAButton/CTAButton'
import { GlassPanel } from '../ui/GlassPanel/GlassPanel'
import styles from './OverlayTextLayer.module.css'

export type OverlayTextLayerHandle = {
  setProgress: (progress: number) => void
}

type OverlayTextLayerProps = {
  groups: OverlayGroup[]
}

export const OverlayTextLayer = forwardRef<
  OverlayTextLayerHandle,
  OverlayTextLayerProps
>(function OverlayTextLayer({ groups }, ref) {
  const flatBeats = useMemo(
    () => groups.flatMap((group) => group.beats),
    [groups],
  )
  const itemRefs = useRef<(HTMLElement | null)[]>([])

  const setProgress = useCallback(
    (progress: number) => {
      flatBeats.forEach((beat, index) => {
        const el = itemRefs.current[index]
        if (!el) {
          return
        }

        const motion = computeBeatMotion(progress, beat.start, beat.end)
        el.style.opacity = String(motion.opacity)
        el.style.transform = motion.transform
        const hidden = motion.opacity <= 0.001
        el.style.pointerEvents = hidden ? 'none' : 'auto'
        el.setAttribute('aria-hidden', hidden ? 'true' : 'false')
      })
    },
    [flatBeats],
  )

  useImperativeHandle(ref, () => ({ setProgress }), [setProgress])

  let runningIndex = 0

  return (
    <div className={styles.layer}>
      {groups.map((group) => (
        <div
          key={group.id}
          className={styles.group}
          data-overlay-group={group.id}
        >
          {group.beats.map((beat) => {
            const index = runningIndex++
            return (
              <article
                key={beat.id}
                ref={(node) => {
                  itemRefs.current[index] = node
                }}
                className={`${styles.beat} ${styles[beat.align ?? 'center']}`}
                style={{
                  opacity: 0,
                  transform: 'translate3d(0, 18px, 0)',
                }}
                aria-hidden
              >
                <GlassPanel padding="md" variant="quiet" className={styles.panel}>
                  {beat.eyebrow ? (
                    <span className={`eyebrow ${styles.eyebrow}`}>{beat.eyebrow}</span>
                  ) : null}
                  <h2 className={styles.heading}>{beat.title}</h2>
                  <p className={styles.body}>{beat.body}</p>

                  {beat.actions?.length ? (
                    <div className={`${styles.actions} button-row`}>
                      {beat.actions.map((action) => (
                        <CTAButton
                          key={action.label}
                          href={action.href}
                          variant={action.variant}
                        >
                          {action.label}
                        </CTAButton>
                      ))}
                    </div>
                  ) : null}
                </GlassPanel>
              </article>
            )
          })}
        </div>
      ))}
    </div>
  )
})
