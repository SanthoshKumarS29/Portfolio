import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import './App.css'
import Details from './components/Education&Skills.jsx'
import Work from './components/Projects&Internships.jsx'
import Contact from './components/Contact.jsx'

function App() {
  

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Details />
      <Work />
      <Contact />
    </div>
  )
}

export default App
