import React from 'react';
import './App.css'
import './index.css'
import Section1 from "./components/section1";
import Section2 from './components/section2'; 
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Footer from './components/footer';


function App() {
  return (
    <div className=''>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Footer></Footer>
    </div>


  );
}

export default App;
