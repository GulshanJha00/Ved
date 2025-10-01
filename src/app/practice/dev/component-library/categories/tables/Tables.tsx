"use client";
import React from "react";
import ComponentPreviewCard from "../../shared/ComponentPreviewCard";

const TablesPage = () => {
  return (
    <div className="p-4 md:p-8 min-h-screen bg-[#f3f4f6]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Tables</h1>

      <ComponentPreviewCard title="Basic Table">
        <table className="border border-gray-300 w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Age</th>
              <th className="p-2 border">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border hover:bg-gray-100">
              <td className="p-2 border">John</td>
              <td className="p-2 border">25</td>
              <td className="p-2 border">Developer</td>
            </tr>
            <tr className="border hover:bg-gray-100">
              <td className="p-2 border">Jane</td>
              <td className="p-2 border">30</td>
              <td className="p-2 border">Designer</td>
            </tr>
          </tbody>
        </table>
      </ComponentPreviewCard>
    </div>
  );
};

export default TablesPage;
