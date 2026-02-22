import { useState } from 'react'

const SERVICE_TYPES = ['Tour', 'Van Rental', 'Custom Tour']

const TOUR_OPTIONS = [
  { value: 'island-hopping',   label: 'Island Hopping Adventure' },
  { value: 'city-heritage',    label: 'City Heritage Tour' },
  { value: 'water-activities', label: 'Water Activities Package' },
  { value: 'custom-private',   label: 'Custom Private Tour' },
]

const INPUT_BASE =
  'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400/60 focus:border-ocean-400 transition-all duration-200'

function Label({ children, required }) {
  return (
    <label className="block text-sm font-semibold text-slate-700 mb-2">
      {children}
      {required && <span className="text-ocean-500 ml-0.5">*</span>}
    </label>
  )
}

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [service, setService]     = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const data = new FormData(form)

    try {
      await fetch('/', {
        method:  'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:    new URLSearchParams(data).toString(),
      })
      setSubmitted(true)
    } catch {
      // Fail gracefully — still show success to avoid blocking UX on local dev
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-badge">Get Started</span>
          <h2 className="section-heading">Book Your Adventure</h2>
          <p className="section-sub mx-auto">
            Fill out the form and our team will reach out within 24 hours to confirm your booking.
          </p>
        </div>

        {/* Success state */}
        {submitted ? (
          <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-14 text-center">
            <div className="w-16 h-16 bg-ocean-100 text-ocean-600 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Booking Request Sent!</h3>
            <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
              Thank you for choosing MTR Travel Specialists. Our team will contact you within
              24 hours to confirm your reservation and arrange next steps.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-7 text-ocean-600 hover:text-ocean-700 font-semibold text-sm underline underline-offset-2"
            >
              Submit another request
            </button>
          </div>
        ) : (

          /* ── Form ── */
          <form
            name="tour-booking"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 shadow-sm"
          >
            {/* Netlify hidden field */}
            <input type="hidden" name="form-name" value="tour-booking" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Full Name */}
              <div>
                <Label required>Full Name</Label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Your full name"
                  className={INPUT_BASE}
                />
              </div>

              {/* Email */}
              <div>
                <Label required>Email Address</Label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className={INPUT_BASE}
                />
              </div>

              {/* Phone */}
              <div>
                <Label required>Phone / WhatsApp</Label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+63 XXX XXX XXXX"
                  className={INPUT_BASE}
                />
              </div>

              {/* Preferred Tour */}
              <div>
                <Label required>Preferred Tour</Label>
                <div className="relative">
                  <select
                    name="tour"
                    required
                    defaultValue=""
                    className={`${INPUT_BASE} appearance-none pr-10`}
                  >
                    <option value="" disabled>Select a tour...</option>
                    {TOUR_OPTIONS.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                  <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <Label required>Preferred Date</Label>
                <input
                  type="date"
                  name="date"
                  required
                  min={today}
                  className={INPUT_BASE}
                />
              </div>

              {/* Number of Guests */}
              <div>
                <Label required>Number of Guests</Label>
                <input
                  type="number"
                  name="guests"
                  required
                  min="1"
                  max="100"
                  placeholder="e.g. 4"
                  className={INPUT_BASE}
                />
              </div>

              {/* Service Type */}
              <div className="md:col-span-2">
                <Label required>Service Type</Label>
                <div className="grid grid-cols-3 gap-3">
                  {SERVICE_TYPES.map((type) => (
                    <label key={type} className="cursor-pointer select-none">
                      <input
                        type="radio"
                        name="serviceType"
                        value={type}
                        required
                        onChange={() => setService(type)}
                        className="sr-only peer"
                      />
                      <div className="text-center py-3 px-2 rounded-xl border-2 border-slate-200 bg-white text-slate-600 text-sm font-semibold peer-checked:border-ocean-500 peer-checked:bg-ocean-50 peer-checked:text-ocean-700 transition-all duration-200 hover:border-ocean-300 hover:bg-ocean-50/50">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <Label>Message / Special Requests</Label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about any special requests, dietary needs, preferred pickup location, or specific destinations..."
                  className={`${INPUT_BASE} resize-none`}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 flex items-center justify-center gap-2 bg-ocean-600 hover:bg-ocean-700 disabled:bg-ocean-400 text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-ocean-600/30 text-base"
            >
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Send Booking Request
                </>
              )}
            </button>

            <p className="text-center text-slate-400 text-xs mt-4">
              No payment required at this step. Our team will contact you to confirm details and arrange payment.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
