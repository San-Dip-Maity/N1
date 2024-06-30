import React from "react";
import p1 from "../assets/p1.png";
import ln from "../assets/ln.png";
import line from "../assets/line.png";
const Card2 = () => {
  return (
    <>
      <div className="mt-10">
        <div className="flex flex-col w-[387px] h-[331px] items-start gap-2.5 px-[35px] py-10 relative bg-white rounded-[45px] overflow-hidden border border-solid border-black">
          <div className="inline-flex flex-col items-start gap-7 relative">
            <div className="flex items-start relative self-stretch w-full">
              <div className="flex items-end gap-5 pl-0 pr-[76px] py-0 relative flex-1 grow">
                <div className="relative w-[105.65px] h-[102.82px]">
                  <div className="relative w-[106px] h-[103px]">
                    <img
                      className="absolute w-[98px] h-[98px] top-[5px] left-2"
                      alt="Vector"
                      src={p1}
                    />
                  </div>
                </div>
                <div className="relative w-[152px] h-[49px] mr-[-36.65px]">
                  <div className="absolute top-0 left-0 font-h-4 font-medium text-[#000000]">
                    John Smith
                  </div>
                  <div className="absolute top-[26px] left-0 font-p ">
                    CEO and Founder
                  </div>
                </div>
              </div>
              <div className="relative w-[34px] h-[34px] ml-[-67px] bg-[#000000] rounded-[17px]">
                <img
                  className="absolute w-[17px] h-[17px] top-2 left-[9px]"
                  alt="Linkedin"
                  src={ln}
                />
              </div>
            </div>
            <img
              className="relative w-[317px] h-px object-cover"
              alt="Line"
              src={line}
            />
            <p className="relative w-[317px]">
              10+ years of experience in digital marketing. Expertise in SEO,
              PPC, and content strategy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
