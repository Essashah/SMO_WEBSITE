import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HowStatement from './components/HowStatement'
import Features from './components/Features'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'
import UserJourney from './components/userJourney'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowStatement />
      <Features />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <UserJourney />
      <Footer />
    </div>
  )
}

export default App
