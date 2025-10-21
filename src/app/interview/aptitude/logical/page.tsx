"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import questions from "./AlphaNumerical"; // import JSON file
import analogyQuestions from "./Analogue"
import arithmeticQuestions from "./Arithmetic"
import bloodRelationQuestions from "./Blood"
import calendarQuestions from "./calenders"
import causeEffectQuestions from "./CauseEffect"
import classificationQuestions from "./classification"
import codingDecodingQuestions from "./codingDecoding"
import criticalReasoningQuestions from "./Critical"
import cubesDiceQuestions from "./cube-dice"
import dataSufficiencyQuestions from "./data-sufficieny"
import decisionMakingQuestions from "./decision-making"
import directionSenseQuestions from "./DirectionSense"
import logicalPuzzlesQuestions from "./logicalpuzzle"
import oddOneOutQuestions from "./odd-one-out"
import statementAssumptionQuestions from "./Miscellaneous"
import { IoMdClose } from "react-icons/io";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import NotSigned from "@/app/NotSigned";
const topics = [
    "Alphanumeric Series",
    "Analogy / Reasoning Analogy",
    "Arithmetic Reasoning / Numbers",
    "Blood Relations",
    "Calendars",
    "Cause and Effect",
    "Classification",
    "Coding and Decoding",
    "Critical Reasoning",
    "Cubes / Cubes and Dice / Dices",
    "Data Sufficiency",
    "Decision-making / Course of Action",
    "Direction Sense",
    "Logical Problems / Puzzles / Seating Arrangement",
    "Odd One Out / Missing Numbers",
    "Miscellaneous",

];
type Question = {
    question: string;
    options: string[];
    answer: string;
    explanation: string;
    company: string;
};



const AptitudeTopicsPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTopic, setActiveTopic] = useState("Alphanumeric Series");
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});

    const handleOptionChange = (qIndex: number, option: string) => {
        setSelectedAnswers({ ...selectedAnswers, [qIndex]: option });
    };

    // For now, show all questions for "Alphanumeric Series"
    let currentQuestions: Question[] = [];
    if (activeTopic === "Alphanumeric Series") {
        currentQuestions = questions;
    } else if (activeTopic === "Analogy / Reasoning Analogy") {
        currentQuestions = analogyQuestions;
    } else if (activeTopic === "Arithmetic Reasoning / Numbers") {
        currentQuestions = arithmeticQuestions
    } else if (activeTopic === "Blood Relations") {
        currentQuestions = bloodRelationQuestions
    } else if (activeTopic === "Calendars") {
        currentQuestions = calendarQuestions
    } else if (activeTopic === "Cause and Effect") {
        currentQuestions = causeEffectQuestions
    } else if (activeTopic === "Classification") {
        currentQuestions = classificationQuestions
    } else if (activeTopic === "Coding and Decoding") {
        currentQuestions = codingDecodingQuestions
    } else if (activeTopic === "Critical Reasoning") {
        currentQuestions = criticalReasoningQuestions
    } else if (activeTopic === "Cubes / Cubes and Dice / Dices") {
        currentQuestions = cubesDiceQuestions
    } else if (activeTopic === "Data Sufficiency") {
        currentQuestions = dataSufficiencyQuestions
    } else if (activeTopic === "Decision-making / Course of Action") {
        currentQuestions = decisionMakingQuestions
    } else if (activeTopic === "Direction Sense") {
        currentQuestions = directionSenseQuestions
    } else if (activeTopic === "Logical Problems / Puzzles / Seating Arrangement") {
        currentQuestions = logicalPuzzlesQuestions
    } else if (activeTopic === "Odd One Out / Missing Numbers") {
        currentQuestions = oddOneOutQuestions
    } else if (activeTopic === "Miscellaneous") {
        currentQuestions = statementAssumptionQuestions
    }


    return (
        <>
            <SignedIn>

                <div className="flex h-screen bg-gray-900 text-white">

                    <div className={`bg-gray-800 hidden md:flex w-64 p-6 space-y-0 sticky top-0 transform 
    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
    h-screen transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:h-screen z-0`}>

                        <h1 className="text-2xl font-bold mb-6">Topics</h1>
                        <ul className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 6rem)' }}>
                            {topics.map((topic, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer px-2 py-1 rounded ${activeTopic === topic ? "bg-purple-600 text-white" : "hover:text-gray-300"}`}
                                    onClick={() => {
                                        setActiveTopic(topic);
                                        setSelectedAnswers({});
                                    }}
                                >
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {isOpen ?
                        <div className={`bg-gray-800 w-64 p-6 space-y-0 absolute top-24 transform 
    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
    h-screen transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:h-screen z-30`}>
                            <button className="absolute top-0 right-4 md:hidden z-30" onClick={() => setIsOpen(false)}>
                                <IoMdClose size={20} />
                            </button>

                            <h1 className="text-2xl font-bold mb-6">Topics</h1>
                            <ul className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 6rem)' }}>
                                {topics.map((topic, index) => (
                                    <li
                                        key={index}
                                        className={`cursor-pointer px-2 py-1 rounded ${activeTopic === topic ? "bg-purple-600 text-white" : "hover:text-gray-300"}`}
                                        onClick={() => {
                                            setActiveTopic(topic);
                                            setSelectedAnswers({});
                                        }}
                                    >
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        :

                        <button className="absolute top-24 left-4 md:hidden z-30" onClick={() => setIsOpen(true)}>
                            <FaBars size={20} />
                        </button>

                    }


                    {/* Main Content */}
                    <div className="p-6 ml-0 md:ml-20 overflow-y-auto w-full h-screen">
                        <h1 className="text-3xl font-bold mb-6">{activeTopic}</h1>

                        {currentQuestions.length === 0 ? (
                            <p className="text-gray-400">No questions available for this topic yet.</p>
                        ) : (
                            <div className="space-y-8">
                                {currentQuestions.map((q, index) => {
                                    const userAnswer = selectedAnswers[index];
                                    const isCorrect = userAnswer === q.answer;

                                    return (
                                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                                            <div className="flex justify-between items-center mb-4">
                                                <h2 className="text-xl font-semibold">{`Q${index + 1}: ${q.question}`}</h2>
                                                <span className="text-sm text-gray-400">{q.company}</span>
                                            </div>

                                            <div className="space-y-2 mb-4">
                                                {q.options.map((option, i) => (
                                                    <label
                                                        key={i}
                                                        className={`flex items-center p-2 rounded cursor-pointer hover:bg-gray-700 ${userAnswer === option ? "bg-purple-600" : ""
                                                            }`}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name={`q${index}`}
                                                            value={option}
                                                            checked={userAnswer === option}
                                                            onChange={() => handleOptionChange(index, option)}
                                                            className="mr-2"
                                                        />
                                                        {option}
                                                    </label>
                                                ))}
                                            </div>

                                            {userAnswer && (
                                                <div className="mt-4 p-3 bg-gray-700 rounded">
                                                    <p className={`font-semibold ${isCorrect ? "text-green-400" : "text-red-400"}`}>
                                                        {isCorrect ? "Correct!" : `Incorrect! Correct answer: ${q.answer}`}
                                                    </p>
                                                    <p className="text-gray-300 mt-2">{q.explanation}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </SignedIn>
            <SignedOut>
                <NotSigned />
            </SignedOut>

        </>
    );
};

export default AptitudeTopicsPage;
