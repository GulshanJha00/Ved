"use client";
import React, { useState } from "react";
import Sidebar from "@/components/components-Library/Sidebar";

interface FormBlock {
  title: string;
  description: string;
  code: string;
  element: React.ReactNode;
}

const ComponentPreviewForm: React.FC<FormBlock> = ({ element, code }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition relative group">
      {element}

      {/* Show/Hide Code Button */}
      <button
        className="mt-3 text-blue-500 text-sm hover:underline self-start"
        onClick={() => setShowCode(!showCode)}
      >
        {showCode ? "Hide Code" : "Show Code"}
      </button>

      {/* Code with Copy */}
      {showCode && (
        <div className="relative mt-2">
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            {code}
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-blue-200 px-2 py-1 rounded text-xs hover:bg-blue-300"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
};

const forms: FormBlock[] = [
  {
    title: "Login Form",
    description: "Simple login form with hover and focus effects.",
    code: `<form className="w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow hover:scale-105 transition">
  <h2 className="text-lg font-semibold mb-4 text-gray-700">Login</h2>
  <input type="email" placeholder="Email"
    className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
  <input type="password" placeholder="Password"
    className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
    Sign In
  </button>
</form>`,
    element: (
      <form className="w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow hover:scale-105 transition">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Sign In
        </button>
      </form>
    ),
  },
  {
    title: "Signup Form",
    description: "Form with multiple fields and green accents.",
    code: `<form className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow">
  <h2 className="text-lg font-semibold mb-4 text-gray-700">Sign Up</h2>
  <input type="text" placeholder="Name"
    className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" />
  <input type="email" placeholder="Email"
    className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" />
  <input type="password" placeholder="Password"
    className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" />
  <input type="password" placeholder="Confirm Password"
    className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" />
  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
    Create Account
  </button>
</form>`,
    element: (
      <form className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Create Account
        </button>
      </form>
    ),
  },
  {
    title: "Search Form",
    description: "Minimal search input with a button.",
    code: `<form className="flex items-center bg-white p-3 rounded-lg shadow w-full max-w-sm">
  <input type="text" placeholder="Search..."
    className="flex-1 px-3 py-2 border rounded-l-lg focus:ring-2 focus:ring-purple-500" />
  <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700">
    Go
  </button>
</form>`,
    element: (
      <form className="flex items-center bg-white p-3 rounded-lg shadow w-full max-w-sm">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-3 py-2 border rounded-l-lg focus:ring-2 focus:ring-purple-500"
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700">
          Go
        </button>
      </form>
    ),
  },
  {
    title: "Newsletter Form",
    description: "Simple email subscription form.",
    code: `<form className="flex bg-white p-3 rounded-lg shadow w-full max-w-md">
  <input type="email" placeholder="Your Email"
    className="flex-1 px-3 py-2 border rounded-l-lg focus:ring-2 focus:ring-red-500" />
  <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700">
    Subscribe
  </button>
</form>`,
    element: (
      <form className="flex bg-white p-3 rounded-lg shadow w-full max-w-md">
        <input
          type="email"
          placeholder="Your Email"
          className="flex-1 px-3 py-2 border rounded-l-lg focus:ring-2 focus:ring-red-500"
        />
        <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700">
          Subscribe
        </button>
      </form>
    ),
  },
  {
    title: "Contact Form",
    description: "Form with textarea and message button.",
    code: `<form className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
  <h2 className="text-lg font-semibold mb-4 text-gray-700">Contact Us</h2>
  <input type="text" placeholder="Name"
    className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
  <input type="email" placeholder="Email"
    className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
  <textarea placeholder="Message" rows={4}
    className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
    Send Message
  </button>
</form>`,
    element: (
      <form className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Contact Us</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
          Send Message
        </button>
      </form>
    ),
  },
];

const FormsPage = () => {
  return (
    <div className="h-max w-screen bg-[#e7f7db]">
      <div className="w-full flex h-screen">
        <Sidebar />
        <div className="p-4 mt-10 md:p-8 w-full bg-[#f3f4f6] overflow-auto">
          <h2 className="text-3xl font-bold mb-6 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:rounded mt-1">
            Forms Library
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {forms.map((form, idx) => (
              <ComponentPreviewForm
                key={idx}
                element={form.element}
                code={form.code}
                title={form.title}
                description={form.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsPage;
