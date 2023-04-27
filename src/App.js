import React from 'react';
import Navigation from './Components/UI/Navigation';
import Footer from './Components/UI/Footer';

import './App.css';

function App() {
  return (
    <div className="main-container">
      <Navigation />
      <h1 className='title'>Navkar Courier Ltd.</h1>
      <Footer></Footer>
    </div>
  );
}

export default App;
