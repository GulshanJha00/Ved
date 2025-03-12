import React from "react";
import Link from "next/link";
import { IconType } from "react-icons/lib";
interface CardProps {
    tag: IconType;  // Make tag an IconType
    title: string;
    pTag: string;
    p2Tag: string;
    link:string
  }
const PracticeSectionCards: React.FC<CardProps> = ({ tag: Tag, title, pTag, p2Tag,link }) => {
  return (
    <div className="flex relative flex-col gap-2 rounded-sm bg-[#a8e7ff] p-6 w-[19rem] h-[18rem] border-[0.1px]  border-gray-500 shadow-lg">
      <div className="flex text-3xl font-bold font-sans mb-2 items-center gap-2">
      <Tag className="text-3xl" />
        <h1 className="">{title}</h1>
      </div>
      <p className="mb-2">{pTag}</p>
      <p>
        {p2Tag}
      </p>
      <Link href={link}>
        <button className="absolute bottom-4 bg-[#1A1600] px-4 py-2 flex justify-center items-center gap-1 text-white mt-3 rounded-lg">Explore Challenges</button>
      </Link>
    </div>
  );
};

export default PracticeSectionCards;
