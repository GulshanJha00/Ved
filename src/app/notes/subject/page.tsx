"use client";

import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 px-6">
      
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center space-y-6 animate-fade-in">
        
        <h1 className="text-4xl font-extrabold text-gray-800">
          🎉 Congratulations!
        </h1>

        <p className="text-lg text-gray-600">
          You’ve discovered a hidden reward page.
        </p>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-purple-700">
            🎁 Reward Worth ₹100
          </h2>
          <p className="text-gray-600 mt-2">
            Valid only for the first few successful finders.
          </p>
        </div>

        <div className="text-gray-700">
          <p>
            📩 Send an email to claim your reward.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Verified winners will receive a confirmation reply.
          </p>
        </div>

        <button className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition transform hover:scale-105">
          Claim Reward
        </button>

      </div>
    </div>
  );
};

export default Page;