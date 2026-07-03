import type { AnchorHTMLAttributes, ReactNode } from 'react'
import type { CtaLink } from '../../../data/pageContent'

type Variant = CtaLink['variant']

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  children: ReactNode
}

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

export function Button({ variant = 'ghost', className = '', children, ...rest }: ButtonProps) {
  return (
    <a className={`btn ${variantClass[variant]} ${className}`.trim()} {...rest}>
      {children}
    </a>
  )
}

export function CtaButton({ link, className }: { link: CtaLink; className?: string }) {
  return (
    <Button href={link.href} variant={link.variant} className={className}>
      {link.label}
    </Button>
  )
}
