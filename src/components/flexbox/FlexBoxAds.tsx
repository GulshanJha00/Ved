import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const FlexBoxAds = () => {
  return (
    <div className="mt-16 bg-gradient-to-r from-blue-500 to-[#731dad] w-full rounded-lg shadow-xl text-center relative pb-12">
          <h2 className="text-3xl font-bold text-white mb-6 pt-12">
            <span className="text-yellow-300">Learn Flexbox</span> with Fun!
          </h2>
          <p className="text-lg text-white opacity-90 mb-6">
            Master Flexbox by playing this interactive game! Build your layout
            skills while having a blast.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
            <p className="text-gray-800 font-semibold mb-4">
              Get started with Flexbox and level up your design skills!
            </p>
            <Link
              href="/flexbox-game"
              className="bg-white text-blue-700 border-2 border-blue-700 py-3 px-8 rounded-md text-xl font-semibold mb-2 
                                  hover:bg-blue-700 hover:text-white hover:border-white transition duration-300 ease-in-out 
                                  transform hover:scale-105 hover:shadow-lg shadow-xl focus:outline-none focus:ring-4 focus:ring-[#6a4c39]"
            >
              Start the Game
            </Link>
          </div>

          {/* Sticker Image */}
          <div className=" absolute top-[-10px] left-[-11px] lg:left-[-19px]">
          <Image
            height={50}
            width={50}
            src="/comingSoon.png" // Replace with the path to your sticker image
            alt="Flexbox Sticker"
            className="lg:w-44 lg:h-32 w-28 h-20 opacity-100"
          />
          <h1 className="hidden lg:block absolute top-[3.3rem] text-[#3dff2f] left-6 font-bold font-sans">COMING SOON</h1>
        </div>
        </div>
  )
}

export default FlexBoxAds
