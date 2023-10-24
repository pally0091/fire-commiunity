/* eslint-disable no-unused-vars */
import React from "react";
import thumb from "../../assets/thumb1.png";
import Button from "../Utility/Button";

const TopTeacher = () => {
  const teachers = [
    {
      name: "Martha Croft",
      sub: "Investment Expert",
      time: 350,
    },
    {
      name: "Kumar Sing",
      sub: "Freelancer Expert",
      time: 50,
    },
    {
      name: "Jany Harst",
      sub: "Business",
      time: 250,
    },
  ];
  return (
    <div className="mt-5">
      {teachers.map((teacher) => (
        <div
          key={teacher.name}
          className="p-2 rounded-lg bg-white my-3 flex items-center gap-2 text-sm justify-between"
        >
          <div className="w-[15%]">
            <img
              className="w-full rounded-lg"
              src={thumb}
              alt=""
            />
          </div>
          <div className="text-left w-[60%]">
            <p className="font-semibold">{teacher.name}</p>
            <p>
              {teacher.sub} • {teacher.time}
            </p>
          </div>
          <div className="w-[25%]">
            <Button
              label="View"
              primary
            ></Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopTeacher;
