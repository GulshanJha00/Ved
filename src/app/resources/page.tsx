import React from "react";
import Link from "next/link";
import {
  FaLaptopCode,
  FaDatabase,
  FaRobot,
  FaArrowRight,
  FaPaintBrush,
  FaThLarge,
  FaCogs,
} from "react-icons/fa";

const page = () => {
  const resourceItem = [
    {
      title: "DSA Resources",
      description: "Learn Data Structures & Algorithms",
      gradient: "from-purple-500 to-pink-500",
      icon: FaDatabase,
      href: "/practice/dsa",
    },
    {
      title: "Web Dev Resources",
      description: "HTML, CSS, JavaScript & Next.js",
      gradient: "from-blue-500 to-cyan-500",
      icon: FaLaptopCode,
      href: "/practice/webdev",
    },
    {
      title: "Flexbox Mastery",
      description: "Master Flexbox layouts and design",
      gradient: "from-green-500 to-emerald-500",
      icon: FaPaintBrush,
      href: "/practice/dev/flexbox-game",
    },
    {
      title: "CSS Grid",
      description: "Responsive grid layouts for projects",
      gradient: "from-orange-500 to-yellow-500",
      icon: FaThLarge,
      href: "/practice/dev/grid",
    },
    {
      title: "Component Libraries",
      description: "UI frameworks like Tailwind & ShadCN",
      gradient: "from-indigo-500 to-purple-500",
      icon: FaCogs,
      href: "/practice/dev/component-library",
    },
    {
      title: "ML Resources",
      description: "Machine Learning & AI Projects",
      gradient: "from-pink-500 to-rose-500",
      icon: FaRobot,
      href: "/practice/ml",
    },
  ];

  return (
    <>
      <div className="relative h-1/3 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-8 px-8 mb-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/30">
            ✨ Learning Hub
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Explore Resources
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Master programming, algorithms, and modern web development with our curated collection of interactive resources
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Resource Grid */}
      <div className="grid mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {resourceItem.map((card, idx) => (
          <Link
            key={idx}
            href={card.href}
            className="group block border border-gray-300 relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
            />
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 shadow-lg`}
            >
              <card.icon className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{card.description}</p>
            <div
              className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${card.gradient} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:gap-3`}
            >
              Explore
              <FaArrowRight className="text-sm" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default page;
