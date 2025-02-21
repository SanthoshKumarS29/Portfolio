import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Work from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import TechStack from './components/TechStack.jsx';

function App() {
  

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <TechStack />
      <Work />
      <Contact />
    </div>
  )
}

export default App
