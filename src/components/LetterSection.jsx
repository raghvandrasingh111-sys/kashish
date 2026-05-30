import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 1.5 },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.5, ease: 'easeOut' },
  },
}

export default function LetterSection() {
  return (
    <section id="letter" className="relative flex min-h-screen items-center justify-center overflow-hidden py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8b6ff]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.h2
          className="mb-12 text-center font-serif text-4xl font-light text-white/90 md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 2 }}
        >
          If I finally say it…
        </motion.h2>

        <motion.div
          className="glass-card rounded-3xl border border-[#c8b6ff]/20 bg-[#0b0b0f]/40 p-10 text-center shadow-2xl md:p-16 md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p className="mb-2 font-serif text-sm tracking-widest text-[#f6c177] uppercase" variants={childVariants}>
            Dear Kashish,
          </motion.p>

          <motion.p className="mb-6 font-serif text-xl font-light text-gray-200 md:text-2xl" variants={childVariants}>
            I don&apos;t really know when this started.
          </motion.p>

          <motion.p className="mb-6 font-serif text-xl font-light text-gray-200 md:text-2xl" variants={childVariants}>
            Maybe it was your smile.
            <br />
            Maybe your energy.
            <br />
            Maybe the way you exist so effortlessly.
          </motion.p>

          <motion.p className="mb-6 font-serif text-xl font-light text-gray-200 md:text-2xl" variants={childVariants}>
            But slowly,
            <br />
            without even realizing it,
            <br />
            you became someone genuinely important to me.
          </motion.p>

          <motion.p
            className="font-serif text-xl font-light text-[#c8b6ff] italic md:text-2xl"
            variants={childVariants}
          >
            And honestly…
            <br />
            I just wanted you to know that.
          </motion.p>

          <motion.p
            className="mt-8 text-right font-serif text-sm text-gray-500 italic"
            variants={childVariants}
          >
            — someone who can&apos;t stop thinking about you
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
