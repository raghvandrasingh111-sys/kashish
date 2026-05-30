import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Music } from 'lucide-react'

const SONG = {
  src: '/tum.mp3',
  title: 'Tum',
  artist: 'Atif Aslam · Laila Majnu',
}

function EqualizerBar({ delay, active }) {
  return (
    <motion.div
      className="w-1 rounded-full bg-[#c8b6ff]"
      animate={active ? { height: ['8px', '16px', '6px', '14px', '8px'] } : { height: '8px' }}
      transition={active ? { repeat: Infinity, duration: 1, delay, ease: 'easeInOut' } : {}}
    />
  )
}

export default function MusicToggle({ autoPlay = true }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [ready, setReady] = useState(false)

  const startMusic = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return false

    audio.volume = 0.6
    try {
      await audio.play()
      return true
    } catch {
      return false
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onCanPlay = () => setReady(true)

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('canplaythrough', onCanPlay)

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('canplaythrough', onCanPlay)
    }
  }, [])

  useEffect(() => {
    if (!autoPlay) return

    startMusic()

    const retry = () => {
      if (!audioRef.current?.paused) return
      startMusic()
    }

    const events = ['click', 'touchstart', 'keydown', 'scroll']
    events.forEach((e) => document.addEventListener(e, retry, { passive: true }))

    return () => events.forEach((e) => document.removeEventListener(e, retry))
  }, [autoPlay, startMusic])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
    } else {
      await startMusic()
    }
  }

  return (
    <>
      <audio ref={audioRef} src={SONG.src} loop preload="auto" />

      <motion.div
        className="fixed right-6 bottom-6 z-40 flex items-center gap-3"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <AnimatePresence>
          {expanded && (
            <motion.div
              className="glass-card hidden rounded-full border border-white/10 px-4 py-2 sm:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <p className="text-xs font-medium text-white">{SONG.title}</p>
              <p className="text-[10px] text-gray-400">{SONG.artist}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className={`interactive flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#0b0b0f]/80 backdrop-blur-md transition-shadow ${
            playing ? 'glow-shadow shadow-[#7c4dff]/50' : ''
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggle}
          aria-label={playing ? 'Pause music' : 'Play Tum by Atif Aslam'}
        >
          {playing ? (
            <div className="flex items-end gap-0.5">
              <EqualizerBar delay={0} active />
              <EqualizerBar delay={0.2} active />
              <EqualizerBar delay={0.4} active />
              <Pause size={14} className="ml-1 text-[#c8b6ff]" />
            </div>
          ) : ready ? (
            <Play size={20} className="ml-0.5 text-[#c8b6ff]" fill="currentColor" />
          ) : (
            <Music size={18} className="text-[#c8b6ff]" />
          )}
        </motion.button>
      </motion.div>
    </>
  )
}
