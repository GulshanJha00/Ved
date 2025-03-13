import React from "react";

const page = () => {
  return (
    <div className="h-max w-screen bg-[#D8E1FF] ">


      <div className="w-full flex h-screen ">


        <div className="w-[20%] border-black border-r-[1px] overflow-auto h-full bg-[#69DDFF]">

        </div>


        <div className="w-[80%] overflow-auto h-full ">
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
