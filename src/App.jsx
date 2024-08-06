import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import Details from './components/Education&Skills'
import Work from './components/Projects&Internships'
import Contact from './components/Contact'
import Loading from './components/LoadingPage'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false);
      }, 3000); // Simulate a 3-second loading time
      return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <Navbar />}
      {/* <Home /> */}
      {loading ? <Loading /> : <Home />}
      <About />
      <Details />
      <Work />
      <Contact />
    </div>
  )
}

export default App
