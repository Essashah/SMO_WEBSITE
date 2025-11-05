import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const POSTER_DATA = [
  {
    image: '/assets/images/scene 1.png',
    caption: 'At the end of the match...',
    cropTop: true,
  },
  {
    image: '/assets/images/scene 2.png',
    caption: 'Just share your match video URL on our app.',
    cropTop: false,
  },
  {
    image: '/assets/images/scene 3.png',
    caption: 'While driving home, get Premier League-level analysis in under one hour.',
    cropTop: false,
  },
  {
    image: '/assets/images/scene 5.png',
    caption: 'Analyse. Improve. Win, for players & teams',
    cropTop: true,
  },
]

const SectionThree = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])
  const captionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Fade in images and captions on scroll
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0')
          const img = imageRefs.current[index]
          const caption = captionRefs.current[index]

          if (img) {
            gsap.to(img, {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: 'power2.out',
            })
          }

          if (caption) {
            gsap.to(caption, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              delay: 0.3,
            })
          }
        }
      })
    }, observerOptions)

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  return (
    <>
      {POSTER_DATA.map((poster, index) => (
        <section
          key={`poster-${index}`}
          ref={(el) => (sectionRefs.current[index] = el)}
          data-index={index}
          className="relative w-full"
          style={{ minHeight: '100vh', height: '100vh' }}
        >
          {/* Background gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(30,30,50,0.6) 0%, rgba(0,0,0,0.8) 100%)',
            }}
          />

          {/* Soft vignette and scanlines */}
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.7) 100%)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04] z-[1]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.25) 2px, rgba(0,240,255,0.25) 4px)',
            }}
          />

          {/* Image wrapper with optional top crop */}
          <div
            className="absolute inset-0 z-[2]"
            style={{
              clipPath: poster.cropTop ? 'inset(10% 0 0 0)' : 'none',
              WebkitClipPath: poster.cropTop ? 'inset(10% 0 0 0)' : 'none',
              overflow: 'hidden',
            }}
          >
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              src={poster.image}
              alt={`Scene ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: index === 0 ? 1 : 0.7,
                transform: 'scale(1) translateZ(0)',
                transformOrigin: 'center center',
                willChange: 'opacity, transform, filter',
                filter: 'brightness(0.9) saturate(1.05)',
                objectPosition: poster.cropTop ? 'center 40%' : 'center',
                minHeight: '100%',
                minWidth: '100%',
              }}
            />
          </div>

          {/* Caption overlay */}
          <div
            ref={(el) => (captionRefs.current[index] = el)}
            className="absolute left-1/2 -translate-x-1/2 bottom-20 sm:bottom-24 md:bottom-28 z-[10] w-full px-4"
            style={{ opacity: index === 0 ? 1 : 0, transform: 'translateX(-50%) translateY(20px)' }}
          >
            <div className="mx-auto w-full max-w-4xl text-center">
              <div className="mx-auto inline-block bg-black/70 backdrop-blur-md border-2 border-cyan-400 rounded-xl px-5 py-4 sm:px-6 sm:py-5 shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_40px_rgba(34,211,238,0.4),0_0_60px_rgba(34,211,238,0.2),inset_0_0_20px_rgba(34,211,238,0.1)]">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-3 font-bold whitespace-normal break-words">
                  {poster.caption}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default SectionThree
