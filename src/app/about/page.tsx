import React from 'react';
import About from './AboutUsCard';
import Navbar from '@/components/Navbar/Navbar';
import "./aboutbg.css"

const page = () => {
  return (
    <>
    
      <Navbar />
    <div className="aboutbg">
      <About />
    </div>
    </>
  );
};

export default page;
