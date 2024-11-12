import React from 'react'
import Button from '@/components/Button'
import Navbar from '@/components/Navbar/Navbar'

const page = () => {
  return (
    <div>
      <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#f4f1e1] via-[#d8c9a3] to-[#bfa77e] animate-gradient flex justify-center items-center flex-wrap gap-6 py-8 ">
        <Button text="DDCO" href="https://drive.google.com/drive/folders/1VZGJ4KgmMSiaQcsR4cwkz_WZ3VUjakRN?usp=sharing" />
        <Button text="DSA" href="/" />
        <Button text="Mathematics-III" href="/" />
        <Button text="Operating System" href="/" />
        <Button text="OOP java" href="/" />
      </div>
    </div>
    </div>
  )
}

export default page
