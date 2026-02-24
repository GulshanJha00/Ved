"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/Navbar/Navbar";
import { FaCode, FaComments, FaCubes, FaPaintBrush, FaThLarge, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const devChallenges = [
  { title: "Flexbox Battle", icon: FaCubes, link: "/flexbox-game", p: "Master CSS Flexbox with interactive coding challenges." },
  { title: "Grid Challenge", icon: FaThLarge, link: "/practice/dev/grid", p: "Learn CSS Grid with structured hands-on challenges." },
  { title: "Component Library", icon: FaCode, link: "/practice/dev/component-library", p: "Browse and build reusable UI components with Tailwind and React." },
  { title: "DSA Practice", icon: FaPaintBrush, link: "/practice/dsa", p: "Recreate Figma designs to sharpen your frontend skills." },
  { title: "Interview Prep", icon: FaComments, link: "/practice/interview", p: "Join discussions, collaborate, and solve coding challenges together." },
];

export default function NavbarWrapper() {
    const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const path2 = pathname.startsWith("/practice/first/");
  if (path2) return <Navbar />;

  const pathName = pathname.startsWith("/practice");
  const pathName2 = pathname.startsWith("/flexbox-game");

  if (pathName || pathName2) return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="flex justify-between items-center py-4 px-4 sm:px-8">
        <Link href={"/practice"}>
          <h1 className="text-xl font-bold">Ved Labs</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6">
          {devChallenges.map((item, index) => (
            <li key={index}>
              <Link href={item.link} className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <item.icon className="text-lg" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col bg-black lg:hidden w-full text-center py-4 gap-4">
          {devChallenges.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="flex justify-center items-center gap-2 hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="text-lg" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );

  return <Navbar />;
}
