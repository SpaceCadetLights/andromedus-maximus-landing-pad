import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './CTAButton.module.css'

export type CTAButtonVariant = 'primary' | 'secondary' | 'ghost'

export type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: CTAButtonVariant
}

export function CTAButton({
  children,
  variant = 'ghost',
  className = '',
  ...rest
}: CTAButtonProps) {
  return (
    <a className={`${styles.btn} ${styles[variant]} ${className}`.trim()} {...rest}>
      {children}
    </a>
  )
}
