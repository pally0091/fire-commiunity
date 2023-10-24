/* eslint-disable no-unused-vars */
import React from "react";
import CourseCat from "./CourseCat";

const Marketplace = () => {
  return (
    <div className="mt-5 w-[95%] mx-auto">
      <div>
        <p>banner </p>
      </div>
      <div>
        <p className="font-semibold text-left mt-5 mx-4  py-2 ">Categories</p>
        <hr className="border-2 w-32 border-[#f97365]" />
        <CourseCat></CourseCat>
      </div>
    </div>
  );
};

export default Marketplace;
