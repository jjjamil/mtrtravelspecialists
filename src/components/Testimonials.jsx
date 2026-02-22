const TESTIMONIALS = [
  {
    initials: 'MS',
    name:     'Maria Santos',
    location: 'Manila, Philippines',
    rating:   5,
    color:    'bg-ocean-600',
    text:
      'MTR Travel made our family vacation absolutely seamless. The driver was professional and punctual, the tour perfectly organized, and every destination exceeded our expectations. Highly recommend to anyone visiting the Philippines.',
  },
  {
    initials: 'JR',
    name:     'James Reyes',
    location: 'Cebu City, Philippines',
    rating:   5,
    color:    'bg-teal-600',
    text:
      "We booked a custom private tour for our company outing and MTR went above and beyond. The flexibility, the guide's deep local knowledge, and the overall experience were outstanding. Already planning our next trip with them.",
  },
  {
    initials: 'AC',
    name:     'Anna Chen',
    location: 'Singapore',
    rating:   5,
    color:    'bg-sky-600',
    text:
      'As an international visitor, I was nervous about navigating a new destination alone. MTR handled everything — airport pickup, island hopping, city tour. Every interaction was professional and warm. I will absolutely return.',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-amber-400' : 'text-slate-200'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge">Guest Reviews</span>
          <h2 className="section-heading">What Our Guests Say</h2>
          <p className="section-sub mx-auto">
            Real experiences from real travelers who trusted MTR Travel for their adventures.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(({ initials, name, location, rating, color, text }, i) => (
            <article
              key={i}
              className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Opening quote */}
              <svg
                className="w-9 h-9 text-ocean-100 mb-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <Stars count={rating} />

              <p className="text-slate-600 text-sm leading-relaxed mt-4 mb-6 flex-1">{text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className={`w-11 h-11 ${color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 select-none`}
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm leading-none mb-0.5">{name}</p>
                  <p className="text-slate-400 text-xs">{location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust line */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 text-slate-400 text-sm">
            <div className="flex">
              {['bg-ocean-600','bg-teal-600','bg-sky-600','bg-amber-500','bg-slate-600'].map((c,i) => (
                <div key={i} className={`w-7 h-7 ${c} rounded-full border-2 border-white -ml-2 first:ml-0`} />
              ))}
            </div>
            <span>Joined by <strong className="text-slate-700">100,000+ satisfied guests</strong></span>
          </div>
        </div>
      </div>
    </section>
  )
}
