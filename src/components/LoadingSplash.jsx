import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useMusic } from '../context/MusicContext'

export default function LoadingSplash({ onComplete }) {
  const [phase, setPhase] = useState(0)
  const [canEnter, setCanEnter] = useState(false)
  const { unmute } = useMusic()

  const lines = [
    'Some souls don\'t meet by accident — they meet because the universe insisted.',
    'And mine insisted on you, Kashish.',
  ]

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2800)
    const t2 = setTimeout(() => setCanEnter(true), 4500)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  const handleEnter = async () => {
    if (!canEnter) return
    await unmute()
    onComplete()
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-[#0b0b0f]"
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      onClick={handleEnter}
      onTouchStart={handleEnter}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#7c4dff15_0%,_transparent_70%)]" />

      <div className="relative max-w-2xl px-8 text-center">
        <motion.p
          className="font-serif text-2xl leading-relaxed text-white/90 italic md:text-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          key={phase}
        >
          &ldquo;{lines[phase]}&rdquo;
        </motion.p>

        {phase === 1 && (
          <motion.p
            className="mt-8 text-sm font-medium tracking-[0.3em] text-[#f6c177] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I made this with every feeling I couldn&apos;t say out loud
          </motion.p>
        )}

        {canEnter && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="gradient-text-shimmer font-serif text-lg italic"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Tap anywhere, Kashish ♡
            </motion.p>
            <p className="mt-2 text-xs text-gray-500">with &ldquo;Tum&rdquo; — because some feelings need a song</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
