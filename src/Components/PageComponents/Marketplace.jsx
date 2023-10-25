/* eslint-disable no-unused-vars */
import React from "react";
import CourseCat from "./CourseCat";
import thumb from "../../assets/thumb1.png";
import FeaturedProduct from "./FeaturedProduct";
import ProductCard from "./ProductCard";

const Marketplace = () => {
  return (
    <div className="mt-5 w-[95%] mx-auto">
      {/* banner  */}
      <div className="flex flex-row items-center text-white bg-[#accffe] p-5 w-[95%] mx-auto rounded-lg">
        <div className="w-5/6 text-left">
          <h5 className="text-2xl py-2">
            The best deals in June for all types of E-Books
          </h5>
          <hr className="border-2 w-1/4 border-[#2ab1ea]" />
          <h5 className=" text-2xl font-semibold mt-10">JUNE SALE</h5>
          <h3 className="text-3xl font-bold">75% OFF</h3>
        </div>
        <div className="w-1/6">
          <img
            className="w-full rounded-lg"
            src={thumb}
            alt=""
          />
        </div>
      </div>

      <div>
        <p className="font-semibold text-left mt-5 mx-4  py-2 ">Categories</p>
        <hr className="border-2 w-32 border-[#f97365]" />
        <CourseCat></CourseCat>
      </div>
      <div>
        <p className="font-semibold text-left mt-5 mx-4  py-2 ">
          Featured Products
        </p>
        <hr className="border-2 w-32 border-[#f97365]" />
        <FeaturedProduct></FeaturedProduct>
      </div>
      <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-5">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <p className="font-semibold text-left mt-5 mx-4  py-2 ">
            Popular Product
          </p>
          <hr className="border-2 w-32 border-[#f97365]" />
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2">
          <p className="font-semibold text-left mt-5 mx-4 py-2 ">
            Recommanded for you
          </p>
          <hr className="border-2 w-32 border-[#f97365]" />
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
