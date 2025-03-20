import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-[15%] pt-20 pl-4 border-black border-r-[1px] overflow-auto h-full bg-[#69DDFF]">
            <h1 className="text-xl font-bold">Getting Started</h1>
            <ul>
            <Link href={"./component-library/introduction"}><li>Introduction</li></Link>
              <li></li>
            </ul>
    </div>
  )
}

export default Sidebar
