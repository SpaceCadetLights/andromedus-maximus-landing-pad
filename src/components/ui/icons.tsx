import type { SVGProps } from 'react'

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

type IconProps = SVGProps<SVGSVGElement>

export function BrandMark(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 3c2.2 3 2.2 5.5 0 9s-2.2 6 0 9" />
      <path d="M12 3c-2.2 3-2.2 5.5 0 9s2.2 6 0 9" />
      <circle cx="12" cy="12" r="9.2" opacity="0.5" />
    </svg>
  )
}

export function ArchitecturalIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 2v20" />
      <path d="M12 6c3 1.5 4.5 3.5 4.5 6S15 16.5 12 18" />
      <path d="M12 6c-3 1.5-4.5 3.5-4.5 6S9 16.5 12 18" />
    </svg>
  )
}

export function SmartIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18h2" />
      <circle cx="12" cy="11" r="3.2" />
    </svg>
  )
}

export function PremiumIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.9 7.2 18.7l.9-5.4L4.2 8.7l5.4-.8z" />
    </svg>
  )
}

export function MaterialsIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 2.5l8.5 4.9v9.2L12 21.5 3.5 16.6V7.4z" />
      <path d="M3.7 7.5L12 12l8.3-4.5" />
      <path d="M12 12v9.3" />
    </svg>
  )
}

export function WarrantyIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 2.5l7.5 3v5.5c0 4.6-3.2 8-7.5 9.5-4.3-1.5-7.5-4.9-7.5-9.5V5.5z" />
      <path d="M9 12l2 2 4-4.3" />
    </svg>
  )
}

export function ShippingIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M2.5 7h10v9h-10z" />
      <path d="M12.5 10h4l3 3v3h-7z" />
      <circle cx="6" cy="18" r="1.6" />
      <circle cx="16.5" cy="18" r="1.6" />
    </svg>
  )
}

export function SupportIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4 13v-1a8 8 0 0116 0v1" />
      <rect x="3" y="13" width="3.5" height="6" rx="1.4" />
      <rect x="17.5" y="13" width="3.5" height="6" rx="1.4" />
      <path d="M19 19v.5a3 3 0 01-3 3h-2.5" />
    </svg>
  )
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M9 7.5l8 4.5-8 4.5z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4 12h16" />
      <path d="M14 6l6 6-6 6" />
    </svg>
  )
}

export function SwapIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4 9h16" />
      <path d="M8 5L4 9l4 4" />
      <path d="M20 15H4" />
      <path d="M16 11l4 4-4 4" />
    </svg>
  )
}

export function CheckDot(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="12" cy="12" r="9" opacity="0.4" />
      <path d="M8.5 12l2.4 2.4 4.6-5" />
    </svg>
  )
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.6 3-6 7-6s7 2.4 7 6" />
    </svg>
  )
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M3 4h2l2.2 11.2a1.5 1.5 0 001.5 1.2h8.1a1.5 1.5 0 001.5-1.1L20.5 8H6.2" />
      <circle cx="9.5" cy="20" r="1.3" />
      <circle cx="17.5" cy="20" r="1.3" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  )
}
