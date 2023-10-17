/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import "./LogedinNavbar.css";

const LogedinNavbar = () => {
  return (
    <div className="p-5">
      <div className="p-5">
        <img
          src={logo}
          alt=""
        />
      </div>
      <div className="flex flex-col text-left gap-4">
        <NavLink
          className="p-3 rounded-lg font-semibold"
          to="/"
        >
          <button>Home</button>
        </NavLink>
        <NavLink
          className="p-3 rounded-lg font-semibold"
          to="/forum"
        >
          <button>Forum</button>
        </NavLink>
        <NavLink
          className="p-3 rounded-lg font-semibold"
          to="/group"
        >
          <button>Group</button>
        </NavLink>
        <NavLink
          className="p-3 rounded-lg font-semibold"
          to="/course"
        >
          <button>Course</button>
        </NavLink>
        <NavLink
          className="p-3 rounded-lg font-semibold"
          to="/market"
        >
          <button>Marketplace</button>
        </NavLink>
        <NavLink
          className="p-3 rounded-lg font-semibold"
          to="/coaching"
        >
          <button>Coaching</button>
        </NavLink>
        <NavLink
          className="p-3 rounded-lg font-semibold"
          to="/jobs"
        >
          <button>Jobs</button>
        </NavLink>
      </div>
    </div>
  );
};

export default LogedinNavbar;
