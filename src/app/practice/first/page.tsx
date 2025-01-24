"use client";
import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { FaMinus, FaPlay, FaPlus } from "react-icons/fa";
import axios from "axios";

const Page = () => {
  const [ffontSize, setFfontSize] = useState(() => {
    try {
      const savedFontSize = localStorage.getItem("fontSize");
      return savedFontSize ? JSON.parse(savedFontSize) : 16;
    } catch (error) {
      console.error("Error parsing font size from localStorage:", error);
      return 16; // Fallback to default value if parsing fails
    }
  });

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("python");

  useEffect(() => {
    if (ffontSize) {
      localStorage.setItem("fontSize", JSON.stringify(ffontSize));
    }
  }, [ffontSize]);

  const codeChange = (value: string | undefined) => {
    setCode(value || ""); // Ensure `value` is never `undefined`
  };

  const CodeRun = async () => {
    try {
      const response = await axios.post("/api/editor", { code });
      console.log(response.data);
  
      if (response.data.error) {
        setOutput(`Error: ${response.data.error}`);
      } else {
        setOutput(response.data.output);
        console.log(response.data.output);
      }
    } catch (error: unknown) { // Specify that error is of type unknown
      if (axios.isAxiosError(error)) { // Check if the error is an AxiosError
        console.error("Error sending code:", error.response ? error.response.data : error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  const CodeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value); // Change language on select
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-purple-700 flex flex-col items-center justify-center text-white p-6">
        <h1 className="text-4xl font-bold mb-4">VedPad </h1>
        <h1 className="text-2xl text-center">IN PROGRESS, COMPILER WONT WORK AS EXPECTED</h1>
        <p className="text-lg text-center">In Progress: Python Compiler (Beta)</p>
      </div>

      <div className="w-2/3 h-screen flex flex-col">
        <div className="p-4 flex justify-between px-10 bg-gray-700 text-white text-lg font-semibold">
          <h1>VedPad</h1>

          <div
            onClick={CodeRun}
            className="flex justify-center cursor-pointer items-center gap-2 bg-green-500 px-2 py-1 rounded-lg"
          >
            <h1>
              <FaPlay />
            </h1>
            <h1>Run</h1>
          </div>

          <div className="flex gap-5">
            <div className="flex bg-green-500 px-2 py-1 rounded-lg justify-center items-center gap-2">
              <h1
                onClick={() => {
                  if (ffontSize > 10) setFfontSize(ffontSize - 1); // Prevent going below 10
                }}
                className="hover:text-black cursor-pointer"
              >
                <FaMinus />
              </h1>
              <h1>Font</h1>
              <h1
                onClick={() => {
                  if (ffontSize < 30) setFfontSize(ffontSize + 1); // Prevent going above 30
                }}
                className="cursor-pointer hover:text-black"
              >
                <FaPlus />
              </h1>
            </div>

            <div className="text-black font-normal">
              <select
                value={language}
                onChange={CodeLanguage}
                className="p-1 rounded-sm"
                name="language"
              >
                <option className="text-black" value="cpp">
                  C++
                </option>
                <option className="text-black" value="javascript">
                  JavaScript
                </option>
                <option className="text-black" value="python">
                  Python
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <Editor
          
          
            height="60%"
            onChange={(value) => codeChange(value)} // value is now guaranteed to be a string
            value={code || ""}  // Ensures that 'value' is always a string
            language={language}
            theme="vs-dark"
            options={{
              fontFamily: "Courier New, monospace",
              fontSize: ffontSize,
              placeholder: "Write your code here..." 
            }}
          />
          <div className="bg-black h-[40%] ">
            <h1 className="text-white w-full bg-gray-700 text-center p-2 font-semibold">Your Output</h1>
            <h1 className="text-white p-5">{output}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
