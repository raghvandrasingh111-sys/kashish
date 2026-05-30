import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MusicProvider } from './context/MusicContext'
import LoadingSplash from './components/LoadingSplash'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'
import FloatingRomance from './components/FloatingRomance'
import ScrollProgressBar from './components/ScrollProgressBar'
import HeroSection from './components/HeroSection'
import TimelineSection from './components/TimelineSection'
import RomanticDivider from './components/RomanticDivider'
import TraitsSection from './components/TraitsSection'
import BeforeAfterSection from './components/BeforeAfterSection'
import GallerySection from './components/GallerySection'
import LetterSection from './components/LetterSection'
import ProposalSection from './components/ProposalSection'
import ConfessionModal from './components/ConfessionModal'
import ConfettiCelebration from './components/ConfettiCelebration'
import MusicToggle from './components/MusicToggle'

function AppContent() {
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
      <MusicToggle />
      <AnimatePresence mode="wait">
        {loading && <LoadingSplash key="splash" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <ParticleBackground />
          <FloatingRomance />
          <ScrollProgressBar />
          <ConfettiCelebration
            active={showConfetti}
            onComplete={() => setShowConfetti(false)}
          />

          <main className="selection:bg-[#7c4dff] selection:text-white">
            <HeroSection />
            <RomanticDivider
              quote="You are the kind of beautiful that makes people forget how to look away."
              author="every beat of my heart"
            />
            <TimelineSection />
            <RomanticDivider
              quote="In a world full of temporary things, you feel like forever."
            />
            <TraitsSection />
            <BeforeAfterSection />
            <RomanticDivider
              quote="I didn't believe in soulmates — until your smile made me a believer."
            />
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

export default function App() {
  return (
    <MusicProvider>
      <AppContent />
    </MusicProvider>
  )
}
