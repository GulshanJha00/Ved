import Sidebar from "@/components/components-Library/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="h-max w-screen bg-[#e7f7db] ">


      <div className="w-full flex h-screen ">


        <Sidebar />


        <div className="w-[85%] overflow-auto h-full ">
          <div className="pt-20 pl-12 font-serif">
            <h1 className="text-4xl font-bold  mb-2">Component Library</h1>
            <p className="text-lg ">
              Browse and copy ready-to-use UI components with Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
