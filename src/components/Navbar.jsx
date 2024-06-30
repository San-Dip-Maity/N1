import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex list-none gap-7 items-center">
        <li>About us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
        <li>Blog</li>
        <button className="border-solid border-2 p-3  rounded-lg border-slate-900 hover:bg-[#B9FF66] hover:border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">Request a quote</button>
      </div>
    </>
  );
};

export default Navbar;
