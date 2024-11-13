import React from 'react'
import Button from '@/components/Button'
import Navbar from '@/components/Navbar/Navbar'

const page = () => {
  return (
    <div>
      <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#5a5f6f] via-[#294264] to-[#3e5777] animate-gradient flex justify-center items-center flex-wrap gap-6 py-8 ">
        <Button text="ADA" href="https://drive.google.com/drive/folders/1OiUocPtnIExDd8h0cQ19gABdWlEO9R1e?usp=sharing" />

        <Button text="Advanced Java" href="https://drive.google.com/drive/folders/1IjkvmIyfzHYwyNW2kZs-mjWLjyMvk_VR?usp=sharing" />
        
        <Button text="Biology" href="https://drive.google.com/drive/folders/1X_uqwc_SOG_I3Q1G_qbrjMLJ-Ov5cOW-?usp=sharing" />

        <Button text="Graph Theory" href="https://drive.google.com/drive/folders/1dzHn2vK4JezUMWTRRwtRwKSSoQqXaP7I?usp=sharing" />

        <Button text="DBMS" href="https://drive.google.com/drive/folders/1UwIEXIEvofZVAmnMqpy2t9G5ATI6_kGs?usp=sharing" />

      </div>
    </div>
    </div>
  )
}

export default page
