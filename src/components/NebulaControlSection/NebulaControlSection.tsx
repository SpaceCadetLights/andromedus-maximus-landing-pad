import { nebula } from '../../data/pageContent'
import { siteAssets } from '../../data/siteAssets'
import { PaletteStrip } from '../PaletteStrip/PaletteStrip'
import { PatternStrip } from '../PatternStrip/PatternStrip'
import { Button } from '../ui/Button/Button'
import { CheckDot } from '../ui/icons'
import styles from './NebulaControlSection.module.css'

export function NebulaControlSection() {
  return (
    <section id="nebula" className={`section ${styles.wrap}`} aria-label="Nebula app control">
      <div className={styles.panel}>
        <div
          className={styles.bg}
          style={{ backgroundImage: `url(${siteAssets.backgrounds.spiralGalaxy})` }}
          aria-hidden="true"
        />
        <div className={styles.bgVeil} aria-hidden="true" />

        <div className={styles.top}>
          <div className={styles.copy}>
            <span className="eyebrow">{nebula.eyebrow}</span>
            <h2 className={`display-title ${styles.title}`}>{nebula.title}</h2>
            <p className={styles.body}>{nebula.body}</p>
          </div>

          <div className={styles.phoneWrap}>
            <img
              className={styles.phone}
              src={siteAssets.nebulaApp.nebulaView}
              alt="Nebula app on iPhone showing the Andromeda Maxima control interface"
              loading="lazy"
              decoding="async"
            />
          </div>

          <ul className={styles.bullets}>
            {nebula.bullets.map((bullet) => (
              <li key={bullet.id} className={styles.bullet}>
                <CheckDot className={styles.bulletIcon} width={22} height={22} />
                <span>
                  <strong className={styles.bulletTitle}>{bullet.title}</strong>
                  <span className={styles.bulletDetail}>{bullet.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.showcase}>
          <div className={styles.showBlock}>
            <h3 className={styles.showTitle}>{nebula.palettesTitle}</h3>
            <PaletteStrip />
          </div>
          <div className={styles.showBlock}>
            <div className={styles.showHead}>
              <h3 className={styles.showTitle}>{nebula.patternsTitle}</h3>
              <Button href={nebula.patternsCta.href} variant="ghost" className={styles.viewAll}>
                {nebula.patternsCta.label}
              </Button>
            </div>
            <PatternStrip />
          </div>
        </div>
      </div>
    </section>
  )
}
