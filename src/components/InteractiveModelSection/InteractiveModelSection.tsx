import Spline from '@splinetool/react-spline'
import type { Application } from '@splinetool/runtime'
import { model } from '../../data/pageContent'
import styles from './InteractiveModelSection.module.css'

export function InteractiveModelSection() {
  function handleLoad(spline: Application) {
    // Make the scene background transparent so the model floats over the page.
    try {
      spline.setBackgroundColor('transparent')
    } catch {
      /* older runtimes may not support this — safe to ignore */
    }
  }

  return (
    <section
      id="explore-3d"
      className={`section ${styles.wrap}`}
      aria-label="Interactive 3D preview"
    >
      <div className={styles.copy}>
        <span className="eyebrow">{model.eyebrow}</span>
        <h2 className={`display-title ${styles.title}`}>{model.title}</h2>
        <p className={styles.body}>{model.body}</p>
      </div>

      <div className={styles.stage}>
        <Spline scene={model.sceneUrl} className={styles.viewer} onLoad={handleLoad} />
        <span className={styles.hint} aria-hidden="true">
          {model.hint}
        </span>
      </div>
    </section>
  )
}
