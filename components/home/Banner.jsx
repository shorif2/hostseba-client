import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#2760E9] p-16">
      <div className="container mx-auto h-[300px] w-1/2">
        <div className="text-center">
          <h2 className="text-white text-5xl font-bold pb-6">
            Premium Web Hosting & Domain Services
          </h2>
          <p className="text-xl pb-8 text-white">
            Fast, secure, and reliable hosting for your website
          </p>
          <div className="relative w-3/5 mx-auto  flex  gap-4 pb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" absolute left-3 top-3.5 h-5 w-5 text-gray-400 "
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              className="px-10 py-3 bg-white w-4/5 rounded"
              placeholder="Find your perfect domain name..."
            />
            <button className="px-8 bg-green-500 text-white font-medium rounded">
              Search
            </button>
          </div>
          <button className="bg-white text-blue-600 px-4 py-2.75 rounded text-[14px] font-medium">
            Login / Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
