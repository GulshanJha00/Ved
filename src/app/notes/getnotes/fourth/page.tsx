"use client";
import React from "react";
import Button from "@/components/Button";
import { FaCode, FaJava, FaDna, FaProjectDiagram, FaDatabase,FaBrain   } from "react-icons/fa";
import {TbMathSymbols} from "react-icons/tb"
import {FaPeopleRoof } from "react-icons/fa6"
import {GiMicrochip } from "react-icons/gi"
import FlexBoxAds from "@/components/flexbox/FlexBoxAds";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient flex flex-col justify-center items-center py-16 px-6 space-y-12">
      {/* Title Section */}
      <div className="text-center w-full max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
          Course Materials
        </h1>
        <p className="text-xl text-white opacity-80 mt-4 max-w-xl mx-auto">
          Access course materials for various subjects. Click on the buttons to open the Google Drive links.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
        <Button 
          text={<><FaCode className="mr-3 text-2xl" />ADA</>} 
           target="_blank"
           href="https://drive.google.com/drive/folders/1OiUocPtnIExDd8h0cQ19gABdWlEO9R1e?usp=sharing" 
        />
        <Button 
         target="_blank"
          text={<><FaJava className="mr-3 text-2xl" />Advanced Java</>} 
           href="https://drive.google.com/drive/folders/1IjkvmIyfzHYwyNW2kZs-mjWLjyMvk_VR?usp=sharing" 
        />
        <Button 
         target="_blank"
          text={<><FaDna className="mr-3 text-2xl" />Biology</>} 
           href="https://drive.google.com/drive/folders/1X_uqwc_SOG_I3Q1G_qbrjMLJ-Ov5cOW-?usp=sharing" 
        />
        <Button 
         target="_blank"
          text={<><FaProjectDiagram className="mr-3 text-2xl" />Graph Theory</>} 
           href="https://drive.google.com/drive/folders/1dzHn2vK4JezUMWTRRwtRwKSSoQqXaP7I?usp=sharing" 
        />
        <Button 
         target="_blank"
          text={<><FaDatabase className="mr-3 text-2xl" />DBMS</>} 
           href="https://drive.google.com/drive/folders/1UwIEXIEvofZVAmnMqpy2t9G5ATI6_kGs?usp=sharing" 
        />
        <Button 
         target="_blank"
          text={<><TbMathSymbols  className="mr-3 text-2xl" />Discrete Maths</>} 
           href="https://drive.google.com/drive/u/3/folders/1-LvS4qFvSlE-LwatfiF_iD18u4eOkDqa"/>
        <Button 
         target="_blank"
          text={<><FaBrain  className="mr-3 text-2xl" />AI</>} 
           href="https://drive.google.com/drive/u/3/folders/11UcTnBlrzbUKw3FZu0FT4PnXFwxxzkgG"/>
        <Button 
         target="_blank"
          text={<><FaPeopleRoof  className="mr-3 text-2xl" />UHVC</>} 
           href="https://drive.google.com/drive/u/3/folders/1bpTpEPc9lThCCN1gkfeEAtmg_irq8nTa"/>
        <Button 
         target="_blank"
          text={<><GiMicrochip className="mr-3 text-2xl" />Microcontrollers</>} 
           href="https://drive.google.com/drive/u/3/folders/1vZ4O8guhq2Lr0oBSriUv2PnaOb7zTxYT"/>
      </div>

      {/* FlexBoxAds Section */}
      <FlexBoxAds />
    </div>
  );
};

export default Page;
