import { useEffect, useRef } from 'react'
import { model } from '../../data/pageContent'
import styles from './InteractiveModelSection.module.css'

export function InteractiveModelSection() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false

    // Load the Spline Viewer web component on demand, then mount it with a
    // transparent background so the model floats over the page's nebula.
    import('@splinetool/viewer').then(() => {
      if (cancelled || !mountRef.current) return
      const viewer = document.createElement('spline-viewer')
      viewer.setAttribute('url', model.sceneUrl)
      // Force a pure-black scene background; combined with mix-blend-mode:screen
      // on the container, the black drops out so the luminous sculpture floats
      // over the page's nebula (the scene can't be edited for real alpha).
      viewer.setAttribute('background', 'black')
      viewer.style.width = '100%'
      viewer.style.height = '100%'
      viewer.style.display = 'block'
      mountRef.current.replaceChildren(viewer)
    })

    return () => {
      cancelled = true
    }
  }, [])

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
        <div className={styles.nebula} aria-hidden="true" />
        <div className={styles.glow} aria-hidden="true" />
        <div ref={mountRef} className={styles.viewer} />
        <span className={styles.hint} aria-hidden="true">
          {model.hint}
        </span>
      </div>
    </section>
  )
}
