import { useEffect, useRef } from 'react';
import AboutSection from '../components/Home/AboutSection';
import CtaSection from '../components/Home/CtaSection';
import FaqSection from '../components/Home/FaqSection';
import Footer from '../components/Footer';
import Hero from '../components/Home/Hero';
import OrganizationSection from '../components/Home/OrganizationSection';
import Sessions from '../components/Home/Sessions';
import FooterBottom from '../components/FooterBottom';
import LocomotiveScroll from 'locomotive-scroll';

const Home = () => {
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
    <div ref={scrollRef} className="" data-scroll-container>
      <Hero />
      <CtaSection />
      <AboutSection />
      <Sessions />
      <OrganizationSection />
      <FaqSection />
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default Home;
