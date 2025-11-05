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
      '/assets/images/Hashtag_Fc.png',
      '/assets/images/Lusitano-F.C-(Portugal).png',
      '/assets/images/Nortwood Fc.png',
      '/assets/images/PFC_Lokomotiv_Plovdiv_u13___u17_-Bulgaria.png',
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
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400">Trusted by clubs worldwide</h3>
          <p className="mt-2 text-sm sm:text-base text-white/70">From grassroots to elite organizations</p>
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
                {/* Glow background - pink by default, blue on hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                  style={{
                    background:
                      'radial-gradient(120px 120px at center, rgba(236,72,153,0.25), rgba(236,72,153,0.0))',
                    filter: 'blur(8px)',
                  }}
                />
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'radial-gradient(120px 120px at center, rgba(34,211,238,0.25), rgba(34,211,238,0.0))',
                    filter: 'blur(8px)',
                  }}
                />

                {/* Card */}
                <div
                  className="relative aspect-square rounded-xl border-2 bg-gradient-to-br from-pink-500/20 to-fuchsia-500/20 group-hover:from-cyan-400/20 group-hover:to-cyan-500/20 backdrop-blur-sm flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:translate-y-[-2px] border-pink-400 group-hover:border-cyan-400 shadow-[0_0_20px_rgba(236,72,153,0.5),0_0_40px_rgba(236,72,153,0.3),inset_0_0_15px_rgba(236,72,153,0.1)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_40px_rgba(34,211,238,0.4),inset_0_0_15px_rgba(34,211,238,0.15)]"
                >
                  {/* Subtle grid pattern - pink by default */}
                  <div
                    className="absolute inset-0 opacity-[0.08] group-hover:opacity-0 pointer-events-none transition-opacity duration-300"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(236,72,153,0.6) 2px, rgba(236,72,153,0.6) 4px)',
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] pointer-events-none transition-opacity duration-300"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,0.6) 2px, rgba(34,211,238,0.6) 4px)',
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
                  <span className="text-xs sm:text-sm text-pink-300 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
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
