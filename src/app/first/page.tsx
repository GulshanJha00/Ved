import React from 'react'
import Button from '@/components/Button'
import Navbar from '@/components/Navbar/Navbar'

const page = () => {
  return (
    <div>
      <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#f4f1e1] via-[#d8c9a3] to-[#bfa77e] animate-gradient flex justify-center items-center flex-wrap gap-6 py-8 ">
        <Button text="CAED" href="https://drive.google.com/drive/folders/1w-x2dPdnbZDIJxmU3wtaZAL8zb3H1utq?usp=sharing" />

        <Button text="Chemistry" href="https://drive.google.com/drive/folders/12ryTRVMEkI1xkwh5CMsKkI4JI_4hI6r7?usp=sharing" />
        <Button text="Electrical" href="/" />

        <Button text="Mathematics" href="https://drive.google.com/drive/folders/1hOSKP7WVqGwnsk4yARCBmt81WS2NnjMK?usp=sharing" />
        <Button text="Mechanical" href="https://drive.google.com/drive/folders/1QgC1PZcyLGhjGK8fOByv2twD0r9CmTds?usp=sharing" />
        <Button text="Python" href="https://drive.google.com/drive/folders/1rwu3e3GeC67XUWpyTbUUzR1DEGeD-SnG?usp=sharing" />
        
      </div>
    </div>
    </div>
  )
}

export default page
