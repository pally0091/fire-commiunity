/* eslint-disable no-unused-vars */
import React from "react";
import userI from "../../assets/user.png";
import { IoMdCart } from "react-icons/io";
import { BsBellFill } from "react-icons/bs";
import MyEvents from "./Home/MyEvents";
import PromotedJob from "./Home/PromotedJob";
import RecomandForum from "./Home/RecomandForum";

const LogedSidebar = () => {
  const user = "A";
  return (
    <div className="py-10 px-2 bg-white sticky top-0">
      <div className="flex items-center">
        <div className="flex items-center w-[70%]">
          <div className="w-[15%]">
            <img
              className="w-full rounded-full"
              src={userI}
              alt=""
            />
          </div>
          <div className="ms-2 text-left">
            <h6 className="font-bold">{user}</h6>
            <p>User Type</p>
          </div>
        </div>
        <div className="w-[30%] grid grid-cols-2 gap-2">
          <button className="bg-gray-400 p-2 rounded-xl text-lg">
            <IoMdCart></IoMdCart>
          </button>
          <button className="bg-gray-400 p-2 rounded-xl text-lg">
            <BsBellFill></BsBellFill>
          </button>
        </div>
      </div>
      {/* my events  */}
      <p className="font-bold mt-6 text-left mb-3">My Events</p>
      <MyEvents></MyEvents>
      {/* job  */}
      <p className="font-bold mt-6 text-left mb-3">Promoted Job</p>
      <PromotedJob></PromotedJob>
      {/* forumRecomandation  */}
      <p className="font-bold mt-6 text-left mb-3">Forum Recommendations</p>
      <RecomandForum></RecomandForum>
    </div>
  );
};

export default LogedSidebar;
