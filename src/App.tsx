import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import Navbar from './components/ui/layout/sections/Navbar'
import Hero from './components/ui/layout/sections/Hero'
import About from './components/ui/layout/sections/About'
import Speakers from './components/ui/layout/sections/Speakers'
import Journey from './components/ui/layout/sections/Journey'
import Merchandise from './components/ui/layout/sections/Merchandise'
import Ticketing from './components/ui/layout/sections/Ticketing'
import FAQ from './components/ui/layout/sections/FAQ'
import FinalCTA from './components/ui/layout/sections/FinalCTA'
import Footer from './components/ui/layout/sections/Footer'
import SpeakerModal from './components/ui/layout/sections/SpeakerModal'
import RegistrationModal from './components/ui/layout/sections/RegistrationModal'
import Countdown from './components/ui/layout/sections/Countdown'

import type { Speaker } from './types/Speaker'
import type { Ticket } from './types/Ticket'

function App() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)
  const [navbarHeight, setNavbarHeight] = useState(96)

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setSelectedSpeaker(null)
        setSelectedTicket(null)
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = selectedSpeaker || selectedTicket ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [selectedSpeaker, selectedTicket])

  return (
    <>
      <Navbar isBlurred={!!selectedSpeaker} onHeightChange={setNavbarHeight} />
      <Countdown targetDate="2026-10-03T09:00:00+08:00" offsetTop={navbarHeight} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Speakers onSelectSpeaker={setSelectedSpeaker} />
        <Journey />
        <Merchandise />
        <Ticketing onSelectTicket={setSelectedTicket} />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      <AnimatePresence mode="wait">
        {selectedSpeaker && (
          <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
        )}
        {selectedTicket && (
          <RegistrationModal ticket={selectedTicket} onClose={() => setSelectedTicket(null)} />
        )}
      </AnimatePresence>
    </>
  )
}

export default App