import React from 'react'
import Navbar from '../Navbar'
import Home from '../Home'
import About from '../About'
import TechStack from '../TechStack'
import Projects from '../Projects'
import Contact from '../Contact'
import { RiRobot3Fill } from "react-icons/ri";
// chatcomponent work pannanum

const RenderPages = () => {
  return (
    <div>
        <div className="bg-white text-black dark:bg-black dark:text-white">
            <Navbar />
            <div className='max-w-[1240px] mx-auto'>
                <Home />
                <About />
                <TechStack />
                <Projects />
                <Contact />
            </div>
        </div>
    </div>
  )
}

export default RenderPages