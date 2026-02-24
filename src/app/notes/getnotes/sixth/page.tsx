"use client";
import React from "react";
import Link from "next/link";
import FlexBoxAds from "@/components/flexbox/FlexBoxAds";
import { FaCode } from "react-icons/fa";

const Page = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 flex flex-col justify-center items-center py-16 px-6 space-y-12">
        
        {/* Title */}
        <div className="text-center w-full max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Course Materials
          </h1>
          <p className="text-xl font-bold text-white opacity-80 mt-4 max-w-xl mx-auto">
            Notes uploaded here are from seniors. This year’s notes will be added soon
          </p>
        </div>

        {/* Single Button */}
        <Link href="../subject/fsd">
          <div className="cursor-pointer bg-white text-purple-700 font-bold text-xl px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition flex items-center">
            <FaCode className="mr-3 text-2xl" />
            Fullstack Development
          </div>
        </Link>

        <FlexBoxAds />
      </div>
    </div>
  );
};

export default Page;