export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }}
        aria-hidden="true"
      />

      {/* Multi-stop gradient overlay for depth + legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(7,15,32,0.72) 0%, rgba(7,15,32,0.45) 45%, rgba(7,15,32,0.80) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: 'linear-gradient(to top, rgba(7,15,32,0.9), transparent)' }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">

        {/* Trust badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-xs font-semibold px-5 py-2 rounded-full mb-10 tracking-wide">
          <svg className="w-4 h-4 text-ocean-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          Trusted Tour Specialists — Philippines
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6">
          Explore
          <span className="block text-ocean-300 mt-1">Without Limits</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/75 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          Flexible Tours. Proven Experiences. Anytime Adventure.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ocean-600 hover:bg-ocean-500 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-ocean-500/40 hover:-translate-y-1 text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Book Your Tour
          </a>
          <a
            href="#tours"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm text-base"
          >
            View Packages
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Quick stats row */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
          {[
            { label: 'Guests Served', value: '100K+' },
            { label: 'Tours Completed', value: '5,000+' },
            { label: 'Years Experience', value: '10+' },
            { label: 'Satisfaction Rate', value: '98%' },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center gap-2.5">
              <span className="text-white font-bold text-base">{value}</span>
              <span className="text-white/40">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
