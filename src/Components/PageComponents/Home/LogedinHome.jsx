/* eslint-disable no-unused-vars */
import React from "react";

const LogedinHome = () => {
  const user = "A";
  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-between p-8 items-center">
        <div className="w-1/2 text-left">
          <h5 className="font-bold">Hi, {user}</h5>
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
    </div>
  );
};

export default LogedinHome;
