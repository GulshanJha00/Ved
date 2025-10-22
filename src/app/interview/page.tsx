"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
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
const page = () => {
    const router = useRouter();
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
    return (
         <>
                    <div className='relative  h-1/3 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-8 px-8 mb-12  overflow-hidden '>
                        {/* Animated background elements */}
                        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                        
                        {/* Content */}
                        <div className="relative  z-10 max-w-4xl mx-auto text-center">
                            <div className="inline-block mb-4">
                                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/30">
                                    ✨ Learning Hub
                                </span>
                            </div>
                            <h1 className='text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg'>
                                Explore Interview Resources
                            </h1>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
                                Master Reasoning, Core Subjects, Get Interview Experience and previous questions company wise with our curated collection of interactive resources
                            </p>
                            
                            {/* Decorative line */}
                            <div className="mt-8 flex items-center justify-center gap-3">
                                <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
                            </div>
                        </div>
                    </div>
                
                    <div className="grid mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                        {InterviewCard.map((card, idx) => (
                            <Link
  key={idx}
  href={card.href}
  className="group block border border-gray-300 relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
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
                                <p className="text-sm text-gray-600 mb-2">{card.problems}</p>
                                <a
                                    href={card.href}
                                    className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${card.gradient} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:gap-3`}
                                >
                                    Explore
                                    <FaArrowRight className="text-sm" />
                                </a>
                            </Link>

                        ))}
                    </div>
                </>
    )
}

export default page
