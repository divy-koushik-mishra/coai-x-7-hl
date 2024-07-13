import AboutSection from '../components/Home/AboutSection';
import CtaSection from '../components/Home/CtaSection';
import FaqSection from '../components/Home/FaqSection';
import Footer from '../components/Footer';
import Hero from '../components/Home/Hero';
import OrganizationSection from '../components/Home/OrganizationSection';
import Sessions from '../components/Home/Sessions';

const Home = () => {
  

  return (
    <>
      <Hero />
      <CtaSection />
      <AboutSection />
      <Sessions />
      <OrganizationSection />
      <FaqSection />
      <Footer />
    </>
  );
};

export default Home;
