import React from "react";
import Card1 from "./Card1";
const Hero2 = () => {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-3 mt-20 gap-12">
        <div>
          <Card1 />
        </div>
        <div><Card1 /></div>
        <div><Card1 /></div>
        <div><Card1 /></div>
        <div><Card1 /></div>
        <div><Card1 /></div>
      </div>
    </>
  );
};

export default Hero2;
