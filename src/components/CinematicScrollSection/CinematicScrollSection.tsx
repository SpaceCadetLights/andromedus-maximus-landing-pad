import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties, RefObject } from 'react'
import {
  type DebugOverlayItem,
  type FeatureBubbleDef,
  type OverlayGroup,
  type SceneDefinition,
  type VideoAsset,
  debugOverlayItems,
  videoAssets,
} from '../../data/siteContent'
import { getRangeProgress, getRangeVisibility } from '../../data/timeline'
import { useScrollScrubVideo } from '../../hooks/useScrollScrubVideo'
import { useScrollTimeline } from '../../hooks/useScrollTimeline'
import { FeatureBubbleLayer, type FeatureBubbleLayerHandle } from '../FeatureBubbleLayer/FeatureBubbleLayer'
import { OverlayTextLayer, type OverlayTextLayerHandle } from '../OverlayTextLayer/OverlayTextLayer'
import styles from './CinematicScrollSection.module.css'

type CinematicScrollSectionProps = {
  scenes: SceneDefinition[]
  overlayGroups: OverlayGroup[]
  featureBubbles: FeatureBubbleDef[]
  debugMode?: boolean
  videoOnly?: boolean
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

const CINEMATIC_SCROLL_LENGTH_VH = 260

function applyOverlayMotion(
  element: HTMLDivElement | null,
  item: DebugOverlayItem,
  progress: number,
  yDistance: number,
): number {
  if (!element) {
    return 0
  }

  const visibility = getRangeVisibility(progress, item.start, item.end, 0.28)
  element.style.opacity = visibility.toString()
  element.style.transform = `translate3d(0, ${yDistance * (1 - visibility)}px, 0)`
  return visibility
}

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
        transform: `scale(${1 + (1 - rangeProgress) * 0.02})`,
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
    </article>
  )
}

export function CinematicScrollSection({
  scenes,
  overlayGroups,
  featureBubbles,
  debugMode = false,
  videoOnly = false,
}: CinematicScrollSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const heroOverlayRef = useRef<HTMLDivElement | null>(null)
  const overlayLayerRef = useRef<OverlayTextLayerHandle | null>(null)
  const featureLayerRef = useRef<FeatureBubbleLayerHandle | null>(null)
  const { syncProgress, handleLoadedMetadata, handleVideoError } =
    useScrollScrubVideo(videoRef, { debug: debugMode, easing: 0.3 })
  const handleProgressChange = useCallback(
    (nextProgress: number) => {
      syncProgress(nextProgress)

      if (!debugMode) {
        overlayLayerRef.current?.setProgress(nextProgress)
        featureLayerRef.current?.setProgress(nextProgress)
      }

      if (!debugMode) {
        return
      }

      const heroVisibility = applyOverlayMotion(
        heroOverlayRef.current,
        debugOverlayItems[0],
        nextProgress,
        26,
      )

      if (heroOverlayRef.current) {
        const blurAmount = (1 - heroVisibility) * 20
        const depthScale = 0.92 + heroVisibility * 0.08
        const depthZ = (1 - heroVisibility) * -120

        heroOverlayRef.current.style.transform = `perspective(1200px) translate3d(0, ${
          26 * (1 - heroVisibility)
        }px, ${depthZ}px) scale(${depthScale})`
        heroOverlayRef.current.style.filter = `blur(${blurAmount}px)`
      }
    },
    [debugMode, syncProgress],
  )
  const { sectionRef, pinRef, progress } = useScrollTimeline({
    scrollLengthVh: CINEMATIC_SCROLL_LENGTH_VH,
    scrub: true,
    onProgressChange: handleProgressChange,
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

            {debugMode && !videoOnly ? (
              <>
                <div
                  ref={heroOverlayRef}
                  className={styles.debugHeroOverlay}
                  style={{
                    opacity: 0,
                    transform: 'perspective(1200px) translate3d(0, 26px, -120px) scale(0.92)',
                    filter: 'blur(20px)',
                  }}
                >
                  <div className={styles.debugHeroPlate}>
                    <span
                      className={`${styles.debugHeroPlateCorner} ${styles.debugHeroPlateCornerTopLeft}`}
                      aria-hidden="true"
                    />
                    <span
                      className={`${styles.debugHeroPlateCorner} ${styles.debugHeroPlateCornerTopRight}`}
                      aria-hidden="true"
                    />
                    <span
                      className={`${styles.debugHeroPlateCorner} ${styles.debugHeroPlateCornerBottomLeft}`}
                      aria-hidden="true"
                    />
                    <span
                      className={`${styles.debugHeroPlateCorner} ${styles.debugHeroPlateCornerBottomRight}`}
                      aria-hidden="true"
                    />
                    <span className={styles.debugHeroPlateGlow} aria-hidden="true" />
                    <h1
                      className={`overlay-gradient-title overlay-display-text ${styles.debugHeroTitle}`}
                    >
                      {debugOverlayItems[0].title}
                    </h1>
                    <div className={styles.debugHeroDivider} aria-hidden="true" />
                    <p className={`overlay-subtitle-text ${styles.debugHeroSubtitle}`}>
                      {debugOverlayItems[0].body}
                    </p>
                  </div>
                </div>
              </>
            ) : null}

            {!debugMode ? (
              <>
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

                <FeatureBubbleLayer ref={featureLayerRef} bubbles={featureBubbles} />

                <OverlayTextLayer ref={overlayLayerRef} groups={overlayGroups} />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
