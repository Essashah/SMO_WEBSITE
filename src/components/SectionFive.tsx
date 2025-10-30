import { useRef, useEffect } from 'react'

const SectionFive = () => {
  const globeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!globeRef.current) return

    const animate = () => {
      if (globeRef.current) {
        const current = parseFloat(globeRef.current.style.transform.replace(/rotateY\(([\d.]+)deg\)/, '$1')) || 0
        globeRef.current.style.transform = `rotateY(${current + 0.15}deg)`
      }
      requestAnimationFrame(animate)
    }
    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="relative w-full bg-black py-24 sm:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.35) 2px, rgba(0,240,255,0.35) 4px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400">Global footprint</h3>
          <p className="mt-2 text-sm sm:text-base text-white/70">Clubs and athletes we support around the world</p>
        </div>

        <div className="relative mx-auto flex items-center justify-center" style={{ height: 600, maxWidth: 900 }}>
          {/* Glow backdrop */}
          <div className="absolute inset-0 blur-2xl" style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(0,240,255,0.18), rgba(0,240,255,0))' }} />

          {/* Orbital rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-cyan-400/30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-cyan-400/20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-cyan-400/10 pointer-events-none" />

          {/* Rotating globe */}
          <div
            ref={globeRef}
            className="relative w-[400px] h-[400px] rounded-full"
            style={{ transformStyle: 'preserve-3d' as const }}
          >
            {/* Globe map texture */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                backgroundImage: 'url(/assets/images/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAyL3YzMjYta3VsLTAxLWNvbm5lY3Rpb24tam9iMTc1OS5wbmc.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.9) contrast(1.1) saturate(1.15)',
              }}
            />

            {/* Lighting overlay for 3D effect */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 100% 100% at 30% 30%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 50%)',
                filter: 'blur(20px)',
              }}
            />

            {/* Hemisphere shadows for depth */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 70% 50%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0) 100%)',
              }}
            />

            {/* Neon border glow */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: '3px solid rgba(0, 240, 255, 0.4)',
                boxShadow: '0 0 40px rgba(0, 240, 255, 0.3), inset 0 0 40px rgba(0, 240, 255, 0.1)',
              }}
            />
          </div>

          {/* Base pedestal glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[450px] h-4 rounded-full bg-gradient-to-t from-cyan-400/40 via-cyan-400/20 to-transparent blur-lg pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default SectionFive
