import AboutSection from "../components/Home/AboutSection";
import CtaSection from "../components/Home/CtaSection";
import FaqSection from "../components/Home/FaqSection";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import OrganizationSection from "../components/Home/OrganizationSection";
import Sessions from "../components/Home/Sessions";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
    <Helmet >
      <title>Campus of AI</title>
        <meta name="description" content="Welcome to Campus of AI (in collaboration with 7 hidden layers), your hub for AI and ML workshops and sessions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="AI, Machine Learning, Workshops, Education, Campus of AI, 7 Hidden Layers" />
        <meta name="author" content="Campus of AI Team" />

        <meta property="og:title" content="Campus of AI" />
        <meta property="og:description" content="Welcome to Campus of AI, your hub for AI and ML workshops and sessions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://campusofai.in" />
        <meta property="og:image" content="https://campusofai.in/hero-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Campus of AI" />
        <meta name="twitter:description" content="Welcome to Campus of AI, your hub for AI and ML workshops and sessions." />
        <meta name="twitter:image" content="https://campusofai.in/hero-image.png" />
        <meta name="twitter:site" content="@CampusOfAI" />
        <meta name="twitter:creator" content="@CampusOfAI" />

        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </Helmet>
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
