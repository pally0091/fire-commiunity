/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import Button from "../Utility/Button";
const Navbar = () => {
  return (
    <div className="flex px-2 py-4 bg-white bg-opacity-20 backdrop-blur-xl border-b border-gray-300">
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
          <Button
            label="Login"
            secondary
          ></Button>
        </Link>
        <Link to="/register">
          <Button
            label="Get started"
            primary
          ></Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
