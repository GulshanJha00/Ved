"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/Navbar/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname()

  // Hide Navbar if the route is "/practice"
  const pathName = pathname.startsWith("/practice")
  if (pathName) return null

  return <Navbar />
}
