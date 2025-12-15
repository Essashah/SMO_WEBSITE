import { useRef, useState } from 'react'

const Hero = () => {
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoError = () => {
    setVideoError(true)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {videoError ? (
        <div className="h-full w-full bg-black" />
      ) : (
        <>
          {/* Mobile - Phone Frame */}
          <div className="block md:hidden w-full max-w-sm mx-auto px-4">
            <div className="relative bg-gray-800 rounded-[3rem] p-3 shadow-2xl">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-10"></div>
              {/* Video container */}
              <div className="relative bg-black rounded-[2.5rem] overflow-hidden aspect-[9/16]">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={handleVideoError}
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/videos/smo_mobile_3.mp4" type="video/mp4" />
                </video>
              </div>
              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
            </div>
          </div>

          {/* Desktop - Laptop Frame */}
          <div className="hidden md:block w-full max-w-[79.2rem] mx-auto px-8">
            <div className="relative">
              {/* Laptop screen */}
              <div className="relative bg-gray-800 rounded-t-lg p-2 shadow-2xl">
                {/* Screen bezel */}
                <div className="bg-black rounded-t-md overflow-hidden aspect-video">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={handleVideoError}
                    className="w-full h-full object-cover"
                  >
                    <source src="/assets/videos/smo_web_3.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Camera notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-700 rounded-full"></div>
              </div>
              {/* Laptop base */}
              <div className="bg-gray-700 h-4 rounded-b-lg shadow-xl"></div>
              {/* Laptop hinge */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Hero
