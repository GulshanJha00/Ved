import React from 'react'
import Button from '@/components/Button'
import Navbar from '@/components/Navbar/Navbar'

const page = () => {
  return (
    <div>
      <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#5a5f6f] via-[#294264] to-[#3e5777] animate-gradient flex flex-row items-center justify-evenly flex-wrap max-lg:pt-24">
        <Button text="DDCO" href="https://drive.google.com/drive/folders/1-ZnDLbbIIpkvtjYU6cpdMyriqjkGaqt6?usp=sharing" />

        <Button text="DSA" href="https://drive.google.com/drive/folders/1EdtJiy0SjhLjAPj_5uOcd1pG2dKXEBzZ?usp=sharing" />

        <Button text="Mathematics-III" href="https://drive.google.com/drive/folders/1toWgiyLJy0GrRODtVYsAEviHuaPEkiKq?usp=sharing" />

        <Button text="Operating System" href="https://drive.google.com/drive/folders/1oTvuQ7_BrFdx8-LTT5balNA2RV_5J9W9?usp=sharing" />

        <Button text="OOP java" href="https://drive.google.com/drive/folders/1JWo6qJmrYavMpYpVzYkuhhmY2MwMEOPt?usp=sharing" />
      </div>
    </div>
    </div>
  )
}

export default page
