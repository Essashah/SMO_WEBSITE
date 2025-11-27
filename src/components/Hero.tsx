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
          <>
            {/* Mobile video */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              onError={handleVideoError}
              className="block h-full w-full object-cover md:hidden"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            >
              <source src="/assets/videos/mobile_video_2.0.mp4" type="video/mp4" />
            </video>

            {/* Desktop/Laptop video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              onError={handleVideoError}
              className="hidden h-full w-full object-cover md:block"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            >
              <source src="/assets/videos/web_video_2.0.mp4" type="video/mp4" />
            </video>
          </>
        )}
      </div>
    </section>
  )
}

export default Hero
