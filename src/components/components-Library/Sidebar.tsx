import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-[15%] pt-20 pl-4 border-black border-r-[1px] overflow-auto h-full bg-[#69DDFF]">
      <h1 className="text-xl font-bold">Getting Started</h1>
      <ul defaultChecked className="flex flex-col gap-2 pl-4 text-gray-800 font-medium">
        <Link href={"/practice/dev/component-library/introduction"}><li>Introduction</li></Link>
        <Link href={"/practice/dev/component-library/categories/alerts"}><li>Alerts</li></Link>
        <Link href={"/practice/dev/component-library/categories/buttons"}><li>Buttons</li></Link>
         <Link href={"/practice/dev/component-library/categories/badges"}><li>Badges</li></Link>
        <Link href={"/practice/dev/component-library/categories/cards"}><li>Cards</li></Link>
      </ul>
    </div>
  )
}

export default Sidebar
