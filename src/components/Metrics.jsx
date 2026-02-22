import { useState, useEffect, useRef } from 'react'

const STATS = [
  { end: 100000, suffix: '+', label: 'Guests Served',       display: '100K' },
  { end: 5000,   suffix: '+', label: 'Tours Completed',     display: null  },
  { end: 10,     suffix: '+', label: 'Years of Experience', display: null  },
  { end: 98,     suffix: '%', label: 'Guest Satisfaction',  display: null  },
]

function useCountUp(end, duration, active) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let raf
    let startTime = null

    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [end, duration, active])

  return count
}

function StatCard({ stat, active }) {
  const count = useCountUp(stat.end, 2200, active)

  const display = stat.display
    ? `${stat.display}${stat.suffix}`
    : `${count.toLocaleString()}${stat.suffix}`

  return (
    <div className="text-center group">
      <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white tabular-nums leading-none mb-3 group-hover:text-ocean-200 transition-colors duration-300">
        {active ? display : `0${stat.suffix}`}
      </div>
      <div className="text-ocean-300 font-medium text-sm tracking-widest uppercase">
        {stat.label}
      </div>
    </div>
  )
}

export default function Metrics() {
  const [active, setActive] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/islands-overlook.jpg)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-slate-900/82" aria-hidden="true" />

      {/* Decorative gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(8,145,178,0.4), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-ocean-400 font-semibold text-xs tracking-widest uppercase mb-3 block">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Numbers That Define Us
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            A decade of service, thousands of memories, and one unwavering commitment to excellence.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} active={active} />
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 flex items-center gap-6">
          <div className="flex-1 h-px bg-white/10" />
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-ocean-600 border border-white/20 hover:border-ocean-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm backdrop-blur-sm"
          >
            Start Your Adventure
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </div>
    </section>
  )
}
