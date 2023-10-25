/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import logo from "../../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { AiFillBook, AiFillHome } from "react-icons/ai";
import { MdGroupWork, MdWork } from "react-icons/md";
import { BiSolidGraduation, BiSolidGroup } from "react-icons/bi";
import { BsBagDashFill, BsBellFill } from "react-icons/bs";
import { AuthContext } from "../Utility/Context";
import userI from "../../assets/user.png";
import { IoMdCart } from "react-icons/io";
const MobileNav = () => {
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
    <div className=" px-2 py-4 bg-white bg-opacity-20 backdrop-blur-xl border-b border-gray-300">
      <div className="flex justify-between">
        <div className="px-4">
          <img
            src={logo}
            alt=""
          />
        </div>
        <div className="flex items-center gap-3 w-1/2">
          <div className="flex items-center justify-end gap-10 w-[70%]">
            <div
              className="w-[25%] relative group"
              onClick={toggleDropdown}
            >
              <div className=" relative ">
                <img
                  className="w-full rounded-full"
                  src={user.thumbnail ? user.thumbnail : userI}
                  alt=""
                />
              </div>
              {isDropdown && (
                <div>
                  <div className="absolute w-32 top-0 -left-6 mt-12 p-2 bg-white border rounded shadow-lg">
                    <div className="ms-2 text-left">
                      <h6 className="font-bold">
                        {user.displayName ? user.displayName : "N/A"}
                      </h6>
                      <p>User Type</p>
                    </div>
                    <button className="block w-full text-left">Profile</button>
                    <button className="block w-full text-left">Settings</button>
                    <button
                      className="block w-full text-left text-red-500"
                      onClick={Logout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-[30%] grid grid-cols-2 gap-2">
            <button className="bg-gray-400 p-1 rounded-xl text-lg">
              <IoMdCart></IoMdCart>
            </button>
            <button className="bg-gray-400 p-1 rounded-xl text-lg">
              <BsBellFill></BsBellFill>
            </button>
          </div>
        </div>
      </div>
      <ul className="flex gap-2 mt-5 items-center justify-around">
        <li>
          <NavLink
            className="mobilenav-link"
            to="/"
          >
            <button className="w-8  flex justify-center rounded-full p-1">
              <AiFillHome></AiFillHome>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="mobilenav-link"
            to="/forum"
          >
            <button className="w-8  flex justify-center rounded-full p-1">
              <MdGroupWork></MdGroupWork>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="mobilenav-link"
            to="/group"
          >
            <button className="w-8  flex justify-center rounded-full p-1">
              <BiSolidGroup></BiSolidGroup>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="mobilenav-link"
            to="/course"
          >
            <button className="w-8  flex justify-center rounded-full p-1">
              <BiSolidGraduation></BiSolidGraduation>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="mobilenav-link"
            to="/market"
          >
            <button className="w-8  flex justify-center rounded-full p-1">
              <BsBagDashFill></BsBagDashFill>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="mobilenav-link"
            to="/coaching"
          >
            <button className="w-8  flex justify-center rounded-full p-1">
              <AiFillBook></AiFillBook>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="mobilenav-link"
            to="/jobs"
          >
            <button className="w-8  flex justify-center rounded-full p-1">
              <MdWork></MdWork>
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
