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
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8b6ff]/15 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.h2
          className="mb-4 text-center font-serif text-4xl font-light text-white/90 md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 2 }}
        >
          A letter I was scared to send…
        </motion.h2>
        <motion.p
          className="mb-12 text-center text-sm text-gray-500 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          but too honest to keep inside
        </motion.p>

        <motion.div
          className="glass-card rounded-3xl border border-[#c8b6ff]/25 bg-[#0b0b0f]/40 p-10 text-center shadow-[0_0_60px_rgba(124,77,255,0.15)] md:p-16 md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p className="mb-2 font-serif text-sm tracking-widest text-[#f6c177] uppercase" variants={childVariants}>
            My dearest Kashish,
          </motion.p>

          <motion.p className="mb-6 font-serif text-xl font-light text-gray-200 md:text-2xl" variants={childVariants}>
            I don&apos;t know the exact moment you became special to me.
          </motion.p>

          <motion.p className="mb-6 font-serif text-xl font-light text-gray-200 md:text-2xl" variants={childVariants}>
            Maybe it was your smile — the kind that stays even after you look away.
            <br />
            Maybe your voice — soft, but somehow louder than everything else.
            <br />
            Maybe the way you exist… unapologetically, beautifully, effortlessly you.
          </motion.p>

          <motion.p className="mb-6 font-serif text-xl font-light text-gray-200 md:text-2xl" variants={childVariants}>
            But slowly, quietly, without permission,
            <br />
            you became the person my heart chose —
            <br />
            again and again, every single day.
          </motion.p>

          <motion.p
            className="font-serif text-xl font-light text-[#c8b6ff] italic md:text-2xl"
            variants={childVariants}
          >
            Tum nazar mein raho…
            <br />
            Stay in my world, Kashish.
            <br />
            Because life feels incomplete without you in it.
          </motion.p>

          <motion.p
            className="mt-8 text-right font-serif text-sm text-gray-500 italic"
            variants={childVariants}
          >
            — someone who is completely, helplessly yours
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
