import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { BiBarChartAlt2, BiTrendingUp } from 'react-icons/bi'
import { FaRunning, FaBrain } from 'react-icons/fa'

const HowStatement = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    const videoContainer = videoContainerRef.current
    const overlay = overlayRef.current
    const section = sectionRef.current

    if (video && videoContainer && overlay && section && !videoError) {
      // Ensure video plays and loops
      const handleLoadedData = () => {
        video.play().catch(() => {
          setVideoError(true)
        })
      }
      
      const handleEnded = () => {
        // Restart video when it ends to ensure continuous loop
        video.currentTime = 0
        video.play().catch(() => {
          setVideoError(true)
        })
      }
      
      video.addEventListener('loadeddata', handleLoadedData)
      video.addEventListener('ended', handleEnded)
      
      // Try to play immediately
      video.play().catch(() => {
        // If autoplay fails, wait for loaded data
        console.log('Video autoplay prevented, waiting for loaded data')
      })

      // GSAP Animations - video stays fixed, only effects change on scroll
      const handleScroll = () => {
        const scrollY = window.scrollY
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const windowHeight = window.innerHeight
        
        // Calculate scroll progress within section
        const scrollProgress = Math.max(0, Math.min(1, (scrollY - sectionTop + windowHeight) / sectionHeight))
        
        // Only subtle scale change, NO Y movement to prevent gaps
        gsap.to(videoContainer, {
          scale: 1 + scrollProgress * 0.03, // Very subtle scale only
          duration: 0.3,
          ease: 'power1.out',
        })
        
        // Dynamic overlay opacity - lighter as you scroll
        const overlayOpacity = 0.4 - scrollProgress * 0.15
        gsap.to(overlay, {
          opacity: Math.max(0.25, overlayOpacity),
          duration: 0.3,
          ease: 'power1.out',
        })
        
        // Video brightness increases on scroll
        const brightness = 0.6 + scrollProgress * 0.15
        const blur = 3 - scrollProgress * 1.5
        gsap.to(video, {
          filter: `blur(${Math.max(1.5, blur)}px) brightness(${Math.min(0.75, brightness)}) saturate(1.2)`,
          duration: 0.3,
          ease: 'power1.out',
        })
      }

      // Throttled scroll handler
      let ticking = false
      const scrollHandler = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll()
            ticking = false
          })
          ticking = true
        }
      }

      window.addEventListener('scroll', scrollHandler)
      handleScroll() // Initial call

      // Smooth pulsing effect for video visibility
      gsap.to(video, {
        opacity: 1,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })

      // Subtle zoom pulse effect (very minimal to avoid gaps)
      gsap.to(videoContainer, {
        scale: 1.05, // Reduced from 1.08
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })

      return () => {
        window.removeEventListener('scroll', scrollHandler)
        gsap.killTweensOf([video, videoContainer, overlay])
        if (video) {
          video.removeEventListener('loadeddata', handleLoadedData)
          video.removeEventListener('ended', handleEnded)
        }
      }
    }
  }, [videoError])

  const handleVideoError = () => {
    setVideoError(true)
  }

  // Icon components - Professional neon icons
  const icons = [
    {
      id: 'brain-stats',
      color: 'pink',
      name: 'Brain + Stats',
      component: (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-1.5">
          <FaBrain size={54} />
          <BiBarChartAlt2 size={44} opacity={0.9} />
        </div>
      ),
    },
    {
      id: 'radar-target',
      color: 'blue',
      name: 'Radar/Target Lock',
      component: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Outer radar circles with glow */}
          <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.6" />
          <circle cx="50" cy="50" r="26" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.8" />
          {/* Crosshair with glow */}
          <line x1="50" y1="8" x2="50" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          <line x1="50" y1="70" x2="50" y2="92" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          <line x1="8" y1="50" x2="30" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          <line x1="70" y1="50" x2="92" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          {/* Inner crosshair */}
          <line x1="50" y1="35" x2="50" y2="45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="35" y1="50" x2="45" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="55" x2="50" y2="65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="55" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Center lock dot */}
          <circle cx="50" cy="50" r="4" fill="currentColor" />
          <circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.3)" />
          {/* Scanning arc */}
          <path
            d="M50 50 L78 28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
            fill="none"
          />
          {/* Scanning pulse */}
          <circle cx="65" cy="38" r="3" fill="currentColor" opacity="0.6" />
        </svg>
      ),
    },
    {
      id: 'player-graph',
      color: 'pink',
      name: 'Player Pushing Graph',
      component: (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-1.5">
          <FaRunning size={52} />
          <BiTrendingUp size={50} />
        </div>
      ),
    },
    {
      id: 'data-network',
      color: 'blue',
      name: 'Data Network',
      component: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Network nodes with glow */}
          <circle cx="30" cy="28" r="6" fill="currentColor" opacity="0.9" />
          <circle cx="70" cy="28" r="6" fill="currentColor" opacity="0.9" />
          <circle cx="50" cy="50" r="7" fill="currentColor" opacity="1" />
          <circle cx="24" cy="72" r="6" fill="currentColor" opacity="0.9" />
          <circle cx="76" cy="72" r="6" fill="currentColor" opacity="0.9" />
          {/* Node glows */}
          <circle cx="50" cy="50" r="9" fill="currentColor" opacity="0.3" />
          {/* Network connections with data flow */}
          <line x1="30" y1="28" x2="50" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.7" />
          <line x1="70" y1="28" x2="50" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.7" />
          <line x1="50" y1="50" x2="24" y2="72" stroke="currentColor" strokeWidth="2" opacity="0.7" />
          <line x1="50" y1="50" x2="76" y2="72" stroke="currentColor" strokeWidth="2" opacity="0.7" />
          <line x1="30" y1="28" x2="70" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <line x1="24" y1="72" x2="76" y2="72" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          {/* Data flow particles */}
          <circle cx="38" cy="37" r="2" fill="currentColor" opacity="0.9" />
          <circle cx="62" cy="37" r="2" fill="currentColor" opacity="0.9" />
          <circle cx="42" cy="58" r="2" fill="currentColor" opacity="0.9" />
          <circle cx="58" cy="58" r="2" fill="currentColor" opacity="0.9" />
          <circle cx="36" cy="50" r="1.5" fill="currentColor" opacity="0.8" />
          <circle cx="64" cy="50" r="1.5" fill="currentColor" opacity="0.8" />
          {/* Signal waves */}
          <path
            d="M30 22 Q28 20 26 22 Q28 24 30 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <path
            d="M70 22 Q72 20 74 22 Q72 24 70 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.6"
          />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Video Background with GSAP effects - stretched upward to eliminate gap */}
      <div 
        ref={videoContainerRef} 
        className="absolute z-0 overflow-hidden" 
        style={{ 
          position: 'absolute', 
          top: '-35vh',  // Extend even more above section
          left: 0, 
          right: 0, 
          bottom: 0,
          height: 'calc(100% + 35vh)',  // Extra height to cover gap
        }}
      >
        {videoError ? (
          <div className="h-full w-full bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={handleVideoError}
            className="h-full w-full object-cover"
            style={{
              filter: 'blur(3px) brightness(0.6) saturate(1.1)',
              transform: 'scale(1.25)',  // Slightly more scale for maximum coverage
              transformOrigin: 'center top',  // Scale from top
              transition: 'filter 0.3s ease-out',
              position: 'absolute',
              top: '-18%',  // Push video even higher
              left: 0,
              width: '100%',
              height: '135%',  // More height for stretching
              objectFit: 'cover',
              objectPosition: 'center top',  // Anchor to top
            }}
          >
            <source src="/assets/videos/10 seconds 2nd section.mp4" type="video/mp4" />
          </video>
        )}
        {/* Gradient overlay for better video visibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.5) 100%)',
          }}
        />
      </div>

      {/* Dynamic Semi-transparent Overlay - controlled by GSAP */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 bg-black/40"
        style={{
          transition: 'opacity 0.3s ease-out',
        }}
      />
      
      {/* Animated scanline effect using GSAP */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(244, 114, 182, 0.3) 2px, rgba(244, 114, 182, 0.3) 4px)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Headline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-cyan-400">
                How?
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-3 max-w-4xl">
                We bring Premier League-level performance analysis to every player, coach, and club
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-cyan-400 mt-4">
                Fast, affordable and accessible from <span className="whitespace-nowrap">grassroots to pro.</span>
              </p>
            </motion.div>

            {/* Right Side - 4 Neon Icons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="grid grid-cols-2 gap-6 sm:gap-8"
            >
              {icons.map((icon, index) => (
                <motion.div
                  key={icon.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  className="relative group cursor-pointer"
                >
                  {/* Icon Container */}
                  <div
                    className={`
                      relative p-6 sm:p-8 rounded-xl border-2 transition-all duration-300
                      ${
                        icon.color === 'pink'
                          ? 'border-pink-400/50 bg-pink-500/10 hover:border-pink-400 hover:bg-pink-500/20'
                          : 'border-cyan-400/50 bg-cyan-500/10 hover:border-cyan-400 hover:bg-cyan-500/20'
                      }
                      backdrop-blur-sm
                    `}
                    style={{
                      boxShadow: `0 0 30px ${
                        icon.color === 'pink' ? 'rgba(244, 114, 182, 0.3)' : 'rgba(0, 240, 255, 0.3)'
                      }`,
                    }}
                  >
                    {/* Icon */}
                    <div
                      className={`
                        w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4
                        ${icon.color === 'pink' ? 'text-pink-400' : 'text-cyan-400'}
                        drop-shadow-[0_0_15px_currentColor]
                      `}
                    >
                      {icon.component}
                    </div>

                    {/* Glow effect on hover */}
                    <div
                      className={`
                        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        ${icon.color === 'pink' ? 'bg-pink-400/10' : 'bg-cyan-400/10'}
                      `}
                    />
                  </div>

                  {/* Pulsing glow ring */}
                  <motion.div
                    className={`
                      absolute inset-0 rounded-xl border-2 pointer-events-none
                      ${icon.color === 'pink' ? 'border-pink-400' : 'border-cyan-400'}
                    `}
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowStatement

