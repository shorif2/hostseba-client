import React from "react";
import Star from "./Star";

const Review = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 xl:px-16 py-16 ">
        <div className="pb-12">
          <h2 className="text-center text-3xl font-bold">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-8 md:px-4.75">
          {/* 1st div */}
          <div className="shadow-md p-6 bg-white rounded-md lg:col-span-3 xl:col-span-2 xl:col-start-2">
            <div className="flex items-center gap-4 pb-5">
              <p className="p-5.75 rounded-full bg-gray-300"></p>
              <div>
                <h3 className="font-medium ">Customer 1</h3>
                <div className="flex">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
            {/* text */}
            <p className="text-[#374151]">
              "HostSeba provides amazing service. Their customer support is
              excellent, and my website has never been faster. I highly
              recommend their hosting services!"
            </p>
          </div>
          <div className="shadow-md p-6 bg-white rounded-md lg:col-span-3 xl:col-span-2">
            <div className="flex items-center gap-4 pb-5">
              <p className="p-5.75 rounded-full bg-gray-300"></p>
              <div>
                <h3 className="font-medium ">Customer 1</h3>
                <div className="flex">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
            {/* text */}
            <p className="text-[#374151]">
              "HostSeba provides amazing service. Their customer support is
              excellent, and my website has never been faster. I highly
              recommend their hosting services!"
            </p>
          </div>
          <div className="shadow-md p-6 bg-white rounded-md lg:col-span-3 xl:col-span-2 lg:col-start-3 xl:col-start-3">
            <div className="flex items-center gap-4 pb-5">
              <p className="p-5.75 rounded-full bg-gray-300"></p>
              <div>
                <h3 className="font-medium ">Customer 1</h3>
                <div className="flex">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
            {/* text */}
            <p className="text-[#374151]">
              "HostSeba provides amazing service. Their customer support is
              excellent, and my website has never been faster. I highly
              recommend their hosting services!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
