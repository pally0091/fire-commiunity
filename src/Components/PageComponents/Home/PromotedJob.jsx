/* eslint-disable no-unused-vars */
import React from "react";
import thumb from "../../../assets/thumb1.png";

const PromotedJob = () => {
  const jobs = [
    {
      title: "UX/UI Specialist",
      apply: false,
      company: "Almaz IT",
    },
    {
      title: "Digital Marketing",
      apply: true,
      company: "Heroku",
    },
    {
      title: "Content Creator",
      apply: true,
      company: "Vidio",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {jobs.map((job) => (
        <div
          key={job.title}
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
            <h6 className="font-bold">{job.title}</h6>
            <p className="text-gray-400">{job.company}</p>
          </div>
          <div className="w-[25%]">
            {job.apply ? (
              <button
                className="py-1 px-2 bg-gray-600 rounded-lg"
                disabled
              >
                Applied
              </button>
            ) : (
              <button className="py-1 px-2 bg-[#fc7163] rounded-lg">
                Apply
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromotedJob;
