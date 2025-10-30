import { useRef, useEffect } from 'react'
import { ComposableMap, Geographies, Geography, Graticule, Sphere, ZoomableGroup } from 'react-simple-maps'

const SectionFive = () => {
  const globeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {}, [])

  return (
    <section className="relative w-full bg-black py-24 sm:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(60% 50% at 50% 0%, rgba(147,51,234,0.18), rgba(147,51,234,0))' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400">Global footprint</h3>
          <p className="mt-2 text-sm sm:text-base text-white/70">Clubs and athletes we support around the world</p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(147,51,234,0.25)] p-2">
            <ComposableMap projectionConfig={{ scale: 160 }} style={{ width: '100%', height: 'auto' }}>
              <Sphere fill="rgba(147,51,234,0.08)" stroke="#a855f7" strokeWidth={0.5} />
              <Graticule stroke="#7c3aed" strokeOpacity={0.25} />
              <ZoomableGroup zoom={1} center={[10, 10]}>
                <Geographies geography={'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: 'rgba(168,85,247,0.25)',
                            stroke: 'rgba(255,255,255,0.12)',
                            outline: 'none',
                          },
                          hover: {
                            fill: 'rgba(168,85,247,0.45)',
                            stroke: 'rgba(255,255,255,0.2)',
                            outline: 'none',
                          },
                          pressed: {
                            fill: 'rgba(126,34,206,0.6)',
                            outline: 'none',
                          },
                        }}
                      />
                    ))
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFive
