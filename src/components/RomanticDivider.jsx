import { motion } from 'framer-motion'

export default function RomanticDivider({ quote, author }) {
  return (
    <div className="relative z-10 flex items-center justify-center py-20">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-[#c8b6ff]/30 to-transparent md:max-w-md" />
      </div>
      <motion.blockquote
        className="relative max-w-2xl px-8 text-center"
        initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <p className="font-serif text-xl leading-relaxed text-white/70 italic md:text-2xl">
          &ldquo;{quote}&rdquo;
        </p>
        {author && (
          <footer className="mt-4 text-xs tracking-widest text-[#f6c177]/70 uppercase">
            — {author}
          </footer>
        )}
      </motion.blockquote>
    </div>
  )
}
