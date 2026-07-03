/**
 * Centralized navigation + external link data.
 *
 * The standalone Andromeda Maxima landing page mirrors the header/footer of the
 * live Wix site (spacecadetslighting.com) so it feels like a seamless part of
 * the main store. All Wix destinations are absolute anchors (no iframe, no
 * client router).
 */

const WIX = 'https://www.spacecadetslighting.com'

/** Canonical Wix destinations reused across CTAs. */
export const externalLinks = {
  home: `${WIX}/`,
  shop: `${WIX}/shop`,
  product: `${WIX}/product-page/andromeda-maxima`,
  nebulaApp: `${WIX}/nebula-app`,
  control: `${WIX}/control`,
  connect: `${WIX}/connect`,
  support: `${WIX}/support`,
  account: `${WIX}/account/my-account`,
  portfolio: `${WIX}/portfolio`,
}

export type NavLink = {
  label: string
  href: string
  /** true when the destination lives on the Wix site (absolute URL) */
  external?: boolean
}

export type NavItem = NavLink & {
  children?: NavLink[]
}

export const primaryNav: NavItem[] = [
  { label: 'Home', href: externalLinks.home, external: true },
  {
    label: 'Lights',
    href: `${WIX}/shop`,
    external: true,
    children: [
      { label: 'LightDrive', href: `${WIX}/lightdrive`, external: true },
      { label: 'Vega', href: `${WIX}/vega`, external: true },
      { label: 'Voyager', href: `${WIX}/voyager`, external: true },
      { label: 'Lotus', href: `${WIX}/lotus`, external: true },
      { label: 'Andromeda', href: `${WIX}/andromeda`, external: true },
      { label: 'Stargate', href: `${WIX}/stargate`, external: true },
      { label: 'LaunchPad', href: `${WIX}/launchpad`, external: true },
      { label: 'Ion', href: `${WIX}/ion`, external: true },
      { label: 'Compassion Flower', href: `${WIX}/compassion-flower`, external: true },
      { label: 'Andromeda Maxima', href: externalLinks.product, external: true },
    ],
  },
  {
    label: 'Installations',
    href: externalLinks.portfolio,
    external: true,
    children: [
      { label: 'Luminous Grove', href: `${WIX}/luminous-grove`, external: true },
      { label: 'Luminous Grove Ultimate', href: `${WIX}/luminous-grove-ultimate`, external: true },
      { label: 'Unity Sculpture', href: `${WIX}/unity-sculpture`, external: true },
    ],
  },
  { label: 'Portfolio', href: externalLinks.portfolio, external: true },
  { label: 'Shop', href: externalLinks.shop, external: true },
  { label: 'Nebula App', href: externalLinks.nebulaApp, external: true },
  { label: 'Control', href: externalLinks.control, external: true },
  { label: 'Support', href: externalLinks.support, external: true },
  { label: 'Connect', href: externalLinks.connect, external: true },
]

export const accountLink: NavLink = { label: 'Log In', href: externalLinks.account, external: true }
export const shopCta: NavLink = { label: 'Shop Now', href: externalLinks.shop, external: true }

export type SocialLink = {
  label: string
  href: string
  icon: 'facebook' | 'instagram'
}

// TODO(social): Confirm exact handles with the Space Cadets team.
export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/spacecadetslighting', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/spacecadetslighting', icon: 'instagram' },
]

export type FooterColumn = {
  title: string
  links: NavLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Lights',
    links: [
      { label: 'Vega', href: `${WIX}/vega`, external: true },
      { label: 'Voyager', href: `${WIX}/voyager`, external: true },
      { label: 'Andromeda', href: `${WIX}/andromeda`, external: true },
      { label: 'Lotus', href: `${WIX}/lotus`, external: true },
      { label: 'Ion', href: `${WIX}/ion`, external: true },
      { label: 'Shop All', href: externalLinks.shop, external: true },
    ],
  },
  {
    title: 'Installations',
    links: [
      { label: 'Luminous Grove', href: `${WIX}/luminous-grove`, external: true },
      { label: 'Luminous Grove Ultimate', href: `${WIX}/luminous-grove-ultimate`, external: true },
      { label: 'Unity Sculpture', href: `${WIX}/unity-sculpture`, external: true },
      { label: 'Portfolio', href: externalLinks.portfolio, external: true },
    ],
  },
  {
    title: 'Support & Legal',
    links: [
      { label: 'Shipping & Returns', href: `${WIX}/shipping-returns`, external: true },
      { label: 'Terms & Conditions', href: `${WIX}/terms-and-conditions`, external: true },
      { label: 'FAQ', href: externalLinks.support, external: true },
      { label: 'Software Credits', href: 'https://github.com/', external: true },
    ],
  },
]

export const footerContent = {
  brandLine: 'Handmade in Asheville, North Carolina.',
  newsletterTitle: 'Stay in touch',
  newsletterSub: 'and never miss a photon.',
  actions: [
    { label: 'Contact', href: externalLinks.connect, external: true },
    { label: 'Shop', href: externalLinks.shop, external: true },
  ] as NavLink[],
  copyright: '© 2026 Space Cadets Lighting™ — Asheville, North Carolina',
}
