const TOURS = [
  {
    image:       '/images/island-hopping.jpg',
    title:       'Island Hopping Adventure',
    description: 'Discover pristine islands, crystal-clear waters, and vibrant marine life on our signature island hopping experience.',
    duration:    'Full Day — 8 hrs',
    price:       'Starting at $45',
    badge:       'Most Popular',
    badgeColor:  'bg-ocean-600',
  },
  {
    image:       '/images/city-tour.jpg',
    title:       'City Heritage Tour',
    description: 'Immerse yourself in local culture, historical landmarks, and authentic cuisine on our guided city heritage tour.',
    duration:    'Half Day — 4 hrs',
    price:       'Starting at $25',
    badge:       'Best Value',
    badgeColor:  'bg-amber-500',
  },
  {
    image:       '/images/water-activities.jpg',
    title:       'Water Activities Package',
    description: 'Banana boat, snorkeling, beach fun — our water activities package is perfect for thrill-seekers and families.',
    duration:    '5–6 Hours',
    price:       'Starting at $35',
    badge:       'Family Favorite',
    badgeColor:  'bg-teal-600',
  },
  {
    image:       '/images/davao-tour.jpg',
    title:       'Custom Private Tour',
    description: 'Tell us where you want to go. We build a fully personalized itinerary around your group, schedule, and interests.',
    duration:    'Flexible',
    price:       'Custom Pricing',
    badge:       'Fully Custom',
    badgeColor:  'bg-slate-700',
  },
]

function ClockIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

export default function TourPackages() {
  return (
    <section id="tours" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge">Our Packages</span>
          <h2 className="section-heading">Handcrafted Tour Experiences</h2>
          <p className="section-sub mx-auto">
            Every package is designed with one goal: to give you a genuine, unforgettable adventure.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TOURS.map(({ image, title, description, duration, price, badge, badgeColor }, i) => (
            <article
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 ${badgeColor} text-white text-[11px] font-bold px-3 py-1 rounded-full tracking-wide`}>
                  {badge}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{description}</p>

                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <ClockIcon />
                    <span>{duration}</span>
                  </div>
                  <span className="text-ocean-600 font-bold text-sm">{price}</span>
                </div>

                <a
                  href="#booking"
                  className="block text-center bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-all duration-300 hover:shadow-md"
                >
                  Book Now
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm mb-4">
            Don't see what you're looking for? We'll build a custom package just for you.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 border-2 border-ocean-600 text-ocean-600 hover:bg-ocean-600 hover:text-white font-bold px-7 py-3 rounded-xl transition-all duration-300 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Request a Custom Tour
          </a>
        </div>
      </div>
    </section>
  )
}
