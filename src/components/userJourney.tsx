import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Badge: React.FC<{ label: string }> = ({ label }) => (
  <span className="ml-2 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/80 backdrop-blur">
    {label}
  </span>
)

const Card: React.FC<{
  title: string
  accent: 'blue' | 'pink'
  bullets: string[]
  rightBadge?: string
  imageAlt: string
  imageSrc: string
  index: number
}> = ({ title, accent, bullets, rightBadge, imageAlt, imageSrc, index }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const bulletsRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const image = imageRef.current
    const title = titleRef.current
    const bullets = bulletsRef.current

    if (!card || !image || !title || !bullets) return

    // Entrance animation
   

   

    // Image animation
    gsap.fromTo(
      image,
      { opacity: 0, scale: 1.1 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: index * 0.15 + 0.4,
        ease: 'power2.out',
      }
    )

    // Bullets animation
    gsap.fromTo(
      bullets.children,
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        delay: index * 0.15 + 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      }
    )
  }, [index])

  // Default colors based on accent
  const defaultBorder = accent === 'blue' ? 'border-cyan-400/50' : 'border-fuchsia-400/50'
  const defaultRing = accent === 'blue' ? 'ring-cyan-400/40' : 'ring-fuchsia-400/40'
  
  // Hover colors - switch to opposite (pink to blue, blue to pink)
  const hoverBorder = accent === 'blue' ? 'hover:border-fuchsia-400/80' : 'hover:border-cyan-400/80'
  const hoverRing = accent === 'blue' ? 'hover:ring-fuchsia-400/70' : 'hover:ring-cyan-400/70'
  const hoverShadow = accent === 'blue'
    ? 'hover:shadow-[0_8px_40px_rgba(236,72,153,0.5),0_0_25px_rgba(236,72,153,0.4),inset_0_0_30px_rgba(236,72,153,0.1)]'
    : 'hover:shadow-[0_8px_40px_rgba(59,130,246,0.5),0_0_25px_rgba(59,130,246,0.4),inset_0_0_30px_rgba(59,130,246,0.1)]'

  // Gradient backgrounds
  const defaultGradient = accent === 'blue'
    ? 'bg-gradient-to-br from-blue-500/20 via-white/5 to-cyan-500/20'
    : 'bg-gradient-to-br from-pink-500/20 via-white/5 to-fuchsia-500/20'
  
  const hoverGradient = accent === 'blue'
    ? 'group-hover:from-pink-500/25 group-hover:via-white/5 group-hover:to-fuchsia-500/25'
    : 'group-hover:from-blue-500/25 group-hover:via-white/5 group-hover:to-cyan-500/25'

  return (
    <div 
      ref={cardRef}
      className={`group relative rounded-2xl border-2 ${defaultBorder} ${hoverBorder} ${defaultGradient} ${hoverGradient} p-5 ${hoverShadow} backdrop-blur-xl transition-all duration-500 ease-in-out hover:scale-[1.02] hover:-translate-y-2`}
      style={{ minHeight: 320, transformStyle: 'preserve-3d' }}>
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: accent === 'blue' 
            ? 'radial-gradient(ellipse at center, rgba(236,72,153,0.2), transparent 70%)'
            : 'radial-gradient(ellipse at center, rgba(59,130,246,0.2), transparent 70%)',
        }}
      />
      
      {/* Animated border glow */}
      <div 
        className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm"
        style={{
          background: accent === 'blue'
            ? 'linear-gradient(45deg, rgba(236,72,153,0.6), rgba(59,130,246,0.6), rgba(236,72,153,0.6))'
            : 'linear-gradient(45deg, rgba(59,130,246,0.6), rgba(236,72,153,0.6), rgba(59,130,246,0.6))',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 3s ease infinite',
        }}
      />
      
      <div className="flex items-start justify-between relative z-10">
        <h4 ref={titleRef} className="text-lg font-semibold text-white  ">
          {title}
        </h4>
        {rightBadge ? <Badge label={rightBadge} /> : null}
      </div>
      
      {/* Image */}
      <div className={`mt-4 relative w-full overflow-hidden rounded-xl border border-white/10 bg-black/30 ring-2 ${defaultRing} ${hoverRing} transition-all duration-500 group-hover:ring-4`}>
        {/* Animated diagonal sheen */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_35%)] group-hover:bg-[linear-gradient(120deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_35%)] transition-all duration-500" />
        <img 
          ref={imageRef}
          src={imageSrc} 
          alt={imageAlt} 
          className="h-48 w-full object-cover sm:h-56 md:h-64 lg:h-72 transition-transform duration-700 ease-out group-hover:scale-110" 
        />
      </div>
      
      <ul ref={bulletsRef} className="mt-5 space-y-2 relative z-10">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-white/85 group-hover:text-white/95 transition-colors duration-300">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/80 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300" />
            <span className="group-hover:translate-x-1 transition-transform duration-300">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const UserJourney: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const grid = gridRef.current

    if (!section || !title || !grid) return

    // Title animation
    gsap.fromTo(
      title,
      { opacity: 0, y: -30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
      }
    )

    // Section fade in
    gsap.fromTo(
      section,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-20 sm:py-24 overflow-hidden">
      {/* Animated background gradients */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: 'radial-gradient(60% 50% at 50% 0%, rgba(59,130,246,0.12), rgba(59,130,246,0)), radial-gradient(70% 60% at 50% 100%, rgba(147,51,234,0.14), rgba(147,51,234,0))',
          animation: 'pulse-gradient 8s ease-in-out infinite',
        }} 
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 blur-xl"
            style={{
              width: `${20 + i * 15}px`,
              height: `${20 + i * 15}px`,
              background: i % 2 === 0 ? 'rgba(59,130,246,0.4)' : 'rgba(236,72,153,0.4)',
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animation: `float ${15 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
        <div className="mb-8 text-center">
          <h3 
            ref={titleRef}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 bg-clip-text text-transparent"
          >
            Choose your path
          </h3>
        </div>

        {/* Three-column layout on md+, stacked on mobile */}
        <div ref={gridRef} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card
            title="Player"
            accent="blue"
            imageAlt="Player"
            imageSrc="/assets/images/player.webp"
            bullets={[
              'Share match URL',
              'Get analysed',
              'Get scouted faster',
            ]}
            index={0}
          />

          <Card
            title="Coach / Analyst"
            accent="pink"
            imageAlt="Coach / Analyst"
            imageSrc="/assets/images/coach_guy.png"
            bullets={[
              'Share URL',
              'Improve team performance',
              'Discover top performers',
            ]}
            index={1}
          />

          <Card
            title="Scout"
            accent="blue"
            imageAlt="Scout"
            imageSrc="/assets/images/scout.png"
            bullets={[
              'Find players & coaches',
              'Watch full games',
              'View performance per profile',
            ]}
            index={2}
          />
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        @keyframes pulse-gradient {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  )
}

export default UserJourney