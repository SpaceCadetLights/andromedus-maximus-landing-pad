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

export const nebula = {
  eyebrow: 'Nebula App',
  title: 'Control the vibe of your space.',
  body: 'Design every moment with endless color, dynamic patterns, and intuitive control.',
  bullets: [
    { id: 'patterns', title: '100+ Light Patterns', detail: 'A living library of motion.' },
    { id: 'palettes', title: 'Wide Selection of Color Palettes', detail: 'Curated by lighting designers.' },
    { id: 'custom', title: 'Create Your Own Custom Palettes', detail: 'Tune every hue to your room.' },
    { id: 'control', title: 'Tap the Nebula app or Nebula touch remote', detail: 'Effortless, instant control.' },
  ],
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
