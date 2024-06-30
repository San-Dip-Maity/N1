import React from "react";
import Marquee from "react-fast-marquee";
import p1 from "../assets/logos/1.png";
import p2 from "../assets/logos/2.png";
import p3 from "../assets/logos/3.png";
import p4 from "../assets/logos/4.png";
import p5 from "../assets/logos/5.png";
import p6 from "../assets/logos/6.png";
import p7 from "../assets/logos/7.png";

const Herobar = () => {
  return (
    <div>
      <div className="m-6">
        <Marquee>
          <div className="flex gap-20  ">
            <img src={p1} alt="" className="w-28 ml-14" />
            <img src={p2} alt="" className="w-28" />
            <img src={p3} alt="" className="w-28" />
            <img src={p4} alt="" className="w-28" />
            <img src={p5} alt="" className="w-28" />
            <img src={p6} alt="" className="w-28" />
            <img src={p7} alt="" className="w-28" />
          </div>
        </Marquee>
      </div>
      <div className=" mt-16 flex gap-10  items-start relative">
        <h3 className="  border-solid p-1 mt-1 rounded-lg text-2xl font-bold bg-[#B9FF66]">
          Services
        </h3>
        <p className="relative w-[580px] mt-[-1.00px] ">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
    </div>
  );
};

export default Herobar;
