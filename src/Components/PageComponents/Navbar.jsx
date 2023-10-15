/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex px-2 py-4 bg-white bg-opacity-20 backdrop-blur-md border-b border-gray-300">
      <div className="flex w-1/2 items-center">
        <div className="mx-10">
          <img
            src={logo}
            alt=""
          />
        </div>
        <div>
          <NavLink
            className="mx-2 font-semibold py-2 transition-all duration-500"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="mx-2 font-semibold py-2 transition-all duration-500"
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className="mx-2 font-semibold py-2 transition-all duration-500"
            to="/about"
          >
            About Us
          </NavLink>
        </div>
      </div>
      <div className="flex justify-end w-1/2">
        <Link to="/login">
          <button className="border border-black mx-2 w-32 rounded-xl p-2 transition-all duration-500 hover:bg-[#FF6F61]">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="border border-black mx-2 w-32 rounded-xl p-2 transition-all duration-500 bg-[#FF6F61] hover:bg-white">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
