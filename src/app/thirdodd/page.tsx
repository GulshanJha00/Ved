import React from 'react'
import Button from '@/components/Button'
import Navbar from '@/components/Navbar/Navbar'

const page = () => {
  return (
    <div>
      <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#f4f1e1] via-[#d8c9a3] to-[#bfa77e] animate-gradient flex justify-center items-center flex-wrap gap-6 py-8 ">
        <Button text="Cloud Computing" href="/secondodd" />
        <Button text="Computer Networks" href="/secondeven" />
        <Button text="Elective" href="/secondeven" />
        <Button text="SEPM" href="/secondeven" />
        <Button text="Theory Of Computation" href="/secondeven" />
      </div>
    </div>
    </div>
  )
}

export default page
