import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, X } from 'lucide-react'

const galleryItems = [
  { src: '/1.png', caption: 'One look at you — and my whole day changed direction.' },
  { src: '/3.png', caption: 'If I had to pick one face to see forever… it would be this one, Kashish.' },
  { src: '/5.png', caption: 'You looked like a dream I didn\'t want to wake up from.' },
  { src: '/6.png', caption: 'Main character energy. That\'s you. Always you.' },
  { src: '/9.png', caption: 'I don\'t know why this photo hurts so beautifully — maybe because I miss being there.' },
  { src: '/10.png', caption: 'Lost in your own world… and I just wanted a place in it.' },
  { src: '/11.png', caption: 'A moment I wasn\'t part of — but my heart still remembers.' },
  { src: '/12.png', caption: 'Effortlessly you. That\'s the most dangerous kind of beautiful.' },
]

function GalleryItem({ item, index, onClick }) {
  return (
    <motion.div
      className="group interactive mb-6 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '0px', amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => onClick(item)}
    >
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/5 transition-all duration-500 group-hover:ring-[#c8b6ff]/40">
        <img
          src={item.src}
          alt={item.caption}
          className="w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#0b0b0f]/95 via-[#0b0b0f]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <Heart
            className="mb-3 text-[#c8b6ff] opacity-0 transition-all delay-100 duration-500 group-hover:scale-110 group-hover:opacity-100"
            size={32}
            fill="currentColor"
          />
          <p className="translate-y-4 px-4 text-center font-serif text-sm text-white/90 italic opacity-0 transition-all delay-200 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {item.caption}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function Lightbox({ item, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="absolute inset-0 bg-black/90"
        initial={{ backdropFilter: 'blur(0px)' }}
        animate={{ backdropFilter: 'blur(12px)' }}
      />
      <motion.button
        className="interactive absolute top-6 right-6 z-10 text-white/80 hover:text-white"
        onClick={onClose}
      >
        <X size={28} />
      </motion.button>
      <motion.div
        className="relative z-10 max-h-[90vh] max-w-3xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.src} alt={item.caption} className="max-h-[80vh] rounded-2xl object-contain shadow-[0_0_60px_rgba(124,77,255,0.3)]" />
        <p className="mt-4 text-center font-serif text-lg text-[#c8b6ff] italic">{item.caption}</p>
      </motion.div>
    </motion.div>
  )
}

export default function GallerySection() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="relative z-10 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          className="mb-4 text-center font-serif text-4xl font-light text-white/90 md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Every photo of you, a heartbeat I replay
        </motion.h2>
        <motion.p
          className="mb-16 text-center text-sm text-gray-500 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I wasn&apos;t there for these moments — but my heart acts like I was.
        </motion.p>

        <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, i) => (
            <GalleryItem key={i} item={item} index={i} onClick={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
