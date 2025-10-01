"use client";
import React from "react";
import ComponentPreviewCard from "../../shared/ComponentPreviewCard";

const AlertsPage = () => {
  return (
    <div className="p-4 md:p-8 min-h-screen bg-[#f3f4f6]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Alerts</h1>

      <ComponentPreviewCard title="Alert Types">
        <div className="p-2 bg-blue-100 text-blue-800 rounded-md w-48">Info Alert</div>
        <div className="p-2 bg-green-100 text-green-800 rounded-md w-48">Success Alert</div>
        <div className="p-2 bg-yellow-100 text-yellow-800 rounded-md w-48">Warning Alert</div>
        <div className="p-2 bg-red-100 text-red-800 rounded-md w-48">Error Alert</div>
      </ComponentPreviewCard>
    </div>
  );
};

export default AlertsPage;
