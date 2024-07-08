import AboutSection from "./components/AboutSection"
import CtaSection from "./components/CtaSection"
import { FaqSection } from "./components/FaqSection"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import OrganizationSection from "./components/OrganizationSection"
import Sessions from "./components/Sessions"
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        duration: 0.8,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou

    },
});  return (
    <>
    <Hero />
    <CtaSection />
    <AboutSection />
    <Sessions />
    <OrganizationSection />
    <FaqSection />
    <Footer />
    </>
  )
}

export default App
