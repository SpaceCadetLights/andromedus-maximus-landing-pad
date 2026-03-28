import type { CtaLink } from '../../data/siteContent'
import styles from './CTASection.module.css'

type CTASectionProps = {
  eyebrow: string
  title: string
  body: string
  actions: CtaLink[]
}

export function CTASection({
  eyebrow,
  title,
  body,
  actions,
}: CTASectionProps) {
  return (
    <section id="contact" className={styles.section}>
      <div className={`section-frame ${styles.card}`}>
        <div className={styles.copy}>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>

        <div className={`button-row ${styles.actions}`}>
          {actions.map((action) => (
            <a
              key={action.label}
              className={`button-link button-link-${action.variant}`}
              href={action.href}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
