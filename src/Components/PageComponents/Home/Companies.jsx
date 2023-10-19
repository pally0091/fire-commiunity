/* eslint-disable no-unused-vars */
import React from "react";
import thumb from "../../../assets/thumb1.png";

const Companies = () => {
  const companies = [
    {
      id: 1,
      name: "Vanguard",
      adds: "valley forge, PA",
      type: "financial Service",
      follower: 363665,
      follow: true,
    },
    {
      id: 2,
      name: "Fidelity Investments",
      adds: "Boston, MA",
      type: "financial Service",
      follower: 819943,
      follow: false,
    },
    {
      id: 3,
      name: "Charles Schwab",
      adds: "Westlake, Texas",
      type: "financial Service",
      follower: 285169,
      follow: false,
    },
    {
      id: 4,
      name: "Costoco Wholsale",
      adds: "Seattle, WA",
      type: "Retail",
      follower: 507920,
      follow: false,
    },
  ];
  return (
    <div className="mt-5 text-justify">
      <div className="flex justify-between">
        <p className="font-semibold">Companies</p>
        <a
          className="text-[#f97365]"
          href=""
        >
          See all
        </a>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        {companies.map((company) => (
          <card
            key={company.id}
            className="flex flex-col justify-center bg-white p-2 rounded-lg text-center"
          >
            <div className="w-[30%] mx-auto">
              <img
                className="w-full rounded-lg"
                src={thumb}
                alt=""
              />
            </div>
            <p className="font-bold my-2 text-sm">{company.name}</p>
            <p className="text-sm my-1 text-gray-400">{company.type}</p>
            <p className="text-sm my-1 text-gray-400">{company.adds}</p>
            <p className="text-sm my-2 font-semibold">
              {company.follower} followers
            </p>
            {company.follow ? (
              <button
                className="py-1 px-2 bg-gray-600 rounded-lg text-white"
                disabled
              >
                Followed
              </button>
            ) : (
              <button className="py-1 px-2 bg-[#fc7163] rounded-lg text-white">
                Follow
              </button>
            )}
          </card>
        ))}
      </div>
    </div>
  );
};

export default Companies;
