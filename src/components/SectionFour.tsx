import { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'

const SectionFour = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const images = useMemo(
    () => [
      '/assets/images/ACF Fiorentina u15- Italy.svg.png',
      '/assets/images/APEA FC-Cyprus.png',
      '/assets/images/Brescia Calcio - Femminile-Italy.png',
      '/assets/images/CSM_Pascani.png',
      '/assets/images/FC_Dynamo_Kyiv_logo.png',
      '/assets/images/Gulf United Fc - UAE.png',
      '/assets/images/Hashtag Fc.webp',
      '/assets/images/Lusitano-F.C-(Portugal).png',
      '/assets/images/Nortwood Fc.png',
      '/assets/images/PFC Lokomotiv Plovdiv u13 & u17 -Bulgaria.png',
      '/assets/images/Pfc Ludogorets Razgrad u17 -Bulgaria.png',
      '/assets/images/Real Madrid Femenino (ladies)-Spain.png',
      '/assets/images/SG Sacavenense.png',
      '/assets/images/TOP OSS FC- Netherlands.png',
    ],
    [],
  )

  useEffect(() => {
    const section = sectionRef.current
    const grid = gridRef.current
    if (!section || !grid) return

    // Basic fade-in for placeholders; replace when images are added
    gsap.fromTo(
      grid.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
      },
    )
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Trusted by academies, semi-pro and pro clubs</h3>
          <p className="mt-2 text-sm sm:text-base text-white/70">Neon categories: <span className="text-cyan-300">Men’s</span> · <span className="text-pink-300">Women’s</span> · <span className="text-blue-400">Youth</span></p>
        </div>
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8"
        >
          {images.map((src) => {
            const name = src
              .split('/')
              .pop()
              ?.replace(/\.(png|jpg|jpeg|webp)$/i, '')
              ?.replace(/[-_]/g, ' ')
            return (
              <div key={src} className="group relative">
                {/* Glow background */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'radial-gradient(120px 120px at center, rgba(0,240,255,0.18), rgba(0,240,255,0.0))',
                    filter: 'blur(8px)',
                  }}
                />

                {/* Card */}
                <div
                  className="relative aspect-square rounded-xl border bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:translate-y-[-2px]"
                  style={{
                    borderColor: 'rgba(0,240,255,0.35)',
                    boxShadow: '0 0 18px rgba(0,240,255,0.12)',
                  }}
                >
                  {/* Subtle grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.6) 2px, rgba(0,240,255,0.6) 4px)',
                    }}
                  />

                  {/* Logo image */}
                  <img
                    src={src}
                    alt={name || 'Club logo'}
                    loading="lazy"
                    className="max-h-[70%] max-w-[70%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
                  />
                </div>

                {/* Label */}
                <div className="mt-2 text-center">
                  <span className="text-xs sm:text-sm text-white/80 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                    {name}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SectionFour
