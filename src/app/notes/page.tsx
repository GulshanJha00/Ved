"use client";
import React from "react";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar/Navbar";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#f4f1e1] via-[#d8c9a3] to-[#bfa77e] animate-gradient flex justify-center items-center flex-wrap gap-6 py-8 ">
        <Button text="1st Year" href="/first" />
        <Button text="2nd Year" href="/second" />
        <Button text="3rd Year" href="/third" />
        <Button text="4th Year" href="/fourth" />
      </div>
    </div>
  );
};

export default Page;
