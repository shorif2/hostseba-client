import React from "react";

const Service = () => {
  return (
    <div className="">
      <div className="container mx-auto px-16 py-16 ">
        <div className="pb-12">
          <h2 className="text-center text-3xl font-bold">Our Services</h2>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {/* Domain */}
          <div className="shadow-sm p-6 bg-white rounded-md flex flex-col justify-center items-center">
            <h3 className="text-xl font-medium pb-10">Domain</h3>
            <div className=" flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-[#374151]">Domain Registration</p>
            </div>
            <div className=" flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-[#374151]">Domain Transfer</p>
            </div>
            <div className="py-6 text-center">
              <p className="text-[14px] text-[#374151] ">Starting From</p>
              <h4 className="text-2xl font-bold">$60/year</h4>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded text-[14px] font-medium mt-6">
              Buy Domain
            </button>
          </div>
          {/* Hosting */}
          <div className="relative border-2 border-blue-500 p-6 bg-white rounded-md flex flex-col justify-center items-center">
            <p className="absolute top-0 right-0 bg-blue-500 text-white text-sm px-3 py-1 font-medium">
              Popular
            </p>
            <h3 className="text-xl font-medium pb-10">Hosting</h3>
            <div className=" flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-[#374151]">Premium Hosting</p>
            </div>
            <div className=" flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-[#374151]">USA Premium Hosting</p>
            </div>
            <div className="py-6 text-center">
              <p className="text-[14px] text-[#374151] ">Starting From</p>
              <h4 className="text-2xl font-bold">$60/year</h4>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-[14px] font-medium mt-6">
              Buy Hosting
            </button>
          </div>
          {/* Bundle Package */}
          <div className="shadow-sm p-6 bg-white rounded-md flex flex-col justify-center items-center">
            <h3 className="text-xl font-medium pb-10">Bundle Package</h3>
            <div className=" flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-[#374151]">Domain Registration</p>
            </div>
            <div className=" flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-[#374151]">Domain Transfer</p>
            </div>
            <div className=" flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-[#374151]">USA Premium Hosting</p>
            </div>
            <div className="py-6  text-center">
              <p className="text-[14px] text-[#374151] ">Starting From</p>
              <h4 className="text-2xl font-bold">$60/year</h4>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded text-[14px] font-medium mt-6">
              Buy Domain
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
