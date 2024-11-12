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
      <div className="w-48 h-48 md:w-52 md:h-52 bg-[#745d3d] text-white rounded-lg hover:bg-[#5d4a32] transition-colors duration-300 flex items-center justify-center text-lg sm:text-xl font-semibold text-center cursor-pointer mt-28 lg:mt-10">
        {text}
      </div>
    </Link>
  );
};

export default Button;
