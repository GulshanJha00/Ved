"use client";
import React from 'react';
import Button from '@/components/Button';
import { FaProjectDiagram, FaCode, FaCalculator, FaLaptop, FaJava } from 'react-icons/fa';
import FlexBoxAds from '@/components/flexbox/FlexBoxAds';

const Page = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient flex flex-col justify-center items-center py-16 px-6 space-y-12">
      {/* Title Section */}
      <div className="text-center w-full max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
          Course Materials
        </h1>
        <p className="text-xl text-white opacity-80 mt-4 max-w-xl mx-auto">
          Access course materials for various subjects. Click on the buttons to open the Google Drive links.
        </p>
=======
    <div>
      <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#5a5f6f] via-[#294264] to-[#3e5777] animate-gradient flex flex-row items-center justify-evenly flex-wrap max-xl:pt-32">
        <Button text="DDCO" href="https://drive.google.com/drive/folders/1-ZnDLbbIIpkvtjYU6cpdMyriqjkGaqt6?usp=sharing" />

        <Button text="DSA" href="https://drive.google.com/drive/folders/1EdtJiy0SjhLjAPj_5uOcd1pG2dKXEBzZ?usp=sharing" />

        <Button text="Mathematics-III" href="https://drive.google.com/drive/folders/1toWgiyLJy0GrRODtVYsAEviHuaPEkiKq?usp=sharing" />

        <Button text="Operating System" href="https://drive.google.com/drive/folders/1oTvuQ7_BrFdx8-LTT5balNA2RV_5J9W9?usp=sharing" />

        <Button text="OOP java" href="https://drive.google.com/drive/folders/1JWo6qJmrYavMpYpVzYkuhhmY2MwMEOPt?usp=sharing" />
>>>>>>> 22248c587155444ba981ffab25353db7e3389cb4
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
        <Button 
         target="_blank"
          text={<><FaProjectDiagram className="mr-3 text-2xl" />DDCO</>} 
          href="https://drive.google.com/drive/folders/1-ZnDLbbIIpkvtjYU6cpdMyriqjkGaqt6?usp=sharing" 
        />
        <Button 
         target="_blank"
          text={<><FaCode className="mr-3 text-2xl" />DSA</>} 
          href="https://drive.google.com/drive/folders/1EdtJiy0SjhLjAPj_5uOcd1pG2dKXEBzZ?usp=sharing" 
        />
        <Button 
         target="_blank"
          text={<><FaCalculator className="mr-3 text-2xl" />Mathematics-III</>} 
          href="https://drive.google.com/drive/folders/1toWgiyLJy0GrRODtVYsAEviHuaPEkiKq?usp=sharing" 
        />
        <Button 
         target="_blank"
          text={<><FaLaptop className="mr-3 text-2xl" />Operating System</>} 
          href="https://drive.google.com/drive/folders/1oTvuQ7_BrFdx8-LTT5balNA2RV_5J9W9?usp=sharing" 
        />
        <Button 
         target="_blank"
          text={<><FaJava className="mr-3 text-2xl" />OOP Java</>} 
          href="https://drive.google.com/drive/folders/1JWo6qJmrYavMpYpVzYkuhhmY2MwMEOPt?usp=sharing" 
        />
      </div>

      {/* FlexBoxAds Section */}
      <FlexBoxAds />
    </div>
  );
};

export default Page;
