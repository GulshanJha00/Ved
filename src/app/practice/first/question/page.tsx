"use client";
import React from "react";
import FlexBoxAds from "@/components/flexbox/FlexBoxAds";
import QuestionBox from "@/components/questionBox/QuestionBox";

const Page = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 flex-col justify-center items-center py-16 px-6 space-y-12">
      <h1 className="text-4xl font-bold text-white"><span className="text-yellow-300">Python</span> Practice Questions</h1>
      <p className="text-lg font-semibold text-gray-100 md:text-2xl">
        These questions are curated with the help of your favorite teachers to help you learn and grow!
      </p>
      
      {/* Table Container */}
      <QuestionBox/>

      <FlexBoxAds />
    </div>
  );
};

export default Page;
