"use client";
import React from "react";
import Button from "@/components/Button";
import FlexBoxAds from "@/components/flexbox/FlexBoxAds";
import { FaCloud, FaNetworkWired, FaListAlt, FaProjectDiagram, FaBrain } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";

const Page = () => {
  return (
    <div>
      {/* Navbar Section */}
      
      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient flex flex-col justify-center items-center py-16 px-6 space-y-12">
        {/* Title Section */}
        <div className="text-center w-full max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
            Course Materials
          </h1>
          <p className="text-xl font-bold text-white opacity-80 mt-4 max-w-xl mx-auto">
            Notes uploaded here are from seniors. This year’s notes will be added soon
          </p>
        </div>

        {/* Buttons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          <Button 
         target="_blank"

            text={<><FaCloud className="mr-3 text-2xl" />Cloud Computing</>} 
            href="https://drive.google.com/drive/u/5/folders/1OoozU9cg4x6kEWYasJwB1AY_0iGBEOiH" 
          />
          <Button
         target="_blank"

            text={<><FaNetworkWired className="mr-3 text-2xl" />Computer Networks</>} 
            href="https://drive.google.com/drive/u/5/folders/1jSsZlyb5c6UdY-ucVLhtbUUGkyvjlJaQ" 
          />
          <Button 
         target="_blank"

            text={<><FaListAlt className="mr-3 text-2xl" />AI</>} 
            href="https://drive.google.com/drive/u/5/folders/1wYA09Qf7uUtY3SdzlJVcemV1aohkvuLo" 
          />
          <Button 
         target="_blank"

            text={<><FaProjectDiagram className="mr-3 text-2xl" />SEPM</>} 
            href="https://drive.google.com/drive/u/5/folders/1a9273KVyuYBaX_2ei6cvjM6-CzbHqT1p" 
          />
          <Button 
         target="_blank"

            text={<><FaBrain className="mr-3 text-2xl" />ToC</>} 
            href="https://drive.google.com/drive/u/5/folders/1_GxB3K0I1SKrmhGkBzv9-OFbe-u6ppMD" 
          />
          <Button 
         target="_blank"

            text={<><GiProcessor  className="mr-3 text-2xl" />RM & IPR</>} 
            href="https://drive.google.com/drive/folders/1pWfPpFxb_BqLFtmSyf0EPmQNS0xQF-yC?usp=drive_link" 
          />
        </div>

        {/* FlexBoxAds Section */}
        <FlexBoxAds />
      </div>
    </div>
  );
};

export default Page;
