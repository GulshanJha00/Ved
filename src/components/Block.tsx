import React, { useEffect, useState } from 'react';

const Block = () => {
  const [eventCount, setEventCount] = useState(0);
  const [pageViews, setPageViews] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [notesRequest, setNotesRequest] = useState(0);
  
  // Function to animate counting
  const countUp = (setState: React.Dispatch<React.SetStateAction<number>>, target:number, duration:number) => {
    let start = 0;
    const step = target / (duration / 30);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target; // Ensure it doesn't exceed the target value
        clearInterval(interval);
      }
      setState(Math.round(start)); // Round to avoid floating point issues
    }, 30);
  };

  // Intersection Observer to trigger counting when block comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          countUp(setEventCount, 50000, 2000);
          countUp(setPageViews, 25000, 2000);
          countUp(setActiveUsers, 1700, 2000);
          countUp(setNotesRequest, 50, 2000);
        }
      },
      { threshold: 0.5 } // trigger when 50% of the element is visible
    );

    const blockElement = document.querySelector('#countBlock');
    if (blockElement) observer.observe(blockElement);

    return () => {
      if (blockElement) observer.unobserve(blockElement);
    };
  }, []);

  return (
    <div id="countBlock" className='w-full h-auto grid lg:grid-cols-4 gap-6  lg:px-36 md:absolute md:top-[33rem] lg:top-[37rem] xl:top-[37rem] sm:grid-cols-4 justify-items-center max-md:pt-16 grid-cols-2 '>
      {/* Card 1 */}
      <div className='lg:h-24 h-20 w-36 lg:w-40 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center'>
        <h1 className='text-[#731dad] text-3xl font-bold font-sans'>{eventCount.toLocaleString()}+</h1>
        <p className='font-sans'>Event Count</p>
      </div>

      {/* Card 2 */}
      <div className='lg:h-24 h-20 w-36 lg:w-40 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center'>
        <h1 className='text-[#731dad] text-3xl font-bold font-sans'>{pageViews.toLocaleString()}+</h1>
        <p className='font-sans'>Page Views</p>
      </div>

      {/* Card 3 */}
      <div className='lg:h-24 h-20 w-36 lg:w-40 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center'>
        <h1 className='text-[#731dad] text-3xl font-bold font-sans'>{activeUsers.toLocaleString()}+</h1>
        <p className='font-sans'>Active User</p>
      </div>

      {/* Card 4 */}
      <div className='lg:h-24 h-20 w-36 lg:w-40 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center'>
        <h1 className='text-[#731dad] text-3xl font-bold font-sans'>{notesRequest.toLocaleString()}+</h1>
        <p className='font-sans'>Notes Request</p>
      </div>
    </div>
  );
};

export default Block;
