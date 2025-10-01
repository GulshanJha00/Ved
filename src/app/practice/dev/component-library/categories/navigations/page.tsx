"use client";
import React, { useState } from "react";
import Sidebar from "@/components/components-Library/Sidebar";

interface NavItem {
  title: string;
  description: string;
  code: string;
  element: React.ReactNode;
}

const ComponentPreviewNav: React.FC<NavItem> = ({ element, code }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition relative group">
      {element}

      {/* Show/Hide Code Button */}
      <button
        className="mt-3 text-blue-500 text-sm hover:underline self-start"
        onClick={() => setShowCode(!showCode)}
      >
        {showCode ? "Hide Code" : "Show Code"}
      </button>

      {/* Code with Copy */}
      {showCode && (
        <div className="relative mt-2">
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            {code}
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-gray-200 px-2 py-1 rounded text-xs hover:bg-gray-300"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
};

const navItems: NavItem[] = [
  // 1. Simple Horizontal Nav
  {
    title: "Simple Horizontal Nav",
    description: "Basic horizontal navigation bar.",
    code: `<nav className="flex gap-4 bg-gray-100 p-3 rounded">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`,
    element: (
      <nav className="flex gap-4 bg-gray-100 p-3 rounded">
        <a href="#" className="text-blue-500 hover:underline">Home</a>
        <a href="#" className="text-gray-700 hover:underline">About</a>
        <a href="#" className="text-gray-700 hover:underline">Contact</a>
      </nav>
    ),
  },

  // 2. Horizontal Nav with Hover Effect
  {
    title: "Hover Highlight Nav",
    description: "Links change background color on hover.",
    code: `<nav className="flex gap-2 bg-gray-50 p-2 rounded shadow">
  <a href="#">Dashboard</a>
  <a href="#">Projects</a>
  <a href="#">Team</a>
</nav>`,
    element: (
      <nav className="flex gap-2 bg-gray-50 p-2 rounded shadow">
        <a href="#" className="px-3 py-1 rounded hover:bg-blue-100">Dashboard</a>
        <a href="#" className="px-3 py-1 rounded hover:bg-blue-100">Projects</a>
        <a href="#" className="px-3 py-1 rounded hover:bg-blue-100">Team</a>
      </nav>
    ),
  },

  // 3. Vertical Sidebar Nav
  {
    title: "Vertical Nav",
    description: "Vertical sidebar navigation.",
    code: `<nav className="flex flex-col gap-2 bg-gray-100 p-4 rounded w-48">
  <a href="#">Home</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</nav>`,
    element: (
      <nav className="flex flex-col gap-2 bg-gray-100 p-4 rounded w-48">
        <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">Services</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>
      </nav>
    ),
  },

  // 4. Nav with Active Link
  {
    title: "Active Link Nav",
    description: "Highlight the current page in nav.",
    code: `<nav className="flex gap-4">
  <a href="#" className="active">Home</a>
  <a href="#">About</a>
</nav>`,
    element: (
      <nav className="flex gap-4 bg-gray-50 p-3 rounded">
        <a href="#" className="px-3 py-1 rounded bg-blue-500 text-white">Home</a>
        <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">About</a>
        <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">Contact</a>
      </nav>
    ),
  },

  // 5. Nav with Icons
  {
    title: "Nav with Icons",
    description: "Navigation links with emojis/icons.",
    code: `<nav className="flex gap-4">
  <a href="#">🏠 Home</a>
  <a href="#">📁 Projects</a>
  <a href="#">📞 Contact</a>
</nav>`,
    element: (
      <nav className="flex gap-4 bg-gray-100 p-3 rounded">
        <a href="#" className="flex items-center gap-1 text-gray-700 hover:text-blue-500">🏠 Home</a>
        <a href="#" className="flex items-center gap-1 text-gray-700 hover:text-blue-500">📁 Projects</a>
        <a href="#" className="flex items-center gap-1 text-gray-700 hover:text-blue-500">📞 Contact</a>
      </nav>
    ),
  },

  // 6. Gradient Nav
  {
    title: "Gradient Nav",
    description: "Navigation bar with gradient background.",
    code: `<nav className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded flex gap-4 text-white">
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>`,
    element: (
      <nav className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded flex gap-4 text-white">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    ),
  },

  // 7. Sticky Top Nav
  {
    title: "Sticky Top Nav",
    description: "Navigation bar sticks to top on scroll.",
    code: `<nav className="sticky top-0 bg-white shadow p-3 flex gap-4">
  <a href="#">Home</a>
  <a href="#">Blog</a>
</nav>`,
    element: (
      <nav className="sticky top-0 bg-white shadow p-3 flex gap-4">
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>
    ),
  },

  // 8. Centered Nav
  {
    title: "Centered Nav",
    description: "Navigation items centered horizontally.",
    code: `<nav className="flex justify-center gap-6 p-3 bg-gray-50 rounded">
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>`,
    element: (
      <nav className="flex justify-center gap-6 p-3 bg-gray-50 rounded">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
      </nav>
    ),
  },

  // 9. Nav with Dropdown
  {
    title: "Dropdown Nav",
    description: "Hover to reveal dropdown menu items.",
    code: `<nav className="flex gap-4 p-3 bg-gray-50 rounded">
  <div className="relative group">
    <a href="#">Services</a>
    <div className="absolute hidden group-hover:block bg-white shadow rounded p-2">
      <a href="#">Design</a>
      <a href="#">Development</a>
    </div>
  </div>
</nav>`,
    element: (
      <nav className="flex gap-4 p-3 bg-gray-50 rounded">
        <a href="#">Home</a>
        <div className="relative group">
          <a href="#" className="hover:text-blue-500">Services ▼</a>
          <div className="absolute hidden group-hover:block bg-white shadow rounded p-2 mt-1">
            <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">Design</a>
            <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">Development</a>
          </div>
        </div>
        <a href="#">Contact</a>
      </nav>
    ),
  },

  // 10. Responsive Hamburger Nav
  {
    title: "Responsive Nav",
    description: "Collapsible navigation for mobile screens.",
    code: `<nav className="flex justify-between items-center p-3 bg-gray-50 rounded">
  <div>Logo</div>
  <button>☰</button>
</nav>`,
    element: (
      <nav className="flex justify-between items-center p-3 bg-gray-50 rounded">
        <div className="font-bold">Logo</div>
        <div className="hidden md:flex gap-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <button className="md:hidden text-xl">☰</button>
      </nav>
    ),
  },

  // 11. Dark Mode Nav
  {
    title: "Dark Nav",
    description: "Navigation bar with dark theme.",
    code: `<nav className="bg-gray-800 p-3 flex gap-4 text-white">
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>`,
    element: (
      <nav className="bg-gray-800 p-3 flex gap-4 text-white rounded">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    ),
  },

  // 12. Nav with Badges
  {
    title: "Nav with Badges",
    description: "Navigation links with notification badges.",
    code: `<nav className="flex gap-4 p-3 bg-gray-50 rounded">
  <a href="#">Messages <span>3</span></a>
</nav>`,
    element: (
      <nav className="flex gap-4 p-3 bg-gray-50 rounded">
        <a href="#" className="flex items-center gap-1">Messages <span className="bg-red-500 text-white px-1 rounded-full text-xs">3</span></a>
        <a href="#" className="flex items-center gap-1">Notifications <span className="bg-blue-500 text-white px-1 rounded-full text-xs">5</span></a>
        <a href="#">Profile</a>
      </nav>
    ),
  },
  {
    title: "Dropdown Menu",
    description: "Hover to reveal submenu items.",
    code: `<div className="relative inline-block text-left">
  <button className="px-3 py-1 bg-blue-500 text-white rounded">Menu</button>
  <div className="absolute hidden mt-2 bg-white shadow-lg rounded group-hover:block">
    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
  </div>
</div>`,
    element: (
      <div className="relative inline-block text-left group">
        <button className="px-3 py-1 bg-blue-500 text-white rounded">Menu</button>
        <div className="absolute hidden mt-2 bg-white shadow-lg rounded group-hover:block">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
        </div>
      </div>
    ),
  },
  {
    title: "Fixed Navbar",
    description: "Navbar fixed at the top of the page.",
    code: `<nav className="fixed top-0 left-0 w-full bg-gray-100 p-3 shadow z-50 flex justify-between">
  <div className="font-bold">Logo</div>
  <div className="flex gap-4">
    <a href="#" className="hover:underline">Home</a>
    <a href="#" className="hover:underline">About</a>
    <a href="#" className="hover:underline">Contact</a>
  </div>
</nav>`,
    element: (
      <nav className="fixed top-0 left-0 w-full bg-gray-100 p-3 shadow z-50 flex justify-between">
        <div className="font-bold">Fixed</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </nav>
    ),
  },
  {
    title: "Sticky Navbar",
    description: "Navbar sticks when scrolling.",
    code: `<nav className="sticky top-0 bg-gray-200 p-3 shadow flex justify-between">
  <div className="font-bold">Logo</div>
  <div className="flex gap-4">
    <a href="#" className="hover:underline">Home</a>
    <a href="#" className="hover:underline">About</a>
    <a href="#" className="hover:underline">Services</a>
  </div>
</nav>`,
    element: (
      <nav className="sticky top-0 bg-gray-200 p-3 shadow flex justify-between">
        <div className="font-bold">Sticky</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Services</a>
        </div>
      </nav>
    ),
  },
  {
    title: "Hamburger Menu",
    description: "Collapsible menu for mobile screens.",
    code: `<nav className="bg-gray-100 p-3 rounded flex justify-between items-center">
  <div className="font-bold">Logo</div>
  <div className="md:hidden">☰</div>
  <div className="hidden md:flex gap-4">
    <a href="#" className="hover:underline">Home</a>
    <a href="#" className="hover:underline">About</a>
    <a href="#" className="hover:underline">Contact</a>
  </div>
</nav>`,
    element: (
      <nav className="bg-gray-100 p-3 rounded flex justify-between items-center">
        <div className="font-bold">Hamburger</div>
        <div className="md:hidden">☰</div>
        <div className="hidden md:flex gap-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </nav>
    ),
  },
];

const NavigationPage = () => {
  return (
    <div className="h-max w-screen bg-[#e7f7db]">
      <div className="w-full flex h-screen">
        <Sidebar />
        <div className="p-4 mt-10 md:p-8 w-full bg-[#f3f4f6] overflow-auto">
          <h2 className="text-3xl font-bold mb-6 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:rounded mt-1">
            Navigation Library
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {navItems.map((nav, idx) => (
              <ComponentPreviewNav
                key={idx}
                element={nav.element}
                code={nav.code}
                title={nav.title}
                description={nav.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationPage;
