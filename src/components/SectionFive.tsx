import { useRef, useEffect, useMemo, useState } from 'react'
import { ComposableMap, Geographies, Geography, Graticule, Sphere, ZoomableGroup, Marker } from 'react-simple-maps'

const SectionFive = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [zoom, setZoom] = useState(0.95)
  const [center, setCenter] = useState<[number, number]>([10, 10])

  // Example featured locations for glowing markers
  const markers = useMemo(
    () => [
      { name: 'Europe', coordinates: [8, 50] as [number, number] },
      { name: 'Middle East', coordinates: [46, 24] as [number, number] },
      { name: 'India', coordinates: [78, 22] as [number, number] },
      { name: 'Brazil', coordinates: [-51, -15] as [number, number] },
    ],
    []
  )

  // Scroll-triggered zoom and slight pan animation on first enter
  useEffect(() => {
    if (!sectionRef.current) return
    let animFrame = 0
    let startTs: number | null = null
    let hasAnimated = false

    const animateIn = (ts: number) => {
      if (startTs === null) startTs = ts
      const elapsed = ts - startTs
      const duration = 1400
      const tRaw = Math.min(1, elapsed / duration)
      // Ease in-out cubic
      const t = tRaw < 0.5 ? 4 * tRaw * tRaw * tRaw : 1 - Math.pow(-2 * tRaw + 2, 3) / 2

      const startZoom = 0.95
      const endZoom = 1.35
      const newZoom = startZoom + (endZoom - startZoom) * t
      setZoom(newZoom)

      const startCenter: [number, number] = [10, 10]
      const endCenter: [number, number] = [20, 5]
      const newCenter: [number, number] = [
        startCenter[0] + (endCenter[0] - startCenter[0]) * t,
        startCenter[1] + (endCenter[1] - startCenter[1]) * t,
      ]
      setCenter(newCenter)

      if (t < 1) {
        animFrame = requestAnimationFrame(animateIn)
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true
            startTs = null
            animFrame = requestAnimationFrame(animateIn)
          }
        })
      },
      { threshold: 0.35 }
    )
    io.observe(sectionRef.current)

    return () => {
      io.disconnect()
      cancelAnimationFrame(animFrame)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-24 sm:py-28 lg:py-32 overflow-hidden">
      {/* Blue -> Purple gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 55% at 50% 0%, rgba(59,130,246,0.15), rgba(59,130,246,0)), radial-gradient(70% 60% at 50% 100%, rgba(147,51,234,0.18), rgba(147,51,234,0))',
        }}
      />

      <div className="w-full px-0 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400">Global footprint</h3>
          <p className="mt-2 text-sm sm:text-base text-white/70">Clubs and athletes we support around the world</p>
        </div>

        <div className="relative w-full">
          <div className="w-full">
            <div className="w-full h-[55vh] sm:h-[60vh] md:h-[70vh] xl:h-[80vh]">
              <ComposableMap projectionConfig={{ scale: 160 }} style={{ width: '100%', height: '100%' }}>
              <Sphere fill="rgba(147,51,234,0.06)" stroke="#ffffff" strokeOpacity={0.25} strokeWidth={0.35} />
              {/* Neon thin white graticules */}
              <Graticule stroke="#ffffff" strokeOpacity={0.18} strokeWidth={0.25} />
              <ZoomableGroup zoom={zoom} center={center}>
                <Geographies geography={'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: 'rgba(88,28,135,0.35)',
                            stroke: 'rgba(255,255,255,0.35)',
                            outline: 'none',
                          },
                          hover: {
                            fill: 'rgba(147,51,234,0.5)',
                            stroke: 'rgba(255,255,255,0.55)',
                            outline: 'none',
                          },
                          pressed: {
                            fill: 'rgba(126,34,206,0.65)',
                            outline: 'none',
                          },
                        }}
                        // subtle glow on borders (SVG filter)
                        styleUndefined={{}}
                        tabIndex={-1}
                        onMouseEnter={() => {}}
                        onMouseLeave={() => {}}
                      />
                    ))
                  }
                </Geographies>

                {/* Glowing target markers */}
                {markers.map((m) => (
                  <Marker key={m.name} coordinates={m.coordinates}>
                    <g transform="translate(-6,-6)">
                      <circle r={6} className="text-purple-400 opacity-20" fill="currentColor" />
                      <circle r={6} className="animate-ping text-purple-400" fill="currentColor" />
                      <circle r={3} className="text-purple-300" fill="currentColor" />
                    </g>
                  </Marker>
                ))}
              </ZoomableGroup>
              </ComposableMap>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFive

