import { useEffect, useRef } from "react";
import AboutSection from "./components/AboutSection";
import CtaSection from "./components/CtaSection";
import { FaqSection } from "./components/FaqSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import OrganizationSection from "./components/OrganizationSection";
import Sessions from "./components/Sessions";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        // Add other Locomotive Scroll options here if needed
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Hero />
      <CtaSection />
      <AboutSection />
      <Sessions />
      <OrganizationSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
