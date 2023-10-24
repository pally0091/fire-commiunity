/* eslint-disable no-unused-vars */
import React from "react";
import T from "../../assets/thumb1.png";
import { IoMdCart } from "react-icons/io";

const FeaturedProduct = () => {
  const products = [
    {
      id: 1,
      title: "Money Management",
      rating: 4.9,
      vote: 3890,
      price: "15.00",
      dicountedprice: "12.00",
    },
    {
      id: 2,
      title: "Money Management",
      rating: 4.9,
      vote: 3890,
      price: "15.00",
      dicountedprice: "12.00",
    },
    {
      id: 3,
      title: "Money Management",
      rating: 4.9,
      vote: 3890,
      price: "15.00",
      dicountedprice: "12.00",
    },
    {
      id: 4,
      title: "Money Management",
      rating: 4.9,
      vote: 3890,
      price: "15.00",
      dicountedprice: "12.00",
    },
  ];
  return (
    <div className="mt-5 grid grid-cols-4 gap-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="overflow-hidden rounded-lg bg-white"
        >
          <div className="w-full h-32 overflow-hidden">
            <img
              className="w-full"
              src={T}
              alt=""
            />
          </div>
          <div className="p-2 text-sm">
            <p className="font-semibold my-1">{product.title}</p>
            <div className="flex text-sm">
              <p className="text-xs">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-400">
                {product.rating} ({product.vote})
              </p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="line-through text-gray-400">${product.price}</p>
              <p className="font-semibold">$ {product.dicountedprice}</p>
              <button className="p-2 rounded-lg bg-[#fc7163] text-white">
                <IoMdCart></IoMdCart>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProduct;
