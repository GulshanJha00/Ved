import React from "react";
import { FaSearch, FaStar, FaUsers } from "react-icons/fa";
import FlexBoxAds from "../flexbox/FlexBoxAds";
const Details = () => {
  return (
    <div className="h-max bg-gray-50 p-10 pt-32">
      <h1 className="text-4xl font-bold text-center mb-10">
        Why Choose <span className="text-blue-600">NIE VED?</span>{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="text-blue-600 text-4xl mb-4 flex justify-center items-center">
            <FaSearch />
          </div>
          <h2 className="text-xl font-semibold font-sans mb-2">
            Comprehensive Notes
          </h2>
          <p className="text-gray-600 font-medium font-sans">
            Access a wide range of notes tailored for every subject and
            semester.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="text-blue-600 text-4xl mb-4 flex justify-center items-center">
            <FaStar />
          </div>
          <h2 className="text-xl font-semibold font-sans mb-2">
            Top-Quality Content
          </h2>
          <p className="text-gray-600 font-medium font-sans">
            Notes curated directly by the best teachers.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="text-blue-600 text-4xl mb-4 flex justify-center items-center">
            <FaUsers />
          </div>
          <h2 className="text-xl font-semibold font-sans mb-2">
            Instant Notes Update
          </h2>
          <p className="text-gray-600 font-medium font-sans">
            Our team constantly updates notes to assist you instantly.
          </p>
        </div>
      </div>

      {/* New Section for Flexbox Game */}
        <FlexBoxAds/>
        
    </div>
  );
};

export default Details;
