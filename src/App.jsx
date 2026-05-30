import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingSplash from './components/LoadingSplash'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'
import ScrollProgressBar from './components/ScrollProgressBar'
import HeroSection from './components/HeroSection'
import TimelineSection from './components/TimelineSection'
import TraitsSection from './components/TraitsSection'
import BeforeAfterSection from './components/BeforeAfterSection'
import GallerySection from './components/GallerySection'
import LetterSection from './components/LetterSection'
import ProposalSection from './components/ProposalSection'
import ConfessionModal from './components/ConfessionModal'
import ConfettiCelebration from './components/ConfettiCelebration'
import MusicToggle from './components/MusicToggle'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSuccess = () => {
    setShowConfetti(true)
  }

  return (
    <>
      <MusicToggle autoPlay />
      <AnimatePresence mode="wait">
        {loading && <LoadingSplash key="splash" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <ParticleBackground />
          <ScrollProgressBar />
          <ConfettiCelebration
            active={showConfetti}
            onComplete={() => setShowConfetti(false)}
          />

          <main className="selection:bg-[#7c4dff] selection:text-white">
            <HeroSection />
            <TimelineSection />
            <TraitsSection />
            <BeforeAfterSection />
            <GallerySection />
            <LetterSection />
            <ProposalSection
              onOpenModal={() => setModalOpen(true)}
              onReplay={handleReplay}
            />
          </main>

          <ConfessionModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            onSuccess={handleSuccess}
          />
        </>
      )}
    </>
  )
}
