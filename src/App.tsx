import { useEffect } from 'react'
import { CinematicScrollSection } from './components/CinematicScrollSection/CinematicScrollSection'
import { overlayBeats, scenes } from './data/siteContent'

const VIDEO_DEBUG_TEST_MODE = true

function App() {
  useEffect(() => {
    document.body.classList.toggle('video-debug-test', VIDEO_DEBUG_TEST_MODE)

    return () => {
      document.body.classList.remove('video-debug-test')
    }
  }, [])

  return (
    <div className="app-shell">
      <main>
        {/* Re-enable the other sections here after the video scrub test. */}
        <CinematicScrollSection
          scenes={scenes}
          overlayBeats={overlayBeats}
          debugMode={VIDEO_DEBUG_TEST_MODE}
        />
      </main>
    </div>
  )
}

export default App
