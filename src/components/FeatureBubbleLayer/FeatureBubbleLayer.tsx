import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import type { FeatureBubbleDef } from '../../data/siteContent'
import { computeBeatMotion } from '../../lib/overlayMotion'
import { FloatingBubble } from '../ui/FloatingBubble/FloatingBubble'
import styles from './FeatureBubbleLayer.module.css'

export type FeatureBubbleLayerHandle = {
  setProgress: (progress: number) => void
}

type FeatureBubbleLayerProps = {
  bubbles: FeatureBubbleDef[]
}

export const FeatureBubbleLayer = forwardRef<
  FeatureBubbleLayerHandle,
  FeatureBubbleLayerProps
>(function FeatureBubbleLayer({ bubbles }, ref) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const setProgress = useCallback(
    (progress: number) => {
      bubbles.forEach((bubble, index) => {
        const el = itemRefs.current[index]
        if (!el) {
          return
        }

        const motion = computeBeatMotion(progress, bubble.start, bubble.end, {
          driftPixels: 5,
          scaleDelta: 0.003,
        })
        el.style.opacity = String(motion.opacity)
        el.style.transform = motion.transform
        const hidden = motion.opacity <= 0.001
        el.style.pointerEvents = hidden ? 'none' : 'none'
        el.setAttribute('aria-hidden', hidden ? 'true' : 'false')
      })
    },
    [bubbles],
  )

  useImperativeHandle(ref, () => ({ setProgress }), [setProgress])

  const placementStyles = useMemo(
    () =>
      bubbles.map((bubble) => ({
        top: bubble.placement.top,
        right: bubble.placement.right,
        bottom: bubble.placement.bottom,
        left: bubble.placement.left,
      })),
    [bubbles],
  )

  return (
    <div className={styles.layer} aria-hidden>
      {bubbles.map((bubble, index) => (
        <div
          key={bubble.id}
          ref={(node) => {
            itemRefs.current[index] = node
          }}
          className={styles.slot}
          style={placementStyles[index]}
        >
          <FloatingBubble
            eyebrow={bubble.eyebrow}
            title={bubble.title}
            body={bubble.body}
            accent={bubble.accent}
            ambientFloat={false}
            className={styles.bubble}
          />
        </div>
      ))}
    </div>
  )
})
