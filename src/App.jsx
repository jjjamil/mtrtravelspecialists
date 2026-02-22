import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import WhyChooseUs  from './components/WhyChooseUs'
import TourPackages from './components/TourPackages'
import VanRental    from './components/VanRental'
import Metrics      from './components/Metrics'
import Testimonials from './components/Testimonials'
import BookingForm  from './components/BookingForm'
import FAQ          from './components/FAQ'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <TourPackages />
        <VanRental />
        <Metrics />
        <Testimonials />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
