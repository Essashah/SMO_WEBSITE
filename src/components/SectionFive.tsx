import { useState, useRef, useEffect } from 'react'
import { ComposableMap, Geographies, Geography, Graticule, Sphere, ZoomableGroup, Marker } from 'react-simple-maps'

const MAP_LOCATIONS = [
  {
    location: 'London',
    coordinates: [-0.1276, 51.5072] as [number, number],
    popupText: '35+ clubs',
    description: 'Premier League and Championship clubs',
  },
  {
    location: 'Brazil',
    coordinates: [-51, -15] as [number, number],
    popupText: '20+ players scouted',
    description: 'Top talent from South America',
  },
]

const SectionFive = () => {
  const [activePopup, setActivePopup] = useState<number | null>(null)
  const popupRefs = useRef<(HTMLDivElement | null)[]>([])

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.map-marker') && !target.closest('.map-popup')) {
        setActivePopup(null)
      }
    }

    if (activePopup !== null) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activePopup])

  return (
    <section className="relative w-full bg-black py-24 sm:py-28 lg:py-32">
      {/* Blue -> Purple gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 55% at 50% 0%, rgba(59,130,246,0.15), rgba(59,130,246,0)), radial-gradient(70% 60% at 50% 100%, rgba(147,51,234,0.18), rgba(147,51,234,0))',
        }}
      />

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400">Global footprint</h3>
          <p className="mt-2 text-sm sm:text-base text-white/70">Clubs and athletes we support around the world</p>
        </div>

        {/* Map container */}
        <div className="relative w-full rounded-2xl overflow-hidden border-2 border-purple-400/30 bg-black/20 backdrop-blur-sm"
          style={{ 
            height: '70vh',
            minHeight: '500px',
            maxHeight: '800px',
          }}
        >
          <div className="w-full h-full">
            <ComposableMap 
              projectionConfig={{ scale: 160 }} 
              style={{ width: '100%', height: '100%' }}
            >
              <Sphere 
                fill="rgba(147,51,234,0.06)" 
                stroke="#ffffff" 
                strokeOpacity={0.25} 
                strokeWidth={0.35} 
              />
              <Graticule stroke="#ffffff" strokeOpacity={0.18} strokeWidth={0.25} />
              <ZoomableGroup zoom={1.2} center={[0, 20]}>
                <Geographies 
                  geography={'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'}
                >
                  {({ geographies }: { geographies: any[] }) =>
                    geographies.map((geo: any) => (
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
                        tabIndex={-1}
                      />
                    ))
                  }
                </Geographies>

                {/* Blue neon dots - clickable markers */}
                {MAP_LOCATIONS.map((location, idx) => (
                  <Marker key={location.location} coordinates={location.coordinates}>
                    <g 
                      className="map-marker cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActivePopup(activePopup === idx ? null : idx)
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Outer glow */}
                      <circle 
                        r={12} 
                        fill="rgba(34,211,238,0.2)" 
                        className={activePopup === idx ? 'animate-pulse' : ''}
                      />
                      {/* Middle ring */}
                      <circle 
                        r={8} 
                        fill="rgba(34,211,238,0.4)" 
                        className={activePopup === idx ? 'animate-pulse' : ''}
                      />
                      {/* Inner dot */}
                      <circle 
                        r={5} 
                        fill="rgba(34,211,238,1)"
                        style={{ 
                          filter: 'drop-shadow(0 0 8px rgba(34,211,238,0.8)) drop-shadow(0 0 16px rgba(34,211,238,0.6))',
                        }}
                      />
                      {/* Pulsing effect when active */}
                      {activePopup === idx && (
                        <circle 
                          r={8}
                          fill="rgba(34,211,238,0.3)"
                          className="animate-ping"
                        />
                      )}
                    </g>
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>
          </div>

          {/* Popup overlays - positioned above markers */}
          {MAP_LOCATIONS.map((location, idx) => {
            // Calculate popup position based on marker coordinates
            // This is a simplified approach - in production you might want to use a more sophisticated method
            const isActive = activePopup === idx
            
            return (
              <div
                key={`popup-${idx}`}
                ref={(el) => {
                  popupRefs.current[idx] = el
                }}
                className={`map-popup absolute z-30 pointer-events-none transition-all duration-300 ease-out ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  left: idx === 0 ? '35%' : '60%',
                  top: idx === 0 ? '25%' : '45%',
                  transform: isActive 
                    ? 'translate(-50%, -100%) translateY(-15px)' 
                    : 'translate(-50%, -100%) translateY(-10px)',
                }}
              >
                <div className="bg-black/95 backdrop-blur-xl border-2 border-cyan-400/70 rounded-xl px-6 py-4 sm:px-8 sm:py-5 shadow-[0_0_40px_rgba(34,211,238,0.6),inset_0_0_20px_rgba(34,211,238,0.1)] min-w-[200px]">
                  <div className="text-center">
                    <h4 className="text-lg sm:text-xl font-bold text-cyan-300 mb-2">
                      {location.location}
                    </h4>
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-1">
                      {location.popupText}
                    </p>
                    <p className="text-sm text-white/70 mt-1">
                      {location.description}
                    </p>
                  </div>
                  {/* Arrow pointing down */}
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-cyan-400/70"
                    style={{ filter: 'drop-shadow(0 4px 8px rgba(34,211,238,0.3))' }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SectionFive

