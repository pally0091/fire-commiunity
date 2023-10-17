/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../Utility/Button";
import i1 from "../../assets/image 6.png";
import ic1 from "../../assets/icons/icon 3.png";
import ic2 from "../../assets/icons/icon 2.png";
import ic3 from "../../assets/icons/icon 1.png";
import frame from "../../assets/Frame.svg";
import ceo from "../../assets/Ellipse 6.png";
import map from "../../assets/map.png";
import PriceSection from "./PriceSection";

const About = () => {
  return (
    <div className="mt-10 w-[90%] mx-auto">
      {/* head  */}
      <div className="w-3/5 mx-auto my-5">
        <h1 className="text-5xl font-bold">We are here to help you</h1>
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
      <div className="mt-20 flex flex-col md:flex-row lg:flex-row justify-between items-start md:items-center lg:items-start">
        <div className="md:w-1/3 lg:w-[40%]">
          <img
            src={i1}
            alt=""
          />
        </div>
        <div className="p-5 w-full md:w-2/3 lg:w-1/2">
          <h4 className="text-right text-3xl font-semibold">
            Hundreds of features included
          </h4>
          <p className="text-[#6B7280] text-right">
            improving your skills through courses, a very good community, and as
            a place to socialize among Financial Independence
          </p>
          <div className="grid grid-cols-1 gap-5 mt-10">
            <div className="flex  text-left items-start p-2 rounded-lg bg-[#F3F4F6]">
              <div className="mx-4 w-16">
                <img
                  className="w-full "
                  src={ic1}
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-lg font-bold">Social Networking</h6>
                <p className="text-sm text-[#6B7280]">
                  Connect with other users, and share your tips and hobbies
                </p>
              </div>
            </div>
            <div className="flex  text-left items-start p-2 rounded-lg bg-[#F3F4F6]">
              <div className="mx-4 w-16 ">
                <img
                  className="w-full "
                  src={ic2}
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-lg font-bold">Great Community</h6>
                <p className="text-sm text-[#6B7280]">
                  Join an amazing community and help each other among users
                </p>
              </div>
            </div>
            <div className="flex  text-left items-start p-2 rounded-lg bg-[#F3F4F6]">
              <div className="mx-4 w-16 ">
                <img
                  className="w-full "
                  src={ic3}
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-lg font-bold">Marketplace</h6>
                <p className="text-sm text-[#6B7280]">
                  Sell your digital products and earn extra income from here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ceo message  */}
      <div className="bg-[#E5E7EB] rounded-lg px-5 lg:px-[25%] py-[2%] mt-24">
        <div className="w-12 mx-auto my-2">
          <img
            src={frame}
            alt=""
          />
        </div>
        <p className="my-2">
          “Our goal is to create a platform for Financial Independence and Early
          Retired to be able to grow in business like when they were working.
          and as a place/community to share with each other”
        </p>
        <div className="flex items-center justify-center mt-8">
          <div>
            <img
              src={ceo}
              alt=""
            />
          </div>
          <p className="mx-2 font-semibold">Mathew Moore</p>
          <p className="px-2 border-s border-[#6B7280] text-[#6B7280]">
            Founder & CEO
          </p>
        </div>
      </div>
      {/* prcing section  */}
      <div className="mt-20">
        <PriceSection></PriceSection>
      </div>
      {/* map  */}
      <div className="w-[110%] mt-20 -mx-[5%]">
        <img
          src={map}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
