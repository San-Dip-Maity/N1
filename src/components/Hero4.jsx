import React from "react";
import Card2 from "./Card2";

const Hero4 = () => {
  return (
    <>
      <div className=" my-16 flex gap-10  items-start relative">
        <h3 className="  border-solid p-1 mt-1 rounded-lg text-2xl font-bold bg-[#B9FF66]">
          Team
        </h3>
        <p className="relative w-[580px] mt-[-1.00px] ">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2">
        <div>
          <Card2 />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card2 />
        </div>
      </div>
    </>
  );
};

export default Hero4;
