/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import Button from "../Utility/Button";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div className="flex justify-between px-2 py-4 bg-white bg-opacity-20 backdrop-blur-xl border-b border-gray-300">
        <div className="flex flex-col md:flex-row lg:flex-row w-2/3 items-center">
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
        <button onClick={menuHandler}>
          {menuOpen ? (
            <AiOutlineClose></AiOutlineClose>
          ) : (
            <GiHamburgerMenu></GiHamburgerMenu>
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="flex justify-end items-center w-full absolute bg-white">
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
      )}
    </div>
  );
};

export default Navbar;
