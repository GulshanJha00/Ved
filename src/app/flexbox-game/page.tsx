"use client";
import Link from 'next/link';
import React from 'react';
import StyleButton1 from './../../components/StyleButton1';
import "./flexbox.css"

const Page = () => {

  const myText = "Explore";

  return (
    <div className="flex h-[88.4vh] justify-center items-center testClass text-white ">
        <div className='text-center'>
          <h1 className='text-5xl rowdies-bold my-4'>Welcome to <span className='head-animated-flexbox bg-clip-text text-transparent border-b-4 rounded-sm'>Ved Flex!</span></h1>
          <div className='rowdies-regular w-2/3 mx-auto leading-8'>Ved Flex transforms learning Flexbox into an engaging adventure where you guide a character to its destination by writing the correct CSS properties. Each level introduces new Flexbox concepts, helping you understand layout alignment through real-time animations.</div>
          <div>
            <Link href="./flexbox-game/level/level-1" className='text-xl' >
            <StyleButton1 textToDisplay={myText}/>
            </Link>
          </div>
        </div> 
    </div>
  );
}

export default Page;