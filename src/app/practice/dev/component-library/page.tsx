"use client";

import Sidebar from "@/components/components-Library/Sidebar";
import Link from "next/link";
import React from "react";

const benefits = [
  "Ready-to-use Tailwind CSS components.",
  "Easy to copy and paste into your projects.",
  "Fully responsive and customizable.",
  "Save development time with pre-built UI.",
  "Consistent design across projects.",
  "Regular updates with new components.",
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

const ComponentLibraryPage = () => {
  return (
    <div className="h-max w-screen bg-[#e7f7db]">
      <div className="w-full flex h-screen">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 overflow-auto min-h-screen p-4 md:p-8">
          {/* Welcome Section */}
          <section className="my-10 md:my-12 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-serif">
              Welcome to NIE Ved&apos;s Component Library
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Explore a curated collection of ready-to-use Tailwind CSS components. Copy, paste, and customize to build beautiful and responsive web interfaces instantly.
            </p>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 font-serif text-center">
              Why Use This Library?
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, idx) => (
                <li
                  key={idx}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition flex items-center gap-3"
                >
                  <span className="text-blue-500 font-bold text-2xl">✓</span>
                  <span className="text-gray-700 font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* How to Use */}
          <section className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 font-serif text-center">
              How to Use
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
              <p className="text-gray-700 mb-4">
                Using the components is simple:
              </p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Navigate to the component category from the sidebar.</li>
                <li>Click on the desired component to view its code snippet.</li>
                <li>Copy the code and paste it directly into your project.</li>
                <li>Customize the styles as needed using Tailwind classes.</li>
              </ol>
            </div>
          </section>

          {/* Component Categories */}
          <section className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 font-serif text-center">
              Component Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {componentCategories.map((cat, idx) => {
                const route = `/components-library/categories/${cat.toLowerCase()}`;
                return (
                  <Link
                    key={idx}
                    href={route}
                    className="p-4 bg-white shadow-md rounded-lg text-center cursor-pointer hover:bg-blue-100 transition font-medium"
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Tips Section */}
          <section className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 font-serif text-center">
              Tips for Developers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="font-semibold mb-2">Consistency</h3>
                <p className="text-gray-700">Use components from the library to maintain a consistent look and feel across your app.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="font-semibold mb-2">Customization</h3>
                <p className="text-gray-700">You can override Tailwind classes to match your branding or design requirements.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="font-semibold mb-2">Responsive Design</h3>
                <p className="text-gray-700">All components are built to be mobile-first and fully responsive.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="font-semibold mb-2">Rapid Prototyping</h3>
                <p className="text-gray-700">Quickly assemble pages or dashboards using these ready-made components.</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 font-serif">
              Get Started Now
            </h2>
            <p className="text-gray-700 mb-6">
              Browse the sidebar to explore the full library. Copy and paste components into your project and speed up your development workflow.
            </p>
            <Link
              href="/practice/dev/component-library/categories/buttons"
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition font-medium"
            >
              Explore Buttons
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ComponentLibraryPage;
