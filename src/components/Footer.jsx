const NAV_LINKS = [
  { label: 'Tours',         href: '#tours' },
  { label: 'Van Rental',   href: '#van-rental' },
  { label: 'Why Us',       href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ',          href: '#faq' },
  { label: 'Book Now',     href: '#booking' },
]

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const SOCIAL = [
  { label: 'Facebook',  href: '#', icon: <FacebookIcon />,  hoverBg: 'hover:bg-blue-600' },
  { label: 'Instagram', href: '#', icon: <InstagramIcon />, hoverBg: 'hover:bg-pink-600' },
  { label: 'WhatsApp',  href: '#', icon: <WhatsAppIcon />,  hoverBg: 'hover:bg-green-600' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-3 mb-5 group" aria-label="MTR Travel home">
              <img
                src="/images/logo.jpg"
                alt="MTR Travel Specialists"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-ocean-400/30 group-hover:ring-ocean-400 transition-all duration-300"
              />
              <div>
                <p className="text-white font-black text-lg leading-none">MTR Travel</p>
                <p className="text-ocean-400 text-[10px] tracking-[0.2em] uppercase mt-0.5">Specialists</p>
              </div>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted travel partner for unforgettable adventures across the Philippines.
              Flexible tours, professional drivers, experiences proven to exceed expectations.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {SOCIAL.map(({ label, href, icon, hoverBg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-10 h-10 bg-slate-800 ${hoverBg} rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-400 hover:text-ocean-300 text-sm transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-ocean-400">›</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-ocean-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@mtrtravelspecialists.com"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  info@mtrtravelspecialists.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-ocean-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <a href="tel:+63XXXXXXXXXX" className="text-slate-400 hover:text-white text-sm transition-colors block">
                    +63 XXX XXX XXXX
                  </a>
                  <span className="text-slate-600 text-xs">WhatsApp Available</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-ocean-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-400 text-sm">Philippines</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            &copy; {year} MTR Travel Specialists. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Flexible Tours · Professional Service · Unforgettable Memories
          </p>
        </div>
      </div>
    </footer>
  )
}
