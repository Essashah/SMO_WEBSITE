import { useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'

const VIDEO_FILES = [
  '/assets/videos/scene 1.mp4',
  '/assets/videos/scene 2.mp4',
  '/assets/videos/scene 3.mp4',
  '/assets/videos/scene 4.mp4',
  '/assets/videos/scene 5.mp4',
]

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

const SectionThree = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const sceneThreeCaptionRef = useRef<HTMLDivElement | null>(null)
  const [videoErrors, setVideoErrors] = useState<boolean[]>(() => Array(VIDEO_FILES.length).fill(false))

  // Pre-allocate refs
  const setVideoRef = (el: HTMLVideoElement | null, index: number) => {
    videoRefs.current[index] = el
  }

  // Compute per-clip progress helper
  const getClipProgress = (overallProgress: number, clipIndex: number, clips: number) => {
    const segment = 1 / clips
    const start = segment * clipIndex
    const end = segment * (clipIndex + 1)
    const local = (overallProgress - start) / (end - start)
    return clamp(local, 0, 1)
  }

  // Attempt to autoplay when ready
  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (v) {
        v.play().catch(() => {})
      }
    })
  }, [])

  // Scroll-driven sequencing
  useEffect(() => {
    const section = sectionRef.current
    const container = containerRef.current
    if (!section || !container) return

    const handleLoadedData = (idx: number) => {
      const v = videoRefs.current[idx]
      if (v) {
        v.play().catch(() => {})
      }
    }

    const handleError = (idx: number) => {
      setVideoErrors((prev) => {
        const next = [...prev]
        next[idx] = true
        return next
      })
    }

    // Bind events for each video
    videoRefs.current.forEach((v, idx) => {
      if (!v) return
      v.addEventListener('loadeddata', () => handleLoadedData(idx))
      v.addEventListener('error', () => handleError(idx))
      v.loop = true
      v.muted = true
      v.playsInline = true
    })

    // Scroll progress within section
    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const viewportH = window.innerHeight || 1
      const totalScrollRange = rect.height + viewportH // enter to exit while pinned-like
      const scrolled = clamp(viewportH - rect.top, 0, totalScrollRange)
      const progress = clamp(scrolled / totalScrollRange, 0, 1)

      // Crossfade and cinematic zoom per clip (reduced zoom to avoid enlargement)
      const clips = VIDEO_FILES.length
      videoRefs.current.forEach((v, i) => {
        if (!v) return
        const p = getClipProgress(progress, i, clips)
        // Opacity: ease in (0->1 in first 30%), hold, ease out (last 30%)
        const fadeIn = clamp(p / 0.3, 0, 1)
        const fadeOut = clamp((1 - p) / 0.3, 0, 1)
        const opacity = Math.min(fadeIn, fadeOut)
        const scale = 1 + 0.02 * Math.sin(Math.PI * clamp(p, 0, 1)) // much subtler zoom
        const brightness = 0.9 + 0.08 * Math.sin(Math.PI * clamp(p, 0, 1))

        gsap.to(v, {
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
      videoRefs.current.forEach((v) => {
        if (!v) return
        // No need to remove anonymous listeners here due to closures, safe on unmount
      })
    }
  }, [])

  const videos = useMemo(() => VIDEO_FILES.map((src, i) => ({ src, i })), [])

  return (
    <section ref={sectionRef} className="relative w-full bg-black" style={{ minHeight: '600vh' }}>
      {/* Fixed stack container */}
      <div ref={containerRef} className="absolute inset-0 z-0" style={{ position: 'absolute' }}>
        {/* Soft vignette and scanlines */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.7) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.25) 2px, rgba(0,240,255,0.25) 4px)' }} />

        {/* Video stack */}
        {videos.map(({ src, i }) => (
          <video
            key={src}
            ref={(el) => setVideoRef(el, i)}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === 0 ? 1 : 0,
              transform: 'scale(1) translateZ(0)',
              willChange: 'opacity, transform, filter',
              filter: 'brightness(0.9) saturate(1.05)',
            }}
          />
        ))}

        {/* Scene 3 caption overlay */}
        <div
          ref={sceneThreeCaptionRef}
          className="absolute left-1/2 -translate-x-1/2 bottom-20 sm:bottom-24 md:bottom-28 z-10 px-4"
          style={{ opacity: 0 }}
          aria-hidden="true"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-black/70 backdrop-blur-md border border-cyan-400/60 rounded-xl px-5 py-4 sm:px-6 sm:py-5 shadow-[0_0_35px_rgba(0,240,255,0.25)]">
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                <span className="block font-semibold">Right after your match,</span>
                <span className="block">share your URL of the match video</span>
                <span className="block mt-3 font-semibold text-cyan-400">Our AI delivers lightning-fast,</span>
                <span className="block text-cyan-400">Premier League-level data in under 1 hour!</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to allow scroll; also a content area if needed later */}
      <div className="relative z-10 w-full" style={{ height: '600vh' }} />
    </section>
  )
}

export default SectionThree
