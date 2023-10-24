/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import userI from "../../assets/user.png";
import { IoMdCart } from "react-icons/io";
import { BsBellFill } from "react-icons/bs";
import MyEvents from "./Home/MyEvents";
import PromotedJob from "./Home/PromotedJob";
import RecomandForum from "./Home/RecomandForum";
import { AuthContext } from "../Utility/Context";

const LogedSidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdown, setIsDropdown] = useState(false);
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  const Logout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="py-10 px-2 bg-white sticky top-0">
      <div className="flex items-center">
        <div className="flex items-center w-[70%]">
          <div
            className="w-[15%] relative group"
            onClick={toggleDropdown}
          >
            <div className=" relative">
              <img
                className="w-full rounded-full"
                src={user.thumbnail ? user.thumbnail : userI}
                alt=""
              />
            </div>
            {isDropdown && (
              <div className="absolute top-0 left-0 mt-12 p-2 bg-white border rounded shadow-lg">
                <button className="block w-full text-left">Profile</button>
                <button className="block w-full text-left">Settings</button>
                <button
                  className="block w-full text-left text-red-500"
                  onClick={Logout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          <div className="ms-2 text-left">
            <h6 className="font-bold">
              {user.displayName ? user.displayName : "N/A"}
            </h6>
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
