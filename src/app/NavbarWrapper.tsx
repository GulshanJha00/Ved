"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/Navbar/Navbar";
import { FaCode, FaComments, FaCubes, FaPaintBrush, FaThLarge } from "react-icons/fa";
import Link from "next/link";
const devChallenges = [
  { 
    title: "Flexbox Battle", 
    icon: FaCubes, 
    link: "/flexbox-game",
    p: "Master CSS Flexbox with interactive coding challenges."
  },
  { 
    title: "Grid Challenge", 
    icon: FaThLarge, 
    link: "/practice/dev/grid",
    p: "Learn CSS Grid with structured hands-on challenges."
  },
  { 
    title: "Component Library", 
    icon: FaCode, 
    link: "/practice/dev/component-library",
    p: "Browse and build reusable UI components with Tailwind and React."
  },
  { 
    title: "Clone Figma Design", 
    icon: FaPaintBrush, 
    link: "/practice/dev/figma-clone",
    p: "Recreate Figma designs to sharpen your frontend skills."
  },
  { 
    title: "ChatRoom", 
    icon: FaComments, 
    link: "/practice/dev/chatroom",
    p: "Join discussions, collaborate, and solve coding challenges together."
  },
];

export default function NavbarWrapper() {
  const pathname = usePathname()

  // Hide Navbar if the route is "/practice"
  const path2 = pathname.startsWith("/practice/first/")
  if(path2) return <Navbar/>
  const pathName = pathname.startsWith("/practice")
  if (pathName) return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
    <div className="flex justify-between items-center py-4 px-8">
      <Link href={"/practice"}><h1 className="text-xl font-bold">Ved Labs</h1></Link>
      <ul className="flex gap-6">
        {devChallenges.map((item, index) => (
          <li key={index}>
            <Link href={item.link} className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <item.icon className="text-lg" />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
  )

  return <Navbar />
}
