import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import Details from './components/Education&Skills'
import Work from './components/Projects&Internships'
import Contact from './components/Contact'

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
