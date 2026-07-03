import { useCallback, useEffect, useId, useRef, useState } from 'react'
import {
  accountLink,
  externalLinks,
  primaryNav,
  shopCta,
  type NavItem,
} from '../../data/navigation'
import { siteAssets } from '../../data/siteAssets'
import { Button } from '../ui/Button/Button'
import { ChevronDown, CloseIcon, MenuIcon, UserIcon } from '../ui/icons'
import styles from './SiteHeader.module.css'

function anchorProps(external?: boolean) {
  return external ? { rel: 'noopener' } : {}
}

export function SiteHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const navRef = useRef<HTMLElement | null>(null)
  const idPrefix = useId()

  const closeAll = useCallback(() => setOpenDropdown(null), [])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
        setMobileOpen(false)
      }
    }
    function onClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClickOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClickOutside)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const renderTopItem = (item: NavItem) => {
    if (!item.children) {
      return (
        <li key={item.label} className={styles.navItem}>
          <a className={styles.navLink} href={item.href} {...anchorProps(item.external)}>
            {item.label}
          </a>
        </li>
      )
    }

    const menuId = `${idPrefix}-${item.label.replace(/\s+/g, '-')}`
    const isOpen = openDropdown === item.label

    return (
      <li key={item.label} className={styles.navItem}>
        <button
          type="button"
          className={styles.navLink}
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={() => setOpenDropdown((current) => (current === item.label ? null : item.label))}
        >
          {item.label}
          <ChevronDown className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} width={16} height={16} />
        </button>
        <ul id={menuId} className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ''}`}>
          {item.children.map((child) => (
            <li key={child.label}>
              <a
                className={styles.dropdownLink}
                href={child.href}
                {...anchorProps(child.external)}
                onClick={closeAll}
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </li>
    )
  }

  return (
    <header className={styles.header}>
      <div className={`section ${styles.bar}`}>
        <a
          className={styles.brand}
          href={externalLinks.home}
          rel="noopener"
          aria-label="Space Cadets Lighting home"
        >
          <img className={styles.logo} src={siteAssets.brand.logo} alt="Space Cadets Lighting" />
        </a>

        <nav className={styles.nav} aria-label="Primary" ref={navRef}>
          <ul className={styles.navList}>{primaryNav.map(renderTopItem)}</ul>
        </nav>

        <div className={styles.actions}>
          <a
            className={`${styles.iconBtn} ${styles.account}`}
            href={accountLink.href}
            aria-label={accountLink.label}
            rel="noopener"
          >
            <UserIcon width={18} height={18} />
            <span className={styles.accountText}>{accountLink.label}</span>
          </a>
          <Button href={shopCta.href} variant="primary" className={styles.shopBtn} rel="noopener">
            {shopCta.label}
          </Button>
          <button
            type="button"
            className={styles.menuToggle}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className={styles.mobilePanel}>
          <nav className={styles.mobileNav} aria-label="Mobile">
            <ul className={styles.mobileList}>
              {primaryNav.map((item) => {
                if (!item.children) {
                  return (
                    <li key={item.label}>
                      <a
                        className={styles.mobileLink}
                        href={item.href}
                        {...anchorProps(item.external)}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                }
                const expanded = mobileSection === item.label
                const sectionId = `${idPrefix}-m-${item.label.replace(/\s+/g, '-')}`
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      className={styles.mobileLink}
                      aria-expanded={expanded}
                      aria-controls={sectionId}
                      onClick={() =>
                        setMobileSection((current) => (current === item.label ? null : item.label))
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`${styles.chevron} ${expanded ? styles.chevronOpen : ''}`}
                        width={18}
                        height={18}
                      />
                    </button>
                    {expanded ? (
                      <ul id={sectionId} className={styles.mobileSub}>
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <a
                              className={styles.mobileSubLink}
                              href={child.href}
                              {...anchorProps(child.external)}
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className={styles.mobileFooter}>
            <a className={styles.mobileAccount} href={accountLink.href} rel="noopener">
              <UserIcon width={18} height={18} />
              {accountLink.label}
            </a>
            <Button href={shopCta.href} variant="primary" className={styles.mobileShop} rel="noopener">
              {shopCta.label}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
