"use client";
import React from "react";
import ComponentPreviewCard from "../../shared/ComponentPreviewCard";
import Sidebar from "@/components/components-Library/Sidebar";

const ButtonsPage = () => {
  const buttons = [
    {
      title: "Primary",
      code: `<button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Primary</button>`,
      element: <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Primary</button>,
    },
    {
      title: "Success",
      code: `<button className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Success</button>`,
      element: <button className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Success</button>,
    },
    {
      title: "Danger",
      code: `<button className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Danger</button>`,
      element: <button className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Danger</button>,
    },
    {
      title: "Outline",
      code: `<button className="px-5 py-2 border border-gray-500 text-gray-700 rounded-lg hover:bg-gray-100 transition">Outline</button>`,
      element: <button className="px-5 py-2 border border-gray-500 text-gray-700 rounded-lg hover:bg-gray-100 transition">Outline</button>,
    },
    {
      title: "Gradient",
      code: `<button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition">Gradient</button>`,
      element: <button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition">Gradient</button>,
    },

    {
      title: "3D Press",
      code: `<button className="px-5 py-2 bg-indigo-500 text-white rounded-lg shadow-md active:translate-y-1 transition">3D Press</button>`,
      element: <button className="px-5 py-2 bg-indigo-500 text-white rounded-lg shadow-md active:translate-y-1 transition">3D Press</button>,
    },
    {
      title: "Pulse Effect",
      code: `<button className="px-5 py-2 bg-pink-500 text-white rounded-lg animate-pulse hover:animate-none transition">Pulse</button>`,
      element: <button className="px-5 py-2 bg-pink-500 text-white rounded-lg animate-pulse hover:animate-none transition">Pulse</button>,
    },
    {
      title: "Shadow Hover",
      code: `<button className="px-5 py-2 bg-teal-500 text-white rounded-lg shadow hover:shadow-xl transition">Shadow Hover</button>`,
      element: <button className="px-5 py-2 bg-teal-500 text-white rounded-lg shadow hover:shadow-xl transition">Shadow Hover</button>,
    },
    {
      title: "Rotate On Hover",
      code: `<button className="px-5 py-2 bg-orange-500 text-white rounded-lg transform hover:rotate-3 transition">Rotate</button>`,
      element: <button className="px-5 py-2 bg-orange-500 text-white rounded-lg transform hover:rotate-3 transition">Rotate</button>,
    },
    {
      title: "Bouncing Button",
      code: `<button className="px-5 py-2 bg-pink-500 text-white rounded-lg animate-bounce">Bounce</button>`,
      element: <button className="px-5 py-2 bg-pink-500 text-white rounded-lg animate-bounce">Bounce</button>,
    },
    {
      title: "Wiggle Button",
      code: `<button className="px-5 py-2 bg-green-500 text-white rounded-lg hover:animate-[wiggle_1s_ease-in-out_infinite]">Wiggle</button>`,
      element: <button className="px-5 py-2 bg-green-500 text-white rounded-lg hover:animate-[wiggle_1s_ease-in-out_infinite]">Wiggle</button>,
    },
    {
      title: "Scale Hover",
      code: `<button className="px-5 py-2 bg-yellow-500 text-white rounded-lg transform hover:scale-110 transition">Scale</button>`,
      element: <button className="px-5 py-2 bg-yellow-500 text-white rounded-lg transform hover:scale-110 transition">Scale</button>,
    },
    {
      title: "Border Animated",
      code: `<button className="px-5 py-2 text-purple-600 border-2 border-purple-600 rounded-lg relative overflow-hidden group">
  <span className="absolute inset-0 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
  <span className="relative group-hover:text-white transition-all duration-300">Border Animate</span>
</button>`,
      element: (
        <button className="px-5 py-2 text-purple-600 border-2 border-purple-600 rounded-lg relative overflow-hidden group">
          <span className="absolute inset-0 w-0 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
          <span className="relative group-hover:text-white transition-all duration-300">Border Animate</span>
        </button>
      ),
    },

    {
      title: "Confetti Button",
      code: `<button onClick={() => alert('🎉 Confetti!')} className="px-5 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">Confetti</button>`,
      element: (
        <button
          className="px-5 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
          onClick={() => alert("🎉 Confetti!")}
        >
          Confetti
        </button>
      ),
    },
    {
      title: "Toggle Color",
      code: `<button onClick={(e) => e.target.classList.toggle('bg-blue-500')} className="px-5 py-2 bg-green-500 text-white rounded-lg transition">Toggle Color</button>`,
      element: (
        <button
          className="px-5 py-2 bg-green-500 text-white rounded-lg transition"
          onClick={(e) => {
            const el = e.currentTarget;
            el.classList.toggle("bg-green-500");
            el.classList.toggle("bg-red-500");
          }}
        >
          Toggle Color
        </button>
      ),
    },
    {
      title: "Loader Button",
      code: `<button onClick={(e) => { e.target.innerText='Loading...'; setTimeout(() => e.target.innerText='Load',1000); }} className="px-5 py-2 bg-indigo-500 text-white rounded-lg transition">Load</button>`,
      element: (
        <button
          className="px-5 py-2 bg-indigo-500 text-white rounded-lg transition"
          onClick={(e) => {
            const btn = e.currentTarget;
            const original = btn.innerText;
            btn.innerText = "Loading...";
            setTimeout(() => (btn.innerText = original), 1200);
          }}
        >
          Load
        </button>
      ),
    },

    {
      title: "Grow On Click",
      code: `<button onClick={(e) => e.currentTarget.classList.add('scale-125')} className="px-5 py-2 bg-yellow-500 text-white rounded-lg transition">Grow</button>`,
      element: (
        <button
          className="px-5 py-2 bg-yellow-500 text-white rounded-lg transition"
          onClick={(e) => {
            const btn = e.currentTarget;
            btn.classList.add("scale-125");
            setTimeout(() => btn.classList.remove("scale-125"), 300);
          }}
        >
          Grow
        </button>
      ),
    },


  
  {
    title: "Slide Button",
    code: `<button onClick={(e)=>{ e.currentTarget.classList.add('translate-x-8'); setTimeout(()=>e.currentTarget.classList.remove('translate-x-8'),300); }} className="px-5 py-2 bg-teal-500 text-white rounded-lg transition transform">Slide</button>`,
    element: (
      <button
        className="px-5 py-2 bg-teal-500 text-white rounded-lg transition transform"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.add("translate-x-8");
          setTimeout(() => btn.classList.remove("translate-x-8"), 300);
        }}
      >
        Slide
      </button>
    ),
  },
  {
    title: "Spin & Grow",
    code: `<button onClick={(e)=>{ e.currentTarget.classList.add('animate-spin','scale-125'); setTimeout(()=>{ e.currentTarget.classList.remove('animate-spin','scale-125'); },600); }} className="px-5 py-2 bg-indigo-500 text-white rounded-lg transition transform">Spin & Grow</button>`,
    element: (
      <button
        className="px-5 py-2 bg-indigo-500 text-white rounded-lg transition transform"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.add("animate-spin", "scale-125");
          setTimeout(() => btn.classList.remove("animate-spin", "scale-125"), 600);
        }}
      >
        Spin & Grow
      </button>
    ),
  },
  {
    title: "Bounce On Click",
    code: `<button onClick={(e)=>e.currentTarget.classList.add('animate-bounce')} className="px-5 py-2 bg-red-500 text-white rounded-lg transition">Bounce</button>`,
    element: (
      <button
        className="px-5 py-2 bg-red-500 text-white rounded-lg transition"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.add("animate-bounce");
          setTimeout(() => btn.classList.remove("animate-bounce"), 600);
        }}
      >
        Bounce
      </button>
    ),
  },
  {
    title: "Pulse On Click",
    code: `<button onClick={(e)=>e.currentTarget.classList.add('animate-pulse')} className="px-5 py-2 bg-green-500 text-white rounded-lg transition">Pulse</button>`,
    element: (
      <button
        className="px-5 py-2 bg-green-500 text-white rounded-lg transition"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.add("animate-pulse");
          setTimeout(() => btn.classList.remove("animate-pulse"), 600);
        }}
      >
        Pulse
      </button>
    ),
  },
  {
    title: "Spin On Click",
    code: `<button onClick={(e)=>e.currentTarget.classList.add('animate-spin')} className="px-5 py-2 bg-blue-500 text-white rounded-lg transition">Spin</button>`,
    element: (
      <button
        className="px-5 py-2 bg-blue-500 text-white rounded-lg transition"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.add("animate-spin");
          setTimeout(() => btn.classList.remove("animate-spin"), 600);
        }}
      >
        Spin
      </button>
    ),
  },
  {
    title: "Scale Up",
    code: `<button onClick={(e)=>e.currentTarget.classList.add('scale-125')} className="px-5 py-2 bg-yellow-500 text-black rounded-lg transition transform">Scale</button>`,
    element: (
      <button
        className="px-5 py-2 bg-yellow-500 text-black rounded-lg transition transform"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.add("scale-125");
          setTimeout(() => btn.classList.remove("scale-125"), 300);
        }}
      >
        Scale
      </button>
    ),
  },
  {
    title: "Translate Right",
    code: `<button onClick={(e)=>e.currentTarget.classList.add('translate-x-6')} className="px-5 py-2 bg-purple-500 text-white rounded-lg transition transform">Slide Right</button>`,
    element: (
      <button
        className="px-5 py-2 bg-purple-500 text-white rounded-lg transition transform"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.add("translate-x-6");
          setTimeout(() => btn.classList.remove("translate-x-6"), 300);
        }}
      >
        Slide Right
      </button>
    ),
  },
   
  {
    title: "Continuous Pulse",
    code: `<button className="px-5 py-2 bg-green-500 text-white rounded-lg animate-pulse">Pulse</button>`,
    element: <button className="px-5 py-2 bg-green-500 text-white rounded-lg animate-pulse">Pulse</button>,
  },
  {
    title: "Ping Button",
    code: `<button className="px-5 py-2 bg-blue-500 text-white rounded-lg relative"><span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>Ping</button>`,
    element: (
      <button className="px-5 py-2 bg-blue-500 text-white rounded-lg relative overflow-hidden">
        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
        Ping
      </button>
    ),
  },
  
  {
    title: "Pulse & Scale",
    code: `<button className="px-5 py-2 bg-yellow-500 text-black rounded-lg animate-pulse transform hover:scale-110">Pulse & Scale</button>`,
    element: <button className="px-5 py-2 bg-yellow-500 text-black rounded-lg animate-pulse transform hover:scale-110">Pulse & Scale</button>,
  },
  {
    title: "Ping + Shadow",
    code: `<button className="px-5 py-2 bg-teal-500 text-white rounded-lg shadow-md relative"><span className="absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-50 animate-ping"></span>Ping Shadow</button>`,
    element: (
      <button className="px-5 py-2 bg-teal-500 text-white rounded-lg shadow-md relative overflow-hidden">
        <span className="absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-50 animate-ping"></span>
        Ping Shadow
      </button>
    ),
  },
  {
    title: "Shimmer",
    code: `<button className="px-5 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white rounded-lg animate-pulse">Shimmer</button>`,
    element: <button className="px-5 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white rounded-lg animate-pulse">Shimmer</button>,
  },
  
  {
    title: "Jiggle",
    code: `<button className="px-5 py-2 bg-pink-500 text-white rounded-lg animate-bounce">Jiggle</button>`,
    element: <button className="px-5 py-2 bg-pink-500 text-white rounded-lg animate-bounce">Jiggle</button>,
  },
  
  {
    title: "Opacity Flicker",
    code: `<button onClick={(e)=>e.currentTarget.classList.add('opacity-50')} className="px-5 py-2 bg-indigo-500 text-white rounded-lg transition">Flicker</button>`,
    element: (
      <button
        className="px-5 py-2 bg-indigo-500 text-white rounded-lg transition"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.add("opacity-50");
          setTimeout(() => btn.classList.remove("opacity-50"), 400);
        }}
      >
        Flicker
      </button>
    ),
  },
  {
    title: "Skew On Click",
    code: `<button onClick={(e)=>e.currentTarget.classList.add('skew-x-12')} className="px-5 py-2 bg-teal-500 text-white rounded-lg transition transform">Skew</button>`,
    element: (
      <button
        className="px-5 py-2 bg-teal-500 text-white rounded-lg transition transform"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.add("skew-x-12");
          setTimeout(() => btn.classList.remove("skew-x-12"), 400);
        }}
      >
        Skew
      </button>
    ),
  },
  {
    title: "Translate Y",
    code: `<button onClick={(e)=>e.currentTarget.classList.add('-translate-y-6')} className="px-5 py-2 bg-orange-500 text-white rounded-lg transition transform">Up</button>`,
    element: (
      <button
        className="px-5 py-2 bg-orange-500 text-white rounded-lg transition transform"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.add("-translate-y-6");
          setTimeout(() => btn.classList.remove("-translate-y-6"), 300);
        }}
      >
        Up
      </button>
    ),
  },
  {
    title: "Shadow Pop",
    code: `<button onClick={(e)=>e.currentTarget.classList.add('shadow-2xl')} className="px-5 py-2 bg-gray-700 text-white rounded-lg transition">Shadow</button>`,
    element: (
      <button
        className="px-5 py-2 bg-gray-700 text-white rounded-lg transition"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.add("shadow-2xl");
          setTimeout(() => btn.classList.remove("shadow-2xl"), 400);
        }}
      >
        Shadow
      </button>
    ),
  },

  ];

  return (
    <div className="h-max w-screen bg-[#e7f7db]">
      <div className="w-full flex h-screen">
        <Sidebar />
        <div className="p-4 mt-10 md:p-8 w-full min-h-screen bg-[#f3f4f6] overflow-auto">
          <h3 className="text-2xl font-semibold mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:rounded mt-1">
            Buttons
          </h3>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {buttons.map((btn, idx) => (
              <ComponentPreviewCard key={idx} title={btn.title} codeSnippet={btn.code}>
                {btn.element}
              </ComponentPreviewCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsPage;
