"use client";

import Sidebar from "@/components/components-Library/Sidebar";
import Link from "next/link";
import React from "react";

const componentFeatures = [
  {
    title: "Reusable Components",
    desc: "Pre-built components for efficiency and consistency.",
  },
  {
    title: "Fully Customizable",
    desc: "Modify styles and behaviors to fit your needs.",
  },
  {
    title: "Tailwind Powered",
    desc: "Built with Tailwind CSS for seamless integration.",
  },
  {
    title: "Optimized for Performance",
    desc: "Lightweight, responsive, and easy to use.",
  },
  {
    title: "Dark Mode Support",
    desc: "Easily switch between light and dark modes.",
  },
  {
    title: "Regular Updates",
    desc: "New components and features added frequently.",
  },
];

const componentCategories = [
  "Buttons",
  "Cards",
  "Forms",
  "Modals",
  "Alerts",
  "Tables",
  "Badges",
  "Navigation",
];

const livePreviewButtons = [
  { label: "Primary", style: "bg-blue-500 text-white" },
  { label: "Secondary", style: "bg-gray-300 text-gray-800" },
  { label: "Outline", style: "border border-gray-500 text-gray-700" },
  { label: "Success", style: "bg-green-500 text-white" },
  { label: "Danger", style: "bg-red-500 text-white" },
];

const ComponentLibraryPage = () => {
  return (
    <div className="h-max w-screen bg-[#e7f7db] flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto min-h-screen p-4 md:p-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 font-serif">
            Component Library
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            Browse and copy ready-to-use UI components with Tailwind CSS. Enhance your development workflow with clean, customizable elements.
          </p>
        </div>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 font-serif">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {componentFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Component Categories */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 font-serif">
            Component Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {componentCategories.map((cat, idx) => {
              const route = `/components-library/categories/${cat.toLowerCase()}`;
              return (
                <Link
                  key={idx}
                  href={route}
                  className="p-4 bg-white shadow-md rounded-lg text-center cursor-pointer hover:bg-blue-100 transition"
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Live Preview */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 font-serif">
            Live Preview
          </h2>
          <div className="flex flex-wrap gap-4">
            {livePreviewButtons.map((btn, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-md font-medium transition hover:scale-105 ${btn.style}`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Input and form preview */}
          <div className="mt-6 flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Text input"
              className="border border-gray-400 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Textarea"
              className="border border-gray-400 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComponentLibraryPage;
