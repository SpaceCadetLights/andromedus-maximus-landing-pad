import {
  externalLinks,
  footerColumns,
  footerContent,
  socialLinks,
} from '../../data/navigation'
import { Button } from '../ui/Button/Button'
import { BrandMark } from '../ui/icons'
import { socialIconMap } from '../ui/iconMaps'
import styles from './SiteFooter.module.css'

export function SiteFooter() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={`section ${styles.panel}`}>
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.top}>
          <div className={styles.brandCol}>
            <a
              className={styles.brand}
              href={externalLinks.home}
              rel="noopener"
              aria-label="Space Cadets Lighting home"
            >
              {/* TODO(logo): replace with official Space Cadets logo asset when available. */}
              <BrandMark className={styles.brandMark} />
              <span className={styles.brandText}>
                <span className={styles.brandName}>Space Cadets</span>
                <span className={styles.brandSub}>Lighting</span>
              </span>
            </a>
            <p className={styles.brandLine}>{footerContent.brandLine}</p>

            <div className={styles.newsletter}>
              <p className={styles.newsletterTitle}>{footerContent.newsletterTitle}</p>
              <p className={styles.newsletterSub}>{footerContent.newsletterSub}</p>
              <div className={`btn-row ${styles.newsletterActions}`}>
                {footerContent.actions.map((action, index) => (
                  <Button
                    key={action.label}
                    href={action.href}
                    variant={index === 0 ? 'primary' : 'secondary'}
                    rel="noopener"
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className={styles.socials}>
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon]
                return (
                  <a
                    key={social.label}
                    className={styles.socialBtn}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon width={20} height={20} />
                  </a>
                )
              })}
            </div>
          </div>

          <div className={styles.columns}>
            {footerColumns.map((column) => (
              <nav key={column.title} className={styles.column} aria-label={column.title}>
                <h2 className={styles.columnTitle}>{column.title}</h2>
                <ul className={styles.columnList}>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        className={styles.columnLink}
                        href={link.href}
                        {...(link.external ? { rel: 'noopener' } : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{footerContent.copyright}</p>
          <nav className={styles.legalLinks} aria-label="Legal">
            <a href={`${externalLinks.support}`} rel="noopener">
              Support
            </a>
            <a href="https://www.spacecadetslighting.com/shipping-returns" rel="noopener">
              Shipping &amp; Returns
            </a>
            <a href="https://www.spacecadetslighting.com/terms-and-conditions" rel="noopener">
              Terms &amp; Conditions
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
