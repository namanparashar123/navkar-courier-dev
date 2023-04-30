import React from 'react';
import Navigation from './Components/UI/Navigation';
import Footer from './Components/UI/Footer';
import Home from './Components/Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Pages/Contact';
import Services from './Components/Pages/Services';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Navigation />
        <div className='title-bg'><h1 className='title'>Navkar Courier Ltd.</h1></div>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
       </Routes>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
