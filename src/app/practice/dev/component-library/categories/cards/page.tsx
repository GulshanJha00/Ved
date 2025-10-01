"use client";
import React, { useState } from "react";
import Sidebar from "@/components/components-Library/Sidebar";

interface Card {
  title: string;
  description: string;
  code: string;
  element: React.ReactNode;
}

const cards: Card[] = [
  {
    title: "Simple Card",
    description: "This is a simple card with shadow and padding.",
    code: `<div className="p-6 bg-white rounded-lg shadow-md">
  <h1 className="text-lg font-semibold mb-2">Simple Card</h1>
  <p>This is a simple description.</p>
</div>`,
    element: (
      <div className="p-6 bg-white rounded-lg shadow-md flex flex-col">
        <h1 className="text-lg font-semibold mb-2">Simple Card</h1>
        <p>This is a simple description.</p>
      </div>
    ),
  },
  {
    title: "Hover Shadow Card",
    description: "Card grows a shadow when hovered.",
    code: `<div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
  <h1 className="text-lg font-semibold mb-2">Hover Shadow</h1>
  <p>Watch the shadow grow on hover!</p>
</div>`,
    element: (
      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition flex flex-col">
        <h1 className="text-lg font-semibold mb-2">Hover Shadow</h1>
        <p>Watch the shadow grow on hover!</p>
      </div>
    ),
  },
  {
    title: "Glassmorphism Card",
    description: "A translucent glass-like effect using backdrop blur.",
    code: `<div className="p-6 bg-white/30 backdrop-blur-md text-black rounded-lg border border-black/30">
  <h1 className="text-lg font-semibold mb-2">Glassmorphism</h1>
  <p>Cool glass-like card effect.</p>
</div>`,
    element: (
      <div className="p-6 bg-white/30 backdrop-blur-md text-black rounded-lg border border-black/30 flex flex-col">
        <h1 className="text-lg font-semibold mb-2">Glassmorphism</h1>
        <p>Cool glass-like card effect.</p>
      </div>
    ),
  },
  {
    title: "Animated Pulse Card",
    description: "Card pulses continuously to grab attention.",
    code: `<div className="p-6 bg-blue-500 text-white rounded-lg animate-pulse">
  <h1 className="text-lg font-semibold mb-2">Pulse Card</h1>
  <p>It keeps pulsing automatically.</p>
</div>`,
    element: (
      <div className="p-6 bg-blue-500 text-white rounded-lg animate-pulse flex flex-col">
        <h1 className="text-lg font-semibold mb-2">Pulse Card</h1>
        <p>It keeps pulsing automatically.</p>
      </div>
    ),
  },
  {
    title: "Image Card",
    description: "Card with image and caption text.",
    code: `<div className="rounded-lg overflow-hidden shadow-md bg-white">
  <img src="https://picsum.photos/400/200" alt="Random" />
  <div className="p-4">
    <h1 className="text-lg font-semibold mb-2">Image Card</h1>
    <p>This card has an image header.</p>
  </div>
</div>`,
    element: (
      <div className="rounded-lg overflow-hidden shadow-md bg-white">
        <img src="https://picsum.photos/400/200" alt="Random" />
        <div className="p-4">
          <h1 className="text-lg font-semibold mb-2">Image Card</h1>
          <p>This card has an image header.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Hover Scale Card",
    description: "Card scales up slightly on hover.",
    code: `<div className="p-6 bg-green-500 text-white rounded-lg shadow-md transform hover:scale-105 transition">
  <h1 className="text-lg font-semibold mb-2">Hover Scale</h1>
  <p>It zooms in on hover.</p>
</div>`,
    element: (
      <div className="p-6 bg-green-500 text-white rounded-lg shadow-md transform hover:scale-105 transition flex flex-col">
        <h1 className="text-lg font-semibold mb-2">Hover Scale</h1>
        <p>It zooms in on hover.</p>
      </div>
    ),
  },
  {
    title: "Review Card",
    description: "Perfect for testimonials or reviews.",
    code: `<div className="p-6 bg-white rounded-lg shadow-md">
  <p className="text-gray-700 mb-2">"Amazing product!"</p>
  <p className="text-sm text-gray-500">- John Doe</p>
</div>`,
    element: (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <p className="text-gray-700 mb-2">Amazing product!</p>
        <p className="text-sm text-gray-500">- John Doe</p>
      </div>
    ),
  },
  {
    title: "Gradient Card",
    description: "Gradient background card with white text.",
    code: `<div className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg">
  <h1 className="text-lg font-semibold mb-2">Gradient Card</h1>
  <p>Stylish gradient background.</p>
</div>`,
    element: (
      <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg flex flex-col">
        <h1 className="text-lg font-semibold mb-2">Gradient Card</h1>
        <p>Stylish gradient background.</p>
      </div>
    ),
  },
  {
    title: "Profile Card",
    description: "Card with avatar and profile info.",
    code: `<div className="p-6 bg-white rounded-lg shadow-md flex items-center gap-4">
  <img src="https://i.pravatar.cc/100" className="w-16 h-16 rounded-full" />
  <div>
    <h1 className="text-lg font-semibold">Jane Doe</h1>
    <p className="text-sm text-gray-500">Frontend Developer</p>
  </div>
</div>`,
    element: (
      <div className="p-6 bg-white rounded-lg shadow-md flex items-center gap-4">
        <img src="https://i.pravatar.cc/100" className="w-16 h-16 rounded-full" />
        <div>
          <h1 className="text-lg font-semibold">Jane Doe</h1>
          <p className="text-sm text-gray-500">Frontend Developer</p>
        </div>
      </div>
    ),
  },
  {
    title: "Pricing Card",
    description: "Great for showing subscription prices.",
    code: `<div className="p-6 bg-white rounded-lg shadow-md text-center">
  <h1 className="text-xl font-bold mb-2">$19/month</h1>
  <p className="text-gray-600 mb-4">Basic Plan</p>
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Subscribe</button>
</div>`,
    element: (
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-xl font-bold mb-2">$19/month</h1>
        <p className="text-gray-600 mb-4">Basic Plan</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Subscribe</button>
      </div>
    ),
  },
];


const ComponentPreviewCard: React.FC<Card> = ({ element, code }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition">
      {element}

      <button
        className="mt-3 text-blue-500 text-sm hover:underline self-start"
        onClick={() => setShowCode(!showCode)}
      >
        {showCode ? "Hide Code" : "Show Code"}
      </button>

      {/* Code Snippet */}
      {showCode && (
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto mt-2">
          {code}
        </pre>
      )}
    </div>
  );
};

const CardsPage = () => {
  return (
    <div className="h-max w-screen bg-[#e7f7db]">
      <div className="w-full flex h-screen">
        <Sidebar />
        <div className="p-4 mt-10 md:p-8 w-full bg-[#e7f7db] overflow-auto">
          <h2 className="text-3xl font-bold mb-6 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:rounded mt-1">
            Cards Library
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <ComponentPreviewCard
                key={idx}
                element={card.element}
                code={card.code}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
