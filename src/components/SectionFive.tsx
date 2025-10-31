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
    <section className="relative w-full bg-gradient-to-b from-[#0a0f1f] via-[#0a0a1a] to-black py-24 sm:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.15) 2px, rgba(255,255,255,0.15) 4px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Global Impact</h3>
          <p className="mt-2 text-sm sm:text-base text-white/75">How far we've reached together</p>
        </div>

        {/* Steps with animated target dots (simplified) */}
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          {[
            'Born in 2016 in London',
            '1,400+ players analysed',
            '180+ clubs across tiers',
            '35+ countries reached',
            '20+ players signed to pro clubs',
          ].map((text) => (
            <div key={text} className="flex items-start gap-3">
              <div className="mt-1 h-3 w-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] animate-pulse" />
              <p className="text-white/90 text-base sm:text-lg">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionFive
