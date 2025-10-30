import { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'

const IMAGE_FILES = [
  '/assets/images/scene 1.png',
  '/assets/images/scene 2.png',
  '/assets/images/scene 3.png',
  '/assets/images/scene 4.png',
  '/assets/images/scene 5.png',
]

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

const SectionThree = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])
  const sceneThreeCaptionRef = useRef<HTMLDivElement | null>(null)

  const setImageRef = (el: HTMLImageElement | null, index: number) => {
    imageRefs.current[index] = el
  }

  // Compute per-clip progress helper
  const getClipProgress = (overallProgress: number, clipIndex: number, clips: number) => {
    const segment = 1 / clips
    const start = segment * clipIndex
    const end = segment * (clipIndex + 1)
    const local = (overallProgress - start) / (end - start)
    return clamp(local, 0, 1)
  }

  // Scroll-driven sequencing
  useEffect(() => {
    const section = sectionRef.current
    const container = containerRef.current
    if (!section || !container) return

    // Scroll progress within section
    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const viewportH = window.innerHeight || 1
      const totalScrollRange = rect.height + viewportH // enter to exit while pinned-like
      const scrolled = clamp(viewportH - rect.top, 0, totalScrollRange)
      const progress = clamp(scrolled / totalScrollRange, 0, 1)

      // Crossfade and subtle zoom per image
      const clips = IMAGE_FILES.length
      imageRefs.current.forEach((img, i) => {
        if (!img) return
        const p = getClipProgress(progress, i, clips)
        // Opacity: ease in (0->1 in first 30%), hold, ease out (last 30%)
        const fadeIn = clamp(p / 0.3, 0, 1)
        const fadeOut = clamp((1 - p) / 0.3, 0, 1)
        const opacity = Math.min(fadeIn, fadeOut)
        const scale = 1 + 0.02 * Math.sin(Math.PI * clamp(p, 0, 1)) // much subtler zoom
        const brightness = 0.9 + 0.08 * Math.sin(Math.PI * clamp(p, 0, 1))

        gsap.to(img, {
          opacity,
          scale,
          filter: `brightness(${brightness}) saturate(1.1)`,
          duration: 0.25,
          ease: 'power1.out',
          overwrite: true,
        })
      })

      // Scene 3 caption control (index 2)
      const p3 = getClipProgress(progress, 2, clips)
      const showCaption = p3 > 0.1 && p3 < 0.95
      if (sceneThreeCaptionRef.current) {
        gsap.to(sceneThreeCaptionRef.current, {
          opacity: showCaption ? 1 : 0,
          y: showCaption ? 0 : 10,
          duration: 0.25,
          ease: 'power1.out',
          overwrite: true,
        })
      }
    }

    // Pin-like behavior: make container fixed while in view
    const onScrollPin = () => {
      const rect = section.getBoundingClientRect()
      const inViewTop = rect.top <= 0
      const inViewBottom = rect.bottom >= window.innerHeight
      const shouldFix = inViewTop && inViewBottom
      gsap.set(container, { position: shouldFix ? 'fixed' : 'absolute', top: shouldFix ? 0 : '0px' })
    }

    const onTick = () => {
      onScrollPin()
      onScroll()
    }

    let ticking = false
    const handle = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          onTick()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handle)
    window.addEventListener('resize', handle)
    handle()

    return () => {
      window.removeEventListener('scroll', handle)
      window.removeEventListener('resize', handle)
      gsap.killTweensOf('*')
    }
  }, [])

  const images = useMemo(() => IMAGE_FILES.map((src, i) => ({ src, i })), [])

  return (
    <section ref={sectionRef} className="relative w-full bg-gradient-to-b from-[#12081f] to-black" style={{ minHeight: '600vh' }}>
      {/* Fixed stack container */}
      <div ref={containerRef} className="absolute inset-0 z-0" style={{ position: 'absolute' }}>
        {/* Soft vignette and scanlines */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.7) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.25) 2px, rgba(0,240,255,0.25) 4px)' }} />

        {/* Image stack (replacing videos) */}
        {images.map(({ src, i }) => (
          <img
            key={src}
            ref={(el) => setImageRef(el, i)}
            src={src}
            alt={`Scene ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === 0 ? 1 : 0,
              transform: 'scale(1) translateZ(0)',
              willChange: 'opacity, transform, filter',
              filter: 'brightness(0.9) saturate(1.05)',
            }}
            loading="eager"
          />
        ))}

        {/* Scene 3 caption overlay */}
        <div
          ref={sceneThreeCaptionRef}
          className="absolute left-1/2 -translate-x-1/2 bottom-20 sm:bottom-24 md:bottom-28 z-10 px-4"
          style={{ opacity: 0 }}
          aria-hidden="true"
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              Right after your match, get Premier League-level analysis in under 1 hour.
            </h3>
            <p className="mt-3 text-white/85 text-sm sm:text-base md:text-lg">All you need? A match URL.</p>
          </div>
        </div>
      </div>

      {/* Spacer to allow scroll; also a content area if needed later */}
      <div className="relative z-10 w-full" style={{ height: '600vh' }} />
    </section>
  )
}

export default SectionThree
