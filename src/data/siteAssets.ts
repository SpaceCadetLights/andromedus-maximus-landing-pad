/**
 * Central asset map for the Andromeda Maxima landing page.
 *
 * Source images live in the repo-root folder "Andromeda Maxima website assets"
 * and are copied (kebab-cased) into `public/assets/andromeda-maxima/` so Vite
 * can serve them reliably. To swap an image, drop a replacement at the same
 * path in `public/` and it will update automatically.
 *
 * The "Nebula Touch Remote" card renders a looping product video (converted
 * from the source .mov) instead of a still image.
 */

const BASE = '/assets/andromeda-maxima'

export type PaletteAsset = {
  id: string
  name: string
  src: string
}

export type PatternAsset = {
  id: string
  name: string
  src: string
}

export type VideoAsset = {
  /**
   * HEVC (H.265) with an alpha channel in an MP4, tagged `hvc1`. This is the
   * only transparent-video format iOS/macOS Safari supports; Chrome/Firefox
   * skip it (no HEVC-alpha decode) and fall through to the WebM below.
   */
  hevcAlpha: string
  /** VP9-alpha WebM for Chrome/Firefox/Edge. */
  webm: string
  poster: string
}

export const siteAssets = {
  brand: {
    logo: `${BASE}/space-cadets-logo.png`,
  },
  hero: {
    // Andromeda on the right, dark nebula/text-safe space on the left.
    desktop: `${BASE}/hero-desktop.png`,
    // Reuse the prepared desktop hero on mobile with adjusted object-position.
    mobile: `${BASE}/hero-desktop.png`,
    backup: `${BASE}/hero-no-edits.png`,
  },
  backgrounds: {
    galaxy: `${BASE}/galaxy-background.png`,
    spiralGalaxy: `${BASE}/spiral-galaxy.png`,
    // Vertically-symmetric nebula used as a subtle full-page backdrop layer.
    pageNebula: `${BASE}/nebula-page-bg.jpg`,
  },
  nebulaApp: {
    // Angled hero render of the app on an iPhone (matches the reference card).
    nebulaRendering: `${BASE}/nebula-app/nebula-rendering.png`,
    nebulaView: `${BASE}/nebula-app/nebula-view.png`,
    colorsPage: `${BASE}/nebula-app/colors-page.png`,
    listView: `${BASE}/nebula-app/list-view.png`,
  },
  vibe: {
    refinedDinner: `${BASE}/kitchen-table.png`,
    // Same dining room as the refined shot, but with the chandelier in vivid
    // full-spectrum color — shows one product transforming the space.
    expressiveCelebration: `${BASE}/expressive-celebration.png`,
    warmCoolSlider: `${BASE}/sliders/warm-cool.png`,
    vividSlider: `${BASE}/sliders/vivid.png`,
  },
  cards: {
    remote: `${BASE}/cards/nebula-remote-poster.png`,
    remoteVideo: {
      hevcAlpha: `${BASE}/cards/nebula-remote-alpha.mp4`,
      webm: `${BASE}/cards/nebula-remote.webm`,
      poster: `${BASE}/cards/nebula-remote-poster.png`,
    } satisfies VideoAsset,
    craftsmanship: `${BASE}/closeup.png`,
    proStage: `${BASE}/stage.png`,
  },
  dimensions: {
    // Full hanging chandelier with ceiling mount (transparent) — hero diagram.
    chandelier: `${BASE}/dimensions/chandelier-ceiling-mount.png`,
    // Ceiling mount seen from the top/side (transparent).
    ceilingMountTop: `${BASE}/dimensions/ceiling-mount-top.png`,
    // Ceiling mount underside showing the bracket (transparent).
    ceilingMountUnderside: `${BASE}/dimensions/ceiling-mount-underside.png`,
  },
  palettes: [
    { id: 'cosmic-dusk', name: 'Cosmic Dusk', src: `${BASE}/palettes/cosmic-dusk.png` },
    { id: 'aurora-borealis', name: 'Aurora Borealis', src: `${BASE}/palettes/aurora-borealis.png` },
    { id: 'nebula-bloom', name: 'Nebula Bloom', src: `${BASE}/palettes/nebula-bloom.png` },
    { id: 'electric-dream', name: 'Electric Dream', src: `${BASE}/palettes/electric-dream.png` },
    { id: 'galaxy-veil', name: 'Galaxy Veil', src: `${BASE}/palettes/galaxy-veil.png` },
    { id: 'full-spectrum', name: 'Full Spectrum', src: `${BASE}/palettes/full-spectrum.png` },
  ] satisfies PaletteAsset[],
  patterns: [
    { id: 'twinkle', name: 'Twinkle', src: `${BASE}/patterns/twinkle.png` },
    { id: 'orbit', name: 'Orbit', src: `${BASE}/patterns/orbit.png` },
    { id: 'wave', name: 'Wave', src: `${BASE}/patterns/wave.png` },
    { id: 'flow', name: 'Flow', src: `${BASE}/patterns/flow.png` },
    { id: 'fluid', name: 'Fluid', src: `${BASE}/patterns/fluid.png` },
    { id: 'strobe', name: 'Strobe', src: `${BASE}/patterns/strobe.png` },
  ] satisfies PatternAsset[],
}

export type SiteAssets = typeof siteAssets
