"use client";
import Link from "next/link";
import React from "react";
import Button from "@/components/Button";
import { FaCode, FaJava, FaDna, FaProjectDiagram, FaDatabase, FaBrain } from "react-icons/fa";
import { TbMathSymbols } from "react-icons/tb"
import { FaPeopleRoof } from "react-icons/fa6"
import { GiMicrochip } from "react-icons/gi"
import FlexBoxAds from "@/components/flexbox/FlexBoxAds";

const Page = () => {
  return (

    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient flex flex-col justify-center items-center py-16 px-6 space-y-12">

      {/* Title */}
      <div className="text-center w-full max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Course Materials
        </h1>
        <p className="text-xl font-bold text-white opacity-80 mt-4 max-w-xl mx-auto">
    Access course materials for various subjects. Click on the buttons to open the Google Drive links.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
        <Link href="../subject/fsd">
          <div className="cursor-pointer bg-gray-200 text-purple-700 font-bold text-xl px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition flex items-center">
            <FaCode className="mr-3 text-2xl" />
            FSD
          </div>
        </Link>
        <Link href="../subject/bct">
          <div className="cursor-pointer bg-gray-200 text-purple-700 font-bold text-xl px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition flex items-center">
            <FaCode className="mr-3 text-2xl" />
            BCT
          </div>
        </Link>
        <Link target="_blank" href="https://drive.google.com/drive/u/5/folders/1xCGxc-c6zn-Zhbl5zOBp2tJCCXimtIZG">
          <div className="cursor-pointer bg-gray-200 text-purple-700 font-bold text-xl px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition flex items-center">
            <FaCode className="mr-3 text-2xl" />
            Machine Learning
          </div>
        </Link>

        <Link target="_blank" href="../subject/sadp">
          <div className="cursor-pointer bg-gray-200 text-purple-700 font-bold text-xl px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition flex items-center">
            <FaCode className="mr-3 text-2xl" />
            SADP
          </div>
        </Link>
      </div>


      <FlexBoxAds />
    </div>
  );
};

export default Page;