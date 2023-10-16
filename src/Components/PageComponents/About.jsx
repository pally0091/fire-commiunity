/* eslint-disable no-unused-vars */
import React from "react";
import commiunity from "../../assets/Community-cuate 1.svg";
import Button from "../Utility/Button";
import ic1 from "../../assets/icons/icon 3.png";
import ic2 from "../../assets/icons/icon 2.png";
import ic3 from "../../assets/icons/icon 1.png";

const About = () => {
  return (
    <div className="w-[95%] mx-auto">
      {/* head  */}
      <div className="flex items-center px-5 py-5">
        <div className="w-1/2 p-5">
          <h1 className="text-4xl my-4 font-semibold text-left">
            Welcome to the <span className="text-[#FF6F61]">FIRE</span>{" "}
            community
          </h1>
          <p className="text-left my-4">
            A special community for financial independence and early retirees to
            interact with each other
          </p>
          <div className="flex">
            <Button
              label="Get Started"
              primary
            ></Button>
            <Button
              label="See Commiunity"
              secondary
            ></Button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={commiunity}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="flex  text-left items-start">
          <div className="mx-4 w-24 ">
            <img
              className=""
              src={ic1}
              alt=""
            />
          </div>
          <div>
            <h6 className="text-lg font-bold">Social Networking</h6>
            <p className="text-sm">
              Connect with other users, and share your tips and hobbies
            </p>
          </div>
        </div>
        <div className="flex  text-left items-start">
          <div className="mx-4 w-24 ">
            <img
              className=""
              src={ic2}
              alt=""
            />
          </div>
          <div>
            <h6 className="text-lg font-bold">Great Community</h6>
            <p className="text-sm">
              Join an amazing community and help each other among users
            </p>
          </div>
        </div>
        <div className="flex  text-left items-start">
          <div className="mx-4 w-24 ">
            <img
              className=""
              src={ic3}
              alt=""
            />
          </div>
          <div>
            <h6 className="text-lg font-bold">Marketplace</h6>
            <p className="text-sm">
              Sell your digital products and earn extra income
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
