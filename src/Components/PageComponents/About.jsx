/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../Utility/Button";

const About = () => {
  return (
    <div className="mt-10">
      {/* head  */}
      <div className="w-3/5 mx-auto my-5">
        <h1 className="text-4xl font-bold">We are here to help you</h1>
        <p className="text-[#6B7280]">
          Help you in the decisions you make in matters of employment, financial
          independence, and early retirement
        </p>
        <div className="flex justify-center mt-5">
          <Button
            label="Get Started"
            primary
          ></Button>
          <Button
            label="View Pricing"
            secondary
          ></Button>
        </div>
      </div>
      {/* features  */}
    </div>
  );
};

export default About;
