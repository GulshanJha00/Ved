import React from 'react';

const Loading = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center">
      {/* Simple Spinner */}
      <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
      
      {/* Loading Text */}
      <p className="text-gray-600 text-lg">Loading...</p>
    </div>
  );
};

export default Loading;