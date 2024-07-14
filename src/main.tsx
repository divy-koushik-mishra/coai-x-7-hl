import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Navbar from './components/Navbar.tsx';
import { ThemeProvider } from "@material-tailwind/react";
import FooterBottom from './components/FooterBottom.tsx';
import BackToTop from './components/utils/BackToTop.tsx';
import ReactGA from 'react-ga4';

// google analytics
const trackingId =  import.meta.env.VITE_GA_TRACKING_ID;
ReactGA.initialize(trackingId);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <App />
        <FooterBottom />
        <BackToTop />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
