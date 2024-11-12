import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header>
  <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
      <a className="logo" href="#">
        <h3 className="font-bold text-2xl">LOGO</h3>
      </a>
      <input type="checkbox" id="check" />

      <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Contact</a></li>

        <label className="close-menu">X</label>
      </span>

      <label className="open-menu">Menu</label>
    </ul>
  </nav>
</header>
    </div>
  )
}

export default Navbar
