import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav, Landing, About, Services, Carousel, Footer } from './components';


import './App.css';


const App = () => (
  
  <div>
    <Router>
      <Routes>
      </Routes>
    </Router>
    <Nav />
    <Landing />
    <About />
    <Services />
    <Carousel />
    <Footer />
  </div>
);

export default App;
