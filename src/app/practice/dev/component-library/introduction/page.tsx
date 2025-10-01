"use client";
import Sidebar from "@/components/components-Library/Sidebar";
import React from "react";
import Link from "next/link";

const Introduction = () => {
  const categories = [
    "Buttons",
    "Cards",
    "Forms",
    "Modals",
    "Alerts",
    "Tables",
    "Badges",
    "Navigations",
  ];

  return (
    <div className="h-max w-screen bg-[#f0f4f8]">
      <div className="flex h-screen w-full">
        <Sidebar />

        <div className="w-[90%] overflow-auto h-full pt-20 pl-6 pr-6">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Component Library
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Explore our clean, reusable, and customizable UI components
              built with Tailwind CSS. Quickly integrate them into your
              projects for faster development and consistent design.
            </p>
          </div>

          {/* Features Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                title="Reusable Components"
                description="Pre-built components for efficiency and consistency."
              />
              <FeatureCard
                title="Fully Customizable"
                description="Easily modify styles and behaviors to fit your needs."
              />
              <FeatureCard
                title="Tailwind Powered"
                description="Built with Tailwind CSS for seamless integration."
              />
              <FeatureCard
                title="Optimized for Performance"
                description="Lightweight, responsive, and easy to use."
              />
              <FeatureCard
                title="Dark Mode Support"
                description="Easily switch between light and dark modes."
              />
              <FeatureCard
                title="Regular Updates"
                description="New components and features added frequently."
              />
            </div>
          </section>

          {/* Categories Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Component Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {categories.map((category, idx) => (
                <Link
                  key={idx}
                  href={`/practice/dev/component-library/categories/${category.toLowerCase()}`}
                  className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl hover:bg-blue-50 transition"
                >
                  <span className="text-xl font-medium text-gray-800">
                    {category}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Optional Footer / Info Section */}
          <section className="mb-12 text-center text-gray-600">
            <p>
              Start exploring the components by clicking any category above.
              All components are ready to use and fully customizable with Tailwind CSS.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Introduction;
