/**
 * Centralized copy + CTA configuration for the Andromeda Maxima landing page.
 * Update text and links here — components stay presentation-only.
 *
 * Purchasing/configure CTAs deep-link to the live Wix product page; contact,
 * app, and control CTAs deep-link to their matching Wix pages so the standalone
 * page behaves like part of the main store.
 */

import { externalLinks } from './navigation'

export type CtaLink = {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'ghost'
}

export type NavLink = {
  label: string
  href: string
}

export const brand = {
  company: 'Space Cadets Lighting',
  product: 'Andromeda Maxima',
}

export const navLinks: NavLink[] = [
  { label: 'Products', href: '#products' },
  { label: 'Nebula App', href: '#nebula' },
  { label: 'Inspiration', href: '#vibe' },
  { label: 'For Pros', href: '#pro' },
  { label: 'About', href: '#about' },
]

export const navCta: CtaLink = {
  label: 'Shop Now',
  href: externalLinks.shop,
  variant: 'primary',
}

export const hero = {
  eyebrow: 'New Flagship',
  title: 'Andromeda Maxima',
  subtitle: 'Sculpted light. Infinite possibilities.',
  body: 'A kinetic chandelier that transforms every moment. From refined elegance to expressive color — you set the vibe.',
  actions: [
    { label: 'Configure Yours', href: externalLinks.product, variant: 'primary' },
    { label: 'Book a Consultation', href: externalLinks.connect, variant: 'secondary' },
  ] satisfies CtaLink[],
  motionLabel: 'See It in Motion',
}

export const model = {
  eyebrow: 'Interactive 3D',
  title: 'Explore every angle.',
  body: 'Spin, tilt, and get up close with Andromeda Maxima. Drag to rotate the sculpture in real time and see how the form catches light from every direction.',
  // Spline Viewer scene URL (rendered with a transparent background).
  sceneUrl: 'https://prod.spline.design/wJaHbf24DjkaaKnq/scene.splinecode',
  hint: 'Drag to rotate · Scroll to zoom',
}

export type FeaturePill = {
  id: string
  title: string
  detail: string
  icon: 'architectural' | 'smart' | 'premium'
}

export const featurePills: FeaturePill[] = [
  { id: 'architectural', title: 'Architectural', detail: 'Sculptural centerpiece', icon: 'architectural' },
  { id: 'smart', title: 'Smart Control', detail: 'Nebula App or Remote', icon: 'smart' },
  { id: 'premium', title: 'Premium Build', detail: 'Made to last', icon: 'premium' },
]

export type NebulaBullet = {
  id: string
  title: string
  detail: string
  icon: 'patterns' | 'palettes' | 'custom' | 'remote'
  accent: 'pink' | 'violet' | 'plain'
}

export const nebula = {
  eyebrow: 'Nebula App',
  title: 'Control the vibe of your space.',
  body: 'Design every moment with endless color, dynamic patterns, and intuitive control.',
  bullets: [
    { id: 'patterns', title: '100+', detail: 'Light Patterns', icon: 'patterns', accent: 'pink' },
    { id: 'palettes', title: 'Wide Selection', detail: 'of Color Palettes', icon: 'palettes', accent: 'pink' },
    { id: 'custom', title: 'Create Your Own', detail: 'Custom Palettes', icon: 'custom', accent: 'violet' },
    { id: 'control', title: 'Tap the Nebula app', detail: 'or Nebula touch remote.', icon: 'remote', accent: 'plain' },
  ] satisfies NebulaBullet[],
  palettesTitle: 'Curated Palettes',
  patternsTitle: 'Dynamic Patterns',
  patternsMore: 'And many more to explore.',
}

export const vibe = {
  eyebrow: 'One Chandelier',
  title: 'Every vibe. Every moment.',
  body: 'From intimate dinners to vibrant celebrations, Andromeda Maxima moves with you.',
  cards: {
    refined: {
      title: 'Refined Dinner',
      tag: 'Warm White',
      sliderLabel: 'Warm to cool white balance',
    },
    expressive: {
      title: 'Expressive Celebration',
      tag: 'Aurora Palette',
      sliderLabel: 'Subtle to vivid color intensity',
    },
  },
}

export type DimensionInstallBullet = {
  id: string
  title: string
  detail: string
  icon: 'electricalBox' | 'chainLink' | 'mountingHardware' | 'taperedCover'
  accent: 'pink' | 'violet'
}

export type DimensionCallout = {
  id: string
  value: string
  label: string
}

export const dimensions = {
  eyebrow: 'Technical Specifications',
  title: 'Dimensions & Installation',
  intro: 'Andromeda Maxima is designed for easy installation and adjustable to suit your space.',
  bullets: [
    {
      id: 'electrical-box',
      title: 'Mounts to Standard Electrical Box',
      detail: 'Compatible with standard chandeliers / ceiling electrical boxes.',
      icon: 'electricalBox',
      accent: 'violet',
    },
    {
      id: 'hanging-chain',
      title: 'Adjustable Hanging Chain',
      detail: 'Easily adjust the chain length to achieve your perfect drop.',
      icon: 'chainLink',
      accent: 'violet',
    },
    {
      id: 'mounting-hardware',
      title: 'Metal Mounting Hardware Included',
      detail: 'All necessary hardware included for a secure and stable installation.',
      icon: 'mountingHardware',
      accent: 'violet',
    },
    {
      id: 'tapered-cover',
      title: '3D-Printed Tapered Cover',
      detail: '3D-printed tapered cover painted to match the finish of the light.',
      icon: 'taperedCover',
      accent: 'violet',
    },
  ] satisfies DimensionInstallBullet[],
  callouts: {
    ceilingDiameter: {
      id: 'ceiling-diameter',
      value: '12 in / 30.5 cm',
      label: 'Ceiling Mount Diameter',
    },
    hangingHeight: {
      id: 'hanging-height',
      value: '1 m / 39.4 in',
      label: 'Adjustable Hanging Height',
    },
    overallHeight: {
      id: 'overall-height',
      value: '33 in / 84 cm',
      label: 'Overall Height (Light Body Only)',
    },
    lightDiameter: {
      id: 'light-diameter',
      value: '20 in / 51 cm',
      label: 'Light Diameter',
    },
  } satisfies Record<string, DimensionCallout>,
  chandelierAlt:
    'Andromeda Maxima chandelier hanging from its ceiling mount, shown with dimension callouts',
  note: 'Professional installation recommended. Suitable for indoor use in dry locations.',
  detail: {
    topView: {
      caption: 'Top View',
      alt: 'Andromeda Maxima ceiling mount canopy viewed from the top',
    },
    undersideView: {
      caption: 'Underside View',
      alt: 'Andromeda Maxima ceiling mount underside showing the mounting bracket',
    },
    title: 'Ceiling Mount Assembly',
    body: 'Standard canopy with wide flange, 3D-printed tapered cover, and mounting bracket finish.',
  },
}

export type FeatureCard = {
  id: string
  eyebrow?: string
  title: string
  body: string
  cta: CtaLink
  imageKey: 'remote' | 'craftsmanship' | 'proStage'
}

export const featureCards: FeatureCard[] = [
  {
    id: 'remote',
    title: 'Nebula Touch Remote',
    body: 'Instant control at your fingertips. Change brightness, colors, patterns, and speed — effortlessly.',
    cta: { label: 'Explore Remote', href: externalLinks.control, variant: 'ghost' },
    imageKey: 'remote',
  },
  {
    id: 'craftsmanship',
    title: 'Crafted to Inspire',
    body: 'Precision-engineered with premium materials and a sculptural form that defines any space.',
    cta: { label: 'See the Craftsmanship', href: externalLinks.product, variant: 'ghost' },
    imageKey: 'craftsmanship',
  },
  {
    id: 'pro',
    eyebrow: 'For Pros',
    title: 'Pro Edition Stage Ready',
    body: 'Engineered for large-scale installs and live environments. Built to perform under any spotlight.',
    cta: { label: 'Explore Pro Edition', href: externalLinks.connect, variant: 'ghost' },
    imageKey: 'proStage',
  },
]

export type TrustItem = {
  id: string
  title: string
  detail: string
  icon: 'materials' | 'warranty' | 'shipping' | 'support'
}

export const trustItems: TrustItem[] = [
  { id: 'materials', title: 'Premium Materials', detail: 'Built to last', icon: 'materials' },
  { id: 'warranty', title: '2-Year Warranty', detail: 'Peace of mind', icon: 'warranty' },
  { id: 'shipping', title: 'Global Shipping', detail: 'Delivered with care', icon: 'shipping' },
  { id: 'support', title: 'Dedicated Support', detail: 'We’re here to help', icon: 'support' },
]

export const footer = {
  eyebrow: 'Andromeda Maxima',
  title: 'Bring the cosmos home.',
  body: 'Configure your Andromeda Maxima or speak with a lighting specialist about your space.',
  actions: [
    { label: 'Configure Yours', href: externalLinks.product, variant: 'primary' },
    { label: 'Book a Consultation', href: externalLinks.connect, variant: 'secondary' },
  ] satisfies CtaLink[],
}
