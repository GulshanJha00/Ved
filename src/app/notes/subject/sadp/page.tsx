"use client";

import React, { useState } from "react";
import Head from "next/head";

type ModuleMap = {
    [key: number]: string;
};

const modules: ModuleMap = {
    1: "https://drive.google.com/file/d/129ks2FHdHWUAjVjfa_cH_965q5FiR7nG/preview",
    2: "https://drive.google.com/file/d/1IDStftbudL_HdM6Qi774zTxJEKDdqFTV/preview",
    3: "https://drive.google.com/file/d/1b69fouy1a4RiiMxG3SX_3BUAjG6mY9i2/preview",
    4: "https://drive.google.com/file/d/1RaviUNkBiBzVXEQzELl1xUc18Da2HquS/preview",
    5: "https://drive.google.com/file/d/17oUxsyD4va08h7W81K8rh943rPghb_AK/preview",
    6: "https://drive.google.com/file/d/1-YD0sa2_c7Q58xWsPTcf7bpq4B9nvsZE/preview",
    7: "https://drive.google.com/file/d/1Ng6G9L7LZvrAa6Vjx3hqcP3i5hKgIMrL/preview",
    8: "https://drive.google.com/file/d/1uEzfR8nSy2L3cMmfo3R0DFuw7r6bTDll/preview"
};

const SADPpage: React.FC = () => {
    const [selectedModule, setSelectedModule] = useState<number>(1);

    const moduleNumbers = Object.keys(modules).map(Number);

    return (
        <>
            <Head>
                <title>SADP Modules Notes | Syllabus & Textbooks</title>

                <meta
                    name="description"
                    content="Access SADP module notes, syllabus and textbooks online. Study software architecture and design patterns materials easily."
                />

                <meta
                    name="keywords"
                    content="SADP notes, SADP syllabus, SADP textbook, software architecture notes, engineering pdf modules"
                />

                <meta property="og:title" content="SADP Learning Resources" />
                <meta
                    property="og:description"
                    content="Complete SADP course materials including modules, syllabus and textbooks."
                />

                <link rel="canonical" href="/sadp" />
            </Head>

            <div className="min-h-screen bg-gray-50 flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-6 px-4 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        SADP
                    </h1>
                </div>

                {/* Module Selector */}
                <div className="overflow-x-auto px-4 py-4">
                    <div className="flex gap-3 min-w-max">
                        {moduleNumbers.map((module) => {
                            let label = `Module ${module}`;

                            if (module === 6) label = "Syllabus";
                            if (module === 7) label = "Text Book 1";
                            if (module === 8) label = "Text Book 2";

                            return (
                                <button
                                    key={module}
                                    onClick={() => setSelectedModule(module)}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition ${
                                        selectedModule === module
                                            ? "bg-purple-600 text-white"
                                            : "bg-white shadow text-gray-700"
                                    }`}
                                >
                                    {label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Iframe */}
                <div className="flex-1 px-4 pb-6">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <iframe
                            src={modules[selectedModule]}
                            className="w-full h-[75vh] sm:h-[80vh]"
                            allow="autoplay"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SADPpage;