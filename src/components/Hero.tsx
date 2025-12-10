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
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
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
              <source src="/assets/videos/smo_mobile_3.mp4" type="video/mp4" />
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
              <source src="/assets/videos/smo_web_3.mp4" type="video/mp4" />
            </video>
          </>
        )}
      </div>
      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-8 md:px-12">
        <h1 className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Empowering sports people to beat the odds and WIN!
        </h1>
      </div>
    </section>
  )
}
  )
}

export default Hero
