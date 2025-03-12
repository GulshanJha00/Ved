"use client"
import Link from "next/link";
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const ComingSoon = () => {



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center p-6">
      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn">🚀 Coming Soon</h1>
      <p className="text-lg md:text-2xl opacity-80">Something amazing is on its way. Stay tuned!</p>

      
      {/* Social Links */}
      <div className="flex space-x-6 mt-8">
        <Link href="https://x.com/GulshanJha0" target="_blank" className="text-2xl hover:text-gray-300 transition">
          <FaTwitter />
        </Link>
        <Link href="https://www.linkedin.com/in/nie-ved-521765332/" target="_blank" className="text-2xl hover:text-gray-300 transition">
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/GulshanJha00" target="_blank" className="text-2xl hover:text-gray-300 transition">
          <FaGithub />
        </Link>
      </div>

      
    </div>
  );
};

export default ComingSoon;
