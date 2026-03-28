import { useCallback, useEffect, useRef } from 'react'
import type { RefObject } from 'react'
import { clamp01 } from '../data/timeline'

type UseScrollScrubVideoOptions = {
  easing?: number
  endOffsetSeconds?: number
  debug?: boolean
}

export function useScrollScrubVideo(
  videoRef: RefObject<HTMLVideoElement | null>,
  options: UseScrollScrubVideoOptions = {},
) {
  const { easing = 0.24, endOffsetSeconds = 0.04, debug = false } = options
  const targetProgressRef = useRef(0)
  const targetTimeRef = useRef(0)
  const displayedTimeRef = useRef(0)
  const lastAppliedTimeRef = useRef(0)
  const animationFrameRef = useRef<number | null>(null)
  const isMetadataReadyRef = useRef(false)
  const hasPlaybackErrorRef = useRef(false)
  const lastDebugLogRef = useRef(0)

  const cancelAnimation = useCallback(() => {
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
  }, [])

  const scrubToTarget = useCallback(
    function scrubToTargetFrame() {
      const video = videoRef.current

      if (!video || !isMetadataReadyRef.current || hasPlaybackErrorRef.current) {
        animationFrameRef.current = null
        return
      }

      const safeDuration = Math.max(video.duration - endOffsetSeconds, 0)

      if (!Number.isFinite(safeDuration) || safeDuration <= 0) {
        animationFrameRef.current = null
        return
      }

      const targetTime = clamp01(targetProgressRef.current) * safeDuration
      targetTimeRef.current = targetTime

      const nextDisplayedTime =
        displayedTimeRef.current + (targetTime - displayedTimeRef.current) * easing
      const snappedTime =
        Math.abs(targetTime - nextDisplayedTime) <= 1 / 120 ? targetTime : nextDisplayedTime

      displayedTimeRef.current = snappedTime

      if (!Number.isFinite(snappedTime)) {
        animationFrameRef.current = null
        return
      }

      if (Math.abs(lastAppliedTimeRef.current - snappedTime) >= 1 / 60) {
        try {
          video.currentTime = snappedTime
          lastAppliedTimeRef.current = snappedTime
        } catch (error) {
          hasPlaybackErrorRef.current = true
          animationFrameRef.current = null

          if (debug) {
            console.debug('[scroll-scrub] failed to set currentTime', error)
          }

          return
        }
      }

      if (debug) {
        const now = performance.now()

        if (now - lastDebugLogRef.current > 180) {
          lastDebugLogRef.current = now
          console.debug('[scroll-scrub] targetTime', targetTime.toFixed(3))
          console.debug('[scroll-scrub] displayedTime', displayedTimeRef.current.toFixed(3))
        }
      }

      if (Math.abs(targetTime - displayedTimeRef.current) <= 1 / 120) {
        animationFrameRef.current = null
        return
      }

      animationFrameRef.current = window.requestAnimationFrame(scrubToTargetFrame)
    },
    [debug, easing, endOffsetSeconds, videoRef],
  )

  const syncProgress = useCallback(
    (progress: number) => {
      const nextProgress = clamp01(progress)
      targetProgressRef.current = nextProgress

      const video = videoRef.current

      if (video && isMetadataReadyRef.current) {
        const safeDuration = Math.max(video.duration - endOffsetSeconds, 0)

        if (Number.isFinite(safeDuration) && safeDuration > 0) {
          targetTimeRef.current = nextProgress * safeDuration
        }
      }

      if (debug) {
        const now = performance.now()

        if (now - lastDebugLogRef.current > 180) {
          lastDebugLogRef.current = now
          console.debug('[scroll-scrub] targetProgress', nextProgress.toFixed(4))
        }
      }

      if (!isMetadataReadyRef.current || animationFrameRef.current !== null) {
        return
      }

      animationFrameRef.current = window.requestAnimationFrame(scrubToTarget)
    },
    [debug, endOffsetSeconds, scrubToTarget, videoRef],
  )

  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current

    if (!video) {
      return
    }

    hasPlaybackErrorRef.current = false
    isMetadataReadyRef.current =
      Number.isFinite(video.duration) &&
      video.duration > 0 &&
      video.readyState >= HTMLMediaElement.HAVE_METADATA

    video.pause()
    video.currentTime = 0
    displayedTimeRef.current = 0
    lastAppliedTimeRef.current = 0

    if (debug) {
      console.debug('[scroll-scrub] metadata loaded')
      console.debug('[scroll-scrub] duration', video.duration)
      console.debug('[scroll-scrub] paused by default', video.paused)
    }

    if (isMetadataReadyRef.current) {
      syncProgress(targetProgressRef.current)
    }
  }, [debug, syncProgress, videoRef])

  const handleVideoError = useCallback(() => {
    hasPlaybackErrorRef.current = true
    isMetadataReadyRef.current = false
    cancelAnimation()

    if (debug) {
      console.debug('[scroll-scrub] video error, using fallback poster')
    }
  }, [cancelAnimation, debug])

  useEffect(() => {
    const video = videoRef.current

    if (!video) {
      return
    }

    video.pause()
    video.muted = true
    video.playsInline = true

    const primePlayback = async () => {
      try {
        await video.play()
        video.pause()
        video.currentTime = 0
      } catch {
        video.pause()
      }
    }

    void primePlayback()
  }, [videoRef])

  useEffect(() => {
    const video = videoRef.current

    if (!video || !debug || !('requestVideoFrameCallback' in HTMLVideoElement.prototype)) {
      return
    }

    let frameCallbackId = 0
    let isCancelled = false

    const logDisplayedFrame = () => {
      if (isCancelled) {
        return
      }

      const now = performance.now()

      if (now - lastDebugLogRef.current > 180) {
        lastDebugLogRef.current = now
        console.debug('[scroll-scrub] actualDisplayedTime', video.currentTime.toFixed(3))
      }

      frameCallbackId = video.requestVideoFrameCallback(logDisplayedFrame)
    }

    frameCallbackId = video.requestVideoFrameCallback(logDisplayedFrame)

    return () => {
      isCancelled = true
      video.cancelVideoFrameCallback(frameCallbackId)
    }
  }, [debug, videoRef])

  useEffect(() => cancelAnimation, [cancelAnimation])

  return {
    syncProgress,
    handleLoadedMetadata,
    handleVideoError,
  }
}
