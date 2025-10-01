import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-16 right-4 z-50 md:hidden p-2 bg-blue-400 text-white rounded-md shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      <div
        className={`
          fixed top-0 left-0 w-64 z-50 md:z-40 h-full bg-[#69DDFF] pt-20 pl-4 md:w-[15%] 
          border-r-[1px] border-black overflow-auto transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative
        `}
      >
        <h1 className="text-xl font-bold mb-6">Getting Started</h1>
        <ul className="flex flex-col gap-2 pl-0 md:pl-4 text-gray-800 font-medium">
          <Link href={"/practice/dev/component-library/introduction"}><li>Introduction</li></Link>
          <Link href={"/practice/dev/component-library/categories/alerts"}><li>Alerts</li></Link>
          <Link href={"/practice/dev/component-library/categories/badges"}><li>Badges</li></Link>
          <Link href={"/practice/dev/component-library/categories/buttons"}><li>Buttons</li></Link>
          <Link href={"/practice/dev/component-library/categories/cards"}><li>Cards</li></Link>
          <Link href={"/practice/dev/component-library/categories/forms"}><li>Forms</li></Link>
          <Link href={"/practice/dev/component-library/categories/modals"}><li>Modals</li></Link>
          <Link href={"/practice/dev/component-library/categories/navigations"}><li>Navigation</li></Link>
          <Link href={"/practice/dev/component-library/categories/tables"}><li>Tables</li></Link>
        </ul>
      </div>

      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
