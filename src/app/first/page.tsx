import React from 'react'
import Button from '@/components/Button'
import Navbar from '@/components/Navbar/Navbar'

const page = () => {
  return (
    <div>
      <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#f4f1e1] via-[#d8c9a3] to-[#bfa77e] animate-gradient flex justify-center items-center flex-wrap gap-6 py-8 ">
        <Button text="CAED" href="/secondodd" />
        <Button text="Chemistry" href="/secondeven" />
        <Button text="Electrical" href="/secondeven" />
        <Button text="Mathematics" href="/secondeven" />
        <Button text="Mechanical" href="/secondeven" />
        <Button text="Python" href="/secondeven" />
        
      </div>
    </div>
    </div>
  )
}

export default page
