'use client'
import React from 'react'
import "./Homepage.css"
import Link from 'next/link'

const Homepage = () => {
  return (
    <div className="hero text-center flex justify-center items-center flex-col h-full">
        {/* h1 with gradient text, blurred background, and text shadows */}
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#2a3d6b] via-[#e5b161] to-[#f7d079] 
                      relative z-10 p-4 
                      text-shadow-xl
                      after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-red-500/30 after:blur-sm after:z-[-1]">
          Welcome to VED
        </h1>
        
        <p className="md:text-lg text-base mb-8 text-[#45240d] font-serif text-shadow-md">
          Your go-to platform for free study materials
        </p>

        {/* Button with enhanced styles */}
        <Link href="/notes" className="bg-gradient-to-r from-[#6a4c39] to-[#8b6b4b] text-white py-3 px-8 rounded-md text-xl font-semibold 
                                  hover:from-[#8b6b4b] hover:to-[#6a4c39] transition duration-300 ease-in-out 
                                  transform hover:scale-105 hover:shadow-lg shadow-xl focus:outline-none focus:ring-4 focus:ring-[#6a4c39]">
          Get Notes
        </Link>
      </div>
  )
}

export default Homepage
