import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Conseils from './Conseils';
import Services from './Services';
import Footer from './Footer';
import Navigation from './component/Navigation';
import Connexion from './Connexion';

const App = () => {
  return (
    <>
      <Navigation />
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="conseils" element={<Conseils />} />
          <Route path="Connexion" element={<Connexion />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
   )
};

export default App;
