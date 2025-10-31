import { useRef, useEffect, useState } from 'react'
import { ComposableMap, Geographies, Geography, Graticule, Sphere, ZoomableGroup, Marker } from 'react-simple-maps'

const SCROLL_STEPS = [
  {
    location: 'London',
    center: [-0.1276, 51.5072] as [number, number],
    zoom: 2.8,
    popupText: '35+ clubs',
    coordinates: [-0.1276, 51.5072] as [number, number],
  },
  {
    location: 'Brazil',
    center: [-51, -15] as [number, number],
    zoom: 2.4,
    popupText: '20+ players scouted',
    coordinates: [-51, -15] as [number, number],
  },
]

const SectionFive = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [zoom, setZoom] = useState(0.95)
  const [center, setCenter] = useState<[number, number]>([10, 10])
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const popupRefs = useRef<(HTMLDivElement | null)[]>([])

  // Scroll-triggered steps with zoom and popup animations
  useEffect(() => {
    if (!sectionRef.current) return

    const stepElements = Array.from(sectionRef.current.querySelectorAll('[data-map-step]')) as HTMLElement[]
    if (stepElements.length === 0) return

    const observers: IntersectionObserver[] = []

    stepElements.forEach((el, idx) => {
      if (idx >= SCROLL_STEPS.length) return

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const targetStep = SCROLL_STEPS[idx]
              const startZoom = zoom
              const startCenter = center
              let startTs: number | null = null
              let raf = 0

              const animate = (ts: number) => {
                if (startTs === null) startTs = ts
                const elapsed = ts - startTs
                const duration = 1200
                const tRaw = Math.min(1, elapsed / duration)
                const t = tRaw < 0.5 ? 4 * tRaw * tRaw * tRaw : 1 - Math.pow(-2 * tRaw + 2, 3) / 2

                setZoom(startZoom + (targetStep.zoom - startZoom) * t)
                setCenter([
                  startCenter[0] + (targetStep.center[0] - startCenter[0]) * t,
                  startCenter[1] + (targetStep.center[1] - startCenter[1]) * t,
                ])

                // Show popup when animation is 70% complete
                if (t > 0.7 && activeStep !== idx) {
                  setActiveStep(idx)
                  const popup = popupRefs.current[idx]
                  if (popup) {
                    popup.style.opacity = '0'
                    popup.style.transform = 'scale(0.8) translateY(10px)'
                    setTimeout(() => {
                      popup.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out'
                      popup.style.opacity = '1'
                      popup.style.transform = 'scale(1) translateY(0)'
                    }, 50)
                  }
                }

                if (t < 1) {
                  raf = requestAnimationFrame(animate)
                }
              }

              raf = requestAnimationFrame(animate)
            } else {
              // Hide popup when leaving step
              if (activeStep === idx) {
                setActiveStep(null)
                const popup = popupRefs.current[idx]
                if (popup) {
                  popup.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out'
                  popup.style.opacity = '0'
                  popup.style.transform = 'scale(0.8) translateY(10px)'
                }
              }
            }
          })
        },
        { threshold: 0.6 }
      )

      io.observe(el)
      observers.push(io)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [center, zoom, activeStep])

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

                  {/* Glowing target markers for scroll steps */}
                  {SCROLL_STEPS.map((step, idx) => (
                    <Marker key={step.location} coordinates={step.coordinates}>
                      <g transform="translate(-6,-6)">
                        <circle r={6} className="text-purple-400 opacity-20" fill="currentColor" />
                        <circle
                          r={6}
                          className={`animate-ping text-purple-400 ${activeStep === idx ? 'opacity-100' : 'opacity-0'}`}
                          fill="currentColor"
                        />
                        <circle r={3} className="text-purple-300" fill="currentColor" />
                      </g>
                    </Marker>
                  ))}
                </ZoomableGroup>
              </ComposableMap>
            </div>

            {/* Popup overlays */}
            {SCROLL_STEPS.map((step, idx) => (
              <div
                key={`popup-${idx}`}
                ref={(el) => {
                  popupRefs.current[idx] = el
                }}
                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
                style={{
                  opacity: activeStep === idx ? 1 : 0,
                  transform: activeStep === idx ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.8)',
                  transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
                }}
              >
                <div className="mx-auto w-full max-w-md text-center">
                  <div className="inline-block bg-black/80 backdrop-blur-md border border-purple-400/60 rounded-xl px-6 py-4 sm:px-8 sm:py-5 shadow-[0_0_35px_rgba(147,51,234,0.4)]">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-300 leading-relaxed">
                      {step.popupText}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll trigger elements */}
        {SCROLL_STEPS.map((_, idx) => (
          <div key={`trigger-${idx}`} data-map-step className="h-screen" />
        ))}
      </div>
    </section>
  )
}

export default SectionFive

