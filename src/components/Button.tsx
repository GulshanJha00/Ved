'use client';
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <div className=" w-40 h-40 md:w-52 md:h-52 bg-[#745d3d] text-white rounded-lg hover:bg-[#5d4a32] transition-colors duration-300 flex items-center justify-center text-md sm:text-xl font-semibold text-center cursor-pointer mb-8">
        {text}
      </div>
    </Link>
  );
};

export default Button;
