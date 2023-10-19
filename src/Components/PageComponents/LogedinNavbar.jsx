/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import "./LogedinNavbar.css";
import { AiFillHome, AiFillBook } from "react-icons/ai";
import { MdWork, MdGroupWork } from "react-icons/md";
import { BsBagDashFill } from "react-icons/bs";
import { BiSolidGraduation, BiSolidGroup } from "react-icons/bi";

const LogedinNavbar = () => {
  return (
    <div className="p-5 sticky top-0">
      <div className="p-5">
        <img
          src={logo}
          alt=""
        />
      </div>
      <div className="flex flex-col text-left gap-4">
        <NavLink
          className="p-3 rounded-lg font-semibold sidenavlink"
          to="/"
        >
          <button className="flex items-center gap-2 text-lg">
            <AiFillHome></AiFillHome>Home
          </button>
        </NavLink>
        <NavLink
          className="p-3 rounded-lg font-semibold sidenavlink"
          to="/forum"
        >
          <button className="flex items-center gap-2 text-lg">
            <MdGroupWork></MdGroupWork>Forum
          </button>
        </NavLink>
        <NavLink
          className="p-3 rounded-lg font-semibold sidenavlink"
          to="/group"
        >
          <button className="flex items-center gap-2 text-lg">
            <BiSolidGroup></BiSolidGroup>Group
          </button>
        </NavLink>
        <NavLink
          className="p-3 rounded-lg font-semibold sidenavlink"
          to="/course"
        >
          <button className="flex items-center gap-2 text-lg">
            <BiSolidGraduation></BiSolidGraduation>Course
          </button>
        </NavLink>
        <NavLink
          className="p-3 rounded-lg font-semibold sidenavlink"
          to="/market"
        >
          <button className="flex items-center gap-2 text-lg">
            <BsBagDashFill></BsBagDashFill>Marketplace
          </button>
        </NavLink>
        <NavLink
          className="p-3 rounded-lg font-semibold sidenavlink"
          to="/coaching"
        >
          <button className="flex items-center gap-2 text-lg">
            <AiFillBook></AiFillBook>Coaching
          </button>
        </NavLink>
        <NavLink
          className="p-3 rounded-lg font-semibold sidenavlink"
          to="/jobs"
        >
          <button className="flex items-center gap-2 text-lg">
            <MdWork></MdWork>Jobs
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default LogedinNavbar;
