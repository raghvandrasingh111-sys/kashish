import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const floatPhotos = [
  { src: '/7.png', className: 'top-[6%] left-[1%] sm:left-[5%] md:left-[10%] -rotate-6 opacity-60 sm:opacity-40', parallax: -150 },
  { src: '/8.png', className: 'top-[12%] right-[1%] sm:top-[30%] sm:right-[5%] md:right-[7%] rotate-3 opacity-70 sm:opacity-60', parallax: 150 },
  { src: '/4.png', className: 'bottom-[18%] left-[2%] sm:bottom-[10%] sm:left-[20%] rotate-12 opacity-55 sm:opacity-40', parallax: -150 },
  { src: '/5.png', className: 'bottom-[22%] right-[2%] sm:top-[15%] sm:bottom-auto sm:right-[25%] md:right-[30%] rotate-6 opacity-55 sm:opacity-40', parallax: 150 },
  { src: '/9.png', className: 'bottom-[3%] right-[6%] sm:bottom-[5%] sm:right-[15%] md:right-[20%] -rotate-12 opacity-70 sm:opacity-60', parallax: -150 },
]

const WHISPERS = [
  'the girl I can\'t unsee',
  'my softest weakness',
  'the smile I replay',
  'my favorite hello',
]

function FloatPhoto({ src, className, parallax, scrollY }) {
  const y = useTransform(scrollY, [0, 1000], [0, parallax])

  return (
    <motion.div className={`absolute w-[4.5rem] sm:w-28 md:w-40 ${className}`} style={{ y }}>
      <div className="glass-card interactive cursor-pointer rounded-2xl p-2 transition-opacity duration-500 hover:opacity-100">
        <img src={src} alt="" className="h-auto w-full rounded-xl object-cover" />
      </div>
    </motion.div>
  )
}

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroSection() {
  const { scrollY } = useScroll()
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const [whisperIndex, setWhisperIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWhisperIndex((i) => (i + 1) % WHISPERS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 z-[1]">
        {floatPhotos.map((photo, i) => (
          <FloatPhoto key={i} {...photo} scrollY={scrollY} />
        ))}
      </div>

      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c4dff]/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/3 h-[300px] w-[300px] rounded-full bg-[#f6c177]/10 blur-[80px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        style={{ opacity: contentOpacity }}
      >
        <motion.p
          className="mb-2 text-sm font-medium tracking-[0.3em] text-[#c8b6ff] uppercase"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          For the girl who stole my attention
        </motion.p>

        <motion.p
          className="mb-6 font-serif text-2xl text-white/90 md:text-3xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          Hey, <span className="gradient-text-shimmer italic">Kashish</span> ♡
        </motion.p>

        <motion.div
          className="mb-10 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative">
            <div className="heartbeat-glow absolute -inset-2 rounded-full bg-gradient-to-r from-[#7c4dff] to-[#f6c177] opacity-50 blur-md" />
            <div className="glass-card interactive relative h-36 w-36 overflow-hidden rounded-full border-2 border-[#c8b6ff]/40 md:h-44 md:w-44">
              <img src="/2.png" alt="Kashish" className="h-full w-full object-cover" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl leading-tight font-light romantic-glow md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          I tried to look away…
          <br />
          <span className="gradient-text-shimmer italic">but you&apos;re impossible to forget.</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg font-light text-gray-300 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          You didn&apos;t just enter my life — you quietly became the most beautiful part of it.
          <br className="hidden sm:block" />
          And now, <span className="text-[#c8b6ff] italic">I don&apos;t want to imagine a day without you in my thoughts.</span>
        </motion.p>

        <motion.p
          key={whisperIndex}
          className="mt-4 font-serif text-sm text-[#f6c177] italic"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          you are {WHISPERS[whisperIndex]}
        </motion.p>

        <motion.p
          className="mt-6 text-xs font-medium tracking-widest text-white/40 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Scroll — if your heart is ready
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
        >
          <motion.button
            className="interactive group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-medium text-[#0b0b0f] transition-shadow hover:shadow-lg hover:shadow-[#c8b6ff]/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('story')}
          >
            <span className="relative z-10">Read What I Feel ♡</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#c8b6ff] to-[#f6c177] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.button>

          <motion.button
            className="interactive glass-card rounded-full border border-[#c8b6ff]/30 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('traits')}
          >
            Why You&apos;re Irresistible ✨
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#c8b6ff]/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
