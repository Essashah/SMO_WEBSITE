import { useRef, useState } from 'react'

const Hero = () => {
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoError = () => {
    setVideoError(true)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-screen Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {videoError ? (
          <div className="h-full w-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onError={handleVideoError}
            className="h-full w-full object-cover"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          >
            <source src="/assets/videos/WhatsApp Video 2025-10-30 at 12.03.55.mp4" type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  )
}

export default Hero
