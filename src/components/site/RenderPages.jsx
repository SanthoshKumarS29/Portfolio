import React from 'react'
import Navbar from '../Navbar'
import Home from '../Home'
import About from '../About'
import TechStack from '../TechStack'
import Projects from '../Projects'
import Contact from '../Contact'
// chatcomponent work pannanum

const RenderPages = () => {
  return (
    <div>
      <div className="bg-white text-black dark:bg-black dark:text-white">
        <Navbar />
        <div>
          <Home />
          <div className='max-w-[1240px] mx-auto'>
            <About />
            <TechStack />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RenderPages