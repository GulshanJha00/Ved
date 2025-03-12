import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Links */}
        <div className="flex space-x-6 mb-4">
          <a href="https://nieved.vercel.app" target="_blank" className="text-xl hover:text-gray-400 transition">
            <FaGlobe />
          </a>
          <a href="https://twitter.com" target="_blank" className="text-xl hover:text-gray-400 transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-xl hover:text-gray-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" className="text-xl hover:text-gray-400 transition">
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm opacity-70">© {new Date().getFullYear()} NIEVed. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
