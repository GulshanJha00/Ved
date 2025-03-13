import { useEffect, useState } from "react";

const MobilePopup = () => {
  const [isMobile, setIsMobile] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);


  const goBack = ()=>{
    window.location.href = "/flexbox-game"
  }

  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg text-center">
        <h2 className="text-lg font-bold">Hold On!</h2>
        <p className="text-sm mt-2">Ved Flex is better preffered on larger screens.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={goBack}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default MobilePopup;
