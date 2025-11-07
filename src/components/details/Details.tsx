import React from "react";
import { FaBookOpen, FaBrain, FaComments, FaLaptopCode, FaChartBar, FaUserTie } from "react-icons/fa";
import FlexBoxAds from "../flexbox/FlexBoxAds";

const Details = () => {
  const features = [
    {
      icon: <FaBookOpen />,
      title: "College Notes",
      desc: "Access semester & subject-wise NIE notes — simplified and organized for quick study.",
      color: "text-blue-600",
    },
    {
      icon: <FaBrain />,
      title: "DSA 107 Days Sheet",
      desc: "Tackle 107 carefully selected DSA problems designed to boost placement readiness.",
      color: "text-purple-600",
    },
    {
      icon: <FaChartBar />,
      title: "Aptitude & Reasoning",
      desc: "Practice 2000+ questions across Logical, Quantitative & Verbal reasoning topics.",
      color: "text-orange-600",
    },
    {
      icon: <FaUserTie />,
      title: "Interview Prep",
      desc: "Access 400+ HR & technical questions, 100+ real interview experiences, and insights.",
      color: "text-yellow-600",
    },
    {
      icon: <FaLaptopCode />,
      title: "Development Resources",
      desc: "Explore Web Dev, ML, Flexbox, CSS Grid, and component library guides all in one place.",
      color: "text-red-600",
    },
    {
      icon: <FaComments />,
      title: "Chatrooms & Practice Spaces",
      desc: "Join active chatrooms for DSA, Dev, ML, and Fun — learn, share, and grow together.",
      color: "text-pink-600",
    },
  ];

  return (
    <div className="h-max bg-gray-50 p-10 pt-32">
      <h1 className="text-4xl font-bold text-center mb-10">
        Why Choose <span className="text-blue-600">NIE VED?</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className={`${f.color} text-4xl mb-4 flex justify-center items-center`}>
              {f.icon}
            </div>
            <h2 className="text-xl font-semibold font-sans mb-2">{f.title}</h2>
            <p className="text-gray-600 font-medium font-sans">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Flexbox Game Ad Section */}
      <FlexBoxAds />
    </div>
  );
};

export default Details;
