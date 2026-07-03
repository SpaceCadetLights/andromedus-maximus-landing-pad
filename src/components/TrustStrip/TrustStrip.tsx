import { trustItems } from '../../data/pageContent'
import { trustIconMap } from '../ui/iconMaps'
import styles from './TrustStrip.module.css'

export function TrustStrip() {
  return (
    <section className={`section ${styles.wrap}`} aria-label="Why buy from Space Cadets Lighting">
      <ul className={styles.strip}>
        {trustItems.map((item) => {
          const Icon = trustIconMap[item.icon]
          return (
            <li key={item.id} className={styles.item}>
              <span className={styles.iconWrap}>
                <Icon width={22} height={22} />
              </span>
              <span className={styles.text}>
                <strong className={styles.title}>{item.title}</strong>
                <span className={styles.detail}>{item.detail}</span>
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
