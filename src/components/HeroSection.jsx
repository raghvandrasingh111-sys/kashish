import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const floatPhotos = [
  { src: '/7.png', className: 'top-[10%] left-[5%] md:left-[10%] -rotate-6 hidden sm:block opacity-40', parallax: -150 },
  { src: '/8.png', className: 'top-[30%] right-[5%] md:right-[7%] rotate-3 hidden sm:block opacity-60', parallax: 150 },
  { src: '/4.png', className: 'bottom-[10%] left-[20%] rotate-12 hidden lg:block opacity-40', parallax: -150 },
  { src: '/5.png', className: 'top-[15%] right-[25%] md:right-[30%] rotate-6 hidden lg:block opacity-40', parallax: 150 },
  { src: '/9.png', className: 'bottom-[5%] right-[15%] md:right-[20%] -rotate-12 hidden sm:block opacity-60', parallax: -150 },
]

function FloatPhoto({ src, className, parallax, scrollY }) {
  const y = useTransform(scrollY, [0, 1000], [0, parallax])

  return (
    <motion.div className={`absolute w-28 md:w-40 ${className}`} style={{ y }}>
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

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0">
        {floatPhotos.map((photo, i) => (
          <FloatPhoto key={i} {...photo} scrollY={scrollY} />
        ))}
      </div>

      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c4dff]/20 blur-[120px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        style={{ opacity: contentOpacity }}
      >
        <motion.p
          className="mb-6 text-sm font-medium tracking-[0.25em] text-[#c8b6ff] uppercase"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Hey Kashish ♡
        </motion.p>

        <motion.div
          className="mb-10 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative">
            <div className="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-[#7c4dff] to-[#f6c177] opacity-40 blur-sm" />
            <div className="glass-card interactive relative h-32 w-32 overflow-hidden rounded-full border-2 border-white/20 md:h-40 md:w-40">
              <img src="/2.png" alt="Kashish" className="h-full w-full object-cover" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl leading-tight font-light md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          You slowly became my
          <br />
          <span className="gradient-text italic">favorite part of the day.</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg font-light text-gray-300 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I didn&apos;t expect someone to stay on my mind this much…
          <br className="hidden sm:block" />
          but somehow, <span className="text-[#c8b6ff]">you</span> make everything feel special.
        </motion.p>

        <motion.p
          className="mt-4 text-sm font-medium tracking-widest text-[#f6c177] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          So I made something only for you, Kashish.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
        >
          <motion.button
            className="interactive group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-medium text-[#0b0b0f] transition-shadow hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('story')}
          >
            <span className="relative z-10">Enter My Thoughts ♡</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#c8b6ff] to-[#f6c177] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.button>

          <motion.button
            className="interactive glass-card rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('traits')}
          >
            Why You Matter To Me ✨
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
