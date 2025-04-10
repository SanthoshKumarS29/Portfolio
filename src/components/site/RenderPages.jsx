import React from 'react'
import Navbar from '../Navbar'
import Home from '../Home'
import About from '../About'
import TechStack from '../TechStack'
import Projects from '../Projects'
import Contact from '../Contact'
import { GoHubot } from "react-icons/go";

const RenderPages = () => {
  return (
    <div>
        <div className=''>
            <Navbar />
            <div className='max-w-[1240px] mx-auto'>
                <Home />
                <About />
                <TechStack />
                <Projects />
                <Contact />
                <div className='fixed right-24 bottom-10'>
                    <div className='border border-white'>
                        <span className='text-white'><GoHubot size={30}/></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RenderPages