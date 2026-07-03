import { featurePills } from '../../data/pageContent'
import { featureIconMap } from '../ui/iconMaps'
import styles from './FeaturePillRow.module.css'

export function FeaturePillRow() {
  return (
    <ul className={styles.row}>
      {featurePills.map((pill) => {
        const Icon = featureIconMap[pill.icon]
        return (
          <li key={pill.id} className={styles.pill}>
            <span className={styles.iconWrap}>
              <Icon width={20} height={20} />
            </span>
            <span className={styles.text}>
              <strong className={styles.title}>{pill.title}</strong>
              <span className={styles.detail}>{pill.detail}</span>
            </span>
          </li>
        )
      })}
    </ul>
  )
}
