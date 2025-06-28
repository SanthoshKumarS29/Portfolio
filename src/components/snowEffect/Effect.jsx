import React from 'react'

const Effect = () => {
    const snowflakes = Array.from({ length: 50 });

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50 overflow-hidden">
      {snowflakes.map((_, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-[#7a50eb] rounded-full opacity-70 animate-snowflake"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
          }}
        ></div>
      ))}
    </div>
  )
}

export default Effect