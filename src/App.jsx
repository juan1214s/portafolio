import React, { useEffect } from "react";
import './App.css';
import './index.css';
import Section1 from "./components/section1";
import Section2 from './components/section2'; 
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Footer from './components/footer';
import Cookies from 'js-cookie'; // Asegúrate de importar Cookies si lo usas en el useEffect

function App() {
  useEffect(() => {
    // Configura cookies automáticamente al cargar el componente
    Cookies.set('cookieConsent', 'true', { expires: 365, path: '/' });
  }, []);

  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

export default App;

