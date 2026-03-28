import type { TimelineRange } from './timeline'

export type CtaLink = {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'ghost'
}

export type SceneDefinition = TimelineRange & {
  id: string
  name: string
  eyebrow: string
  title: string
  description: string
  locationLabel: string
  media: {
    posterSrc?: string
    videoAssetId?: keyof typeof videoAssets
    fallbackLabel: string
    ambient: {
      base: string
      accent: string
      glow: string
    }
  }
}

export type VideoAsset = {
  desktopSrc: string
  mobileSrc: string
  preload: 'none' | 'metadata' | 'auto'
}

export type OverlayBeat = TimelineRange & {
  id: string
  eyebrow?: string
  title: string
  body: string
  align?: 'left' | 'center' | 'right'
  actions?: CtaLink[]
}

export type DebugOverlayItem = TimelineRange & {
  id: string
  kind: 'hero' | 'bubble'
  title: string
  body?: string
  eyebrow?: string
}

export const heroContent = {
  eyebrow: 'Space Cadets Lighting',
  title: 'ANDROMEDUS MAXIMUS',
  subtitle: 'Sculptural light for immersive spaces',
  body:
    'A cinematic landing prototype for a monumental chandelier concept, designed to feel architectural, atmospheric, and ready for polished render swaps.',
}

export const ctaButtons: CtaLink[] = [
  {
    label: 'Inquire',
    href: '#contact',
    variant: 'primary',
  },
  {
    label: 'Configure Yours',
    href: '#contact',
    variant: 'secondary',
  },
  {
    label: 'View Product',
    href: '#contact',
    variant: 'ghost',
  },
]

export const videoAssets = {
  heroSequence: {
    desktopSrc: '/videos/hero-desktop-scrub.mp4',
    mobileSrc: '/videos/hero-mobile-scrub.mp4',
    preload: 'metadata',
  },
} satisfies Record<string, VideoAsset>

export const scenes: SceneDefinition[] = [
  {
    id: 'cosmic-hero',
    name: 'Cosmic Hero',
    eyebrow: 'Scene 01',
    title: 'Suspended in a celestial hush.',
    description:
      'The opening mood establishes scale, silhouette, and a subtle galactic atmosphere without resorting to overt sci-fi tropes.',
    locationLabel: 'Cosmic reveal',
    start: 0,
    end: 0.38,
    media: {
      posterSrc: '/images/scene-cosmic-placeholder.svg',
      videoAssetId: 'heroSequence',
      fallbackLabel: 'Responsive video background with cosmic fallback poster',
      ambient: {
        base: 'rgba(17, 21, 42, 0.95)',
        accent: 'rgba(126, 101, 255, 0.56)',
        glow: 'rgba(177, 147, 255, 0.28)',
      },
    },
  },
  {
    id: 'immersive-venue',
    name: 'Immersive Venue',
    eyebrow: 'Scene 02',
    title: 'Designed for rooms that stage emotion.',
    description:
      'The chandelier moves into a destination setting where its sculptural form anchors atmosphere, hospitality, and circulation.',
    locationLabel: 'Immersive venue',
    start: 0.28,
    end: 0.72,
    media: {
      posterSrc: '/images/scene-venue-placeholder.svg',
      videoAssetId: 'heroSequence',
      fallbackLabel: 'Responsive video background with venue fallback poster',
      ambient: {
        base: 'rgba(13, 18, 22, 0.94)',
        accent: 'rgba(107, 162, 202, 0.42)',
        glow: 'rgba(166, 242, 255, 0.18)',
      },
    },
  },
  {
    id: 'luxury-dining',
    name: 'Luxury Dining Room',
    eyebrow: 'Scene 03',
    title: 'A focal object for intimate grandeur.',
    description:
      'The final room shifts toward warmth and precision, framing the piece as both functional illumination and collectible presence.',
    locationLabel: 'Luxury dining room',
    start: 0.62,
    end: 1,
    media: {
      posterSrc: '/images/scene-dining-placeholder.svg',
      videoAssetId: 'heroSequence',
      fallbackLabel: 'Responsive video background with dining fallback poster',
      ambient: {
        base: 'rgba(27, 16, 17, 0.94)',
        accent: 'rgba(214, 161, 110, 0.38)',
        glow: 'rgba(255, 216, 171, 0.16)',
      },
    },
  },
]

export const overlayBeats: OverlayBeat[] = [
  {
    id: 'hero-title',
    eyebrow: 'Andromedus Maximus',
    title: 'ANDROMEDUS MAXIMUS',
    body: 'Sculptural light for immersive spaces',
    align: 'center',
    start: 0.02,
    end: 0.22,
  },
  {
    id: 'venue-copy',
    eyebrow: 'Immersive venue',
    title: 'Placeholder venue text',
    body:
      'Swap this block for final product storytelling, hospitality positioning, or designer intent once the rendered sequence is approved.',
    align: 'left',
    start: 0.36,
    end: 0.58,
  },
  {
    id: 'dining-copy',
    eyebrow: 'Luxury dining room',
    title: 'Placeholder dining text',
    body:
      'Use this beat for residential or private-club language, collection details, or a tighter material-focused narrative.',
    align: 'right',
    start: 0.7,
    end: 0.86,
  },
  {
    id: 'final-cta',
    eyebrow: 'Continue the conversation',
    title: 'Ready for the final visual pass and product handoff.',
    body:
      'These buttons are already wired as clean placeholders for future Wix product or inquiry destinations.',
    align: 'center',
    start: 0.84,
    end: 1,
    actions: ctaButtons,
  },
]

export const debugOverlayItems: DebugOverlayItem[] = [
  {
    id: 'hero-title',
    kind: 'hero',
    title: 'ANDROMEDUS',
    body: 'Sculptural light for immersive spaces',
    start: 0,
    end: 0.15,
  },
  {
    id: 'hero-bubble',
    kind: 'bubble',
    eyebrow: 'Scene 01',
    title: 'Cinematic Overlay System',
    body: 'Glass panel styling and motion language now mirror the interactive resume reference.',
    start: 0.04,
    end: 0.18,
  },
]
