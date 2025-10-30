import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import aiTargetAnimation from '../assets/ai-target.json'

const Hero = () => {
  const [mounted, setMounted] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const [lockedOn, setLockedOn] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Lock on after 2 seconds
    const lockTimer = setTimeout(() => {
      setLockedOn(true)
      setShowStats(true)
    }, 2000)
    return () => clearTimeout(lockTimer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/random.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* AI Target Lottie Animation Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <Lottie
          animationData={aiTargetAnimation}
          loop={!lockedOn}
          autoplay
          style={{ width: 300, height: 300, opacity: 0.85 }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Headline */}
        <h1
          className={`text-cyan-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 max-w-5xl transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            textShadow: '0 0 20px rgba(0, 240, 255, 0.8), 0 0 40px rgba(0, 240, 255, 0.5)',
            fontFamily: "'Orbitron', sans-serif",
          }}
        >
          Our Mission: Empowering sports people to beat their odds and win!
        </h1>

        {/* Subheadline */}
        <p
          className={`text-white/90 text-lg sm:text-xl md:text-2xl text-center max-w-3xl transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Turning dreams into data-driven decisions.
        </p>
      </div>

      {/* AI Stats Box - appears when locked on */}
      {showStats && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 right-6 md:right-12 max-w-xs z-30 transition-all duration-700 ${
            showStats ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div
            className="bg-black/90 border-2 border-cyan-400 rounded-lg p-4 md:p-5"
            style={{
              boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)',
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="h-2 w-2 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  boxShadow: '0 0 8px rgba(0, 240, 255, 0.8)',
                }}
              />
              <span className="text-cyan-400 text-xs font-mono uppercase tracking-wider">
                Target Locked
              </span>
            </div>
            <p className="text-white font-semibold text-sm md:text-base leading-snug">
              90% chance of goal if shot to bottom corner
            </p>
          </div>
        </div>
      )}

      {/* Scroll-down indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-1000 delay-500 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="animate-bounce"
          style={{
            filter: 'drop-shadow(0 0 12px rgba(0, 240, 255, 0.8))',
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            className="text-cyan-400"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
