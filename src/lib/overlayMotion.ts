import { getRangeVisibility } from '../data/timeline'

type BeatMotionOptions = {
  feather?: number
  driftPixels?: number
  scaleDelta?: number
}

/**
 * Minimal scroll-linked motion: fade + slight vertical settle only (no parallax).
 */
export function computeBeatMotion(
  progress: number,
  start: number,
  end: number,
  options: BeatMotionOptions = {},
): { opacity: number; transform: string } {
  const { feather = 0.22, driftPixels = 6, scaleDelta = 0.004 } = options

  const visibility = getRangeVisibility(progress, start, end, feather)
  const driftY = driftPixels * (1 - visibility)
  const scale = 1 - scaleDelta + visibility * scaleDelta

  return {
    opacity: visibility,
    transform: `translate3d(0, ${driftY}px, 0) scale(${scale})`,
  }
}
