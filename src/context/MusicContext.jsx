import { createContext, useContext, useRef, useState, useEffect, useCallback } from 'react'

const MusicContext = createContext(null)

export function MusicProvider({ children }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)
  const unmutedRef = useRef(false)

  const startMusic = useCallback(async (withSound = true) => {
    const audio = audioRef.current
    if (!audio) return false

    audio.volume = 0.6

    if (withSound) {
      audio.muted = false
      unmutedRef.current = true
    } else {
      audio.muted = true
    }

    try {
      await audio.play()
      return true
    } catch {
      return false
    }
  }, [])

  const unmute = useCallback(async () => {
    const audio = audioRef.current
    if (!audio || unmutedRef.current) return startMusic(true)

    audio.muted = false
    unmutedRef.current = true
    audio.volume = 0.6

    if (audio.paused) {
      try {
        await audio.play()
      } catch {
        return false
      }
    }
    return true
  }, [startMusic])

  const toggle = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
    } else {
      await startMusic(true)
    }
  }, [playing, startMusic])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onCanPlay = () => setReady(true)

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('canplaythrough', onCanPlay)

    startMusic(false)

    const unlock = () => {
      if (!unmutedRef.current) unmute()
    }
    document.addEventListener('click', unlock, { once: true })
    document.addEventListener('touchstart', unlock, { once: true })

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('canplaythrough', onCanPlay)
      document.removeEventListener('click', unlock)
      document.removeEventListener('touchstart', unlock)
    }
  }, [startMusic, unmute])

  return (
    <MusicContext.Provider value={{ playing, ready, startMusic, unmute, toggle, audioRef }}>
      <audio
        ref={audioRef}
        src="/tum.mp3"
        loop
        preload="auto"
        playsInline
      />
      {children}
    </MusicContext.Provider>
  )
}

export function useMusic() {
  const ctx = useContext(MusicContext)
  if (!ctx) throw new Error('useMusic must be used within MusicProvider')
  return ctx
}
