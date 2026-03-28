import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { clamp01 } from '../data/timeline'

gsap.registerPlugin(ScrollTrigger)

type UseScrollTimelineOptions = {
  scrollLengthVh?: number
  scrub?: boolean | number
  onProgressChange?: (progress: number) => void
  debug?: boolean
  trackProgressState?: boolean
}

export function useScrollTimeline(
  options: UseScrollTimelineOptions = {},
) {
  const {
    scrollLengthVh = 320,
    scrub = true,
    onProgressChange,
    debug = false,
    trackProgressState = true,
  } = options
  const sectionRef = useRef<HTMLElement | null>(null)
  const pinRef = useRef<HTMLDivElement | null>(null)
  const [progress, setProgress] = useState(0)
  const lastLoggedProgressRef = useRef(-1)

  useEffect(() => {
    const section = sectionRef.current
    const pin = pinRef.current

    if (!section || !pin) {
      return
    }

    // ScrollTrigger handles the pin spacer; the component only tracks normalized progress.
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: () => `+=${window.innerHeight * (scrollLengthVh / 100)}`,
      pin,
      pinSpacing: true,
      scrub,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const nextProgress = clamp01(self.progress)

        if (debug && Math.abs(nextProgress - lastLoggedProgressRef.current) >= 0.04) {
          lastLoggedProgressRef.current = nextProgress
          console.debug('[scroll-scrub] progress', nextProgress.toFixed(4))
        }

        onProgressChange?.(nextProgress)
        if (trackProgressState) {
          setProgress((currentProgress) =>
            Math.abs(currentProgress - nextProgress) > 0.0005
              ? nextProgress
              : currentProgress,
          )
        }
      },
    })

    return () => {
      trigger.kill()
    }
  }, [debug, onProgressChange, scrub, scrollLengthVh, trackProgressState])

  return {
    sectionRef,
    pinRef,
    progress,
  }
}
