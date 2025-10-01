"use client";
import React, { useState } from "react";
import Sidebar from "@/components/components-Library/Sidebar";

interface Alert {
  title: string;
  description: string;
  code: string;
  element: React.ReactNode;
}

const ComponentPreviewAlert: React.FC<Alert> = ({ element, code }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition group">
      {element}

      {/* Toggle Code Button */}
      <button
        className="mt-3 text-blue-500 text-sm hover:underline self-start"
        onClick={() => setShowCode(!showCode)}
      >
        {showCode ? "Hide Code" : "Show Code"}
      </button>

      {/* Code Snippet */}
      {showCode && (
        <div className="relative mt-2">
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            {code}
          </pre>
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition bg-blue-200 hover:bg-blue-300 px-2 py-1 rounded text-xs"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
};

const alerts: Alert[] = [
  {
    title: "Success Alert",
    description: "Green background for success messages.",
    code: `<div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100">
  ✅ Success! Your action was completed successfully.
</div>`,
    element: (
      <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100">
        ✅ Success! Your action was completed successfully.
      </div>
    ),
  },
  {
    title: "Error Alert",
    description: "Red background for errors.",
    code: `<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100">
  ❌ Error! Something went wrong.
</div>`,
    element: (
      <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100">
        ❌ Error! Something went wrong.
      </div>
    ),
  },
  {
    title: "Warning Alert",
    description: "Yellow background for warnings.",
    code: `<div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-100">
  ⚠️ Warning! Please check your inputs.
</div>`,
    element: (
      <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-100">
        ⚠️ Warning! Please check your inputs.
      </div>
    ),
  },
  {
    title: "Info Alert",
    description: "Blue background for information.",
    code: `<div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-100">
  ℹ️ Info: This is some informational message.
</div>`,
    element: (
      <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-100">
        ℹ️ Info: This is some informational message.
      </div>
    ),
  },

  // --- EXTRA VARIANTS ---
  {
    title: "Dismissable Alert",
    description: "Alert with close button.",
    code: `<div className="flex items-center justify-between p-4 mb-4 text-sm text-red-800 bg-red-100 rounded-lg">
  <span>❌ Error! Something went wrong.</span>
  <button className="ml-4 text-red-600 hover:text-red-900">✖</button>
</div>`,
    element: (
      <div className="flex items-center justify-between p-4 mb-4 text-sm text-red-800 bg-red-100 rounded-lg">
        <span>❌ Error! Something went wrong.</span>
        <button className="ml-4 text-red-600 hover:text-red-900">✖</button>
      </div>
    ),
  },
  {
    title: "Gradient Alert",
    description: "Cool gradient background alert.",
    code: `<div className="p-4 mb-4 text-sm text-white rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
  🌈 Gradient Alert! Stylish and modern.
</div>`,
    element: (
      <div className="p-4 mb-4 text-sm text-white rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
        🌈 Gradient Alert! Stylish and modern.
      </div>
    ),
  },
  {
    title: "Outline Alert",
    description: "Minimal outlined alert.",
    code: `<div className="p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg">
  🔔 Outline Alert! Minimal but clear.
</div>`,
    element: (
      <div className="p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg">
        🔔 Outline Alert! Minimal but clear.
      </div>
    ),
  },
  {
    title: "Animated Alert",
    description: "Alert with bounce animation.",
    code: `<div className="p-4 mb-4 text-sm text-white bg-indigo-500 rounded-lg animate-bounce">
  🚀 Animated Alert! Look at me bounce.
</div>`,
    element: (
      <div className="p-4 mb-4 text-sm text-white bg-indigo-500 rounded-lg animate-bounce">
        🚀 Animated Alert! Look at me bounce.
      </div>
    ),
  },
  
  {
    title: "Icon Left Alert",
    description: "Alert with an icon on the left.",
    code: `<div className="flex items-center p-4 mb-4 text-sm text-green-800 bg-green-100 rounded-lg">
  <span className="mr-2">✅</span>
  <span>Success! Operation completed.</span>
</div>`,
    element: (
      <div className="flex items-center p-4 mb-4 text-sm text-green-800 bg-green-100 rounded-lg">
        <span className="mr-2">✅</span>
        <span>Success! Operation completed.</span>
      </div>
    ),
  },
];

const AlertsPage = () => {
  return (
    <div className="h-max w-screen bg-[#e7f7db]">
      <div className="w-full flex h-screen">
        <Sidebar />
        <div className="p-4 mt-10 md:p-8 w-full bg-[#f3f4f6] overflow-auto">
          <h2 className="text-3xl font-bold mb-6 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:rounded mt-1">
            Alerts Library
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alerts.map((alert, idx) => (
              <ComponentPreviewAlert
                key={idx}
                element={alert.element}
                code={alert.code}
                title={alert.title}
                description={alert.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsPage;
