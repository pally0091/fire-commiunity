/* eslint-disable no-unused-vars */
import React from "react";
import MyE from "../../../assets/MyEvents.png";

const MyEvents = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#eedfea] flex gap-1 items-center p-2 rounded-lg">
        <div className="w-[15%]">
          <img
            className="w-full rounded-lg"
            src={MyE}
            alt=""
          />
        </div>
        <div>
          <h6 className="font-semibold">Family Gathering</h6>
          <p className="text-sm text-[#6c7180]">Wed, 14 June, 2023</p>
        </div>
      </div>
      <div className="bg-[#eedfea] flex gap-1 items-center p-2 rounded-lg">
        <div className="w-[15%]">
          <img
            className="w-full rounded-lg"
            src={MyE}
            alt=""
          />
        </div>
        <div>
          <h6 className="font-semibold">Family Gathering</h6>
          <p className="text-sm text-[#6c7180]">Wed, 14 June, 2023</p>
        </div>
      </div>
      <div className="bg-[#eedfea] flex gap-1 items-center p-2 rounded-lg">
        <div className="w-[15%]">
          <img
            className="w-full rounded-lg"
            src={MyE}
            alt=""
          />
        </div>
        <div>
          <h6 className="font-semibold">Family Gathering</h6>
          <p className="text-sm text-[#6c7180]">Wed, 14 June, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default MyEvents;
