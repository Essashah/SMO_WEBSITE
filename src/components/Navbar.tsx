import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[90%] ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/smo_logo.png"
              alt="Logo"
              className="h-20 w-auto select-none"
              draggable={false}
            />
          </div>
          {/* Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 hidden sm:block smofonts">
              Home
            </a>
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


