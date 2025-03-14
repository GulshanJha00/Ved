"use client";
import React from "react";
import "./practice.css";
import { FaArrowDown, FaArrowRight, FaBook, FaCode, FaLaptopCode, FaDatabase, FaRobot, FaCubes, FaThLarge, FaPaintBrush, FaComments } from "react-icons/fa";
import PracticeSectionCards from "@/components/practice/PracticeSectionCards";
import Link from "next/link";
const Page = () => {
  // tag={<FaBook/>} title={"Challenges"} pTag={"Solve coding problems of varying difficulty levels"} p2Tag={"Test your skills with algorithmic challenges, competitive programming problems, and real-world scenarios."}/>

  const json = [
    {
      tag1: FaCode, // Coding challenges
      title1: "Challenges",
      pTag1: "Solve coding problems of varying difficulty levels",
      p2Tag1: "Test your skills with algorithmic challenges, competitive programming problems, and real-world scenarios.",
      link:"/practice/first/question"
    },
    {
      tag1: FaLaptopCode, // Development-related tasks
      title1: "Dev Space",
      pTag1: "Hands-on development challenges and projects",
      p2Tag1: "Practice with bug fixes, design challenges, component building, and interactive coding games.",
      link:"/practice/dev"

    },
    {
      tag1: FaBook, // Books for Interview prep
      title1: "Interview Prep",
      pTag1: "Prepare for technical interviews",
      p2Tag1: "Practice common interview questions, system design problems, and behavioral interview scenarios.",
      link:"/practice/interview"

    },
    {
      tag1: FaDatabase, // Data Structures & Algorithms
      title1: "DSA Space",
      pTag1: "Data Structures and Algorithms",
      p2Tag1: "Master fundamental data structures and algorithms with interactive visualizations and practice problems.",
      link:"/practice/dsa"

    },
    {
      tag1: FaRobot, // Machine Learning & AI
      title1: "ML Space",
      pTag1: "Machine Learning and AI challenges",
      p2Tag1: "Practice implementing machine learning algorithms, data preprocessing, and model evaluation techniques.",
      link:"/practice/ml"

    }
  ];
  const devChallenges = [
    { 
      title: "Flexbox Battle", 
      icon: FaCubes, 
      link: "/flexbox-game",
      p: "Master CSS Flexbox with interactive coding challenges."
    },
    { 
      title: "Grid Challenge", 
      icon: FaThLarge, 
      link: "/practice/dev/grid",
      p: "Learn CSS Grid with structured hands-on challenges."
    },
    { 
      title: "Component Library", 
      icon: FaCode, 
      link: "/practice/dev/component-library",
      p: "Browse and build reusable UI components with Tailwind and React."
    },
    { 
      title: "Clone Figma Design", 
      icon: FaPaintBrush, 
      link: "/practice/dev/figma-clone",
      p: "Recreate Figma designs to sharpen your frontend skills."
    },
    { 
      title: "ChatRoom", 
      icon: FaComments, 
      link: "/practice/dev/chatroom",
      p: "Join discussions, collaborate, and solve coding challenges together."
    },
  ];
  
  return (
    <>
      <div className="lg:hidden min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Desktop Only Platform 🚀
        </h1>
        <p className="text-lg text-white opacity-80 mb-8 max-w-xl">
          This platform is designed for laptops and desktops only. Please switch
          to a larger device to access it.
        </p>
      </div>
      <nav className="fixed hidden lg:block top-0 left-0 w-full bg-black text-white shadow-md z-50">
        <div className="flex justify-between items-center py-4 px-8">
          <h1 className="text-xl font-bold">Development Space</h1>
          <ul className="flex gap-6">
            {devChallenges.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <item.icon className="text-lg" />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>


      <div className="hidden relative lg:flex min-h-screen bg-[#ffdd00] flex-col w-screen justify-center h-screen px-16 space-y-12">
        {/* Title Section */}
        <div className=" w-full max-w-4xl ">
          <h1 className="practice-header text-7xl font-extrabold font-serif text-black tracking-tight ">
            Master coding through practice and challenges
          </h1>
          <p className="practice-p text-xl font-sans text-gray-500 mt-4 max-w-xl ">
            Enhance your skills with our comprehensive practice platform. From
            coding challenges to interview prep, we&apos;ve got you covered.
          </p>
          <button className="practice-p bg-[#1A1600] px-4 py-2 flex justify-center items-center gap-1 text-white mt-3 rounded-lg">
            <h1 className="font-bold font-sans">Start Practicing </h1>
            <FaArrowRight />
          </button>
        </div>
        <div className="absolute bottom-[-10px] left-1/2 -translate-x-16">
          <FaArrowDown className="practice-emoji bg-cyan-400 rounded-full text-8xl" />
        </div>
      </div>

      <div className="hidden practice-Hero min-h-screen bg-[#FFFCE6] lg:flex flex-col items-center pt-20">
        <h1 className="practice-Hero-head text-6xl mb-4 font-extrabold font-serif">
          Practice Spaces
        </h1>
        <p className="practice-Hero-p text-xl text-gray-500 mb-4">
          Choose from our various practice spaces to enhance your skills in
          different areas.
        </p>

        <div className="practice-Hero-container grid lg:grid-cols-3 grid-cols-1 gap-8 h-full">

          {
            json.map((element) => (

              <PracticeSectionCards
              key={element.title1}
                tag={element.tag1}
                title={element.title1}
                pTag={element.pTag1}
                p2Tag={element.p2Tag1}
                link={element.link}
              />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Page;
