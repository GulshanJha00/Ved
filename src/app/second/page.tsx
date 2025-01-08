"use client";
import React from 'react';
import Button from '@/components/Button';
import { FaCode, FaShieldAlt, FaPlug, FaAtom, FaCalculator } from 'react-icons/fa';
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
          Access course material for various subjects. Click on the buttons to open the Google Drive links.
        </p>
=======
    <div>
      <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#5a5f6f] via-[#294264] to-[#3e5777] animate-gradient  flex flex-row items-center justify-evenly flex-wrap max-xl:pt-32">
        
        <Button text="C-programming" href="https://drive.google.com/drive/folders/1He2zY8SmkSOtzGrQ_Wm5ZDxMs7MygS5p?usp=sharing" />

        <Button text="Cyber Security" href="https://drive.google.com/drive/folders/1YsPpHNZboZAPdXyJDJbu4P9VAJFE3hJP?usp=sharing" />

        <Button text="Electronics" href="https://drive.google.com/drive/folders/1n1yaZMp784tCQtXv0bIJ0tHVzuaq7pKb?usp=sharing" />

        <Button text="Physics" href="https://drive.google.com/drive/folders/1TWDTNyOG3ydA2cryAkZVDNmlgnvxua4F?usp=sharing" />

        <Button text="Mathematics-II" href="https://drive.google.com/drive/folders/1QmE0GCmXchMP4cNcC3P5jOE5jpVN1jJM?usp=sharing" />

>>>>>>> 22248c587155444ba981ffab25353db7e3389cb4
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
        <Button 
         target="_blank"

          text={<><FaCode className="mr-3 text-2xl" />C-Programming</>} 
          href="https://drive.google.com/drive/folders/1He2zY8SmkSOtzGrQ_Wm5ZDxMs7MygS5p?usp=sharing" 
        />
        <Button 
         target="_blank"

          text={<><FaShieldAlt className="mr-3 text-2xl" />Cyber Security</>} 
          href="https://drive.google.com/drive/folders/1YsPpHNZboZAPdXyJDJbu4P9VAJFE3hJP?usp=sharing" 
        />
        <Button 
         target="_blank"

          text={<><FaPlug className="mr-3 text-2xl" />Electronics</>} 
          href="https://drive.google.com/drive/folders/1n1yaZMp784tCQtXv0bIJ0tHVzuaq7pKb?usp=sharing" 
        />
        <Button 
         target="_blank"

          text={<><FaAtom className="mr-3 text-2xl" />Physics</>} 
          href="https://drive.google.com/drive/folders/1TWDTNyOG3ydA2cryAkZVDNmlgnvxua4F?usp=sharing" 
        />
        <Button 
         target="_blank"

          text={<><FaCalculator className="mr-3 text-2xl" />Mathematics-II</>} 
          href="https://drive.google.com/drive/folders/1QmE0GCmXchMP4cNcC3P5jOE5jpVN1jJM?usp=sharing" 
        />
      </div>

      {/* FlexBoxAds Section */}
      <FlexBoxAds />
    </div>
  );
};

export default Page;
