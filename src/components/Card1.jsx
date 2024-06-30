import React from "react";
import g1 from "../assets/g1.png";

const card1 = () => {
  return (
    <div>
      <div className="flex w-[500px] items-center justify-between p-[20px] relative bg-grey rounded-[45px] overflow-hidden border border-solid border-dark border-b-4 border-black">
        <div className="inline-flex flex-col items-start justify-center gap-[93px]  ">
          <h3 className="text-3xl font-semibold ">
            <p className="bg-[#B9FF66] border-solid p-1 rounded-xl">
              Search engine
            </p>
            <span className="bg-[#B9FF66] border-solid p-1 rounded-xl">
              optimization
            </span>
          </h3>
          <button className="flex items-center gap-5 text-lg">
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
              <path
                d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                fill="#B9FF66"
              />
            </svg>
            Learn more
          </button>
        </div>
        <div className="relative w-[210px] h-[170px]">
          <img
            className="absolute w-[210px] h-[166px] top-0.5 left-0"
            alt="Tokyo magnifier web"
            src={g1}
          />
        </div>
      </div>
    </div>
  );
};

export default card1;
