"use client";
import React, { useState } from "react";
import ComponentPreviewCard from "../../shared/ComponentPreviewCard";

const ModalsPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4 md:p-8 min-h-screen bg-[#f3f4f6]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Modals</h1>

      <ComponentPreviewCard title="Basic Modal">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => setShowModal(true)}>Open Modal</button>
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md w-96">
              <h2 className="text-xl font-bold mb-4">Modal Title</h2>
              <p className="mb-4">This is a modal description.</p>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}
      </ComponentPreviewCard>
    </div>
  );
};

export default ModalsPage;
