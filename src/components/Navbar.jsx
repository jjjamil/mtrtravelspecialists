import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Tours',        href: '#tours' },
  { label: 'Van Rental',  href: '#van-rental' },
  { label: 'Why Us',      href: '#why-us' },
  { label: 'Testimonials',href: '#testimonials' },
  { label: 'FAQ',         href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-3 group" aria-label="MTR Travel Specialists home">
            <div className="relative">
              <img
                src="/images/logo.jpg"
                alt="MTR Travel Specialists logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-ocean-400/40 group-hover:ring-ocean-400 transition-all duration-300"
              />
            </div>
            <div className="leading-none">
              <span className="block text-white font-black text-xl tracking-tight">MTR</span>
              <span className="block text-ocean-300 text-[10px] font-semibold tracking-[0.2em] uppercase mt-0.5">
                Travel Specialists
              </span>
            </div>
          </a>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-white/75 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-ocean-400 after:transition-all after:duration-300 hover:after:w-full pb-0.5"
              >
                {label}
              </a>
            ))}
            <a
              href="#booking"
              className="ml-2 bg-ocean-600 hover:bg-ocean-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-ocean-600/40 hover:-translate-y-0.5"
            >
              Book Now
            </a>
          </div>

          {/* ── Hamburger ── */}
          <button
            className="md:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {menuOpen && (
          <div className="md:hidden animate-slide-down border-t border-white/10 pb-6">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-3.5 text-white/80 hover:text-ocean-300 text-sm font-medium border-b border-white/5 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block text-center bg-ocean-600 hover:bg-ocean-500 text-white font-bold py-3 rounded-xl transition-colors text-sm"
            >
              Book Now
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
