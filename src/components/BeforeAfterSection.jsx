import { motion } from 'framer-motion'

const before = [
  'Days felt ordinary, like they didn\'t matter',
  'Music was just background noise',
  'My phone was just a phone',
  'I smiled — but never with my whole heart',
]

const after = [
  'Now every day secretly hopes you\'ll text',
  'Every song feels like it\'s about you, Kashish',
  'My phone became the place where you live',
  'Your smile is the reason behind mine',
]

export default function BeforeAfterSection() {
  return (
    <section className="relative z-10 overflow-hidden py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c4dff]/8 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          className="mb-4 text-center font-serif text-4xl font-light text-white/90 md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My world <span className="gradient-text italic">before</span> & <span className="gradient-text-shimmer italic">after</span> you
        </motion.h2>
        <motion.p
          className="mb-16 text-center text-sm text-gray-500 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          You didn&apos;t just change my days — you changed the way I feel them.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            className="glass-card rounded-3xl border border-white/5 p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-sm font-medium tracking-widest text-gray-500 uppercase">
              Before you, Kashish
            </p>
            <ul className="space-y-4">
              {before.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-gray-500 line-through decoration-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-gray-600">✕</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="glass-card glow-shadow rounded-3xl border border-[#c8b6ff]/30 bg-[#7c4dff]/8 p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-sm font-medium tracking-widest text-[#f6c177] uppercase">
              After you found me ♡
            </p>
            <ul className="space-y-4">
              {after.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 font-light text-gray-200"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-[#c8b6ff]">♡</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
