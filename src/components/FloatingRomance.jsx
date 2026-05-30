import { useMemo } from 'react'

const WORDS = [
  'beautiful',
  'mine',
  'forever',
  'yours',
  'enchanting',
  'irreplaceable',
  'Kashish',
  'heartbeat',
  'destiny',
  'precious',
]

export default function FloatingRomance() {
  const items = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        word: WORDS[i % WORDS.length],
        left: `${5 + Math.random() * 90}%`,
        delay: Math.random() * 8,
        duration: 7 + Math.random() * 5,
      })),
    [],
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {items.map((item) => (
        <span
          key={item.id}
          className="animate-float-word absolute font-serif text-sm text-[#c8b6ff]/10 italic md:text-base"
          style={{
            left: item.left,
            bottom: '-5%',
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.word}
        </span>
      ))}
    </div>
  )
}
