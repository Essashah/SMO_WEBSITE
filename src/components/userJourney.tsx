import React from 'react'

const Badge: React.FC<{ label: string }> = ({ label }) => (
  <span className="ml-2 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/80 backdrop-blur">
    {label}
  </span>
)

const Card: React.FC<{
  title: string
  accent: 'blue' | 'pink'
  bullets: string[]
  rightBadge?: string
  imageAlt: string
  imageSrc: string
}> = ({ title, accent, bullets, rightBadge, imageAlt, imageSrc }) => {
  const accentFrom = accent === 'blue' ? 'from-blue-500/20' : 'from-pink-500/20'
  const accentTo = accent === 'blue' ? 'to-cyan-500/20' : 'to-fuchsia-500/20'
  const ringColor = accent === 'blue' ? 'ring-cyan-400/40' : 'ring-fuchsia-400/40'

  return (
    <div className={`group relative rounded-2xl border border-white/10 bg-gradient-to-br ${accentFrom} via-white/5 ${accentTo} p-5 shadow-[0_8px_30px_rgba(147,51,234,0.15)] backdrop-blur-xl`}
      style={{ minHeight: 320 }}>
      <div className="flex items-start justify-between">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        {rightBadge ? <Badge label={rightBadge} /> : null}
      </div>
      {/* Image */}
      <div className={`mt-4 relative w-full overflow-hidden rounded-xl border border-white/10 bg-black/30 ring-1 ${ringColor}`}>
        {/* sporty diagonal sheen */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_35%)]" />
        <img src={imageSrc} alt={imageAlt} className="h-48 w-full object-cover sm:h-56 md:h-64 lg:h-72" />
      </div>
      <ul className="mt-5 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-white/85">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/80" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const UserJourney: React.FC = () => {
  return (
    <section id="choose-your-path" className="relative w-full bg-black py-20 sm:py-24">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(60% 50% at 50% 0%, rgba(59,130,246,0.12), rgba(59,130,246,0)), radial-gradient(70% 60% at 50% 100%, rgba(147,51,234,0.14), rgba(147,51,234,0))' }} />

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
        <div className="mb-8 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Choose your path</h3>
        </div>

        {/* Three-column layout on md+, stacked on mobile */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card
            title="Player"
            accent="blue"
            imageAlt="Player"
            imageSrc="/assets/images/player.webp"
            bullets={[
              'Share match URL',
              'Get analysed',
              'Get scouted faster',
            ]}
          />

          <Card
            title="Coach / Analyst"
            accent="pink"
            imageAlt="Coach / Analyst"
            imageSrc="/assets/images/coach_guy.png"
            bullets={[
              'Share URL',
              'Improve team performance',
              'Discover top performers',
            ]}
          />

          <Card
            title="Scout"
            accent="blue"
            
            imageAlt="Scout"
            imageSrc="/assets/images/scout.png"
            bullets={[
              'Find players & coaches',
              'Watch full games',
              'View performance per profile',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default UserJourney