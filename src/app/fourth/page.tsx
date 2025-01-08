"use client";
import React from "react";
import Button from "@/components/Button";
import { FaCode, FaJava, FaDna, FaProjectDiagram, FaDatabase } from "react-icons/fa";
import FlexBoxAds from "@/components/flexbox/FlexBoxAds";

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
      <div className="min-h-screen bg-gradient-to-r from-[#5a5f6f] via-[#294264] to-[#3e5777] animate-gradient  flex flex-row items-center justify-evenly flex-wrap max-xl:pt-32">
        <Button text="ADA" href="https://drive.google.com/drive/folders/1OiUocPtnIExDd8h0cQ19gABdWlEO9R1e?usp=sharing" />

        <Button text="Advanced Java" href="https://drive.google.com/drive/folders/1IjkvmIyfzHYwyNW2kZs-mjWLjyMvk_VR?usp=sharing" />
        
        <Button text="Biology" href="https://drive.google.com/drive/folders/1X_uqwc_SOG_I3Q1G_qbrjMLJ-Ov5cOW-?usp=sharing" />

        <Button text="Graph Theory" href="https://drive.google.com/drive/folders/1dzHn2vK4JezUMWTRRwtRwKSSoQqXaP7I?usp=sharing" />

        <Button text="DBMS" href="https://drive.google.com/drive/folders/1UwIEXIEvofZVAmnMqpy2t9G5ATI6_kGs?usp=sharing" />

>>>>>>> 22248c587155444ba981ffab25353db7e3389cb4
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
        <Button 
          text={<><FaCode className="mr-3 text-2xl" />ADA</>} 
           target="_blank"
           href="https://drive.google.com/drive/folders/1OiUocPtnIExDd8h0cQ19gABdWlEO9R1e?usp=sharing" 
        />
        <Button 
         target="_blank"
          text={<><FaJava className="mr-3 text-2xl" />Advanced Java</>} 
           href="https://drive.google.com/drive/folders/1IjkvmIyfzHYwyNW2kZs-mjWLjyMvk_VR?usp=sharing" 
        />
        <Button 
         target="_blank"
          text={<><FaDna className="mr-3 text-2xl" />Biology</>} 
           href="https://drive.google.com/drive/folders/1X_uqwc_SOG_I3Q1G_qbrjMLJ-Ov5cOW-?usp=sharing" 
        />
        <Button 
         target="_blank"
          text={<><FaProjectDiagram className="mr-3 text-2xl" />Graph Theory</>} 
           href="https://drive.google.com/drive/folders/1dzHn2vK4JezUMWTRRwtRwKSSoQqXaP7I?usp=sharing" 
        />
        <Button 
         target="_blank"
          text={<><FaDatabase className="mr-3 text-2xl" />DBMS</>} 
           href="https://drive.google.com/drive/folders/1UwIEXIEvofZVAmnMqpy2t9G5ATI6_kGs?usp=sharing" 
        />
      </div>

      {/* FlexBoxAds Section */}
      <FlexBoxAds />
    </div>
  );
};

export default Page;
