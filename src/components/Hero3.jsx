import React from "react";
import h3 from '../assets/h3.png'
const Hero3 = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-24 my-20 rounded-2xl bg-[#F3F3F3]">
        <div className="p-10">
          <h2 className="font-semibold text-3xl ">
          Let’s make things happen
          </h2>
          <p className="mt-10 w-[25rem] text-sm">
          Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button className="border-2 border-solid border-black bg-black text-white p-4 rounded-xl mt-10 hover:bg-white hover:text-black">
          Get your free proposal
          </button>
        </div>
        <div className="w-80" >
          <img src={h3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
