/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import LogedinNavbar from "./LogedinNavbar";
import LogedSidebar from "./LogedSidebar";
import { AuthContext } from "../Utility/Context";

const Main = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user ? (
        <div className="flex bg-[#F3F4F6] ">
          <div className="w-[18%] bg-white">
            <LogedinNavbar></LogedinNavbar>
          </div>
          <div className="w-[60%]">
            <div className="flex justify-between p-8 items-center">
              <div className="w-1/2 text-left">
                <h5 className="font-bold">
                  Hi, {user.displayName ? user.displayName : "N/A"}
                </h5>
                <p className="text-[#9CA3AF]">Whats new with you</p>
              </div>
              <div className="w-1/2">
                <input
                  className="w-full rounded-lg p-2"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <Outlet></Outlet>
          </div>
          <div className="w-[22%]">
            <LogedSidebar></LogedSidebar>
          </div>
        </div>
      ) : (
        <div>
          <div className="sticky top-0">
            <Navbar></Navbar>
          </div>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default Main;
