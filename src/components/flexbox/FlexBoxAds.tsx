import React from 'react';
import Link from 'next/link';

const FlexBoxAds = () => {
  return (
    <div className="mt-16 bg-gradient-to-r from-blue-500 to-[#731dad] w-full rounded-lg shadow-xl text-center relative pb-12">
      <h2 className="text-3xl font-bold text-white mb-6 pt-12">
        Meet <span className="text-yellow-300">Minitheo</span> :- The Lightweight AI Coder!
      </h2>
      <p className="text-lg text-white opacity-90 mb-6">
        Generate websites effortlessly with `Minitheo`. Just describe your idea, and let AI do the rest!
      </p>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <p className="text-gray-800 font-semibold mb-4">
          Transform your ideas into reality. Try `Minitheo` today!
        </p>
        <Link
          href="https://minitheo.quadropic.com"
          target="_blank"
          className="bg-white text-blue-700 border-2 border-blue-700 py-3 px-8 rounded-md text-xl font-semibold mb-2 
                      hover:bg-blue-700 hover:text-white hover:border-white transition duration-300 ease-in-out 
                      transform hover:scale-105 hover:shadow-lg shadow-xl focus:outline-none focus:ring-4 focus:ring-[#6a4c39]"
        >
          Try Minitheo
        </Link>
      </div>

      {/* Social Media Tags */}
      <p className="text-white mt-6 text-sm">
        Tag us: <br />
        <Link href="https://x.com/quadropic" target="_blank" className="underline">x.com/quadropic</Link> | 
        <Link href="https://linkedin.com/company/quadropic" target="_blank" className="underline ml-2">linkedin.com/company/quadropic</Link>
      </p>
    </div>
  );
};

export default FlexBoxAds;
