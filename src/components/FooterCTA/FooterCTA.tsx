import { brand, footer, navLinks } from '../../data/pageContent'
import { Button } from '../ui/Button/Button'
import { BrandMark } from '../ui/icons'
import styles from './FooterCTA.module.css'

export function FooterCTA() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`section ${styles.ctaPanel}`}>
        <div className={styles.ctaGlow} aria-hidden="true" />
        <div className={styles.ctaInner}>
          <span className="eyebrow">{footer.eyebrow}</span>
          <h2 className={`display-title ${styles.ctaTitle}`}>{footer.title}</h2>
          <p className={styles.ctaBody}>{footer.body}</p>
          <div className={`btn-row ${styles.ctaActions}`}>
            {footer.actions.map((action) => (
              <Button key={action.label} href={action.href} variant={action.variant}>
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className={`section ${styles.meta}`}>
        <a className={styles.brand} href="#top" aria-label={`${brand.company} home`}>
          <BrandMark className={styles.brandMark} />
          <span>{brand.company}</span>
        </a>
        <nav className={styles.metaLinks} aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <p className={styles.legal}>{footer.legal}</p>
      </div>
    </footer>
  )
}
