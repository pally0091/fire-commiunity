/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "../InpageComponents/Slider";
import Button from "../Utility/Button";

const Coaching = () => {
  return (
    <div className="w-[95%] mx-auto text-left">
      <p className="font-semibold my-5">Latest this week</p>
      <Slider>
        <div className="card bg-[#deaaee] inline-block mx-2 text-white p-4 rounded-lg w-full md:w-[70%] lg:w-[70%] text-left">
          <p className="text-xs">Collection</p>
          <h6 className="text-2xl">Easy for itinerary planning</h6>
          <hr className="border-2 w-32 border-[#2ab1ea] mb-5" />
          <Button secondary>Show All</Button>
        </div>
        <div className="card bg-[#deaaee] inline-block mx-2 text-white p-4 rounded-lg w-full md:w-[70%] lg:w-[70%] text-left">
          <p className="text-xs">Collection</p>
          <h6 className="text-2xl">Easy for itinerary planning</h6>
          <hr className="border-2 w-32 border-[#2ab1ea] mb-5" />
          <Button secondary>Show All</Button>
        </div>
        <div className="card bg-[#deaaee] inline-block mx-2 text-white p-4 rounded-lg w-full md:w-[70%] lg:w-[70%] text-left">
          <p className="text-xs">Collection</p>
          <h6 className="text-2xl">Easy for itinerary planning</h6>
          <hr className="border-2 w-32 border-[#2ab1ea] mb-5" />
          <Button secondary>Show All</Button>
        </div>
      </Slider>
    </div>
  );
};

export default Coaching;
