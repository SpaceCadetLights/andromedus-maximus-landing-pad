import { nebula } from '../../data/pageContent'
import type { NebulaBullet } from '../../data/pageContent'
import { siteAssets } from '../../data/siteAssets'
import { PaletteStrip } from '../PaletteStrip/PaletteStrip'
import { PatternStrip } from '../PatternStrip/PatternStrip'
import {
  ChevronRight,
  DotsGridIcon,
  PaletteBlobIcon,
  RemoteIcon,
  SparkleIcon,
} from '../ui/icons'
import styles from './NebulaControlSection.module.css'

const bulletIcons: Record<NebulaBullet['icon'], typeof SparkleIcon> = {
  patterns: SparkleIcon,
  palettes: DotsGridIcon,
  custom: PaletteBlobIcon,
  remote: RemoteIcon,
}

export function NebulaControlSection() {
  return (
    <section id="nebula" className={`section ${styles.wrap}`} aria-label="Nebula app control">
      <div className={styles.panel}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className={`eyebrow ${styles.eyebrow}`}>
              <SparkleIcon className={styles.eyebrowIcon} width={16} height={16} />
              {nebula.eyebrow}
            </span>
            <h2 className={`display-title ${styles.title}`}>{nebula.title}</h2>
            <p className={styles.body}>{nebula.body}</p>
          </div>

          {/* Phone + bullets group: `display: contents` on desktop/tablet so the
              two stay independent grid items; becomes a real 2-col row on mobile
              with the galaxy centered behind it. */}
          <div className={styles.middleRow}>
            <img
              className={styles.galaxy}
              src={siteAssets.backgrounds.spiralGalaxy}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />

            <div className={styles.phoneWrap}>
              <img
                className={styles.phone}
                src={siteAssets.nebulaApp.nebulaRendering}
                alt="Nebula app on iPhone showing the Andromeda Maxima control interface"
                loading="lazy"
                decoding="async"
              />
            </div>

            <ul className={styles.bullets}>
              {nebula.bullets.map((bullet) => {
                const Icon = bulletIcons[bullet.icon]
                return (
                  <li key={bullet.id} className={styles.bullet}>
                    <span className={styles.bulletIcon} data-accent={bullet.accent}>
                      <Icon width={20} height={20} />
                    </span>
                    <span className={styles.bulletText}>
                      <strong className={styles.bulletTitle} data-accent={bullet.accent}>
                        {bullet.title}
                      </strong>
                      <span className={styles.bulletDetail}>{bullet.detail}</span>
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={styles.showcase}>
            <div className={styles.showBlock}>
              <h3 className={styles.showTitle}>{nebula.palettesTitle}</h3>
              <div className={styles.stripWrap}>
                <PaletteStrip />
                <span className={styles.scrollHint} aria-hidden="true">
                  <ChevronRight width={16} height={16} />
                </span>
              </div>
            </div>
            <div className={styles.showBlock}>
              <h3 className={styles.showTitle}>{nebula.patternsTitle}</h3>
              <div className={styles.stripWrap}>
                <PatternStrip />
                <span className={styles.scrollHint} aria-hidden="true">
                  <ChevronRight width={16} height={16} />
                </span>
              </div>
              <p className={styles.moreNote}>{nebula.patternsMore}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
