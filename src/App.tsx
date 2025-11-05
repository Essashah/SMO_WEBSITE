import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HowStatement from './components/HowStatement'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'
import UserJourney from './components/userJourney'
import LoginModal from './components/LoginModal'

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const handleRegisterClick = () => {
    const element = document.getElementById('choose-your-path')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleLoginClick = () => {
    setIsLoginModalOpen(true)
  }

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  return (
    <div className="min-h-screen">
      <Navbar onRegisterClick={handleRegisterClick} onLoginClick={handleLoginClick} />
      <Hero />
      <HowStatement />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <UserJourney />
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
    </div>
  )
}

export default App
