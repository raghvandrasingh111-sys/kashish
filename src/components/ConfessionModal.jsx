import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Heart } from 'lucide-react'

const FORMSPREE_ID = 'xnjryjjl'

const placeOptions = [
  { value: '', label: 'Select a vibe…' },
  { value: 'coffee', label: 'Coffee Date ☕' },
  { value: 'drive', label: 'Late Night Drive 🌃' },
  { value: 'cafe', label: 'Cute Cafe 🍰' },
  { value: 'movie', label: 'Movie Date 🎬' },
  { value: 'sunset', label: 'Sunset Walk 🌇' },
  { value: 'youdecide', label: 'You decide 💜' },
]

export default function ConfessionModal({ isOpen, onClose, onSuccess }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: 'Kashish',
    contact: '',
    place: '',
    date: '',
    thoughts: '',
    memory: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formId = import.meta.env.VITE_FORMSPREE_ID || FORMSPREE_ID
    if (!formId) {
      console.warn('VITE_FORMSPREE_ID is not set — form answers will not be delivered.')
    } else {
      try {
        await fetch(`https://formspree.io/f/${formId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            contact: form.contact,
            place: form.place,
            date: form.date,
            thoughts: form.thoughts,
            memory: form.memory,
            _subject: `💜 Kashish replied on heyy-kashish.vercel.app`,
          }),
        })
      } catch {
        // Still show success — she shouldn't see an error
      }
    }

    setSubmitted(true)
    onSuccess?.()
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => setSubmitted(false), 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          <motion.div
            className="relative z-10 max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-[#1A1A24] p-6 shadow-2xl sm:p-8"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="interactive absolute top-4 right-4 text-white/60 hover:text-white"
              onClick={handleClose}
            >
              <X size={24} />
            </button>

            {!submitted ? (
              <>
                <div className="mb-8 text-center">
                  <motion.div
                    className="mb-4 inline-block text-[#7c4dff]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Heart size={32} fill="currentColor" />
                  </motion.div>
                  <h3 className="font-serif text-2xl text-white">
                    Kashish… you just made my whole world stop 💜
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 italic">
                    If your heart said yes too — leave me a little piece of yours?
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Name (pretty sure it&apos;s Kashish, but just in case 😆)
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="interactive w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#c8b6ff]/50 focus:bg-white/10 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Contact (so I can actually message you!)
                    </label>
                    <input
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      placeholder="WhatsApp number…"
                      className="interactive w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#c8b6ff]/50 focus:bg-white/10 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-300">Where should our first date be?</label>
                    <select
                      name="place"
                      value={form.place}
                      onChange={handleChange}
                      className="interactive w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-[#c8b6ff]/50 focus:bg-white/10 focus:outline-none"
                    >
                      {placeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-[#1A1A24]">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-300">When are you free?</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="interactive w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-[#c8b6ff]/50 focus:bg-white/10 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      What do you think about me? (be honest, I&apos;m curious)
                    </label>
                    <textarea
                      name="thoughts"
                      value={form.thoughts}
                      onChange={handleChange}
                      rows={3}
                      placeholder="First impression, vibes, anything…"
                      className="interactive w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#c8b6ff]/50 focus:bg-white/10 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Favorite memory of us (or what you think of me)
                    </label>
                    <textarea
                      name="memory"
                      value={form.memory}
                      onChange={handleChange}
                      rows={3}
                      placeholder="What made you smile about me first?"
                      className="interactive w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#c8b6ff]/50 focus:bg-white/10 focus:outline-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="interactive flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7c4dff] to-[#c8b6ff] py-4 font-medium text-white"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send My Answer ↗
                    <Send size={18} />
                  </motion.button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <Heart className="mx-auto mb-6 text-[#7c4dff]" size={48} fill="currentColor" />
                </motion.div>
                <h3 className="font-serif text-2xl text-white">
                  Kashish… this is officially my favorite moment in the universe.
                </h3>
                <p className="mt-4 text-gray-400 italic">
                  I promise to turn this yes into the most beautiful love story.
                </p>
                <motion.button
                  className="interactive mt-8 rounded-full border border-white/20 px-8 py-3 text-sm text-white hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClose}
                >
                  Close
                </motion.button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
