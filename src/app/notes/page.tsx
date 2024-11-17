"use client";
import React from "react";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar/Navbar";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#5a5f6f] via-[#294264] to-[#3e5777] animate-gradient  flex flex-row items-center justify-evenly flex-wrap max-xl:pt-32">
        <Button text="1st Semester" href="/first" />
        <Button text="2nd Semester" href="/second" />
        <Button text="3rd Semester" href="/third" />
        <Button text="4th Semester" href="/fourth" />
        <Button text="5th Semester" href="/fifth" />
      </div>
    </div>
  );
};

export default Page;
