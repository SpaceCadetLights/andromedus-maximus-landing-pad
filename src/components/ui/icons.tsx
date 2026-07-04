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

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 3c.6 3.6 1.8 4.8 5.4 5.4-3.6.6-4.8 1.8-5.4 5.4-.6-3.6-1.8-4.8-5.4-5.4C10.2 7.8 11.4 6.6 12 3z" fill="currentColor" stroke="none" transform="translate(0 1.5)" />
    </svg>
  )
}

export function DotsGridIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="9" cy="9" r="1.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="9" r="1.9" fill="currentColor" stroke="none" />
      <circle cx="9" cy="15" r="1.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="15" r="1.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function PaletteBlobIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 4.5a7.5 7.5 0 000 15c1.2 0 1.8-.9 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.1 0-.9.7-1.6 1.7-1.6h1.3a3.5 3.5 0 003.5-3.5C20.6 7.3 16.9 4.5 12 4.5z" />
      <circle cx="8.2" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="8.4" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.6" cy="10" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function RemoteIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="8" y="2.5" width="8" height="19" rx="3" />
      <circle cx="12" cy="7.5" r="1.6" />
      <path d="M10.5 12.5h3M10.5 15h3M10.5 17.5h3" />
    </svg>
  )
}

export function ElectricalBoxIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 3l7.5 4.1v8.8L12 20l-7.5-4.1V7.1z" />
      <path d="M4.7 7.3L12 11.4l7.3-4.1" />
      <path d="M12 11.4V20" />
      <circle cx="12" cy="11.4" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ChainLinkIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M9.2 14.8a3.2 3.2 0 010-4.5l2-2a3.2 3.2 0 014.5 4.5l-1 1" />
      <path d="M14.8 9.2a3.2 3.2 0 010 4.5l-2 2a3.2 3.2 0 01-4.5-4.5l1-1" />
    </svg>
  )
}

export function MountingHardwareIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M8 4.5h-2M8 4.5h2M8 4.5v11" />
      <path d="M6.5 15.5h3l-.7 3.5a0.8 0.8 0 01-1.6 0z" />
      <circle cx="16" cy="5.6" r="2" />
      <path d="M16 7.6v8.4" />
      <path d="M14.4 16h3.2l-.7 3.4a0.8 0.8 0 01-1.6 0z" />
    </svg>
  )
}

export function TaperedCoverIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4.5 5.5h15" />
      <path d="M5.5 5.5l5.2 6.3v6.4l2.6 1.3v-7.7l5.2-6.3" />
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

export function ChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export function ChevronRight(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M9 6l6 6-6 6" />
    </svg>
  )
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M14 8.5V7c0-.9.4-1.5 1.5-1.5H17V2.7C16.5 2.6 15.6 2.5 14.7 2.5c-2.3 0-3.7 1.4-3.7 3.9v2.1H8.5V12H11v9.5h3V12h2.3l.4-3.5z" />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.6" cy="7.4" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
