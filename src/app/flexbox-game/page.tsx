import React from 'react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-center">
      <div className="bg-white p-12 rounded-lg shadow-lg max-w-lg mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Coming Soon!</h1>
        <p className="text-xl text-gray-600 mb-6">We&apos;re working on something amazing. Stay tuned!</p>
        <div className="mt-4">
          <p className="text-lg text-gray-500">Exciting things are on their way. Check back soon!</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
