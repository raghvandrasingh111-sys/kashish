import { useMemo } from 'react'
import { motion } from 'framer-motion'

function Particle({ style, duration }) {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={style}
      animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.2, 1] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default function ParticleBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        style: {
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        },
        duration: Math.random() * 3 + 2,
      })),
    [],
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7c4dff]/10 via-[#0b0b0f] to-[#0b0b0f] opacity-70" />
      {particles.map((p) => (
        <Particle key={p.id} style={p.style} duration={p.duration} />
      ))}
    </div>
  )
}
