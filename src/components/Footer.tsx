import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full bg-black text-white">
      <div className="mx-auto w-[92%] py-5">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/images/smo_logo.png" alt="Logo" className="h-20 w-auto" />
            <span className="text-sm text-white/70">© {new Date().getFullYear()} SMO. All rights reserved.</span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-white/80">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


