'use client';
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <Link href={href} className='justify-center flex'>
      <div className="w-96 h-28 bg-[#745d3d] text-white rounded-lg hover:bg-[#5d4a32] transition-colors duration-300 flex items-center justify-center text-md sm:text-xl font-semibold text-center cursor-pointer mb-8">
        {text}
      </div>
    </Link>
  );
};

export default Button;
