import { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const steps = [
  {
    title: 'At end of match',
    description: 'Capture the final whistle energy and head to the platform.',
    image: '/assets/images/scene 1.png',
  },
  {
    title: 'Just share your match URL',
    description: 'Paste the streaming or upload link—no large file transfers required.',
    image: '/assets/images/scene 2.png',
  },
  {
    title: 'Target is to deliver elite analysis in an hour',
    description: 'Receive Premier League-level insights in an hour.',
    image: '/assets/images/scene 3.png',
  },
  {
    title: 'Analyse. Improve. Win.',
    description: 'Turn the data into smarter coaching sessions and player growth.',
    image: '/assets/images/scene 5.png',
  },
]

const SectionThree = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length)
  }

  return (
    <section className="relative w-full bg-black py-12 sm:py-20 lg:py-20">
      <div className="w-[90%] mx-auto text-center"> 
      <p className="text-sm uppercase tracking-widest text-purple-400">How our platform works</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Four simple steps from whistle to insights</h2>
  
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:gap-12">
        {/* Left column: steps */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-8 sm:space-y-4 sm:grid-cols-1">
            {steps.map((step, index) => {
              const isActive = index === activeStep
              return (
                <button
                  key={step.title}
                  type="button"
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className={`w-full rounded-2xl border p-3 text-left transition-all duration-200 sm:p-5 ${
                    isActive
                      ? 'border-purple-400/60 bg-white/10'
                      : 'border-white/10 bg-white/5 hover:border-purple-400/40 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-2 sm:gap-4">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm font-semibold sm:h-10 sm:w-10 sm:text-lg ${
                        isActive
                          ? 'bg-purple-500 text-white shadow-[0_0_25px_rgba(168,85,247,0.4)]'
                          : 'bg-white/10 text-purple-200'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-white sm:text-lg">{step.title}</p>
                      <p className="mt-1 text-xs text-white/70 sm:text-sm">{step.description}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right column: image */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/40 via-black to-purple-900/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            {steps.map((step, index) => (
              <img
                key={step.image}
                src={step.image}
                alt={step.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  index === activeStep ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
              />
            ))}

            <div className="absolute bottom-4 left-4 rounded-2xl bg-black/60 px-4 py-3 text-white/80 backdrop-blur">
              <p className="text-sm uppercase tracking-wide text-purple-300">Step {activeStep + 1}</p>
              <p className="text-base font-semibold text-white">{steps[activeStep].title}</p>
            </div>

            {/* Mobile Next Button - Blue Double Arrows */}
            <button
              onClick={handleNextStep}
              className="lg:hidden absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              aria-label="Next step"
            >
              <FaAngleDoubleRight className="text-white text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree
