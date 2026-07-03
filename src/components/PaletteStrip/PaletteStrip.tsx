import { siteAssets } from '../../data/siteAssets'
import styles from './PaletteStrip.module.css'

export function PaletteStrip() {
  return (
    <ul className={`${styles.strip} hide-scrollbar`}>
      {siteAssets.palettes.map((palette) => (
        <li key={palette.id} className={styles.item}>
          <span className={styles.orb}>
            <img
              className={styles.orbImg}
              src={palette.src}
              alt={`${palette.name} color palette`}
              loading="lazy"
              decoding="async"
            />
          </span>
          <span className={styles.name}>{palette.name}</span>
        </li>
      ))}
    </ul>
  )
}
