"use client";
import Link from 'next/link';
import React from 'react';
// import StyleButton1 from './../../components/StyleButton1';
import "./flexbox.css"
import FuturisticBackground from '@/components/questionBox/futuristicBg';

const Page = () => {


  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="relative w-full h-screen overflow-hidden">
        <FuturisticBackground />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rowdies-bold ">
                Welcome to <span className="border-b-4 rounded-sm">Ved Flex!</span>
              </span>
              <span className='text-xl block w-2/3 mx-auto font-sans font-normal my-6'>Ved Flex transforms learning Flexbox into an engaging adventure where you guide a character to its destination by writing the correct CSS properties. Each level introduces new Flexbox concepts, helping you understand layout alignment through real-time animations.</span>
            </h1>
            <Link href="./flexbox-game/level/level-1" className="rowdies-regular text-2xl md:text-xl text-blue-100 max-w-2xl mx-auto border-2 px-6 py-3 rounded-xl hover:scale-120">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;