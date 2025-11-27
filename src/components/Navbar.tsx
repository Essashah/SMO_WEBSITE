import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[90%] ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/white-logo.png"
              alt="Logo"
              className="h-10 w-auto select-none"
              draggable={false}
            />
          </div>
          {/* Add nav links here if needed */}
          <div className="flex items-center gap-3">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


