import React from 'react'
import Button from '@/components/Button'
import Navbar from '@/components/Navbar/Navbar'

const page = () => {
  return (
    <div>
      <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#5a5f6f] via-[#294264] to-[#3e5777] animate-gradient flex justify-center items-center flex-wrap gap-6 py-8 ">
      <Button text="Cloud Computing" href="/" />
        <Button text="Computer Networks" href="/" />
        <Button text="Elective" href="/" />
        <Button text="SEPM" href="/" />
        <Button text="Theory Of Computation" href="/" />
      </div>
    </div>
    </div>
  )
}

export default page
