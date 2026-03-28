import { memo, useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties, RefObject } from 'react'
import {
  type OverlayBeat,
  type SceneDefinition,
  type VideoAsset,
  videoAssets,
} from '../../data/siteContent'
import { getRangeProgress, getRangeVisibility } from '../../data/timeline'
import { useScrollScrubVideo } from '../../hooks/useScrollScrubVideo'
import { useScrollTimeline } from '../../hooks/useScrollTimeline'
import { OverlayTextLayer } from '../OverlayTextLayer/OverlayTextLayer'
import styles from './CinematicScrollSection.module.css'

type CinematicScrollSectionProps = {
  scenes: SceneDefinition[]
  overlayBeats: OverlayBeat[]
  debugMode?: boolean
}

type SceneMediaProps = {
  scene: SceneDefinition
  progress: number
  debugMode?: boolean
}

type CinematicBackgroundProps = {
  activeScene: SceneDefinition
  videoAsset?: VideoAsset
  videoRef: RefObject<HTMLVideoElement | null>
  onLoadedMetadata: () => void
  onVideoError: () => void
  debugMode?: boolean
}

const CINEMATIC_SCROLL_LENGTH_VH = 240

function useResponsiveVideoSource(videoAsset?: VideoAsset) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 767 : false,
  )

  useEffect(() => {
    if (!videoAsset || typeof window === 'undefined') {
      return
    }

    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const updateMatch = (event?: MediaQueryListEvent) => {
      setIsMobile(event ? event.matches : mediaQuery.matches)
    }

    updateMatch()
    mediaQuery.addEventListener('change', updateMatch)

    return () => {
      mediaQuery.removeEventListener('change', updateMatch)
    }
  }, [videoAsset])

  if (!videoAsset) {
    return undefined
  }

  return isMobile ? videoAsset.mobileSrc : videoAsset.desktopSrc
}

const CinematicBackground = memo(function CinematicBackground({
  activeScene,
  videoAsset,
  videoRef,
  onLoadedMetadata,
  onVideoError,
  debugMode = false,
}: CinematicBackgroundProps) {
  const [failedVideoSrc, setFailedVideoSrc] = useState<string | null>(null)
  const fallbackPoster = activeScene.media.posterSrc
  const selectedVideoSrc = useResponsiveVideoSource(videoAsset)
  const hasVideoError = selectedVideoSrc ? failedVideoSrc === selectedVideoSrc : false

  return (
    <div className={styles.backgroundShell} aria-hidden="true">
      {fallbackPoster ? (
        <img
          className={styles.fallbackImage}
          src={fallbackPoster}
          alt=""
        />
      ) : (
        <div className={styles.mediaFallback} />
      )}

      {selectedVideoSrc && !hasVideoError ? (
        <video
          key={selectedVideoSrc}
          ref={videoRef}
          className={styles.backgroundVideo}
          muted
          playsInline
          preload={videoAsset?.preload ?? 'metadata'}
          poster={fallbackPoster}
          src={selectedVideoSrc}
          onLoadedMetadata={onLoadedMetadata}
          onError={() => {
            setFailedVideoSrc(selectedVideoSrc)
            onVideoError()
          }}
        />
      ) : null}

      {!debugMode ? <div className={styles.mediaVeil} /> : null}
    </div>
  )
})

function SceneMedia({ scene, progress, debugMode = false }: SceneMediaProps) {
  const visibility = getRangeVisibility(progress, scene.start, scene.end, 0.18)
  const rangeProgress = getRangeProgress(progress, scene.start, scene.end)

  if (debugMode) {
    return null
  }

  return (
    <article
      className={styles.scene}
      style={{
        opacity: visibility,
        transform: `scale(${1 + (1 - rangeProgress) * 0.08})`,
      }}
      aria-hidden={visibility < 0.02}
    >
      <div
        className={styles.sceneGlow}
        style={
          {
            '--scene-base': scene.media.ambient.base,
            '--scene-accent': scene.media.ambient.accent,
            '--scene-glow': scene.media.ambient.glow,
          } as CSSProperties
        }
      />

      <div className={styles.mediaShell}>
        <div className={styles.sceneBadge}>
          <span>{scene.eyebrow}</span>
          <strong>{scene.locationLabel}</strong>
        </div>
        <div className={styles.sceneNote}>{scene.media.fallbackLabel}</div>
      </div>
    </article>
  )
}

export function CinematicScrollSection({
  scenes,
  overlayBeats,
  debugMode = false,
}: CinematicScrollSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const { syncProgress, handleLoadedMetadata, handleVideoError } =
    useScrollScrubVideo(videoRef, { debug: debugMode, easing: 0.3 })
  const { sectionRef, pinRef, progress } = useScrollTimeline({
    scrollLengthVh: CINEMATIC_SCROLL_LENGTH_VH,
    scrub: true,
    onProgressChange: syncProgress,
    debug: debugMode,
    trackProgressState: !debugMode,
  })
  const activeScene = useMemo(() => {
    if (debugMode) {
      return scenes[0]
    }

    const inRangeScene = scenes.find(
      (scene) => progress >= scene.start && progress <= scene.end,
    )

    if (inRangeScene) {
      return inRangeScene
    }

    return scenes.reduce((closestScene, scene) => {
      const sceneMidpoint = (scene.start + scene.end) / 2
      const closestMidpoint = (closestScene.start + closestScene.end) / 2

      return Math.abs(progress - sceneMidpoint) < Math.abs(progress - closestMidpoint)
        ? scene
        : closestScene
    }, scenes[0])
  }, [debugMode, progress, scenes])
  const videoAsset = activeScene.media.videoAssetId
    ? videoAssets[activeScene.media.videoAssetId]
    : undefined

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`${styles.section} ${debugMode ? styles.sectionDebug : ''}`}
      aria-label="Cinematic product sequence"
    >
      <div ref={pinRef} className={`${styles.pinWrap} ${debugMode ? styles.pinWrapDebug : ''}`}>
        <div className={`${styles.frame} ${debugMode ? styles.frameDebug : ''}`}>
          <div className={`${styles.viewport} ${debugMode ? styles.viewportDebug : ''}`}>
            <CinematicBackground
              activeScene={activeScene}
              videoAsset={videoAsset}
              videoRef={videoRef}
              onLoadedMetadata={handleLoadedMetadata}
              onVideoError={handleVideoError}
              debugMode={debugMode}
            />

            {!debugMode ? (
              <>
                <div className={styles.progressRail} aria-hidden="true">
                  <span className={styles.progressLabel}>Sequence</span>
                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ transform: `scaleY(${Math.max(progress, 0.04)})` }}
                    />
                  </div>
                  <span className={styles.progressValue}>
                    {String(Math.round(progress * 100)).padStart(2, '0')}
                  </span>
                </div>

                <div className={styles.sceneStack}>
                  {scenes.map((scene) => (
                    <SceneMedia
                      key={scene.id}
                      scene={scene}
                      progress={progress}
                      debugMode={debugMode}
                    />
                  ))}
                </div>

                <OverlayTextLayer progress={progress} beats={overlayBeats} />

                <div className={styles.sceneHooks} aria-hidden="true">
                  {scenes.map((scene) => (
                    <div key={scene.id} className={styles.sceneHook}>
                      <span>{scene.eyebrow}</span>
                      <strong>{scene.name}</strong>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
