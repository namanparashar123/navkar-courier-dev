import React from 'react';
import Navigation from './Components/UI/Navigation';
import Footer from './Components/UI/Footer';
import Home from './Components/Pages/Home';

import './App.css';

function App() {
  return (
    <div className="main-container">
      <Navigation />
      <div className='title-bg'><h1 className='title'>Navkar Courier Ltd.</h1></div>
      <Home />
      <Footer></Footer>
    </div>
  );
}

export default App;
