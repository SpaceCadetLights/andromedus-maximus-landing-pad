import type { HTMLAttributes, ReactNode } from 'react'
import styles from './GlowBorder.module.css'

export type GlowAccent = 'cyan' | 'magenta' | 'violet' | 'green' | 'neutral'

export type GlowBorderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  accent?: GlowAccent
  /** When true, subtle animated gradient edge (very slow) */
  animated?: boolean
}

export function GlowBorder({
  children,
  className = '',
  accent = 'neutral',
  animated = false,
  ...rest
}: GlowBorderProps) {
  return (
    <div
      className={`${styles.wrap} ${styles[`accent-${accent}`]} ${animated ? styles.animated : ''} ${className}`.trim()}
      {...rest}
    >
      <span className={styles.edge} aria-hidden="true" />
      <div className={styles.inner}>{children}</div>
    </div>
  )
}
