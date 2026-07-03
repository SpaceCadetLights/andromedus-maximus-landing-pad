import { useState } from 'react'
import { brand, navCta, navLinks } from '../../data/pageContent'
import { Button } from '../ui/Button/Button'
import { BrandMark, CartIcon, CloseIcon, MenuIcon, UserIcon } from '../ui/icons'
import styles from './TopNav.module.css'

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={`section ${styles.bar}`}>
        <a className={styles.brand} href="#top" aria-label={`${brand.company} home`}>
          <BrandMark className={styles.brandMark} />
          <span className={styles.brandText}>
            <span className={styles.brandName}>Space Cadets</span>
            <span className={styles.brandSub}>Lighting</span>
          </span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={styles.iconBtn} href="#account" aria-label="Account">
            <UserIcon width={20} height={20} />
          </a>
          <a className={styles.iconBtn} href="#cart" aria-label="Cart">
            <CartIcon width={20} height={20} />
          </a>
          <Button href={navCta.href} variant="secondary" className={styles.shopBtn}>
            {navCta.label}
          </Button>
          <button
            type="button"
            className={styles.menuToggle}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileLinks} aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button href={navCta.href} variant="primary" className={styles.mobileShop}>
            {navCta.label}
          </Button>
        </div>
      ) : null}
    </header>
  )
}
