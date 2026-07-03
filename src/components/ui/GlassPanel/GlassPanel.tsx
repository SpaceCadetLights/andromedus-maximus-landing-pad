import type { HTMLAttributes, ReactNode } from 'react'
import styles from './GlassPanel.module.css'

export type GlassPanelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  padding?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'quiet'
}

export function GlassPanel({
  children,
  className = '',
  padding = 'md',
  variant = 'default',
  ...rest
}: GlassPanelProps) {
  return (
    <div
      className={`${styles.panel} ${styles[`padding-${padding}`]} ${styles[variant]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  )
}
