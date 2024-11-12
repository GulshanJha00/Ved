import React from 'react'
import Button from '@/components/Button'
import Navbar from '@/components/Navbar/Navbar'

const page = () => {
  return (
    <div>
      <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#f4f1e1] via-[#d8c9a3] to-[#bfa77e] animate-gradient flex justify-center items-center flex-wrap gap-6 py-8 ">
        
        <Button text="Electronics" href="https://drive.google.com/drive/folders/1n1yaZMp784tCQtXv0bIJ0tHVzuaq7pKb?usp=sharing" />

        <Button text="Physics" href="https://drive.google.com/drive/folders/1TWDTNyOG3ydA2cryAkZVDNmlgnvxua4F?usp=sharing" />

        <Button text="Mathematics-II" href="/" />

        <Button text="C-programming" href="https://drive.google.com/drive/folders/1He2zY8SmkSOtzGrQ_Wm5ZDxMs7MygS5p?usp=sharing" />
        <Button text="Cyber Security" href="https://drive.google.com/drive/folders/1YsPpHNZboZAPdXyJDJbu4P9VAJFE3hJP?usp=sharing" />
      </div>
    </div>
    </div>
  )
}

export default page
