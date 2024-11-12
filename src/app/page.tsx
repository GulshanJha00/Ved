'use client'

import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Homepage from '../components/Homepage/Homepage'

const Page: React.FC = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-[#f4f1e1] via-[#d8c9a3] to-[#bfa77e] animate-gradient'>
      <Navbar />
      <Homepage/>
    </div>
  )
}

export default Page;
