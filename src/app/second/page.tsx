import React from 'react'
import Button from '@/components/Button'
import Navbar from '@/components/Navbar/Navbar'

const page = () => {
  return (
    <div>
      <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#5a5f6f] via-[#294264] to-[#3e5777] animate-gradient  flex flex-row items-center justify-evenly flex-wrap max-xl:pt-32">
        
        <Button text="C-programming" href="https://drive.google.com/drive/folders/1He2zY8SmkSOtzGrQ_Wm5ZDxMs7MygS5p?usp=sharing" />

        <Button text="Cyber Security" href="https://drive.google.com/drive/folders/1YsPpHNZboZAPdXyJDJbu4P9VAJFE3hJP?usp=sharing" />

        <Button text="Electronics" href="https://drive.google.com/drive/folders/1n1yaZMp784tCQtXv0bIJ0tHVzuaq7pKb?usp=sharing" />

        <Button text="Physics" href="https://drive.google.com/drive/folders/1TWDTNyOG3ydA2cryAkZVDNmlgnvxua4F?usp=sharing" />

        <Button text="Mathematics-II" href="https://drive.google.com/drive/folders/1QmE0GCmXchMP4cNcC3P5jOE5jpVN1jJM?usp=sharing" />

      </div>
    </div>
    </div>
  )
}

export default page
