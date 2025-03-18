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
import MobilePopup from "@/components/flexboxPopUp";

const Page = () => {
  const [isCharging, setIsCharging] = useState(false);
  const [input, setInput] = useState("");

  const level = 5;

  const handleCharge = () => {
    if (input === "center") {
      setIsCharging(true);
      toast.success("Charging");
    } else {
      setIsCharging(false);
      toast.error("Not Charging");
    }
  };


  return (
    <>
      <div className="min-h-screen lg:grid grid-cols-5 text-white">
        {/* Left Panel */}
        <div className="text-4xl col-span-2 bg-cyan-800 border-r-2 border-white  max-lg:hidden">
          <div className="border-b-2 border-white relative p-4 flex">
            <h1 className="rowdies-regular w-40">Ved Flex</h1>
            <span className="absolute right-4 space-x-2 flex">
              <Link href={`./level-${level - 1}`} className="inline-block"><IoMdArrowDropleftCircle /></Link>
              <span className="bg-slate-300/50 text-2xl leading-9 inline-block"> Level {level} of 20 </span>
              <Link href={`./level-${level + 1}`} className="inline-block"><IoMdArrowDroprightCircle /></Link>
            </span>
          </div>
          {/*Description about content */}
          <div className="max-xl:text-[0.9rem] text-[1rem] leading-7 mx-2 my-4 font-sans">
            <span className="text-2xl rowdies-regular">
              Understanding <span className="bg-gray-100/40">align-items</span> and How It Works:
            </span>
            <br />
            The align-items property is a powerful CSS feature that controls how flex items are positioned along the cross axis of a flex container. This property is especially useful for aligning items when they have different heights or when the container has more space than needed. Values of align-items: <br/>
            <span className="bg-gray-100/40">flex-start </span> – Items are aligned at the start of the cross axis. <br />
            <span className="bg-gray-100/40">flex-end </span> – Items are aligned at the end of the cross axis. <br />
            <span className="bg-gray-100/40">center </span> – Items are centered along the cross axis. <br />
            <span className="bg-gray-100/40">baseline  </span> – Items are aligned based on their text baseline. <br />
            <span className="bg-gray-100/40">stretch  </span> – Items are stretched to fill the container’s height (if no height is set). <br />
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
              <span className="ml-8">align-items : </span>
              <input
                type="text"
                className="text-black rounded text-xl w-40 xl:w-64 px-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter CSS (e.g., center, end)"
              />
              <span className=""> ;</span><br />
              <span className="">&#125;	</span>
            </div>
          </div>
          <div className="text-xl mx-4 rowdies-light space-x-4">
            <div onClick={handleCharge} className="inline-block">
              <FlexBoxButton textToDisplay="Apply" />
            </div>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container" target="_blank" className="inline-block">
              <FlexBoxButton textToDisplay="Read Docs" />
            </Link>
            <div className="sm:inline-block align-top max-sm:my-4 ">
              <Link href={`./level-${level - 1}`} className="inline-block text-xl align-top border-2 rounded-l-full px-4 py-[5px] bg-teal-950"><IoMdArrowDropleftCircle size={32} className="inline-block" /> Prev</Link>
              <Link href={`./level-${level + 1}`} className="inline-block text-xl align-top border-2 rounded-r-full px-4 py-[5px] bg-teal-950">Next <IoMdArrowDroprightCircle size={32} className="inline-block" /></Link>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="text-4xl col-span-3 testClass h-screen min-h-[40rem] max-md:hidden">
          {/* Charging Station */}
          <div className="relative z-0">
            <Image src={Station} alt="Charging Station" width={160} height={160} className="inline-block absolute top-[39.5rem] "/>
            <Image src={Station} alt="Charging Station" width={160} height={160} className="inline-block absolute top-[39.5rem] left-40 "/>
          </div>

          {/* Robot Image with User-defined CSS */}
          <div className="px-3 flex animated h-full max-lg:h-[40rem] items-start" style={{ alignItems: `${input}` }} >
            <Image
              src={isCharging ? Charge : DisCharge}
              alt="Robot Status"
              width={144}
              height={144}
              className="z-20 mr-4 "
            />
            <Image
              src={isCharging ? Charge : DisCharge}
              alt="Robot Status"
              width={144}
              height={144}
              className="z-20 mr-4 "
            />
          </div>
        </div>
              {/* Downbar */}
              <div className="text-4xl col-span-2 pb-4 bg-cyan-800 lg:border-r-2 text-white border-white max-md:hidden lg:hidden">
          <div className="border-b-2 border-white relative p-4 flex">
            <h1 className="rowdies-regular">Ved Flex</h1>
            <span className="absolute right-4 space-x-2 flex">
              <Link href={`./level-${level - 1}`} className="inline-block"><IoMdArrowDropleftCircle /></Link>
              <span className="bg-slate-300/50 text-2xl leading-9 inline-block"> Level {level} of 20 </span>
              <Link href={`./level-${level + 1}`} className="inline-block"><IoMdArrowDroprightCircle /></Link>
            </span>
          </div>
          {/*Description about content */}
          <div className="text-[1rem] leading-7 mx-2 my-4 font-sans">
            <span className="text-2xl rowdies-regular">
            Understanding <span className="bg-gray-100/40">align-items</span> and How It Works:
            </span>
            <br />
            The align-items property is a powerful CSS feature that controls how flex items are positioned along the cross axis of a flex container. This property is especially useful for aligning items when they have different heights or when the container has more space than needed. Values of align-items: <br/>
            <span className="bg-gray-100/40">flex-start </span> – Items are aligned at the start of the cross axis. <br />
            <span className="bg-gray-100/40">flex-end </span> – Items are aligned at the end of the cross axis. <br />
            <span className="bg-gray-100/40">center </span> – Items are centered along the cross axis. <br />
            <span className="bg-gray-100/40">baseline  </span> – Items are aligned based on their text baseline. <br />
            <span className="bg-gray-100/40">stretch  </span> – Items are stretched to fill the container’s height (if no height is set). <br />
          </div>
          <div className=" m-4 flex font-sans font-normal rounded-lg bg-slate-400/80">
            <div className="w-8 text-[1rem] md:text-xl leading-7 grid   md:leading-8 rounded-tl-lg rounded-bl-lg bg-slate-800/90">
              <div className="block mx-auto">1</div>
              <div className="block mx-auto">2</div>
              <div className="block mx-auto">3</div>
              <div className="block mx-auto">4</div>
              <div className="block mx-auto">5</div>
              <div className="block mx-auto">6</div>
            </div>
            <div className="text-[1rem] sm:text-xl leading-7 md:leading-8 mx-2">

              <span className="">#robot &#123;</span><br />
              <span className="mx-8">display : flex ;</span><br />
              <span className="ml-8">align-items : </span>
              <input
                type="text"
                className="text-black rounded text-[1rem] md:text-xl w-64 lg:w-40 xl:w-64 px-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter CSS (e.g., center, end)"
              />
              <span className=""> ;</span><br />
              <span className="">&#125;	</span>
            </div>
          </div>
          <div className="text-xl mx-4 rowdies-light space-x-4">
            <div onClick={handleCharge} className="inline-block">
              <FlexBoxButton textToDisplay="Apply" />
            </div>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container" target="_blank" className="inline-block">
              <FlexBoxButton textToDisplay="Read Docs" />
            </Link>
            <div className="sm:inline-block align-top max-sm:my-4 ">
              <Link href={`./level-${level - 1}`} className="inline-block text-xl align-top border-2 rounded-l-full px-4 py-[5px] bg-teal-950"><IoMdArrowDropleftCircle size={32} className="inline-block" /> Prev</Link>
              <Link href={`./level-${level + 1}`} className="inline-block text-xl align-top border-2 rounded-r-full px-4 py-[5px] bg-teal-950">Next <IoMdArrowDroprightCircle size={32} className="inline-block" /></Link>
            </div>
          </div>
        </div>
      </div>
      <MobilePopup/>
      <ToastContainer autoClose={3000} theme="light" newestOnTop={true} />
    </>
  );
};


export default Page;