import { forwardRef } from 'react'
import styles from './GlassBubble.module.css'

type GlassBubbleProps = {
  eyebrow?: string
  title: string
  body?: string
  className?: string
}

export const GlassBubble = forwardRef<HTMLDivElement, GlassBubbleProps>(
  function GlassBubble({ eyebrow, title, body, className = '' }, ref) {
    return (
      <aside
        ref={ref}
        className={`overlay-glass-panel overlay-floating-bubble ${styles.bubble} ${className}`.trim()}
      >
        {eyebrow ? <p className="overlay-label">{eyebrow}</p> : null}
        <h3 className="overlay-bubble-title">{title}</h3>
        {body ? <p className="overlay-bubble-body">{body}</p> : null}
      </aside>
    )
  },
)
