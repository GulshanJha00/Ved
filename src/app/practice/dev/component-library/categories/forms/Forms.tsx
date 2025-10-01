"use client";
import React from "react";
import ComponentPreviewCard from "../../shared/ComponentPreviewCard";

const FormsPage = () => {
  return (
    <div className="p-4 md:p-8 min-h-screen bg-[#f3f4f6]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Forms</h1>

      <ComponentPreviewCard title="Input Fields">
        <input className="border px-3 py-2 rounded-md w-48" placeholder="Text input" />
        <input type="email" className="border px-3 py-2 rounded-md w-48" placeholder="Email" />
        <input type="password" className="border px-3 py-2 rounded-md w-48" placeholder="Password" />
      </ComponentPreviewCard>

      <ComponentPreviewCard title="Checkbox & Radio">
        <label className="flex items-center gap-2"><input type="checkbox" /> Checkbox</label>
        <label className="flex items-center gap-2"><input type="radio" name="radio" /> Radio</label>
      </ComponentPreviewCard>

      <ComponentPreviewCard title="Select & Textarea">
        <select className="border px-3 py-2 rounded-md w-48">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <textarea className="border px-3 py-2 rounded-md w-48" placeholder="Textarea" />
      </ComponentPreviewCard>
    </div>
  );
};

export default FormsPage;
