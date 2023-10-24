/* eslint-disable no-unused-vars */
import React from "react";
import thumb from "../../assets/thumb1.png";
import Button from "../Utility/Button";
import { IoMdCart } from "react-icons/io";

const ProductCard = () => {
  return (
    <div className="my-2">
      <div className="bg-white p-2 rounded-lg flex text-sm items-center text-left gap-2">
        <div className="w-10">
          <img
            className="w-full rounded-lg"
            src={thumb}
            alt=""
          />
        </div>
        <div>
          <p className="font-semibold">Machine Learning</p>
          <div className="flex items-center">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="text-gray-400">4.9 (3,890)</p>
          </div>
          <div className="flex justify-between items-end">
            <p>
              By <span className="text-[#f97365]">Jason Lee</span>
            </p>
            <p className="text-base font-semibold">$185</p>
          </div>
        </div>
        <Button
          label=""
          primary
        >
          <IoMdCart></IoMdCart>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
