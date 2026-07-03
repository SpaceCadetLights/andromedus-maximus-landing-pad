import { siteAssets } from '../../data/siteAssets'
import styles from './PatternStrip.module.css'

export function PatternStrip() {
  return (
    <ul className={`${styles.strip} hide-scrollbar`}>
      {siteAssets.patterns.map((pattern) => (
        <li key={pattern.id} className={styles.item}>
          <img
            className={styles.chip}
            src={pattern.src}
            alt={`${pattern.name} light pattern`}
            loading="lazy"
            decoding="async"
          />
        </li>
      ))}
    </ul>
  )
}
