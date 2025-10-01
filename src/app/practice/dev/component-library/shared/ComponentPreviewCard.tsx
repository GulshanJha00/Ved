"use client";
import React, { useState } from "react";

interface ComponentPreviewCardProps {
  title: string;
  children: React.ReactNode;
  codeSnippet?: string;
}

const ComponentPreviewCard: React.FC<ComponentPreviewCardProps> = ({ title, children, codeSnippet }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (codeSnippet) {
      navigator.clipboard.writeText(codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition w-full">
      <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg">
        {title}
      </h3>


      {/* Component preview */}
      <div className="flex flex-wrap gap-3 mb-4">{children}</div>

      {/* Code snippet section */}
      {codeSnippet && (
        <div className="relative group">
          <pre className="bg-gray-200 p-3 rounded text-sm overflow-x-auto shadow-sm">
            {codeSnippet}
          </pre>
          <button
            onClick={handleCopy}
            className={`absolute top-2 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>


      )}
    </div>
  );
};

export default ComponentPreviewCard;
