import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const MESSAGES = [
  'Are you sure, Kashish? 🥺',
  'My heart can\'t take this…',
  'Think about my feelings 💔',
  'Please don\'t do this to me 🙏',
  'You know you want to say yes 😄',
  'Fine… but my heart is still waiting ♡',
]

export default function RunawayButton() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [msgIndex, setMsgIndex] = useState(0)
  const [hoverCount, setHoverCount] = useState(0)
  const btnRef = useRef(null)

  const runAway = () => {
    const maxX = window.innerWidth - 200
    const maxY = 200
    setPos({
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY,
    })
    setMsgIndex((i) => (i + 1) % MESSAGES.length)
    setHoverCount((c) => c + 1)
  }

  return (
    <div className="relative flex flex-col items-center gap-2">
      <motion.button
        ref={btnRef}
        className="interactive glass-card whitespace-nowrap rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white/70 transition-colors hover:bg-white/10"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onMouseEnter={runAway}
        onTouchStart={runAway}
      >
        I need more time… 😅
      </motion.button>
      {hoverCount > 0 && (
        <motion.p
          className="text-xs text-[#c8b6ff]/70 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={msgIndex}
        >
          {MESSAGES[msgIndex]}
        </motion.p>
      )}
    </div>
  )
}
