/* eslint-disable no-unused-vars */
import React from "react";
import thumb from "../../assets/thumb1.png";
import CourseCat from "./CourseCat";
import FeaturedCourse from "./FeaturedCourse";
import TopTeacher from "./TopTeacher";
import PopularCourse from "./PopularCourse";

const Course = () => {
  return (
    <div>
      {/* course banner  */}
      <div className="flex flex-row items-center bg-white p-5 w-[95%] mx-auto rounded-lg">
        <div className="w-5/6 text-left">
          <h5 className="text-[#aa81be] text-2xl py-2">
            The best offer in June for the best Courses
          </h5>
          <hr className="border-2 w-1/4 border-[#aa81be]" />
          <h5 className="text-[#aa81be] text-2xl font-semibold mt-10">
            LIMITED OFFER UP TO
          </h5>
          <h3 className="text-[#aa81be] text-3xl font-bold">90% OFF</h3>
        </div>
        <div className="w-1/6">
          <img
            className="w-full rounded-lg"
            src={thumb}
            alt=""
          />
        </div>
      </div>
      {/* course categories */}
      <div className="w-[95%] mx-auto">
        <p className="font-semibold text-left mt-5 mx-4  py-2 ">Categories</p>
        <hr className="border-2 w-32 border-[#f97365]" />
        <CourseCat></CourseCat>
        <p className="font-semibold text-left mt-5 mx-4 py-2">
          Featured Course
        </p>
        <hr className="border-2 w-32 border-[#f97365]" />
        <FeaturedCourse></FeaturedCourse>
        <div className="flex gap-5">
          <div className="w-1/2">
            <p className="font-semibold text-left mt-5 mx-4  py-2 ">
              Top Teacher
            </p>
            <hr className="border-2 w-32 border-[#f97365]" />
            <TopTeacher></TopTeacher>
          </div>
          <div className="w-1/2">
            <p className="font-semibold text-left mt-5 mx-4 py-2 ">
              Popular E-Course
            </p>
            <hr className="border-2 w-32 border-[#f97365]" />
            <PopularCourse></PopularCourse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
