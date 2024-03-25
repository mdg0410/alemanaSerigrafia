import Header from '../component/Header'
import CallToAction from '../component/CallToAction'
import PopularServices from '../component/PopularServices'
import SpecialOffers from '../component/SpecialOffers'
import TestimonialsSection from '../component/TestimonialsSection'
import Guarantees from '../component/Guarantees'
import SpecialCallBack from '../component/SpecialCallBack'
import SeccionFAQ from '../component/ContactAndFAQ'
import ContactInfoAndSocial from '../component/ContactInfoAndSocial'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <CallToAction />
      <PopularServices />
      <SpecialOffers />
      <TestimonialsSection />
      <Guarantees />
      <SpecialCallBack />
      <SeccionFAQ />
      <ContactInfoAndSocial />
      <Footer />
    </div>
  )
}

export default Home