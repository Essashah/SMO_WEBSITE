import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HowStatement from './components/HowStatement'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowStatement />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  )
}

export default App
