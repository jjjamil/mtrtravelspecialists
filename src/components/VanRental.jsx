const FEATURES = [
  '10 to 15-seater van options for groups of any size',
  'Professional, licensed, and courteous drivers',
  'Fuel and parking fees included in every rental',
  'Custom pickup from your hotel, home, or any location',
  'Flexible hourly or whole-day rental arrangements',
  'Airport transfers available 24 hours a day, 7 days a week',
  'Air-conditioned, well-maintained, and modern vehicles',
]

function CheckIcon() {
  return (
    <div className="w-5 h-5 bg-ocean-100 text-ocean-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

export default function VanRental() {
  return (
    <section id="van-rental" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Images ── */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/van-fleet.jpg"
                alt="MTR Travel van fleet at airport"
                loading="lazy"
                className="w-full h-[480px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(8,145,178,0.25) 0%, transparent 60%)',
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floating secondary image */}
            <div className="absolute -bottom-6 -right-6 hidden lg:block w-52 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/images/van-rental.jpg"
                alt="MTR van fleet at heritage site"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge — Airport Transfer */}
            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-slate-900 font-bold text-sm leading-none">Airport Transfers</p>
              </div>
              <p className="text-ocean-600 text-xs mt-1 font-medium">Available 24 / 7</p>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="lg:pl-4">
            <span className="section-badge">Van Rental Service</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
              Private Van Rental
              <span className="block text-ocean-600">with Professional Driver</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Explore at your own pace with our premium van rental service. Whether you need a quick
              airport transfer or a full-day private excursion, our professional drivers handle
              everything — so you focus entirely on the experience.
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-10">
              {FEATURES.map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-slate-600 text-sm leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-ocean-600 hover:bg-ocean-700 text-white font-bold px-7 py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-ocean-600/30 hover:-translate-y-0.5 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Reserve a Van
              </a>
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 border-2 border-ocean-600 text-ocean-600 hover:bg-ocean-50 font-bold px-7 py-4 rounded-2xl transition-all duration-300 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
