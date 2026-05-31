import { motion } from 'framer-motion'
import { Sparkles, Star, Camera, Heart } from 'lucide-react'

const traits = [
  {
    text: 'You make ordinary moments feel like poetry, Kashish.',
    icon: Sparkles,
    bg: '/13.png',
    className: 'md:col-span-2 md:row-span-2',
    size: 'text-3xl md:text-4xl',
  },
  {
    text: 'Your smile? It heals things I never said out loud.',
    icon: Heart,
    bg: '/3.png',
    className: 'md:col-span-1 md:row-span-1',
    size: 'text-2xl',
  },
  {
    text: 'You carry a light that people feel — not just see.',
    icon: Star,
    bg: '/14.png',
    className: 'md:col-span-1 md:row-span-2',
    size: 'text-2xl',
  },
  {
    text: 'Even your silence feels like a beautiful scene.',
    icon: Camera,
    bg: '/6.png',
    className: 'md:col-span-1 md:row-span-1',
    size: 'text-2xl',
  },
  {
    text: 'You walk into places and somehow make them sacred.',
    icon: Sparkles,
    bg: '/9.png',
    className: 'md:col-span-1 md:row-span-1',
    size: 'text-2xl',
  },
]

function TraitCard({ trait, index }) {
  const Icon = trait.icon

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-3xl ${trait.className}`}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '0px', amount: 0.2 }}
      transition={{
        delay: 0.1 + index * 0.1,
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {trait.bg && (
        <img
          src={trait.bg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60 sm:opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:opacity-70"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f]/90 via-[#0b0b0f]/50 to-transparent" />

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#7c4dff]/20 via-transparent to-[#f6c177]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative flex h-full min-h-[220px] flex-col justify-end p-8">
        <motion.div
          className="mb-4 text-[#c8b6ff]"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={24} />
        </motion.div>
        <h3 className={`font-serif font-light text-white ${trait.size}`}>{trait.text}</h3>
      </div>
    </motion.div>
  )
}

export default function TraitsSection() {
  return (
    <section id="traits" className="relative z-10 overflow-hidden py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[#7c4dff]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          className="mb-4 text-center font-serif text-4xl font-light text-white/90 md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Reasons my heart chose <span className="gradient-text-shimmer italic">Kashish</span>
        </motion.h2>
        <motion.p
          className="mb-16 text-center text-sm text-gray-500 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I could write you a thousand lines… but these five already say everything.
        </motion.p>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-6 md:grid-cols-3">
          {traits.map((trait, i) => (
            <TraitCard key={i} trait={trait} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
