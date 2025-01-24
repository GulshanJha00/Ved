"use client";
import React from "react";
import Link from "next/link";
import Block from "../Block";

const Homepage = () => {
  return (
    <>
      <div className="lg:pt-40 pt-20 w-full flex flex-col items-center pb-36 bg-[#731dad]">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-[#6bfbce] font-sans pl-8 sm:pl-16 lg:pl-32 mb-4 text-center">
          Find all your study material{" "}
          <div>free on {`<`}NIE VED{`/>`}</div>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl mb-8 pl-8 sm:pl-16 lg:pl-14 w-11/12 sm:w-3/4 lg:w-1/2 text-[#5bff1f] font-sans text-shadow-md text-center">
          Looking for notes? We&apos;ve got everything you need. Simplifying learning, one click at a time!
          
        </p>

        {/* Get Notes Link */}
        <div className="flex gap-7">

        <Link
          href="/notes"
          target="_blank"
          className="bg-white text-blue-700 border-2 border-blue-700 py-3 px-8 rounded-md text-lg sm:text-xl font-semibold hover:bg-blue-700 hover:text-white hover:border-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg shadow-xl focus:outline-none focus:ring-4 focus:ring-[#6a4c39]"
        >
          Get Notes
        </Link>

        <Link
          href="/practice"
          target="_blank"
          className="bg-white text-blue-700 border-2 border-blue-700 py-3 px-8 rounded-md text-lg sm:text-xl font-semibold hover:bg-blue-700 hover:text-white hover:border-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg shadow-xl focus:outline-none focus:ring-4 focus:ring-[#6a4c39]"
        >
          Practice
        </Link>
        </div>

        {/* Block Component */}
        <Block />
      </div>
    </>
  );
};

export default Homepage;
