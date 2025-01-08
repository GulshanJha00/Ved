"use client";
import React from "react";
import Button from "@/components/Button";
import { FaCogs, FaAtom, FaPlug, FaCalculator, FaLaptopCode } from "react-icons/fa";
import FlexBoxAds from "@/components/flexbox/FlexBoxAds";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient flex flex-col justify-center items-center py-16 px-6 space-y-12">
      {/* Title Section */}
      <div className="text-center w-full max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
          Course Materials
        </h1>
        <p className="text-xl text-white opacity-80 mt-4 max-w-xl mx-auto">
          Access the course material for various subjects. Click on the buttons to open the Google Drive links.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
        <Button 
         target="_blank"

          text={<><FaCogs className="mr-3 text-2xl" />CAED</>} 
          href="https://drive.google.com/drive/folders/1w-x2dPdnbZDIJxmU3wtaZAL8zb3H1utq?usp=sharing" 
        />
        <Button 
         target="_blank"

          text={<><FaAtom className="mr-3 text-2xl" />Chemistry</>} 
          href="https://drive.google.com/drive/folders/12ryTRVMEkI1xkwh5CMsKkI4JI_4hI6r7?usp=sharing" 
        />
        <Button 
         target="_blank"

          text={<><FaPlug className="mr-3 text-2xl" />Electrical</>} 
          href="https://drive.google.com/drive/folders/1HYnGQgROWK7pQINSP0TbeD61nvc3Cege?usp=sharing" 
        />
        <Button 
         target="_blank"

          text={<><FaCalculator className="mr-3 text-2xl" />Mathematics</>} 
          href="https://drive.google.com/drive/folders/1hOSKP7WVqGwnsk4yARCBmt81WS2NnjMK?usp=sharing" 
        />
        <Button 
         target="_blank"

          text={<><FaLaptopCode className="mr-3 text-2xl" />Python</>} 
          href="https://drive.google.com/drive/folders/1rwu3e3GeC67XUWpyTbUUzR1DEGeD-SnG?usp=sharing" 
        />
      </div>
      <FlexBoxAds/>
    </div>
  );
};

export default Page;
