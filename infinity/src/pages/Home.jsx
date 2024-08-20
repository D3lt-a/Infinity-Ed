// import pic from '../assets/images/home-back.png'
import HeroSection from "../componets/HomePage/HeroSection"
import ServiceDetails from "../componets/HomePage/Service"
import WorkShowCase from "../componets/HomePage/WorkShowCase"
import ProjectOverview from "../componets/HomePage/ProjectOverview"
import Proof from "../componets/HomePage/proof"
import Testimonial from "../componets/HomePage/Testimonial"
import ContactForm from "../componets/Common/ContactForm"

function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceDetails />
      <WorkShowCase />
      <ProjectOverview />
      <Proof />
      <Testimonial />
      <ContactForm />
    </div>
  )
}

export default Home
