import type { HTMLAttributes, ReactNode } from 'react'
import styles from './SectionContainer.module.css'

export type SectionContainerProps = HTMLAttributes<HTMLElement> & {
  as?: 'section' | 'div'
  children: ReactNode
  width?: 'default' | 'full'
  paddingY?: 'none' | 'sm' | 'md' | 'lg'
  id?: string
}

export function SectionContainer({
  as: Tag = 'section',
  children,
  width = 'default',
  paddingY = 'md',
  className = '',
  ...rest
}: SectionContainerProps) {
  return (
    <Tag
      className={`${styles.shell} ${styles[`width-${width}`]} ${styles[`pad-${paddingY}`]} ${className}`.trim()}
      {...rest}
    >
      <div className={styles.frame}>{children}</div>
    </Tag>
  )
}
