import { dimensions } from '../../data/pageContent'
import type { DimensionCallout, DimensionInstallBullet } from '../../data/pageContent'
import { siteAssets } from '../../data/siteAssets'
import { dimensionIconMap } from '../ui/iconMaps'
import { SparkleIcon } from '../ui/icons'
import styles from './DimensionsSection.module.css'

const { callouts } = dimensions

type CalloutViewProps = {
  callout: DimensionCallout
  position: 'top' | 'rightUpper' | 'rightLower' | 'bottom'
}

function Callout({ callout, position }: CalloutViewProps) {
  const orientation = position === 'top' || position === 'bottom' ? 'h' : 'v'
  return (
    <figure className={styles.callout} data-pos={position}>
      {position === 'bottom' && <span className={styles.rule} data-axis={orientation} aria-hidden="true" />}
      <figcaption className={styles.calloutText}>
        <span className={styles.calloutValue}>{callout.value}</span>
        <span className={styles.calloutLabel}>{callout.label}</span>
      </figcaption>
      {position !== 'bottom' && <span className={styles.rule} data-axis={orientation} aria-hidden="true" />}
    </figure>
  )
}

export function DimensionsSection() {
  return (
    <section
      id="dimensions"
      className={`section ${styles.wrap}`}
      aria-labelledby="dimensions-title"
    >
      <div className={styles.panel}>
        <div className={styles.grid}>
          {/* LEFT — copy + install bullets */}
          <div className={styles.copy}>
            <span className={`eyebrow ${styles.eyebrow}`}>{dimensions.eyebrow}</span>
            <h2 id="dimensions-title" className={`display-title ${styles.title}`}>
              {dimensions.title}
            </h2>
            <span className={styles.divider} aria-hidden="true" />
            <p className={styles.intro}>{dimensions.intro}</p>

            <ul className={styles.bullets}>
              {dimensions.bullets.map((bullet: DimensionInstallBullet) => {
                const Icon = dimensionIconMap[bullet.icon]
                return (
                  <li key={bullet.id} className={styles.bullet}>
                    <span className={styles.bulletIcon} data-accent={bullet.accent}>
                      <Icon width={20} height={20} />
                    </span>
                    <span className={styles.bulletText}>
                      <strong className={styles.bulletTitle}>{bullet.title}</strong>
                      <span className={styles.bulletDetail}>{bullet.detail}</span>
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* CENTER — annotated hero diagram */}
          <div className={styles.diagram}>
            <span className={styles.rings} aria-hidden="true" />
            <div className={styles.stage}>
              <img
                className={styles.chandelier}
                src={siteAssets.dimensions.chandelier}
                alt={dimensions.chandelierAlt}
                loading="lazy"
                decoding="async"
              />
              <Callout callout={callouts.ceilingDiameter} position="top" />
              <Callout callout={callouts.hangingHeight} position="rightUpper" />
              <Callout callout={callouts.overallHeight} position="rightLower" />
              <Callout callout={callouts.lightDiameter} position="bottom" />
            </div>
          </div>

          {/* RIGHT — ceiling mount detail */}
          <div className={styles.detail}>
            <p className={styles.note}>
              <SparkleIcon className={styles.noteIcon} width={16} height={16} />
              <span>{dimensions.note}</span>
            </p>

            <div className={styles.detailBox}>
              <figure className={styles.detailView}>
                <img
                  src={siteAssets.dimensions.ceilingMountTop}
                  alt={dimensions.detail.topView.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className={styles.detailCaption}>
                  {dimensions.detail.topView.caption}
                </figcaption>
              </figure>

              <span className={styles.detailDivider} aria-hidden="true" />

              <figure className={styles.detailView}>
                <img
                  src={siteAssets.dimensions.ceilingMountUnderside}
                  alt={dimensions.detail.undersideView.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className={styles.detailCaption}>
                  {dimensions.detail.undersideView.caption}
                </figcaption>
              </figure>

              <div className={styles.detailCopy}>
                <h3 className={styles.detailTitle}>{dimensions.detail.title}</h3>
                <p className={styles.detailBody}>{dimensions.detail.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
