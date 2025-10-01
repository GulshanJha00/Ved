"use client";

import React, { useState } from "react";
import { FaCubes, FaThLarge, FaCode, FaPaintBrush, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const devChallenges = [
  { 
    title: "Flexbox Battle", 
    icon: FaCubes, 
    link: "/flexbox-game",
    p: "Master CSS Flexbox with interactive coding challenges."
  },
  { 
    title: "Grid Challenge", 
    icon: FaThLarge, 
    link: "/practice/dev/grid",
    p: "Learn CSS Grid with structured hands-on challenges."
  },
  { 
    title: "Component Library", 
    icon: FaCode, 
    link: "/practice/dev/component-library",
    p: "Browse and build reusable UI components with Tailwind and React."
  },
  { 
    title: "Clone Figma Design", 
    icon: FaPaintBrush, 
    link: "https://clonechamp.vercel.app/",
    p: "Recreate Figma designs to sharpen your frontend skills."
  }
];

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
        <div className="flex justify-between items-center py-4 px-4 md:px-8">
          <h1 className="text-xl font-bold">Development Space</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {devChallenges.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <item.icon className="text-lg" />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col bg-black/95 md:hidden text-white py-4 px-4 gap-4">
            {devChallenges.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.link} 
                  className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="text-lg" />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Main Content */}
      <div className="flex flex-col min-h-screen bg-[#ffdd00] w-screen py-28 px-4 md:px-16">
        {/* Title Section */}
        <div className="w-full max-w-4xl mb-12 h-full mx-auto text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-black tracking-tight">
            Development Space
          </h1>
          <p className="font-sans text-gray-700 mt-4 max-w-xl mx-auto md:mx-0">
            Hands-on development challenges and projects to improve your coding skills
          </p>
        </div>

        {/* Challenge Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {devChallenges.map((challenge, index) => (
            <Link href={challenge.link} key={index}>
              <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center text-center hover:scale-105 h-64 transition-transform">
                <challenge.icon className="text-6xl sm:text-7xl lg:text-8xl text-gray-800 mb-4 opacity-70" />
                <h2 className="text-xl sm:text-2xl font-bold">{challenge.title}</h2>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">{challenge.p}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
