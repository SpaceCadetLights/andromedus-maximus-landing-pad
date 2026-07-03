import { GlassPanel } from '../ui/GlassPanel/GlassPanel'
import { SectionContainer } from '../ui/SectionContainer/SectionContainer'
import { TitleBlock } from '../ui/TitleBlock/TitleBlock'
import styles from './DetailCloseUpSection.module.css'

type Callout = { label: string; value: string }

type DetailCloseUpSectionProps = {
  eyebrow: string
  title: string
  body: string
  callouts: Callout[]
  /** Placeholder still — replace when Scene 6 media exists */
  imageSrc: string
  imageLabel: string
}

export function DetailCloseUpSection({
  eyebrow,
  title,
  body,
  callouts,
  imageSrc,
  imageLabel,
}: DetailCloseUpSectionProps) {
  return (
    <SectionContainer id="detail" paddingY="lg" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.visual}>
          <img
            className={styles.image}
            src={imageSrc}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div className={styles.blurVeil} aria-hidden />
          <p className={styles.mediaTag}>{imageLabel}</p>
        </div>

        <div className={styles.copy}>
          <TitleBlock eyebrow={eyebrow} title={title} align="left" size="md" />
          <p className={styles.body}>{body}</p>

          <div className={styles.callouts}>
            {callouts.map((item) => (
              <GlassPanel key={item.label} padding="sm" variant="quiet" className={styles.callout}>
                <span className={styles.calloutLabel}>{item.label}</span>
                <strong className={styles.calloutValue}>{item.value}</strong>
              </GlassPanel>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
