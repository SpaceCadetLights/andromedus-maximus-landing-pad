import { footer } from '../../data/pageContent'
import { Button } from '../ui/Button/Button'
import styles from './FooterCTA.module.css'

export function FooterCTA() {
  return (
    <section id="contact" className={styles.closing} aria-label="Configure Andromeda Maxima">
      <div className={`section ${styles.ctaPanel}`}>
        <div className={styles.ctaGlow} aria-hidden="true" />
        <div className={styles.ctaInner}>
          <span className="eyebrow">{footer.eyebrow}</span>
          <h2 className={`display-title ${styles.ctaTitle}`}>{footer.title}</h2>
          <p className={styles.ctaBody}>{footer.body}</p>
          <div className={`btn-row ${styles.ctaActions}`}>
            {footer.actions.map((action) => (
              <Button key={action.label} href={action.href} variant={action.variant} rel="noopener">
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
