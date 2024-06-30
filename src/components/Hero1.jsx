import React from "react";
import hero1 from '../assets/hero1.png'

const Hero1 = () => {
  return (
    <div className="grid grid-cols-2 gap-24 mt-20">
      <div className="animate-slidein">
        <h2 className="font-semibold text-6xl ">Navigating the digital landscape for success</h2>
        <p className="mt-10 w-[25rem] text-">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <button className="border-2 border-solid transition duration-200 delay-150 border-black bg-black text-white p-4 rounded-xl mt-10 hover:bg-white hover:text-black">Book a consultation</button>
      </div>
      <div><img src={hero1} alt="" /></div>
    </div>
  );
};

export default Hero1;
