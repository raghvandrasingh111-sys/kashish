import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const COLORS = ['#7c4dff', '#c8b6ff', '#f6c177', '#ff6b9d', '#ffffff']

function Particle({ x, delay, color }) {
  const drift = (Math.random() - 0.5) * 200
  return (
    <motion.div
      className="pointer-events-none absolute h-2 w-2 rounded-sm"
      style={{ left: `${x}%`, top: '-5%', backgroundColor: color, rotate: Math.random() * 360 }}
      initial={{ y: 0, opacity: 1, scale: 1 }}
      animate={{ y: window.innerHeight + 100, x: drift, opacity: 0, rotate: Math.random() * 720, scale: 0 }}
      transition={{ duration: 2.5 + Math.random() * 2, delay, ease: 'easeOut' }}
    />
  )
}

export default function ConfettiCelebration({ active, onComplete }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (!active) return
    setParticles(
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })),
    )
    const timer = setTimeout(() => {
      onComplete?.()
    }, 4000)
    return () => clearTimeout(timer)
  }, [active, onComplete])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[200] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {particles.map((p) => (
            <Particle key={p.id} x={p.x} delay={p.delay} color={p.color} />
          ))}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
          >
            <div className="text-center">
              <motion.p
                className="font-serif text-5xl text-white md:text-7xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: 3, duration: 0.6 }}
              >
                ♡
              </motion.p>
              <p className="mt-4 font-serif text-3xl gradient-text italic md:text-5xl">
                Kashish said yes!
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
