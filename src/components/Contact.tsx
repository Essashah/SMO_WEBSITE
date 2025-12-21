import { FaEnvelope, FaFutbol } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen bg-black pt-32 pb-20 flex items-center justify-center">
      <div className="mx-auto w-[90%] max-w-4xl text-center">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
        </div>

        {/* Email Section */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center">
                <FaFutbol className="text-purple-400 text-3xl" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Shoot your goal at
              </h2>
              
              <a
                href="mailto:Admin@scoutmeonline.com"
                className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 hover:text-purple-300 transition-colors break-all"
              >
                Admin@scoutmeonline.com
              </a>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mt-8 leading-relaxed">
                We will analyse and get back to you
              </p>
              
              <div className="flex items-center justify-center gap-2 mt-6">
                <FaEnvelope className="text-purple-400/60 text-sm" />
                <p className="text-sm text-white/60 italic">
                  Every message matters. Every goal counts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

