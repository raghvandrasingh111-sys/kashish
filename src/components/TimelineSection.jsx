import { motion } from 'framer-motion'
import { MessageCircle, Eye, Heart, Sparkles } from 'lucide-react'

const moments = [
  {
    icon: Eye,
    title: 'The first time I noticed you',
    text: 'I didn\'t know it then — but something about the way you smiled made the whole room feel warmer.',
  },
  {
    icon: MessageCircle,
    title: 'When talking to you became my favorite part',
    text: 'Every conversation with you felt easy. Like I\'d known you longer than I actually had.',
  },
  {
    icon: Heart,
    title: 'When I realized it wasn\'t just a crush',
    text: 'I started saving your photos. Re-reading our chats. Smiling at my phone like an idiot.',
  },
  {
    icon: Sparkles,
    title: 'When I knew I had to tell you',
    text: 'Because keeping this inside felt wrong. Kashish — you deserve to know how much you mean to me.',
  },
]

export default function TimelineSection() {
  return (
    <section id="story" className="relative z-10 overflow-hidden py-32">
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#f6c177]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-sm font-medium tracking-widest text-[#f6c177] uppercase">
            Our little story
          </p>
          <h2 className="font-serif text-4xl font-light text-white/90 md:text-5xl">
            How <span className="gradient-text italic">Kashish</span> became everything
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 left-6 h-full w-px bg-gradient-to-b from-[#7c4dff] via-[#c8b6ff] to-transparent md:left-1/2 md:-translate-x-px" />

          {moments.map((moment, i) => {
            const Icon = moment.icon
            const isLeft = i % 2 === 0

            return (
              <motion.div
                key={i}
                className={`relative mb-12 flex items-start gap-6 md:mb-16 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c8b6ff]/30 bg-[#0b0b0f] md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Icon size={18} className="text-[#c8b6ff]" />
                </div>

                <div
                  className={`glass-card flex-1 rounded-2xl p-6 md:w-[calc(50%-3rem)] ${
                    isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <p className="mb-1 text-xs font-medium tracking-widest text-[#7c4dff] uppercase">
                    Chapter {i + 1}
                  </p>
                  <h3 className="mb-2 font-serif text-xl text-white">{moment.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{moment.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
