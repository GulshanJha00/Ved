"use client";
import Link from 'next/link';
import React from 'react';
import StyleButton1 from '@/components/StyleButton1';
import "../../../flexbox-game/flexbox.css"

const Page = () => {

  const myText = "Explore";

  return (
    <div className="flex h-full sm:h-[calc(100vh-5rem)] justify-center items-center testClass text-white ">
        <div className='text-center'>
          <h1 className='md:text-5xl  text-3xl rowdies-bold my-4'>Welcome to <span className='head-animated-flexbox bg-clip-text text-transparent border-b-4 rounded-sm'>GridX</span></h1>
          <div className='rowdies-regular md:w-2/3 mx-auto leading-8 max-md:text-sm'> "Ved Grid" transforms learning CSS Grid into an exciting puzzle adventure where you strategically place elements on a grid-based map. Each level introduces new Grid properties, helping you master layout techniques through interactive challenges and real-time visual feedback.</div>
          <div>
            <Link href="./grid/level/level-1" className='text-md md:text-xl' >
            <StyleButton1 textToDisplay={myText}/>
            </Link>
          </div>
        </div> 
    </div>
  );
}

export default Page;