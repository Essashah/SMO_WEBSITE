import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const achievements = [
  {
    id: 1,
    image: '/assets/images/achivements/Gemini_Generated_Image_r5oi2tr5oi2tr5oi.png',
    title: 'Born in London 2016',
  },
  {
    id: 2,
    image: '/assets/images/achivements/Gemini_Generated_Image_lvfrddlvfrddlvfr.png',
    title: '1,491+ players analysed ',
  },
  {
    id: 3,
    image: '/assets/images/achivements/Gemini_Generated_Image_2p605s2p605s2p60.png',
    title: '109+ clubs analysed',
  },
  {
    id: 4,
    image: '/assets/images/achivements/Gemini_Generated_Image_t1js08t1js08t1js.png',
    title: '20 players in Cyprus',
  },
]

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full bg-purple-950  overflow-hidden p-1">
      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
        {/* Compact Strip Container */}
        <div className="relative h-40 sm:h-40 md:h-48 rounded-3xl overflow-hidden bg-gradient-to-r from-purple-950 to-black backdrop-blur-sm border border-white/10">
          <div className="grid grid-cols-[1fr_auto] h-full">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center px-6 sm:px-8 md:px-12">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                 <p className="text-xs sm:text-sm md:text-base text-white/70 mb-1">
                Our Achievements
                </p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                   {achievements[currentIndex].title}
                </h3>
               
                {/* Progress Dots */}
                {/* <div className="flex gap-1.5 mt-3">
                  {achievements.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-cyan-400 w-6'
                          : 'bg-white/30 w-1.5'
                      }`}
                      animate={{
                        width: index === currentIndex ? 24 : 6,
                        backgroundColor: index === currentIndex ? 'rgba(34, 211, 238, 1)' : 'rgba(255, 255, 255, 0.3)',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div> */}
              </motion.div>
            </div>

            {/* Right Side - Image */}
            <div className="relative w-52 sm:w-50 md:w-80 h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20, scale: 1.1 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <img
                    src={achievements[currentIndex].image}
                    alt={achievements[currentIndex].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements

