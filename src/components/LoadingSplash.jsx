import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useMusic } from '../context/MusicContext'

export default function LoadingSplash({ onComplete }) {
  const [phase, setPhase] = useState(0)
  const [canEnter, setCanEnter] = useState(false)
  const { unmute } = useMusic()

  const lines = [
    'Some people accidentally become someone\'s favorite person.',
    'For me, that person is Kashish.',
  ]

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2500)
    const t2 = setTimeout(() => setCanEnter(true), 4000)
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
      <div className="max-w-xl px-8 text-center">
        <motion.p
          className="font-serif text-2xl leading-relaxed text-white/90 italic md:text-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
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
            A little something, just for you ♡
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
              className="text-sm text-[#c8b6ff]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Tap anywhere to enter ♡
            </motion.p>
            <p className="mt-2 text-xs text-gray-500">with &ldquo;Tum&rdquo; playing for you</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
