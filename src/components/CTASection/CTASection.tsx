import type { CtaLink } from '../../data/siteContent'
import { CTAButton } from '../ui/CTAButton/CTAButton'
import { TitleBlock } from '../ui/TitleBlock/TitleBlock'
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
        <TitleBlock eyebrow={eyebrow} title={title} align="left" size="md" />
        <p className={styles.body}>{body}</p>

        <div className={`${styles.actions} button-row`}>
          {actions.map((action) => (
            <CTAButton key={action.label} href={action.href} variant={action.variant}>
              {action.label}
            </CTAButton>
          ))}
        </div>
      </div>
    </section>
  )
}
