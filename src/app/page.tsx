'use client'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Homepage from '../components/Homepage/Homepage'

const Page: React.FC = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-[#5a5f6f] via-[#294264] to-[#3e5777] animate-gradient'>
      <Navbar />
      <Homepage/>
    </div>
  )
}

export default Page;
