"use client";
import React from "react";
import Button from "@/components/Button";
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaClipboardList, FaUniversity } from "react-icons/fa";
import FlexBoxAds from "@/components/flexbox/FlexBoxAds";
import Head from "next/head";

const Page = () => {
  return (
    <>
    <Head>
        <title>NIE VED | Semester Notes & Study Material</title>
        <meta
          name="description"
          content="Access NIE Mysore semester-wise notes, study materials, and guides for all engineering subjects. Simplify your learning with NIE VED."
        />
         <meta
          name="keywords"
          content="NIE VED, NIEVED, nieved, nie ved, college notes, DSA, aptitude, interview preparation, placement resources, coding sheet"
        />
        <meta property="og:title" content="NIE VED | Semester Notes" />
        <meta
          property="og:description"
          content="Browse semester-wise notes for NIE Mysore students. Study smarter with curated notes and guides."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nieved.vercel.app/notes" />
        <meta property="og:image" content="/VED.png" />
        <link rel="canonical" href="https://nieved.vercel.app/notes" />

        
          
      </Head>
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 flex flex-col justify-center items-center py-16 px-6 space-y-12">
      {/* Title Section */}
      <div className="text-center w-full max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
          Select Your Semester
        </h1>
        <p className="text-xl text-white opacity-80 mt-4 max-w-xl mx-auto">
          Click on a button to access your semester&apos;s content and dive into your academic journey!
        </p>
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
        <Button
        target=""  
          text={<><FaGraduationCap className="mr-3 text-2xl" />1st Semester</>} 
          href="/notes/getnotes/first" 
        />
        <Button
        target=""  
          text={<><FaBook className="mr-3 text-2xl" />2nd Semester</>} 
          href="/notes/getnotes/second" 
        />
        <Button
        target=""  
          text={<><FaChalkboardTeacher className="mr-3 text-2xl" />3rd Semester</>} 
          href="/notes/getnotes/third" 
        />
        <Button
        target=""  
          text={<><FaClipboardList className="mr-3 text-2xl" />4th Semester</>} 
          href="/notes/getnotes/fourth" 
        />
        <Button
        target=""  
          text={<><FaUniversity className="mr-3 text-2xl" />5th Semester</>} 
          href="/notes/getnotes/fifth" 
        />
      </div>

      
      <FlexBoxAds/>
    </div>
    </>

  );
};

export default Page;
