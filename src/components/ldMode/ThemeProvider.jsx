import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefer-color-schema: dark)').matches)
  })

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme','dark')
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme','light')
    }
  },[darkMode])
  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider