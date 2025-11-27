import { useState } from 'react'

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
    title: 'Get elite analysis on the ride home',
    description: 'Receive Premier League-level insights in under an hour while you travel back.',
    image: '/assets/images/scene 3.png',
  },
  {
    title: 'Analyse. Improve. Win.',
    description: 'Turn the data into smarter coaching sessions and player growth.',
    image: '/assets/images/scene 4.png',
  },
]

const SectionThree = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="relative w-full bg-black py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black pointer-events-none" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16">
        {/* Left column: steps */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm uppercase tracking-widest text-purple-400">How our platform works</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Four simple steps from whistle to insights</h2>
          <p className="mt-4 text-base text-white/70">
            Every match becomes actionable intelligence. Hover or tap each step to preview what players and coaches see inside
            Scout Me Online.
          </p>

          <div className="mt-8 space-y-4">
            {steps.map((step, index) => {
              const isActive = index === activeStep
              return (
                <button
                  key={step.title}
                  type="button"
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className={`w-full rounded-2xl border p-4 text-left transition-all duration-200 sm:p-5 ${
                    isActive
                      ? 'border-purple-400/60 bg-white/10'
                      : 'border-white/10 bg-white/5 hover:border-purple-400/40 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg font-semibold ${
                        isActive
                          ? 'bg-purple-500 text-white shadow-[0_0_25px_rgba(168,85,247,0.4)]'
                          : 'bg-white/10 text-purple-200'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">{step.title}</p>
                      <p className="mt-1 text-sm text-white/70">{step.description}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right column: image */}
        <div className="w-full lg:w-1/2">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree
