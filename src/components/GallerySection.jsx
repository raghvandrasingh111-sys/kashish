import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, X } from 'lucide-react'

const galleryItems = [
  { src: '/1.png', caption: 'This is the photo I keep coming back to.' },
  { src: '/3.png', caption: 'Probably my favorite picture of you, Kashish.' },
  { src: '/5.png', caption: 'You looked unreal here. Like a dream.' },
  { src: '/6.png', caption: 'Straight out of a movie — and you\'re the star.' },
  { src: '/9.png', caption: "I still don't know why this one hits different." },
  { src: '/10.png', caption: 'You, lost in your own world. I wanted to be in it.' },
  { src: '/11.png', caption: 'The kind of moment I wish I was there for.' },
  { src: '/12.png', caption: 'Just you, being effortlessly you. That\'s enough.' },
]

function GalleryItem({ item, index, onClick }) {
  return (
    <motion.div
      className="group interactive mb-6 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => onClick(item)}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={item.src}
          alt={item.caption}
          className="w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#0b0b0f]/90 via-[#0b0b0f]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <Heart
            className="mb-3 text-[#c8b6ff] opacity-0 transition-all delay-100 duration-500 group-hover:scale-110 group-hover:opacity-100"
            size={32}
            fill="currentColor"
          />
          <p className="translate-y-4 px-4 text-center text-sm text-white/90 opacity-0 transition-all delay-200 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
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
        <img src={item.src} alt={item.caption} className="max-h-[80vh] rounded-2xl object-contain" />
        <p className="mt-4 text-center font-serif text-lg text-white/80 italic">{item.caption}</p>
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
          Moments I Kept Thinking About
        </motion.h2>
        <motion.p
          className="mb-16 text-center text-sm text-gray-500 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Every photo of you feels like a memory I wasn&apos;t there for — but wish I was.
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
