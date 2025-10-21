"use client"
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
        </div>
    )
}
  )
}

export default page
