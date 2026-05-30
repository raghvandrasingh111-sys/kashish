import { motion } from 'framer-motion'

const before = [
  'Scrolling without a reason',
  'Music felt just… fine',
  'Days passed without meaning',
  'Smiling was just a habit',
]

const after = [
  'I check my phone hoping it\'s you',
  'Every song reminds me of Kashish',
  'You turned ordinary days into memories',
  'Your smile is literally my favorite view',
]

export default function BeforeAfterSection() {
  return (
    <section className="relative z-10 overflow-hidden py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c4dff]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          className="mb-16 text-center font-serif text-4xl font-light text-white/90 md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Life before & after <span className="gradient-text italic">you</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            className="glass-card rounded-3xl border border-white/5 p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-sm font-medium tracking-widest text-gray-500 uppercase">
              Before Kashish
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
            className="glass-card glow-shadow rounded-3xl border border-[#c8b6ff]/20 bg-[#7c4dff]/5 p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-sm font-medium tracking-widest text-[#f6c177] uppercase">
              After Kashish ♡
            </p>
            <ul className="space-y-4">
              {after.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-gray-200"
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
