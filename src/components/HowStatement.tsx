import { motion } from 'framer-motion'
import { FaBrain, FaRunning } from 'react-icons/fa'
import { BiBarChartAlt2, BiTrendingUp } from 'react-icons/bi'

const HowStatement = () => {
  const icons = [
    {
      id: 'brain-stats',
      color: 'pink',
      component: (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-1.5">
          <FaBrain size={54} />
          <BiBarChartAlt2 size={44} opacity={0.9} />
        </div>
      ),
    },
    {
      id: 'radar',
      color: 'blue',
      component: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <circle cx="50" cy="50" r="26" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" />
          <line x1="50" y1="8" x2="50" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          <line x1="8" y1="50" x2="30" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 'player-graph',
      color: 'pink',
      component: (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-1.5">
          <FaRunning size={52} />
          <BiTrendingUp size={50} />
        </div>
      ),
    },
    {
      id: 'network',
      color: 'blue',
      component: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="7" fill="currentColor" />
          <line x1="30" y1="28" x2="50" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.7" />
          <line x1="70" y1="28" x2="50" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.7" />
          <circle cx="30" cy="28" r="5" fill="currentColor" />
          <circle cx="70" cy="28" r="5" fill="currentColor" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-black isolate">
      {/* Background image with blur - stretched to top */}
      <div className="absolute inset-0 z-0 -top-32">
        <img
          src="/assets/images/hero.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'blur(4px) brightness(0.65) saturate(1.1)' }}
        />
        <div className="absolute inset-0 bg-black/65" />
        {/* Solid top guard to avoid previous section bleed */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.0) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              We're making elite performance analysis accessible to all players, clubs and academies
            </h2>
          </motion.div>

          {/* Right - 4 neon icons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="grid grid-cols-2 gap-6 sm:gap-8"
          >
            {icons.map((icon, index) => (
              <motion.div
                key={icon.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 + 0.15 }}
                whileHover={{ scale: 1.06 }}
                className="relative group cursor-pointer"
              >
                <div
                  className={`relative p-6 sm:p-8 rounded-xl border-2 backdrop-blur-sm transition-all duration-300 ${
                    icon.color === 'pink'
                      ? 'border-pink-400/50 bg-pink-500/10 hover:border-pink-400 hover:bg-pink-500/20 text-pink-400'
                      : 'border-cyan-400/50 bg-cyan-500/10 hover:border-cyan-400 hover:bg-cyan-500/20 text-cyan-400'
                  }`}
                  style={{ boxShadow: `0 0 30px ${icon.color === 'pink' ? 'rgba(244, 114, 182, 0.25)' : 'rgba(0, 240, 255, 0.25)'}` }}
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 drop-shadow-[0_0_15px_currentColor]">
                    {icon.component}
                  </div>
                </div>
                <motion.div
                  className={`absolute inset-0 rounded-xl border-2 pointer-events-none ${icon.color === 'pink' ? 'border-pink-400' : 'border-cyan-400'}`}
                  animate={{ opacity: [0.25, 0.6, 0.25] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowStatement
