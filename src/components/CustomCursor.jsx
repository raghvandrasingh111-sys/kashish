import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const cursorX = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 })
  const cursorY = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 })
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setDotPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const handleOver = (e) => {
      if (e.target.closest('.interactive')) setHovering(true)
    }
    const handleOut = (e) => {
      if (e.target.closest('.interactive')) setHovering(false)
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
    }
  }, [cursorX, cursorY])

  if (!visible) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c8b6ff] mix-blend-difference md:block"
        style={{ x: cursorX, y: cursorY }}
        animate={{ scale: hovering ? 1.5 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="h-full w-full rounded-full bg-[#c8b6ff]"
          animate={{ opacity: hovering ? 0.3 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f6c177] md:block"
        style={{ left: dotPos.x, top: dotPos.y }}
      />
    </>
  )
}
