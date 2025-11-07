"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  FaGraduationCap,
  FaBook,
  FaChalkboardTeacher,
  FaClipboardList,
  FaUniversity,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaRobot,
  FaBrain,
  FaCalculator,
  FaComments,
  FaArrowRight,
  FaUserTie,
  FaQuestionCircle,
  FaPaintBrush,
  FaThLarge,
  FaCogs,
  FaCodeBranch,
  FaRegSmileWink,
  FaRocketchat,
} from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

const Page = () => {
  const [activeTab, setActiveTab] = useState("College");
  const router = useRouter();
  const semesters = [
    { icon: FaGraduationCap, text: "1st", href: "/notes/getnotes/first" },
    { icon: FaBook, text: "2nd", href: "/notes/getnotes/second" },
    { icon: FaChalkboardTeacher, text: "3rd", href: "/notes/getnotes/third" },
    { icon: FaClipboardList, text: "4th", href: "/notes/getnotes/fourth" },
    { icon: FaUniversity, text: "5th", href: "/notes/getnotes/fifth" },
  ];

  const InterviewCard = [
    {
      title: "Logical Reasoning",
      topics: "20 Topics",
      problems: "600+ Problems",
      href: "/interview/aptitude/logical",
      gradient: "from-purple-500 to-pink-500",
      icon: FaBrain,
    },
    {
      title: "Quantitative Aptitude",
      topics: "25+ Topics",
      problems: "1500+ Problems",
      href: "/interview/aptitude/quantitative",
      gradient: "from-blue-500 to-cyan-500",
      icon: FaCalculator,
    },
    {
      title: "Verbal Ability",
      topics: "8+ Topics",
      href: "/interview/aptitude/verbal",
      problems: "480+ Problems",
      gradient: "from-green-500 to-emerald-500",
      icon: FaComments,
    },
    {
      title: "Core Subjects",
      topics: "10+ Domains",
      href: "/interview/core",
      problems: "600+ Problems",
      gradient: "from-orange-500 to-yellow-500",
      icon: FaCode,
    },
    {
      title: "Interview Experiences",
      topics: "Real Student Stories",
      problems: "100+ Company Insights",
      gradient: "from-pink-500 to-red-500",
      icon: FaUserTie,
      href: "/interview/experience",
    },
    {
      title: "Interview Questions",
      topics: "HR + Technical",
      problems: "400+ Curated Questions",
      gradient: "from-indigo-500 to-purple-500",
      icon: FaQuestionCircle,
      href: "/interview/questions",
    },
  ];

  const practiceSections = [
    {
      icon: FaRocketchat,
      title: "Chat Rooms",
      description: "Join Chat Rooms",
      gradient: "from-emerald-500 to-green-500",
      link: "/chatroom",
    },
    {
      icon: FaLaptopCode,
      title: "Resources",
      description: "Hands-on development projects",
      gradient: "from-violet-500 to-purple-500",
      link: "/resources",
    },

    {
      icon: FaBook,
      title: "Interview Prep",
      description: "Technical interview questions",
      gradient: "from-blue-500 to-indigo-500",
      link: "/interview",
    },
    {
      icon: FaCode,
      title: "Challenges",
      description: "Solve coding problems of varying difficulty",
      gradient: "from-orange-500 to-red-500",
      link: "/practice/first/question",
    },

    {
      icon: FaDatabase,
      title: "DSA Space",
      description: "Master data structures & algorithms",
      gradient: "from-cyan-500 to-teal-500",
      link: "/practice/dsa",
    },
    {
      icon: FaRobot,
      title: "ML Space",
      description: "Machine Learning challenges",
      gradient: "from-pink-500 to-rose-500",
      link: "/practice/ml",
    },
    

  ];

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

  const chatRooms = [
    {
      title: "DSA ChatRoom",
      description: "Talk with peers about Question of the and many more on NIE VED",
      gradient: "from-purple-500 to-pink-500",
      icon: FaCode,
      href: "/chatroom/dsa",
    },
    {
      title: "Dev ChatRoom",
      description: "Get help with coding issues, bugs, and development tips from fellow developers.",
      gradient: "from-blue-500 to-cyan-500",
      icon: FaCodeBranch,
      href: "/chatroom/dev",
    },
    {
      title: "ML ChatRoom",
      description: "Discuss Machine Learning concepts, projects, and problem-solving strategies.",
      gradient: "from-purple-500 to-emerald-500",
      icon: FaRobot,
      href: "/chatroom/ml",
    },
    {
      title: "Fun ChatRoom",
      description: "Chat, share memes, and enjoy light-hearted conversations with friends.",
      gradient: "from-pink-500 to-yellow-500",
      icon: FaRegSmileWink,
      href: "/chatroom/fun",
    },
  ];



  const collegeItems = [
    {
      title: "College Notes",
      description: "NIE college notes semester and subject wise. ",
      gradient: "from-purple-500 to-pink-500",
      icon: GiNotebook,
      href: "/notes",
    },
    {
      title: "Learn Coding Language",
      description: "Follow a structured NIE VED's Learning sheet to programming Language",
      gradient: "from-blue-500 to-cyan-500",
      icon: FaDatabase,
      href: "practice/first/question",
    },
    {
      title: "DSA 107 Days Sheet",
      description: "NIE VED's curated collection of 107 handmade DSA questions for placements",
      gradient: "from-green-500 to-emerald-500",
      icon: FaDatabase,
      href: "/practice/dsa",
    },
  ];




  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Modern Header */}
      <div className="backdrop-blur-lg bg-white/80 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Choose Your Semester
            </h1>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {semesters.map((sem, idx) => (
              <a
                key={idx}
                href={sem.href}
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300  whitespace-nowrap flex-shrink-0 text-sm font-medium"
              >
                <sem.icon className="text-base" />
                <span>{sem.text} Sem</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Elegant Tab Navigation */}
            <div className="flex flex-wrap gap-3 mb-8 p-2 bg-white rounded-2xl shadow-sm">
              {["College", "Interview", "resources", "Chatroom"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-[120px] px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === tab
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg "
                    : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  {tab === "Interview"
                    ? "Interview"
                    : tab === "resources"
                      ? "Resources"
                      : tab === "College"
                        ? "College"
                        : "Chatroom"}
                </button>
              ))}
            </div>

            {activeTab === "College" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collegeItems.map((card, idx) => (
                  <div
                    key={idx}
                    onClick={() => router.push(card.href)}
                    className="group cursor-pointer relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300  overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient || "from-gray-200 to-gray-300"} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    {card.icon && (
                      <div
                        onClick={() => router.push("/notes")}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient || "from-gray-200 to-gray-300"} flex items-center justify-center mb-4 shadow-lg`}
                      >
                        <card.icon className="text-2xl text-white" />
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                    <a

                      className={`inline-flex cursor-pointer items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${card.gradient || "from-gray-500 to-gray-600"} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:gap-3`}
                    >
                      Start Learning
                      <FaArrowRight className="text-sm" />
                    </a>
                  </div>
                ))}
              </div>
            )}

            {/* Interview Section */}
            {activeTab === "Interview" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {InterviewCard.map((card, idx) => (
                  <div
                    key={idx}
                    onClick={() => router.push(card.href)}
                    className="group cursor-pointer relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300  overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <card.icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.topics}</p>
                    <p className="text-sm text-gray-600 mb-4">{card.problems}</p>
                    <a
                      href={card.href || "/practice/aptitude"}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${card.gradient} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:gap-3`}
                    >
                      Start Learning
                      <FaArrowRight className="text-sm" />
                    </a>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "resources" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resourceItem.map((card, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300  overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <card.icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                    <a
                      href={card.href}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${card.gradient} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:gap-3`}
                    >
                      Explore
                      <FaArrowRight className="text-sm" />
                    </a>
                  </div>
                ))}
              </div>
            )}

            {/* College / Solve Section */}

            {/* Interview Tab at bottom */}
            {activeTab === "Chatroom" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {chatRooms.map((card, idx) => (
                  <Link
                    key={idx}
                    href={card.href}
                    className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden block"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient || "from-gray-200 to-gray-300"} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    {card.icon && (
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient || "from-gray-200 to-gray-300"} flex items-center justify-center mb-4 shadow-lg`}
                      >
                        <card.icon className="text-2xl text-white" />
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                    <div className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${card.gradient || "from-gray-500 to-gray-600"} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:gap-3`}>
                      Start Learning
                      <FaArrowRight className="text-sm" />
                    </div>
                  </Link>
                ))}

              </div>
            )}

          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 opacity-10 rounded-full -mr-16 -mt-16" />

              <h2 className="text-2xl font-bold mb-6 text-gray-800 relative">
                Practice Spaces
              </h2>

              <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                {practiceSections.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="group block relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />

                    <div className="relative">
                      <div className="flex items-start gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <item.icon className="text-white text-lg" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Page;