"use client";
import React from "react";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar/Navbar";
import FlexBoxAds from "@/components/flexbox/FlexBoxAds";
import { FaCloud, FaNetworkWired, FaListAlt, FaProjectDiagram, FaBrain } from "react-icons/fa";

const Page = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />
<<<<<<< HEAD
      
      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient flex flex-col justify-center items-center py-16 px-6 space-y-12">
        {/* Title Section */}
        <div className="text-center w-full max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
            Course Materials
          </h1>
          <p className="text-xl text-white opacity-80 mt-4 max-w-xl mx-auto">
            Click on the subject buttons to access the course materials and dive into your learning journey.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          <Button 
         target="_blank"

            text={<><FaCloud className="mr-3 text-2xl" />Cloud Computing</>} 
            href="/" 
          />
          <Button 
         target="_blank"

            text={<><FaNetworkWired className="mr-3 text-2xl" />Computer Networks</>} 
            href="/" 
          />
          <Button 
         target="_blank"

            text={<><FaListAlt className="mr-3 text-2xl" />Elective</>} 
            href="/" 
          />
          <Button 
         target="_blank"

            text={<><FaProjectDiagram className="mr-3 text-2xl" />SEPM</>} 
            href="/" 
          />
          <Button 
         target="_blank"

            text={<><FaBrain className="mr-3 text-2xl" />Theory Of Computation</>} 
            href="/" 
          />
        </div>

        {/* FlexBoxAds Section */}
        <FlexBoxAds />
=======
      <div className="min-h-screen bg-gradient-to-r from-[#5a5f6f] via-[#294264] to-[#3e5777] animate-gradient flex flex-row items-center justify-evenly flex-wrap max-xl:pt-32">
      <Button text="Cloud Computing" href="/" />
        <Button text="Computer Networks" href="/" />
        <Button text="Elective" href="/" />
        <Button text="SEPM" href="/" />
        <Button text="Theory Of Computation" href="/" />
>>>>>>> 22248c587155444ba981ffab25353db7e3389cb4
      </div>
    </div>
  );
};

export default Page;
