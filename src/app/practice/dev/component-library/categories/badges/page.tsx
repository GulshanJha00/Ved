"use client";
import React, { useState } from "react";
import Sidebar from "@/components/components-Library/Sidebar";

interface Badge {
  title: string;
  description: string;
  code: string;
  element: React.ReactNode;
}

const ComponentPreviewBadge: React.FC<Badge> = ({ element, code }) => {
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

const badges: Badge[] = [
  {
    title: "Primary Badge",
    description: "Blue badge for primary labels.",
    code: `<span className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
  Primary
</span>`,
    element: (
      <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
        Primary
      </span>
    ),
  },
  {
    title: "Success Badge",
    description: "Green badge for success.",
    code: `<span className="px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded">
  Success
</span>`,
    element: (
      <span className="px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded">
        Success
      </span>
    ),
  },
  {
    title: "Warning Badge",
    description: "Yellow badge for warnings.",
    code: `<span className="px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded">
  Warning
</span>`,
    element: (
      <span className="px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded">
        Warning
      </span>
    ),
  },
  {
    title: "Error Badge",
    description: "Red badge for errors.",
    code: `<span className="px-3 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded">
  Error
</span>`,
    element: (
      <span className="px-3 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded">
        Error
      </span>
    ),
  },
  {
    title: "Outline Badge",
    description: "Badge with outline style.",
    code: `<span className="px-3 py-1 text-xs font-semibold text-blue-500 border border-blue-500 rounded">
  Outline
</span>`,
    element: (
      <span className="px-3 py-1 text-xs font-semibold text-blue-500 border border-blue-500 rounded">
        Outline
      </span>
    ),
  },
  {
    title: "Gradient Badge",
    description: "Fancy gradient badge.",
    code: `<span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
  Gradient
</span>`,
    element: (
      <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
        Gradient
      </span>
    ),
  },
  {
    title: "Pill Badge",
    description: "Rounded pill-shaped badge.",
    code: `<span className="px-4 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full">
  Pill Badge
</span>`,
    element: (
      <span className="px-4 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full">
        Pill Badge
      </span>
    ),
  },
  {
    title: "Icon Badge",
    description: "Badge with emoji/icon.",
    code: `<span className="px-3 py-1 text-xs font-semibold text-white bg-teal-500 rounded flex items-center gap-1">
  🔔 Notify
</span>`,
    element: (
      <span className="px-3 py-1 text-xs font-semibold text-white bg-teal-500 rounded flex items-center gap-1">
        🔔 Notify
      </span>
    ),
  },
  {
    title: "Dot Badge",
    description: "Tiny dot styled badge (for notifications).",
    code: `<span className="relative flex h-3 w-3">
  <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 animate-ping"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
</span>`,
    element: (
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
      </span>
    ),
  },
  {
  title: "Online Status Badge",
  description: "Dot with pulsing animation and text.",
  code: `<span className="flex items-center gap-2">
  <span className="relative flex h-3 w-3">
    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 animate-ping"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
  </span>
  <span className="text-xs font-medium text-green-600">Online</span>
</span>`,
  element: (
    <span className="flex items-center gap-2">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
      </span>
      <span className="text-xs font-medium text-green-600">Online</span>
    </span>
  ),
},
{
  title: "Notification Count Badge",
  description: "Red bouncing badge with number.",
  code: `<span className="relative inline-flex items-center">
  <span className="px-2 py-0.5 text-xs font-bold text-white bg-red-600 rounded-full animate-bounce">
    5
  </span>
</span>`,
  element: (
    <span className="relative inline-flex items-center">
      <span className="px-2 py-0.5 text-xs font-bold text-white bg-red-600 rounded-full animate-bounce">
        5
      </span>
    </span>
  ),
},
{
  title: "Glowing Badge",
  description: "Badge with glowing shadow animation.",
  code: `<span className="px-3 py-1 text-xs font-semibold text-white bg-purple-600 rounded-full shadow-lg animate-pulse">
  New
</span>`,
  element: (
    <span className="px-3 py-1 text-xs font-semibold text-white bg-purple-600 rounded-full shadow-lg animate-pulse">
      New
    </span>
  ),
},
{
  title: "Rotating Icon Badge",
  description: "Badge with rotating icon.",
  code: `<span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-blue-600 border border-blue-600 rounded-full">
  <span className="inline-block animate-spin">⏳</span> Loading
</span>`,
  element: (
    <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-blue-600 border border-blue-600 rounded-full">
      <span className="inline-block animate-spin">⏳</span> Loading
    </span>
  ),
},
{
  title: "Live Badge",
  description: "Red ping background with text.",
  code: `<span className="relative inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded-full">
  <span className="absolute -top-1 -left-1 h-5 w-5 rounded-full bg-red-400 opacity-75 animate-ping"></span>
  🔴 Live
</span>`,
  element: (
    <span className="relative inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded-full">
      <span className="absolute -top-1 -left-1 h-5 w-5 rounded-full bg-red-400 opacity-75 animate-ping"></span>
      🔴 Live
    </span>
  ),
},

];

const BadgesPage = () => {
  return (
    <div className="h-max w-screen bg-[#e7f7db]">
      <div className="w-full flex h-screen">
        <Sidebar />
        <div className="p-4 mt-10 md:p-8 w-full bg-[#e7f7db] overflow-auto">
          <h2 className="text-3xl font-bold mb-6 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:rounded mt-1">
            Badges Library
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map((badge, idx) => (
              <ComponentPreviewBadge
                key={idx}
                element={badge.element}
                code={badge.code}
                title={badge.title}
                description={badge.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgesPage;
