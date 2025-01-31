import Link from "next/link";
import React, { useEffect, useState } from "react";
import questions from "@/app/data/practice-box/questions.json";
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuestionBox = () => {
    const [starredQuestions, setStarredQuestions] = useState<Record<number, boolean>>({});  
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        try {
            const savedFavQn = localStorage.getItem("starredQuestions");
            if (savedFavQn) {
                setStarredQuestions(JSON.parse(savedFavQn));
            }
        } catch (error) {
            console.error("Error parsing starredQuestions from localStorage:", error);
        }
    }, []);

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("starredQuestions", JSON.stringify(starredQuestions));
        }
    }, [starredQuestions, isMounted]);

    const toggleStar = (number: number) => {
        const isStarred = !starredQuestions[number];

        setStarredQuestions((prev) => ({
            ...prev,
            [number]: isStarred,
        }));

        if (isStarred) {
            toast.success("Added to Favorites!", { autoClose: 1500 });
        } else {
            toast.info("Removed from Favorites", { autoClose: 1500 });
        }
    };

    return (
        <div className="overflow-x-auto w-full max-w-4xl shadow-lg rounded-lg bg-white">
            <table className="w-full text-sm text-left text-gray-600">
                <thead className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                    <tr>
                        <th className="px-6 py-4 text-lg font-semibold">S.No</th>
                        <th className="px-6 py-4 text-lg font-semibold">Question</th>
                        <th className="py-4 text-lg font-semibold text-center">Practice</th>
                        <th className="py-4 px-6 text-lg font-semibold text-center">Favourite</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((q) => (
                        <tr key={q.number} className="border-b md:text-xl text-normal hover:bg-gray-100">
                            <td className="px-6 border-r py-4">{q.number}</td>
                            <td className="px-6 border-r py-4">{q.text}</td>
                            <td className="px-6 py-4 text-center">
                                <Link href={`${q.practice}`}>
                                    <span className="text-blue-500 hover:underline font-medium">Practice</span>
                                </Link>
                            </td>
                            <td onClick={() => toggleStar(q.number)} className="border-l flex justify-center items-center py-6 cursor-pointer">
                                <FaStar className={starredQuestions[q.number] ? "text-yellow-400" : "text-gray-400"} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer/>
        </div>
    );
};

export default QuestionBox;
