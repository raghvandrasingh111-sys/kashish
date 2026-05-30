import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMusic } from '../context/MusicContext'
import { Play, Pause, Music } from 'lucide-react'

function EqualizerBar({ delay, active }) {
  return (
    <motion.div
      className="w-1 rounded-full bg-[#c8b6ff]"
      animate={active ? { height: ['8px', '16px', '6px', '14px', '8px'] } : { height: '8px' }}
      transition={active ? { repeat: Infinity, duration: 1, delay, ease: 'easeInOut' } : {}}
    />
  )
}

export default function MusicToggle() {
  const { playing, ready, toggle } = useMusic()
  const [expanded, setExpanded] = useState(false)

  return (
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
            <p className="text-xs font-medium text-white">Tum</p>
            <p className="text-[10px] text-gray-400">Atif Aslam · Laila Majnu</p>
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
  )
}
