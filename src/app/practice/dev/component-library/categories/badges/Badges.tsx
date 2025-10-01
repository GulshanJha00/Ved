"use client";
import React from "react";
import ComponentPreviewCard from "../../shared/ComponentPreviewCard";

const BadgesPage = () => {
  return (
    <div className="p-4 md:p-8 min-h-screen bg-[#f3f4f6]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Badges</h1>

      <ComponentPreviewCard title="Badge Variations">
        <span className="bg-blue-500 text-white px-2 py-1 rounded-full">Blue</span>
        <span className="bg-green-500 text-white px-2 py-1 rounded-full">Green</span>
        <span className="bg-red-500 text-white px-2 py-1 rounded-full">Red</span>
        <span className="bg-yellow-400 text-black px-2 py-1 rounded-full">Yellow</span>
      </ComponentPreviewCard>
    </div>
  );
};

export default BadgesPage;
