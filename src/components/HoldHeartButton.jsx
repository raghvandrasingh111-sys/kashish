import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function HoldHeartButton({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [holding, setHolding] = useState(false)
  const [done, setDone] = useState(false)
  const intervalRef = useRef(null)

  const startHold = useCallback(() => {
    if (done) return
    setHolding(true)
    let p = 0
    intervalRef.current = setInterval(() => {
      p += 2
      setProgress(p)
      if (p >= 100) {
        clearInterval(intervalRef.current)
        setDone(true)
        setHolding(false)
        onComplete?.()
      }
    }, 30)
  }, [done, onComplete])

  const stopHold = useCallback(() => {
    if (done) return
    clearInterval(intervalRef.current)
    setHolding(false)
    setProgress(0)
  }, [done])

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.button
        className="interactive relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#c8b6ff]/40 bg-[#7c4dff]/10"
        whileTap={{ scale: 0.95 }}
        onMouseDown={startHold}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        onTouchStart={startHold}
        onTouchEnd={stopHold}
        disabled={done}
      >
        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#ffffff10" strokeWidth="3" />
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#c8b6ff"
            strokeWidth="3"
            strokeDasharray={`${progress * 2.89} 289`}
            strokeLinecap="round"
          />
        </svg>
        <motion.div
          animate={holding ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={holding ? { repeat: Infinity, duration: 0.6 } : {}}
        >
          <Heart
            size={32}
            className={done ? 'text-[#f6c177]' : 'text-[#c8b6ff]'}
            fill={holding || done ? 'currentColor' : 'none'}
          />
        </motion.div>
      </motion.button>

      <p className="text-sm text-gray-400">
        {done
          ? 'Your heart spoke louder than words 💜'
          : holding
            ? 'Keep holding…'
            : 'Hold the heart if you feel the same'}
      </p>
    </div>
  )
}
