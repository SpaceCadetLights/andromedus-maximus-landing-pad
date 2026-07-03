import type { ReactNode } from 'react'
import styles from './TitleBlock.module.css'

export type TitleBlockProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  children?: ReactNode
  align?: 'left' | 'center'
  size?: 'lg' | 'md'
}

export function TitleBlock({
  eyebrow,
  title,
  subtitle,
  children,
  align = 'left',
  size = 'md',
}: TitleBlockProps) {
  return (
    <div className={`${styles.block} ${styles[align]} ${styles[`size-${size}`]}`}>
      {eyebrow ? <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span> : null}
      <h2 className={styles.title}>{title}</h2>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      {children}
    </div>
  )
}
