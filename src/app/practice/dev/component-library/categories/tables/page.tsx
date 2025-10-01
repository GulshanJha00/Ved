"use client";
import React, { useState } from "react";
import Sidebar from "@/components/components-Library/Sidebar";

interface Table {
  title: string;
  description: string;
  code: string;
  element: React.ReactNode;
}

const ComponentPreviewTable: React.FC<Table> = ({ element, code }) => {
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

// Table examples
const tables: Table[] = [
  // 1. Table with Serial Numbers
{
  title: "Serial Number Table",
  description: "Table with automatic serial numbers.",
  code: `<table className="w-full border border-gray-300 rounded">
  <thead>
    <tr className="bg-gray-200">
      <th className="p-2 border">#</th>
      <th className="p-2 border">Name</th>
      <th className="p-2 border">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-2 border">1</td>
      <td className="p-2 border">John</td>
      <td className="p-2 border">95</td>
    </tr>
    <tr>
      <td className="p-2 border">2</td>
      <td className="p-2 border">Alice</td>
      <td className="p-2 border">88</td>
    </tr>
  </tbody>
</table>`,
  element: (
    <table className="w-full border border-gray-300 rounded">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">#</th>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">1</td>
          <td className="p-2 border">John</td>
          <td className="p-2 border">95</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Alice</td>
          <td className="p-2 border">88</td>
        </tr>
      </tbody>
    </table>
  ),
},

// 2. Gradient Header Table
{
  title: "Gradient Header Table",
  description: "Table with a gradient header.",
  code: `<table className="w-full border border-gray-300 rounded">
  <thead>
    <tr className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <th className="p-2 border">Product</th>
      <th className="p-2 border">Price</th>
      <th className="p-2 border">Stock</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-2 border">Laptop</td>
      <td className="p-2 border">$1200</td>
      <td className="p-2 border">25</td>
    </tr>
    <tr>
      <td className="p-2 border">Phone</td>
      <td className="p-2 border">$800</td>
      <td className="p-2 border">50</td>
    </tr>
  </tbody>
</table>`,
  element: (
    <table className="w-full border border-gray-300 rounded">
      <thead>
        <tr className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
          <th className="p-2 border">Product</th>
          <th className="p-2 border">Price</th>
          <th className="p-2 border">Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Laptop</td>
          <td className="p-2 border">$1200</td>
          <td className="p-2 border">25</td>
        </tr>
        <tr>
          <td className="p-2 border">Phone</td>
          <td className="p-2 border">$800</td>
          <td className="p-2 border">50</td>
        </tr>
      </tbody>
    </table>
  ),
},

// 3. Table with Row Colors Alternating + Hover
{
  title: "Striped Hover Table",
  description: "Alternating row colors with hover effect.",
  code: `<table className="w-full border border-gray-300 rounded">
  <thead>
    <tr className="bg-purple-500 text-white">
      <th className="p-2 border">Name</th>
      <th className="p-2 border">Department</th>
      <th className="p-2 border">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-white hover:bg-purple-50">
      <td className="p-2 border">Alice</td>
      <td className="p-2 border">HR</td>
      <td className="p-2 border">$5000</td>
    </tr>
    <tr className="bg-purple-50 hover:bg-purple-100">
      <td className="p-2 border">Bob</td>
      <td className="p-2 border">IT</td>
      <td className="p-2 border">$6000</td>
    </tr>
  </tbody>
</table>`,
  element: (
    <table className="w-full border border-gray-300 rounded">
      <thead>
        <tr className="bg-purple-500 text-white">
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Department</th>
          <th className="p-2 border">Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white hover:bg-purple-50">
          <td className="p-2 border">Alice</td>
          <td className="p-2 border">HR</td>
          <td className="p-2 border">$5000</td>
        </tr>
        <tr className="bg-purple-50 hover:bg-purple-100">
          <td className="p-2 border">Bob</td>
          <td className="p-2 border">IT</td>
          <td className="p-2 border">$6000</td>
        </tr>
      </tbody>
    </table>
  ),
},

// 4. Table with Scale/Progress Bar
{
  title: "Progress Table",
  description: "Table with skill progress bars.",
  code: `<table className="w-full border border-gray-300 rounded">
  <thead>
    <tr className="bg-indigo-500 text-white">
      <th className="p-2 border">Skill</th>
      <th className="p-2 border">Level</th>
      <th className="p-2 border">Progress</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-2 border">JavaScript</td>
      <td className="p-2 border">Advanced</td>
      <td className="p-2 border">
        <div className="w-full bg-gray-200 h-3 rounded">
          <div className="bg-green-500 h-3 rounded" style={{ width: '90%' }}></div>
        </div>
      </td>
    </tr>
    <tr>
      <td className="p-2 border">React</td>
      <td className="p-2 border">Intermediate</td>
      <td className="p-2 border">
        <div className="w-full bg-gray-200 h-3 rounded">
          <div className="bg-blue-500 h-3 rounded" style={{ width: '70%' }}></div>
        </div>
      </td>
    </tr>
  </tbody>
</table>`,
  element: (
    <table className="w-full border border-gray-300 rounded">
      <thead>
        <tr className="bg-indigo-500 text-white">
          <th className="p-2 border">Skill</th>
          <th className="p-2 border">Level</th>
          <th className="p-2 border">Progress</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">JavaScript</td>
          <td className="p-2 border">Advanced</td>
          <td className="p-2 border">
            <div className="w-full bg-gray-200 h-3 rounded">
              <div className="bg-green-500 h-3 rounded" style={{ width: '90%' }}></div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="p-2 border">React</td>
          <td className="p-2 border">Intermediate</td>
          <td className="p-2 border">
            <div className="w-full bg-gray-200 h-3 rounded">
              <div className="bg-blue-500 h-3 rounded" style={{ width: '70%' }}></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  ),
},

// 5. Table with Alternating Colors + Rounded Cells
{
  title: "Rounded Cell Table",
  description: "Table with rounded cells and alternating background colors.",
  code: `<table className="w-full border-collapse border border-gray-300">
  <thead>
    <tr className="bg-pink-400 text-white">
      <th className="p-3 border rounded-tl-lg">ID</th>
      <th className="p-3 border">Name</th>
      <th className="p-3 border rounded-tr-lg">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-pink-50">
      <td className="p-2 border">1</td>
      <td className="p-2 border">Emma</td>
      <td className="p-2 border">78</td>
    </tr>
    <tr className="bg-pink-100">
      <td className="p-2 border">2</td>
      <td className="p-2 border">Liam</td>
      <td className="p-2 border">85</td>
    </tr>
  </tbody>
</table>`,
  element: (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-pink-400 text-white">
          <th className="p-3 border rounded-tl-lg">ID</th>
          <th className="p-3 border">Name</th>
          <th className="p-3 border rounded-tr-lg">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-pink-50">
          <td className="p-2 border">1</td>
          <td className="p-2 border">Emma</td>
          <td className="p-2 border">78</td>
        </tr>
        <tr className="bg-pink-100">
          <td className="p-2 border">2</td>
          <td className="p-2 border">Liam</td>
          <td className="p-2 border">85</td>
        </tr>
      </tbody>
    </table>
  ),
},
]

const TablesPage = () => {
  return (
    <div className="h-max w-screen bg-[#e7f7db]">
      <div className="w-full flex h-screen">
        <Sidebar />
        <div className="p-4 mt-10 md:p-8 w-full bg-[#e7f7db] overflow-auto">
          <h2 className="text-3xl font-bold mb-6 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:rounded mt-1">
            Tables Library
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tables.map((table, idx) => (
              <ComponentPreviewTable
                key={idx}
                element={table.element}
                code={table.code}
                title={table.title}
                description={table.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablesPage;