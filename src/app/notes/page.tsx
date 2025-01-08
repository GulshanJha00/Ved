"use client";
import React from "react";
import Button from "@/components/Button";
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaClipboardList, FaUniversity } from "react-icons/fa";
import FlexBoxAds from "@/components/flexbox/FlexBoxAds";

const Page = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 flex flex-col justify-center items-center py-16 px-6 space-y-12">
      {/* Title Section */}
      <div className="text-center w-full max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
          Select Your Semester
        </h1>
        <p className="text-xl text-white opacity-80 mt-4 max-w-xl mx-auto">
          Click on a button to access your semester&apos;s content and dive into your academic journey!
        </p>
=======
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#5a5f6f] via-[#294264] to-[#3e5777] animate-gradient  flex flex-row items-center justify-evenly flex-wrap max-xl:pt-32">
        <Button text="1st Semester" href="/first" />
        <Button text="2nd Semester" href="/second" />
        <Button text="3rd Semester" href="/third" />
        <Button text="4th Semester" href="/fourth" />
        <Button text="5th Semester" href="/fifth" />
>>>>>>> 22248c587155444ba981ffab25353db7e3389cb4
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
        <Button
        target=""  
          text={<><FaGraduationCap className="mr-3 text-2xl" />1st Semester</>} 
          href="/first" 
        />
        <Button
        target=""  
          text={<><FaBook className="mr-3 text-2xl" />2nd Semester</>} 
          href="/second" 
        />
        <Button
        target=""  
          text={<><FaChalkboardTeacher className="mr-3 text-2xl" />3rd Semester</>} 
          href="/third" 
        />
        <Button
        target=""  
          text={<><FaClipboardList className="mr-3 text-2xl" />4th Semester</>} 
          href="/fourth" 
        />
        <Button
        target=""  
          text={<><FaUniversity className="mr-3 text-2xl" />5th Semester</>} 
          href="/fifth" 
        />
      </div>

      
      <FlexBoxAds/>
    </div>
  );
};

export default Page;
