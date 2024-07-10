import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Navbar from './components/Navbar.tsx';
import { ThemeProvider } from "@material-tailwind/react";
import FooterBottom from './components/FooterBottom.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <App />
        <FooterBottom />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
