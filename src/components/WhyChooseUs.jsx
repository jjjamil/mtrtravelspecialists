const FEATURES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Flexible Anytime Tours',
    description:
      'Morning, afternoon, or night — we operate around your schedule. Your pace, your time, your adventure.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: 'Trusted by Thousands',
    description:
      'Over 100,000 guests have explored with us. Our proven track record speaks louder than any promise.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    title: 'Customizable Itineraries',
    description:
      'No rigid templates. Every tour is crafted around your preferences, group size, and budget.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Professional Drivers & Guides',
    description:
      'Certified, experienced, and knowledgeable local guides ensure your safety and comfort at every stop.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge">Why MTR Travel</span>
          <h2 className="section-heading">Your Journey, Our Standard</h2>
          <p className="section-sub mx-auto">
            We don't just operate tours — we craft experiences that guests remember for a lifetime.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURES.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-ocean-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-ocean-100/60 hover:-translate-y-1.5 cursor-default"
            >
              {/* Icon container */}
              <div className="w-14 h-14 bg-ocean-50 group-hover:bg-ocean-100 text-ocean-600 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                {icon}
              </div>

              {/* Subtle accent line */}
              <div className="w-8 h-0.5 bg-ocean-200 group-hover:bg-ocean-400 mb-4 rounded-full transition-colors duration-300" />

              <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
