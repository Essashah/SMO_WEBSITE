const SectionSix = () => {
  const cards = [
    {
      title: 'Player',
      color: 'cyan',
      steps: ['Share match URL', 'Get analysed', 'Get scouted faster'],
      badge: null as string | null,
    },
    {
      title: 'Coach / Analyst',
      color: 'pink',
      steps: ['Share URL', 'Improve team performance', 'Discover top performers'],
      badge: null as string | null,
    },
    {
      title: 'Scout',
      color: 'blue',
      steps: ['Find players & coaches', 'Watch full games', 'View performance per profile'],
      badge: 'Coming Soon',
    },
  ]

  const colorClass = (c: string) =>
    c === 'pink'
      ? 'border-pink-400 text-pink-300 hover:bg-pink-400/10'
      : c === 'blue'
      ? 'border-blue-400 text-blue-300 hover:bg-blue-400/10'
      : 'border-cyan-400 text-cyan-300 hover:bg-cyan-400/10'

  return (
    <section className="relative w-full bg-black py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Choose your path</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`relative rounded-2xl border p-6 sm:p-8 bg-white/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 ${colorClass(
                card.color,
              )}`}
              style={{ boxShadow: '0 0 24px rgba(255,255,255,0.08)' }}
            >
              {card.badge && (
                <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded border border-white/30 text-white/80">
                  {card.badge}
                </span>
              )}
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">{card.title}</h4>
              <ol className="space-y-2">
                {card.steps.map((s, i) => (
                  <li key={s} className="text-white/85 text-sm sm:text-base">
                    <span className="mr-2 text-white/60">{i + 1}.</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionSix


