import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    const handleScroll = () => {
      // Hero section is h-screen (100vh), so check if scrolled past that
      const heroHeight = window.innerHeight
      setIsScrolled(window.scrollY > heroHeight - 100) // Start transition slightly before leaving hero
    }

    checkMobile()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkMobile)
    // Check initial scroll position
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // On mobile, always show black background. On desktop, show transparent on hero, black when scrolled
  const shouldShowBackground = isMobile || isScrolled

  return (
    <nav 
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        shouldShowBackground 
          ? 'bg-black/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto mt-4 w-[90%]">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/images/smo_logo.png"
              alt="Logo"
              className="h-20 w-auto select-none"
              draggable={false}
            />
          </Link>
          {/* Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/" className="text-white hover:text-gray-300 transition-colors duration-200 hidden sm:block smofonts">
              Home
            </Link>
            <a
              href="http://api.scoutme.cloud:3000/auth/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-6 font-semibold text-white hover:text-gray-300 transition-colors duration-200 smofonts"
            >
              Login / Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


