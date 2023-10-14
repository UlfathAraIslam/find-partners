import React from "react";
import bannerImg from "../../../assets/banner.png";
const Banner = () => {
  return (
    <div className="h-[803px] bg-gradient-to-r from-pink-100 via-blue-100 to-pink-100 flex items-center justify-center">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center">
        <div className="lg:w-3/6 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-4xl font-extrabold mb-1">
            Find{" "}
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-purple-700 to-indigo-600">
              Partners
            </span>
            (CAs) <br />
            available online
          </h2>
          <p className="leading-relaxed text-[#616161] mb-5 text-sm">
            <span className="text-bold ">CONNECT</span>with us where your
            services are listed and visible to a myriad of business seeking CA's
            for compliance support
          </p>
          {/* search bar */}

          <div className="relative w-670 h-73">
            <input
              type="search"
              placeholder="Search by name"
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none w-full"
            />
            <button className="absolute right-0 top-0 bg-[#0076CE] text-white font-bold py-2 px-7 rounded-l-none rounded-r-lg">
              Search
            </button>
          </div>
        </div>
        <div className="lg:w-3/6 md:w-1/2rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <img
            className="object-cover object-center rounded"
            alt="banner"
            src={bannerImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
