"use client";

import React, { useState } from "react";

type ModuleMap = {
  [key: number]: string;
};

const modules: ModuleMap = {
  1: "https://drive.google.com/file/d/1tNADWnK5dSklU7dy2Y3FNnCrJpFZ33dC/preview",
  2: "https://drive.google.com/file/d/1Y5hgP84ZdWE2Vr6cwFNwMPeo6f98Amqw/preview",
  3: "https://drive.google.com/file/d/1ZSPWutRzQHMdl81onOMTh1OzYjFZ_ab2/preview",
  4: "https://drive.google.com/file/d/1nHWx8Jcc5_uvB8oN3bHOVqy7uLV1gThM/preview",
  5: "https://drive.google.com/file/d/1bYAWFiNyr2EbA6Yd3cwZP2W1Cl2G5759/preview",
};

const BCTPage: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<number>(1);

  const moduleNumbers = Object.keys(modules).map(Number);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-6 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Block Chain Technology
        </h1>
      </div>

      {/* Module Selector */}
      <div className="overflow-x-auto px-4 py-4">
        <div className="flex gap-3 min-w-max">
          {moduleNumbers.map((module) => (
            <button
              key={module}
              onClick={() => setSelectedModule(module)}
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition ${
                selectedModule === module
                  ? "bg-purple-600 text-white"
                  : "bg-white shadow text-gray-700"
              }`}
            >
              Module {module}
            </button>
          ))}
        </div>
      </div>

      {/* Iframe Section */}
      <div className="flex-1 px-4 pb-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <iframe
            src={modules[selectedModule]}
            className="w-full h-[75vh] sm:h-[80vh]"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
};

export default BCTPage;