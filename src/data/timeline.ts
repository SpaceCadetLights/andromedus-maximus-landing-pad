export type TimelineRange = {
  start: number
  end: number
}

export function clamp01(value: number): number {
  return Math.min(Math.max(value, 0), 1)
}

export function getRangeProgress(
  value: number,
  start: number,
  end: number,
): number {
  if (end <= start) {
    return value >= end ? 1 : 0
  }

  return clamp01((value - start) / (end - start))
}

export function getRangeVisibility(
  value: number,
  start: number,
  end: number,
  feather = 0.16,
): number {
  if (value < start || value > end) {
    return 0
  }

  const progress = getRangeProgress(value, start, end)

  if (progress <= feather) {
    return clamp01(progress / feather)
  }

  if (progress >= 1 - feather) {
    return clamp01((1 - progress) / feather)
  }

  return 1
}
