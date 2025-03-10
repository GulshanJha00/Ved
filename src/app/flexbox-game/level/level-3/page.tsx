


"use client";
import React, { useState } from "react";
// import Image from "next/image";
import Charge from "@/../public/Flexbox/ChargedRobot.png";
import DisCharge from "@/../public/Flexbox/DischargedRobot.png";
import Station from "@/../public/Flexbox/ChargingPoint.png";
import { ToastContainer, toast } from "react-toastify";
import FlexBoxButton from "@/components/FlexboxButton";
import "@/app/flexbox-game/flexbox.css";
import Image from "next/image";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import Link from "next/link";

const Page = () => {
  const [isCharging, setIsCharging] = useState(false);
  const [input, setInput] = useState("");

  const level = 3;

  const handleCharge = () => {
    if (input === "space-around") {
      setIsCharging(true);
      toast.success("Charging");
    } else {
      setIsCharging(false);
      toast.error("Not Charging");
    }
  };


  return (
    <>
      <div className="h-screen grid grid-cols-5 text-white">
        {/* Left Panel */}
        <div className="text-4xl col-span-2 bg-cyan-800 border-r-2 border-white">
          <div className="border-b-2 border-white relative p-4 flex">
            <h1 className="rowdies-regular w-40">Ved Flex</h1>
            <span className="absolute right-4 space-x-2 flex">
              <Link href={`./level-${level - 1}`} className="inline-block"><IoMdArrowDropleftCircle /></Link>
              <span className="bg-slate-300/50 text-2xl leading-9 inline-block"> Level {level} of 20 </span>
              <Link href={`./level-${level + 1}`} className="inline-block"><IoMdArrowDroprightCircle /></Link>
            </span>
          </div>
          {/*Description about content */}
          <div className="text-[1rem] leading-7 mx-2 my-4 font-sans">
            <span className="text-2xl rowdies-regular">
              Understanding <span className="bg-gray-100/40">justify-content</span> and How It Works:
            </span>
            <br />
            The justify-content property is a powerful CSS feature that controls how flex items are positioned along the main axis of a flex container. This property is especially useful for distributing space between and around items when they don&apos;t use all available space in the main axis.            Values of justify-content:<br />
            <span className="bg-gray-100/40">space-between </span> – Items are evenly distributed with the first item at the start and the last item at the end. <br />
            <span className="bg-gray-100/40">space-around </span> – Items are evenly distributed with equal space around them. <br />
            <span className="bg-gray-100/40">space-evenly </span> – Items are evenly distributed with equal space between them. <br />
          </div>
          <div className=" m-4 flex font-sans font-normal rounded-lg bg-slate-400/80">
            <div className="w-8 text-xl leading-8 rounded-tl-lg rounded-bl-lg bg-slate-800/90">
              &nbsp; 1&nbsp;
              &nbsp; 2&nbsp;
              &nbsp; 3&nbsp;
              &nbsp; 4&nbsp;
              &nbsp; 5&nbsp;
              &nbsp; 6&nbsp;
            </div>
            <div className="text-xl leading-8 mx-2">

              <span className="">#robot &#123;</span><br />
              <span className="mx-8">display : flex ;</span><br />
              <span className="ml-8">justify-content : </span>
              <input
                type="text"
                className="text-black rounded text-xl w-64 px-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter CSS (e.g., center, end)"
              />
              <span className=""> ;</span><br />
              <span className="">&#125;	</span>
            </div>
          </div>
          <div className="text-xl mx-4 rowdies-light space-x-4">
            {/* Apply Button */}
            <div onClick={handleCharge} className="inline-block">
              <FlexBoxButton textToDisplay="Apply" />
            </div>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container" target="_blank" className="inline-block">
              <FlexBoxButton textToDisplay="Read Docs" />
            </Link>
              <Link href={`./level-${level - 1}`} className="inline-block text-4xl align-middle"><IoMdArrowDropleftCircle /></Link>&nbsp;&nbsp;&nbsp;Prev &nbsp;&nbsp;&nbsp; 
              Next<Link href={`./level-${level + 1}`} className="inline-block text-4xl align-middle"><IoMdArrowDroprightCircle /></Link>
          </div>
        </div>

        {/* Right Panel */}
        <div className="text-4xl col-span-3 testClass">
          {/* Charging Station */}
          <div className="relative z-0">
            <Image src={Station} alt="Charging Station" width={160} height={160} className="inline-block absolute left-[9.5rem]" />
            <Image src={Station} alt="Charging Station" width={160} height={160} className="inline-block absolute right-[9.5rem]" />
          </div>

          {/* Robot Image with User-defined CSS */}
          <div className="px-3 flex animated" style={{ justifyContent: `${input}` }}>
            <Image
              src={isCharging ? Charge : DisCharge}
              alt="Robot Status"
              width={144}
              height={144}
              className="z-20 mr-4"
            />
            <Image
              src={isCharging ? Charge : DisCharge}
              alt="Robot Status"
              width={144}
              height={144}
              className="z-20"
            />
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} theme="light" newestOnTop={true} />
    </>
  );
};

export default Page;
