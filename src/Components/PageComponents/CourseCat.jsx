/* eslint-disable no-unused-vars */
import React from "react";
import thumb from "../../assets/thumb1.png";
const CourseCat = () => {
  const courses = [
    {
      name: "Financial Independence",
      detail: "Collection of courses for Financial Independence",
    },
    {
      name: "Early Retierment",
      detail: "Collection of courses for Early Retierment",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5">
      {courses.map((course) => (
        <div
          key={course.name}
          className="bg-white flex flex-row gap-2 px-4 py-2 rounded-lg text-left text-sm items-center"
        >
          <div className="w-14">
            <img
              className="w-full rounded-lg"
              src={thumb}
              alt=""
            />
          </div>
          <div>
            <p className="font-semibold">{course.name}</p>
            <p>{course.detail}</p>
          </div>
          <p>»</p>
        </div>
      ))}
    </div>
  );
};

export default CourseCat;
