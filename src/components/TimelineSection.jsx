import { motion } from 'framer-motion'
import { MessageCircle, Eye, Heart, Sparkles } from 'lucide-react'

const moments = [
  {
    icon: Eye,
    title: 'The first time I saw you',
    text: 'Something shifted. Like the world paused for a second — and all I could see was you. Your smile didn\'t just reach my eyes… it reached somewhere deeper.',
  },
  {
    icon: MessageCircle,
    title: 'When your voice became my comfort',
    text: 'Every message from you felt like warmth on a cold day. Talking to you wasn\'t just easy — it was the part of my day I started looking forward to the most.',
  },
  {
    icon: Heart,
    title: 'When I stopped pretending it was casual',
    text: 'I saved your photos. Re-read our conversations. Smiled at my phone like a fool. Because Kashish — you weren\'t just someone I liked. You became someone I couldn\'t stop caring about.',
  },
  {
    icon: Sparkles,
    title: 'When I knew I had to tell you',
    text: 'Some feelings are too beautiful to hide. You deserve to know that someone out here thinks the world is softer, brighter, and infinitely more worth it — because you exist in it.',
  },
]

export default function TimelineSection() {
  return (
    <section id="story" className="relative z-10 overflow-hidden py-32">
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#f6c177]/8 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-sm font-medium tracking-widest text-[#f6c177] uppercase">
            The story my heart wrote
          </p>
          <h2 className="font-serif text-4xl font-light text-white/90 md:text-5xl">
            How <span className="gradient-text-shimmer italic">Kashish</span> became my everything
          </h2>
          <p className="mt-4 text-sm text-gray-500 italic">
            I didn&apos;t fall fast — I fell deeply, quietly, and completely.
          </p>
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
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c8b6ff]/40 bg-[#0b0b0f] shadow-[0_0_20px_rgba(124,77,255,0.3)] md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Icon size={18} className="text-[#c8b6ff]" />
                </div>

                <div
                  className={`glass-card flex-1 rounded-2xl border border-[#c8b6ff]/10 p-6 md:w-[calc(50%-3rem)] ${
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
