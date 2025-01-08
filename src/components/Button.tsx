'use client';
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string | JSX.Element;
  href: string;
  target: string
}

const Button: React.FC<ButtonProps> = ({ text, href,target }) => {
  return (
    <Link href={href} target={`${target}`} >
      <div className="w-auto py-3 px-6 md:w-auto md:py-4 md:px-8 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 flex items-center justify-center text-lg sm:text-xl font-semibold text-center cursor-pointer">
        {text}
      </div>
    </Link>
  );
};

export default Button;
