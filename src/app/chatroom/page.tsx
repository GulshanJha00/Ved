import Link from 'next/link';
import React from 'react'
import {
    FaCode,
    FaRobot,
    FaArrowRight,
    FaCodeBranch,
    FaRegSmileWink,
} from "react-icons/fa";
const page = () => {
    const chatRooms = [
        {
            title: "DSA ChatRoom",
            description: "Collaborate and solve Data Structures & Algorithms problems with peers.",
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
                        Explore Our Chatroom
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
                        Collaborate, share knowledge, and grow with peers on NIE&apos;s first dedicated peer-learning platform.
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
                {chatRooms.map((card, idx) => (
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
                        <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                        <div
                            className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${card.gradient} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:gap-3`}
                        >
                            Explore
                            <FaArrowRight className="text-sm" />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default page
