import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Article from './pages/Article';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import About from './pages/About';


const App = () => {

  const location = useLocation();

  useEffect(() => {
    // Track page view when the route changes
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/:slug" element={<Article />} />
      <Route path="*" element={<NotFound />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
};

export default App;
