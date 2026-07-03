import { SectionContainer } from '../ui/SectionContainer/SectionContainer'
import { TitleBlock } from '../ui/TitleBlock/TitleBlock'
import styles from './ProductHero.module.css'

type ProductHeroProps = {
  eyebrow: string
  title: string
  subtitle: string
}

export function ProductHero({ eyebrow, title, subtitle }: ProductHeroProps) {
  return (
    <SectionContainer id="top" paddingY="none" className={styles.hero}>
      <div className={styles.inner}>
        <TitleBlock
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          align="center"
          size="lg"
        />
        <a className={styles.scrollCue} href="#experience">
          Enter sequence →
        </a>
      </div>
    </SectionContainer>
  )
}
