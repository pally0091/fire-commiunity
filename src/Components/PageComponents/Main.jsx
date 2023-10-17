/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import LogedinNavbar from "./LogedinNavbar";
import LogedSidebar from "./LogedSidebar";

const Main = () => {
  const user = "";
  return (
    <>
      {user ? (
        <div className="flex">
          <div className="w-1/5">
            <LogedinNavbar></LogedinNavbar>
          </div>
          <div className="w-3/5">
            <Outlet></Outlet>
          </div>
          <div className="w-1/5">
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
