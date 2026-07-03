import type { TimelineRange } from './timeline'

export type CtaLink = {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'ghost'
}

export type AccentTone = 'cyan' | 'magenta' | 'violet' | 'green'

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

export type OverlayGroupId = 'narrative' | 'closing'

export type OverlayBeat = TimelineRange & {
  id: string
  groupId: OverlayGroupId
  eyebrow?: string
  title: string
  body: string
  align?: 'left' | 'center' | 'right'
  actions?: CtaLink[]
}

export type OverlayGroup = {
  id: OverlayGroupId
  label: string
  beats: OverlayBeat[]
}

export type FeatureBubbleDef = TimelineRange & {
  id: string
  eyebrow?: string
  title: string
  body?: string
  accent: AccentTone
  placement: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
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
  title: 'ANDROMEDA MAXIMA',
  subtitle: 'Sculptural Light for Immersive Spaces',
  body:
    'A cinematic product experience for a monumental lighting sculpture—architectural, atmospheric, and composed for the final visual pass.',
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

export const detailSectionContent = {
  eyebrow: 'Scene 06',
  title: 'Up close.',
  body: 'Macro footage lands here—texture, edge light, install detail.',
  imageSrc: '/images/scene-cosmic-placeholder.svg',
  imageLabel: 'Placeholder',
  callouts: [
    { label: 'Assembly', value: 'Modular, serviceable nodes' },
    { label: 'Finish', value: 'Ceramic, metal, glass' },
  ],
}

export const ctaSectionContent = {
  eyebrow: 'Next',
  title: 'Configure for your space.',
  body: 'Consultation and spec packages—wire destinations when ready.',
}

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

const narrativeBeats: OverlayBeat[] = [
  {
    id: 'sequence-open',
    groupId: 'narrative',
    eyebrow: 'Film',
    title: 'Scroll drives the sequence.',
    body: 'Timecode, light, and silhouette stay aligned—nothing else competes with the frame.',
    align: 'center',
    start: 0.05,
    end: 0.28,
  },
  {
    id: 'spaces-copy',
    groupId: 'narrative',
    eyebrow: 'Spaces',
    title: 'Venue to residence.',
    body: 'One object, many rooms—warmth and precision without noise.',
    align: 'left',
    start: 0.38,
    end: 0.72,
  },
]

const closingBeats: OverlayBeat[] = [
  {
    id: 'final-cta',
    groupId: 'closing',
    eyebrow: 'Action',
    title: 'Continue.',
    body: 'Inquiry, configuration, or product—placeholders until handoff.',
    align: 'center',
    start: 0.78,
    end: 1,
    actions: ctaButtons,
  },
]

export const overlayGroups: OverlayGroup[] = [
  { id: 'narrative', label: 'Scene narrative', beats: narrativeBeats },
  { id: 'closing', label: 'Closing', beats: closingBeats },
]

/** Flat list for imperative overlay updates and tooling */
export const overlayBeats: OverlayBeat[] = overlayGroups.flatMap((group) => group.beats)

export const featureBubbles: FeatureBubbleDef[] = [
  {
    id: 'feat-form-light',
    eyebrow: 'Product',
    title: 'Sculptural form · full-spectrum light',
    accent: 'cyan',
    start: 0.2,
    end: 0.48,
    placement: { top: '11%', left: '5%' },
  },
  {
    id: 'feat-system',
    eyebrow: 'System',
    title: 'WiFi / DMX · custom installs',
    accent: 'violet',
    start: 0.42,
    end: 0.68,
    placement: { bottom: '14%', right: '6%' },
  },
]

export const debugOverlayItems: DebugOverlayItem[] = [
  {
    id: 'hero-title',
    kind: 'hero',
    title: 'ANDROMEDA',
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
