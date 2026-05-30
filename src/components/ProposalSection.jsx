import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import HoldHeartButton from './HoldHeartButton'
import RunawayButton from './RunawayButton'

function FloatingHeart({ style, duration, delay }) {
  return (
    <motion.div
      className="pointer-events-none absolute text-[#c8b6ff]/20"
      style={style}
      animate={{
        y: [0, -1000],
        opacity: [0, 1, 0],
        rotate: [0, 45, -45, 0],
      }}
      transition={{ duration, repeat: Infinity, delay, ease: 'linear' }}
    >
      <Heart size={32} fill="currentColor" />
    </motion.div>
  )
}

export default function ProposalSection({ onOpenModal, onReplay }) {
  const [heartHeld, setHeartHeld] = useState(false)
  const hearts = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        style: { left: `${Math.random() * 100}%`, bottom: '-10%' },
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    [],
  )

  return (
    <section id="proposal" className="relative flex min-h-screen items-center justify-center overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {hearts.map((h) => (
          <FloatingHeart key={h.id} {...h} />
        ))}
      </div>

      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c4dff]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          className="font-serif text-xl text-gray-400 italic md:text-2xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          So after all these feelings…
        </motion.p>

        <motion.p
          className="mt-6 font-serif text-2xl font-light text-white/90 md:text-3xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          Kashish, there&apos;s something I wanted to ask you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 3 }}
        >
          <h2 className="mt-10 font-serif text-4xl leading-tight font-light md:text-7xl">
            <span className="gradient-text italic">
              Can I be more than just someone who admires you?
            </span>
          </h2>

          <div className="mt-12">
            <HoldHeartButton onComplete={() => setHeartHeld(true)} />
          </div>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={heartHeld ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {heartHeld && (
              <motion.p
                className="text-sm text-[#c8b6ff] italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                I felt that. Now let me ask you properly…
              </motion.p>
            )}

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <motion.button
                className={`interactive rounded-full px-10 py-5 text-sm font-medium transition-shadow ${
                  heartHeld
                    ? 'bg-white text-[#0b0b0f] hover:shadow-lg hover:shadow-[#c8b6ff]/50'
                    : 'cursor-not-allowed bg-white/30 text-[#0b0b0f]/50'
                }`}
                whileHover={heartHeld ? { scale: 1.05 } : {}}
                whileTap={heartHeld ? { scale: 0.95 } : {}}
                onClick={heartHeld ? onOpenModal : undefined}
                disabled={!heartHeld}
              >
                Yes, I&apos;d love that ♡
              </motion.button>

              {heartHeld && <RunawayButton />}
            </div>

            <motion.button
              className="interactive mt-4 text-sm text-gray-500 underline-offset-4 hover:text-white/70 hover:underline"
              whileHover={{ scale: 1.02 }}
              onClick={onReplay}
            >
              Replay Everything ▶
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
