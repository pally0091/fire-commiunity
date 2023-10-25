/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { AiFillBook, AiFillHome } from "react-icons/ai";
import { MdGroupWork, MdWork } from "react-icons/md";
import { BiSolidGraduation, BiSolidGroup } from "react-icons/bi";
import { BsBagDashFill } from "react-icons/bs";
const MobileNav = () => {
  return (
    <div className=" px-2 py-4 bg-white bg-opacity-20 backdrop-blur-xl border-b border-gray-300">
      <div className="px-4">
        <img
          src={logo}
          alt=""
        />
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
