import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-[#191A23] font-sans text-white rounded-t-3xl">
        <div class="container px-6 py-12 mx-auto">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div class="sm:col-span-2">
              <h1 class="max-w-lg text-xl font-semibold tracking-tight xl:text-2xl ">
                Subscribe our newsletter to get an update.
              </h1>

              <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  class="px-4 py-2 bg-white border rounded-md focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider  transform md:w-auto md:mx-4 focus:outline-none bg-[#B9FF66] text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-lg hover:bg-white focus:ring focus:ring-gray-300 focus:ring-opacity-80 ">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p class="font-semibold 0 ">Quick Link</p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <p class=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-[#B9FF66]">
                  Home
                </p>
                <p class=" transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-[#B9FF66]">
                  Who We Are
                </p>
                <p class=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-[#B9FF66]">
                  Our Philosophy
                </p>
              </div>
            </div>

            <div>
              <p class="font-semibold  ">Industries</p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <p class=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-[#B9FF66]">
                  Retail & E-Commerce
                </p>
                <p class=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-[#B9FF66]">
                  Information TechnologyB9FF66
                </p>
                <p class=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-[#B9FF66]">
                  Finance & Insurance
                </p>
              </div>
            </div>
          </div>

          <hr class="my-6 border-gray-200 md:my-8  h-2" />

          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex flex-1 gap-4 hover:cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                width="130"
                height="110"
                alt=""
              />
              <img
                src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                width="130"
                height="110"
                alt=""
              />
            </div>

            <div class="flex gap-4 hover:cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                height="30"
                alt="fb"
              />
              <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="30"
                height="30"
                alt="tw"
              />
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="30"
                height="30"
                alt="inst"
              />
              <img
                src="https://www.svgrepo.com/show/94698/github.svg"
                class=""
                width="30"
                height="30"
                alt="gt"
              />
              <img
                src="https://www.svgrepo.com/show/22037/path.svg"
                width="30"
                height="30"
                alt="pn"
              />
              <img
                src="https://www.svgrepo.com/show/28145/linkedin.svg"
                width="30"
                height="30"
                alt="in"
              />
              <img
                src="https://www.svgrepo.com/show/22048/dribbble.svg"
                class=""
                width="30"
                height="30"
                alt="db"
              />
            </div>
          </div>
          <p class="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
            © 2024 Dip Company Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
