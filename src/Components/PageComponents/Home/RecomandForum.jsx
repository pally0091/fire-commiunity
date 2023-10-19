/* eslint-disable no-unused-vars */
import React from "react";
import thumb from "../../../assets/thumb1.png";

const RecomandForum = () => {
  const forums = [
    {
      title: "Job List Forum",
      member: "145k",
      join: false,
    },
    {
      title: "Digimart Job",
      member: "224k",
      join: true,
    },
    {
      title: "Digimart",
      member: "220k",
      join: true,
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {forums.map((forum) => (
        <div
          key={forum.title}
          className="flex items-center gap-1 justify-between"
        >
          <div className="w-[15%]">
            <img
              className="w-full rounded-lg"
              src={thumb}
              alt=""
            />
          </div>
          <div className="text-left w-[60%]">
            <h6 className="font-bold">{forum.title}</h6>
            <p className="text-gray-500">{forum.member} Members</p>
          </div>
          <div className="w-[25%]">
            {forum.join ? (
              <button
                className="py-1 px-2 bg-gray-600 rounded-lg"
                disabled
              >
                Joined
              </button>
            ) : (
              <button className="py-1 px-2 bg-[#fc7163] rounded-lg">
                Join
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecomandForum;
