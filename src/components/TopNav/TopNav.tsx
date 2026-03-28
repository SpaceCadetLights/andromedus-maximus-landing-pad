import type { CtaLink } from '../../data/siteContent'
import styles from './TopNav.module.css'

type TopNavProps = {
  productName: string
  primaryLink: CtaLink
}

export function TopNav({ productName, primaryLink }: TopNavProps) {
  return (
    <header className={styles.navShell}>
      <div className={`section-frame ${styles.nav}`}>
        <a className={styles.brand} href="#top" aria-label="Back to top">
          <span className={styles.brandMark}>SC</span>
          <span className={styles.brandText}>
            <span>Space Cadets Lighting</span>
            <strong>{productName}</strong>
          </span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a
            className={`button-link button-link-${primaryLink.variant} ${styles.navButton}`}
            href={primaryLink.href}
          >
            {primaryLink.label}
          </a>
        </nav>
      </div>
    </header>
  )
}
