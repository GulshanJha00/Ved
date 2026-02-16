"use client"
import Details from "@/components/details/Details";
import Homepage from "@/components/Homepage/Homepage";
import * as Sentry from "@sentry/nextjs";

const Page: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-visible bg-gray-50 ">
      <Homepage />
      <Details />

      <button
  onClick={() => Sentry.showReportDialog()}
  className="fixed bottom-6 right-6backdrop-blur-md border-black
 bg-white/70 border text-gray-900 px-5 py-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 font-medium z-50"
>
  🐞 Report Bug
</button>

    </div>
  );
};

export default Page;
