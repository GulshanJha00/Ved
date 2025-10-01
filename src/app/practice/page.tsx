"use client";
import React from "react";
import "./practice.css";
import { FaArrowDown, FaArrowRight, FaBook, FaCode, FaLaptopCode, FaDatabase, FaRobot } from "react-icons/fa";
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

  
  return (
    <>
  <div className="relative flex min-h-screen bg-[#ffdd00] flex-col w-screen justify-center h-screen px-4 sm:px-8 md:px-16 space-y-8 sm:space-y-10">
    {/* Title Section */}
    <div className="w-full max-w-4xl">
      <h1 className="practice-header text-4xl sm:text-5xl md:text-7xl font-extrabold font-serif text-black tracking-tight">
        Master coding through practice and challenges
      </h1>
      <p className="practice-p text-base sm:text-lg md:text-xl font-sans text-gray-500 mt-4 max-w-xl">
        Enhance your skills with our comprehensive practice platform. From
        coding challenges to interview prep, we&apos;ve got you covered.
      </p>
      <div className="gap-4 sm:gap-5 flex flex-col sm:flex-row mt-3">
        <Link
          href={"/practice/interview"}
          className="practice-p bg-[#1A1600] px-3 sm:px-4 py-2 flex justify-center items-center gap-1 text-white rounded-lg"
        >
          <h1 className="font-bold font-sans text-sm sm:text-base md:text-lg">
            Interview Preparation
          </h1>
          <FaArrowRight className="text-sm sm:text-base md:text-lg" />
        </Link>

        <Link
          href={"/flexbox-game"}
          className="practice-p bg-[#1A1600] px-3 sm:px-4 py-2 flex justify-center items-center gap-1 text-white rounded-lg"
        >
          <h1 className="font-bold font-sans text-sm sm:text-base md:text-lg">
            Learn FlexBox
          </h1>
          <FaArrowRight className="text-sm sm:text-base md:text-lg" />
        </Link>
      </div>
    </div>
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
  <FaArrowDown className="practice-emoji bg-cyan-400 rounded-full text-6xl sm:text-7xl md:text-8xl animate-bounceArrow" />
</div>

  </div>

<div className="lg:hidden min-h-screen bg-[#FFFCE6] flex flex-col items-center pt-8 sm:pt-12 px-3 sm:px-4">
  <h1 className="text-2xl sm:text-3xl font-extrabold font-serif mb-3">
    Practice Spaces
  </h1>
  <p className="text-sm sm:text-base text-gray-500 mb-3 text-center">
    Choose from our various practice spaces to enhance your skills in
    different areas.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
    {json.map((element) => (
      <PracticeSectionCards
        key={element.title1}
        tag={element.tag1}
        title={element.title1}
        pTag={element.pTag1}
        p2Tag={element.p2Tag1}
        link={element.link}
      />
    ))}
  </div>
</div>



  <div className="hidden practice-Hero min-h-screen bg-[#FFFCE6] lg:flex flex-col items-center pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-16">
    <h1 className="practice-Hero-head text-3xl sm:text-4xl lg:text-6xl mb-4 font-extrabold font-serif">
      Practice Spaces
    </h1>
    <p className="practice-Hero-p text-base sm:text-lg lg:text-xl text-gray-500 mb-4 text-center lg:text-left">
      Choose from our various practice spaces to enhance your skills in
      different areas.
    </p>

    <div className="practice-Hero-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 h-full">
      {json.map((element) => (
        <PracticeSectionCards
          key={element.title1}
          tag={element.tag1}
          title={element.title1}
          pTag={element.pTag1}
          p2Tag={element.p2Tag1}
          link={element.link}
        />
      ))}
    </div>
  </div>
</>

  );
};

export default Page;
