"use client";
import React from "react";
import Button from "@/components/Button";
import FlexBoxAds from "@/components/flexbox/FlexBoxAds";
import { FaCloud, FaNetworkWired, FaListAlt, FaProjectDiagram, FaBrain } from "react-icons/fa";

const Page = () => {
  return (
    <div>
      {/* Navbar Section */}
      
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
      </div>
    </div>
  );
};

export default Page;
