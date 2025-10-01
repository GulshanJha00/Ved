"use client";
import React from "react";
import ComponentPreviewCard from "../../shared/ComponentPreviewCard";
import Link from "next/link";

const NavigationPage = () => {
  return (
    <div className="p-4 md:p-8 min-h-screen bg-[#f3f4f6]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Navigation</h1>

      <ComponentPreviewCard title="Navbar Links">
        <nav className="flex gap-4">
          <Link href="#" className="text-blue-500 hover:underline">Home</Link>
          <Link href="#" className="text-blue-500 hover:underline">About</Link>
          <Link href="#" className="text-blue-500 hover:underline">Contact</Link>
        </nav>
      </ComponentPreviewCard>

      <ComponentPreviewCard title="Sidebar Links">
        <div className="flex flex-col gap-2">
          <Link href="#" className="p-2 bg-white rounded-md shadow hover:bg-gray-100">Dashboard</Link>
          <Link href="#" className="p-2 bg-white rounded-md shadow hover:bg-gray-100">Settings</Link>
          <Link href="#" className="p-2 bg-white rounded-md shadow hover:bg-gray-100">Profile</Link>
        </div>
      </ComponentPreviewCard>
    </div>
  );
};

export default NavigationPage;
