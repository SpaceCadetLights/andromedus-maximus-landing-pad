import type { HTMLAttributes, ReactNode } from 'react'
import { GlassPanel } from '../GlassPanel/GlassPanel'
import { GlowBorder, type GlowAccent } from '../GlowBorder/GlowBorder'
import styles from './FloatingBubble.module.css'

export type FloatingBubbleProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string
  title: string
  body?: string
  accent?: GlowAccent
  /** Slow ambient float; disable when driven by scroll visibility only */
  ambientFloat?: boolean
  footer?: ReactNode
}

export function FloatingBubble({
  eyebrow,
  title,
  body,
  accent = 'neutral',
  ambientFloat = false,
  footer,
  className = '',
  ...rest
}: FloatingBubbleProps) {
  return (
    <GlowBorder
      accent={accent}
      animated={false}
      className={`${styles.outer} ${ambientFloat ? styles.float : ''} ${className}`.trim()}
      {...rest}
    >
      <GlassPanel padding="sm" variant="default" className={styles.panelInner}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h3 className={styles.title}>{title}</h3>
        {body ? <p className={styles.body}>{body}</p> : null}
        {footer}
      </GlassPanel>
    </GlowBorder>
  )
}
