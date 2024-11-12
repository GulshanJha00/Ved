"use client";
import React from "react";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar/Navbar";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#f4f1e1] via-[#d8c9a3] to-[#bfa77e] animate-gradient flex justify-center items-center flex-wrap gap-6 py-8 ">
        <Button text="1st Semester" href="/first" />
        <Button text="2nd Semester" href="/second" />
        <Button text="3rd Semester" href="/third" />
        <Button text="4th Semester" href="/fourth" />
        <Button text="5th Semester" href="/fifth" />
        {/* <Button text="6th Semester" href="/sixth" />
        <Button text="7th Semester" href="/seventh" />
        <Button text="8th Semester" href="/eighth" /> */}
      </div>
    </div>
  );
};

export default Page;
