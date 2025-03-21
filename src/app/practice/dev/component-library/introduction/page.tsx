"use client";
import Sidebar from "@/components/components-Library/Sidebar";
import React from "react";

const Introduction = () => {
  return (
    <div className="h-max w-screen bg-[#e7f7db] ">
      <div className="w-full flex h-screen ">
        <Sidebar />

        <div className="w-[90%] overflow-auto h-full pt-20 pl-4">
          <h1 className="text-5xl font-bold mb-4">Component Library</h1>
          <p className="text-lg text-gray-700 mb-8">
            Browse and copy ready-to-use UI components with Tailwind CSS. Enhance your development workflow with clean, customizable elements.
          </p>
          
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">Reusable Components</h2>
              <p className="text-gray-600 mt-2">Pre-built components for efficiency and consistency.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">Fully Customizable</h2>
              <p className="text-gray-600 mt-2">Modify styles and behaviors to fit your needs.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">Tailwind Powered</h2>
              <p className="text-gray-600 mt-2">Built with Tailwind CSS for seamless integration.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">Optimized for Performance</h2>
              <p className="text-gray-600 mt-2">Lightweight, responsive, and easy to use.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">Dark Mode Support</h2>
              <p className="text-gray-600 mt-2">Easily switch between light and dark modes.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">Regular Updates</h2>
              <p className="text-gray-600 mt-2">New components and features added frequently.</p>
            </div>
          </div>

          {/* Component Categories Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Component Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-white shadow-md rounded-lg text-center cursor-pointer hover:bg-blue-100">
                Buttons
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg text-center cursor-pointer hover:bg-blue-100">
                Cards
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg text-center cursor-pointer hover:bg-blue-100">
                Forms
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg text-center cursor-pointer hover:bg-blue-100">
                Modals
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg text-center cursor-pointer hover:bg-blue-100">
                Alerts
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg text-center cursor-pointer hover:bg-blue-100">
                Tables
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg text-center cursor-pointer hover:bg-blue-100">
                Badges
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg text-center cursor-pointer hover:bg-blue-100">
                Navigation
              </div>
            </div>
          </div>

          {/* Live Preview Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Live Preview</h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Primary</button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Secondary</button>
              <button className="border border-gray-500 text-gray-700 px-4 py-2 rounded-md">Outline</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">Success</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">Danger</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
