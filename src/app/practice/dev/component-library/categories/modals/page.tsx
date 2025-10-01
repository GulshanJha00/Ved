"use client";
import React, { useState } from "react";
import Sidebar from "@/components/components-Library/Sidebar";

interface Modal {
  title: string;
  description: string;
  code: string;
  element: React.ReactNode;
}

const ComponentPreviewModal: React.FC<Modal> = ({ element, code }) => {
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
            className="absolute top-2 right-2 bg-gray-200 px-2 py-1 rounded text-xs hover:bg-gray-300"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
};

// Modal Component Helper
const BasicModal = ({ buttonText, children }: { buttonText: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        {buttonText}
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative animate-fade-in">
            {children}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const modals: Modal[] = [
  // 1. Simple Modal
  {
    title: "Simple Modal",
    description: "A basic modal with text and close button.",
    code: `<BasicModal buttonText="Open Modal"><p>This is a simple modal example.</p></BasicModal>`,
    element: (
      <BasicModal buttonText="Open Modal">
        <p>This is a simple modal example.</p>
      </BasicModal>
    ),
  },

  // 2. Confirmation Modal
  {
    title: "Confirmation Modal",
    description: "Modal for confirm/cancel actions.",
    code: `<BasicModal buttonText="Delete">
  <h3>Are you sure?</h3>
  <p>This action cannot be undone.</p>
  <div className="flex justify-end space-x-2">
    <button>Cancel</button>
    <button>Confirm</button>
  </div>
</BasicModal>`,
    element: (
      <BasicModal buttonText="Delete">
        <h3 className="text-lg font-bold mb-2">Are you sure?</h3>
        <p className="text-gray-600 mb-4">This action cannot be undone.</p>
        <div className="flex justify-end space-x-2">
          <button className="px-3 py-1 rounded bg-gray-200">Cancel</button>
          <button className="px-3 py-1 rounded bg-red-500 text-white">Confirm</button>
        </div>
      </BasicModal>
    ),
  },

  // 3. Animated Scale Modal
  {
    title: "Scale Animation Modal",
    description: "Modal with scale-in animation.",
    code: `<BasicModal buttonText="Scale Modal">
  <div className="transform scale-95 animate-scale-in">Content goes here</div>
</BasicModal>`,
    element: (
      <BasicModal buttonText="Scale Modal">
        <div className="transform scale-95 animate-scale-in">
          <h3 className="text-lg font-bold mb-2">Scale Modal</h3>
          <p>This modal smoothly scales in.</p>
        </div>
      </BasicModal>
    ),
  },

  // 4. Form Modal
  {
    title: "Form Modal",
    description: "A modal containing a form (e.g., login).",
    code: `<BasicModal buttonText="Login Modal">
  <form>
    <input placeholder="Email" />
    <input placeholder="Password" />
    <button>Login</button>
  </form>
</BasicModal>`,
    element: (
      <BasicModal buttonText="Login Modal">
        <h3 className="text-lg font-bold mb-4">Login</h3>
        <form className="space-y-3">
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        </form>
      </BasicModal>
    ),
  },

  // 5. Gradient Background Modal
  {
    title: "Gradient Modal",
    description: "Modal with gradient background header.",
    code: `<BasicModal buttonText="Gradient Modal">
  <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded text-white">
    Gradient Header Content
  </div>
</BasicModal>`,
    element: (
      <BasicModal buttonText="Gradient Modal">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded text-white">
          <h3 className="text-lg font-bold">Gradient Modal</h3>
          <p>This modal has a colorful header.</p>
        </div>
      </BasicModal>
    ),
  },

  // 6. Sidebar Modal
  {
    title: "Sidebar Modal",
    description: "Modal sliding in from the right.",
    code: `<BasicModal buttonText="Sidebar Modal">
  <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-6">
    Sidebar content
  </div>
</BasicModal>`,
    element: (
      <BasicModal buttonText="Sidebar Modal">
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-6">
          <h3 className="text-lg font-bold mb-2">Sidebar Modal</h3>
          <p>Slides in from the right side.</p>
        </div>
      </BasicModal>
    ),
  },

  // 7. Notification Modal
  {
    title: "Notification Modal",
    description: "Toast-style modal at top-right corner.",
    code: `<BasicModal buttonText="Notify">
  <div className="fixed top-5 right-5 bg-blue-500 text-white p-4 rounded shadow-lg">
    Notification content
  </div>
</BasicModal>`,
    element: (
      <BasicModal buttonText="Notify">
        <div className="fixed top-5 right-5 bg-blue-500 text-white p-4 rounded shadow-lg">
          <p>New message received!</p>
        </div>
      </BasicModal>
    ),
  },

  // 8. Centered Card Modal
  {
    title: "Card Modal",
    description: "Modal with card style layout.",
    code: `<BasicModal buttonText="Card Modal">
  <div className="bg-white rounded-xl shadow-xl p-6">
    Card content
  </div>
</BasicModal>`,
    element: (
      <BasicModal buttonText="Card Modal">
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h3 className="text-lg font-bold mb-2">Card Modal</h3>
          <p>Looks like a card inside a modal.</p>
        </div>
      </BasicModal>
    ),
  },


  // 10. Multi-step Modal
  {
    title: "Multi-step Modal",
    description: "Modal with step-wise content.",
    code: `<BasicModal buttonText="Steps Modal">
  <div>Step 1 content</div>
</BasicModal>`,
    element: (
      <BasicModal buttonText="Steps Modal">
        <h3 className="text-lg font-bold mb-2">Step 1</h3>
        <p>Content for first step.</p>
        <div className="flex justify-end mt-4">
          <button className="px-3 py-1 bg-gray-200 rounded">Next</button>
        </div>
      </BasicModal>
    ),
  },

  // 11. Dark Mode Modal
  {
    title: "Dark Modal",
    description: "Modal with dark theme.",
    code: `<BasicModal buttonText="Dark Modal">
  <div className="bg-gray-800 text-white p-6 rounded">
    Dark mode content
  </div>
</BasicModal>`,
    element: (
      <BasicModal buttonText="Dark Modal">
        <div className="bg-gray-800 text-white p-6 rounded">
          <h3 className="text-lg font-bold mb-2">Dark Modal</h3>
          <p>This modal is styled for dark mode.</p>
        </div>
      </BasicModal>
    ),
  },

  // 12. Fullscreen Modal
  {
    title: "Fullscreen Modal",
    description: "Covers the entire screen.",
    code: `<BasicModal buttonText="Fullscreen">
  <div className="fixed inset-0 bg-white flex items-center justify-center">
    Fullscreen content
  </div>
</BasicModal>`,
    element: (
      <BasicModal buttonText="Fullscreen">
        <div className="fixed inset-0 bg-white flex items-center justify-center">
          <h3 className="text-2xl font-bold">Fullscreen Modal</h3>
        </div>
      </BasicModal>
    ),
  },
];


const ModalsPage = () => {
  return (
    <div className="h-max w-screen bg-[#e7f7db]">
      <div className="w-full flex h-screen">
        <Sidebar />
        <div className="p-4 mt-10 md:p-8 w-full bg-[#f3f4f6] overflow-auto">
          <h2 className="text-3xl font-bold mb-6 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:rounded mt-1">
            Modals Library
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modals.map((modal, idx) => (
              <ComponentPreviewModal
                key={idx}
                element={modal.element}
                code={modal.code}
                title={modal.title}
                description={modal.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalsPage;
