'use client';
import questions from '@/app/data/practice-box/questions.json';
import React, { useEffect, useState, useMemo } from 'react';
import Editor from '@monaco-editor/react';
import { FaMinus, FaPlay, FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'next/navigation';

const QuestionPage = () => {
  const { id } = useParams();

  // Declare the hooks first
  const [fontSize, setFontSize] = useState(() => {
    try {
      const savedFontSize = localStorage.getItem('fontSize');
      return savedFontSize ? JSON.parse(savedFontSize) : 16;
    } catch (error) {
      console.error('Error parsing font size from localStorage:', error);
      return 16;
    }
  });

  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('python');
  const [testResult, setTestResult] = useState<'pending' | 'success' | 'fail'>('pending');

  // Use useMemo to optimize re-rendering based on `id`
  const question = useMemo(() => questions.find((q) => q.number.toString() === id), [id]);

  useEffect(() => {
    localStorage.setItem('fontSize', JSON.stringify(fontSize));
  }, [fontSize]);

  const codeChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const CodeRun = async () => {
    try {
      setTestResult('pending'); // Reset test case state before running
      const response = await axios.post('/api/editor', { code, language });

      if (response.data.error) {
        setOutput(`Error: ${response.data.error}`);
        setTestResult('fail');
      } else {
        setOutput(response.data.output);
        validateTestCase(response.data.output);
      }
    } catch (error) {
      console.error(
        'Error sending code:',
        axios.isAxiosError(error) ? error.response?.data || error.message : error
      );
      setOutput('Error: Unable to execute code.');
      setTestResult('fail');
    }
  };

  const validateTestCase = (output: string) => {
    if (!question) {
      console.error('Question not found');
      return;
    }
    const isCorrect = output.trim() === question.expected_output.trim();
    setTestResult(isCorrect ? 'success' : 'fail');

    if (isCorrect) {
      toast.success('✅ Test Case Passed!');
    } else {
      toast.error('❌ Test Case Failed!');
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Left Panel */}
      <div className="w-1/3 p-6 rounded-r-3xl bg-gray-800 shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-5 text-purple-400">VedPad (Under Construction)</h1>

        <div className="bg-gray-700 p-5 rounded-xl">
          <div className="bg-purple-600 p-4 rounded-lg shadow-md">
            <h1 className="font-bold text-2xl">{question?.number}. {question?.text}</h1>
          </div>

          <div className="mt-4">
            <h1 className="text-lg font-semibold">Expected Output:</h1>
            <pre className="bg-gray-900 p-3 rounded-md text-green-400">{question?.expected_output}</pre>
          </div>

          {/* Test Case Results */}
          <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
            <h1 className="text-lg font-bold">Test Case</h1>
            <div className="mt-2">
              <h1>Test Case 1:</h1>
              <pre className="bg-gray-900 p-3 rounded-md text-green-400">{question?.expected_output}</pre>
            </div>
            <div className="mt-3">
              {testResult === 'pending' && <h1 className="text-yellow-400">⌛ Waiting for execution...</h1>}
              {testResult === 'success' && <h1 className="text-green-400">✅ Test Case Passed!</h1>}
              {testResult === 'fail' && <h1 className="text-red-400">❌ Wrong Answer</h1>}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel (Editor + Output) */}
      <div className="w-2/3 h-screen flex flex-col">
        <div className="p-4 flex justify-between items-center bg-gray-700 text-white text-lg font-semibold shadow-lg">
          <h1 className="text-purple-400">VedPad</h1>
          <button
            onClick={CodeRun}
            className="flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-lg shadow-md"
          >
            <FaPlay />
            <span>Run</span>
          </button>

          <div className="flex gap-5">
            <div className="flex bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-lg items-center gap-2 shadow-md">
              <button onClick={() => fontSize > 10 && setFontSize(fontSize - 1)}>
                <FaMinus />
              </button>
              <span>Font</span>
              <button onClick={() => fontSize < 30 && setFontSize(fontSize + 1)}>
                <FaPlus />
              </button>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="p-2 rounded-md bg-gray-900 text-white border border-gray-600"
            >
              <option value="cpp">C++</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
            </select>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-grow bg-gray-900">
          <Editor height="60%" onChange={codeChange} value={code} language={language} theme="vs-dark" options={{ fontSize: fontSize }} />
          <div className="bg-black h-[40%] p-4 rounded-t-lg shadow-lg">
            <h1 className="text-white text-center p-2 font-semibold bg-gray-700 rounded-md">Your Output</h1>
            <pre className="text-green-400 p-5 text-lg">{output}</pre>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default QuestionPage;
