import React from 'react';

const Loading = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white flex flex-col justify-center items-center">
      {/* Spinning Loader */}
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-white border-opacity-75 mb-8"></div>
      
      {/* Loading Message */}
      <h1 className="lg:text-4xl sm:text-lg md:text-2xl text-lg font-extrabold font-mono text-white text-center tracking-wider">
        Just a Moment...
      </h1>
    </div>
  );
};

export default Loading;
