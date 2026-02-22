import { useState } from 'react'

const FAQS = [
  {
    question: 'Can we customize our tour itinerary?',
    answer:
      "Absolutely. Every tour we offer can be tailored to your group's preferences, pace, and interests. Just let us know your must-see destinations, preferred activities, and budget — and we'll craft a personalized itinerary just for you. Contact us before booking to discuss customization options.",
  },
  {
    question: 'Is van rental available anytime?',
    answer:
      'Yes, our van rental service operates around the clock, including early mornings, late nights, and holidays. Whether you need a 4 AM airport pickup or an evening group transfer, our professional drivers are available 24/7 to accommodate your schedule.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept a variety of payment methods for your convenience, including bank transfers, GCash, Maya, and cash on the day of the tour. International guests may also arrange payment via Wise or similar services. A partial deposit may be required to confirm group bookings.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We understand plans can change. Cancellations made 72 hours or more before your tour receive a full refund. Cancellations within 48–72 hours may be subject to a 50% fee. Last-minute cancellations (less than 24 hours) may not be refundable, but we always try to rebook at no extra charge when possible. Reach out directly and we will do our best to accommodate you.',
  },
  {
    question: 'Do you offer airport pickup and drop-off?',
    answer:
      'Yes. Airport transfers are one of our most requested services. Our drivers will meet you at the arrival area with a name board, assist with luggage, and take you directly to your hotel or destination. Return transfers are equally seamless — we monitor your flight and adjust timing as needed.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`rounded-2xl border transition-all duration-300 ${open ? 'border-ocean-200 bg-white shadow-md' : 'border-slate-200 bg-white hover:border-ocean-100'}`}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        <span className="font-semibold text-slate-800 text-sm sm:text-base pr-4 leading-snug">
          {question}
        </span>
        <div
          className={`w-8 h-8 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 ${
            open
              ? 'bg-ocean-600 text-white rotate-180'
              : 'bg-slate-100 text-slate-400 group-hover:bg-ocean-50 group-hover:text-ocean-600'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="px-6 pb-6 animate-slide-down">
          <div className="h-px bg-ocean-100 mb-4" />
          <p className="text-slate-500 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-badge">Questions Answered</span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-sub mx-auto">
            Everything you need to know before booking your adventure.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center bg-ocean-600 rounded-2xl p-8 text-white">
          <h3 className="font-extrabold text-xl mb-2">Still have questions?</h3>
          <p className="text-ocean-100 text-sm mb-6">Our team is happy to help before, during, and after your trip.</p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-white text-ocean-600 hover:bg-ocean-50 font-bold px-7 py-3 rounded-xl transition-all duration-300 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
