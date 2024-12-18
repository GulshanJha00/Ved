import React from 'react'
import Button from '@/components/Button'
import Navbar from '@/components/Navbar/Navbar'

const page = () => {
  return (
    <div>
      <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#5a5f6f] via-[#294264] to-[#3e5777] animate-gradient  flex flex-row items-center justify-evenly flex-wrap max-xl:pt-32">
        <Button text="CAED" href="https://drive.google.com/drive/folders/1w-x2dPdnbZDIJxmU3wtaZAL8zb3H1utq?usp=sharing" />

        <Button text="Chemistry" href="https://drive.google.com/drive/folders/12ryTRVMEkI1xkwh5CMsKkI4JI_4hI6r7?usp=sharing" />
        <Button text="Electrical" href="https://drive.google.com/drive/folders/1HYnGQgROWK7pQINSP0TbeD61nvc3Cege?usp=sharing" />

        <Button text="Mathematics" href="https://drive.google.com/drive/folders/1hOSKP7WVqGwnsk4yARCBmt81WS2NnjMK?usp=sharing" />
        <Button text="Mechanical" href="https://drive.google.com/drive/folders/1QgC1PZcyLGhjGK8fOByv2twD0r9CmTds?usp=sharing" />
        <Button text="Python" href="https://drive.google.com/drive/folders/1rwu3e3GeC67XUWpyTbUUzR1DEGeD-SnG?usp=sharing" />
        
      </div>
    </div>
    </div>
  )
}

export default page
