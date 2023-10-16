/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import commiunity from "../../../assets/Community-cuate 1.svg";
import Button from "../../Utility/Button";
import ic1 from "../../../assets/icons/icon 3.png";
import ic2 from "../../../assets/icons/icon 2.png";
import ic3 from "../../../assets/icons/icon 1.png";
import e1 from "../../../assets/event3.png";
import e2 from "../../../assets/event2.png";
import e3 from "../../../assets/event1.png";
import f1 from "../../../assets/2featured.png";
import f2 from "../../../assets/1featured.png";
import p from "../../../assets/Ellipse 1.png";

const LogedoutHome = () => {
  return (
    <div className="w-[90%] mx-auto">
      {/* head  */}
      <div className="flex items-center px-5 py-5">
        <div className="w-1/2 p-5">
          <h1 className="text-4xl my-4 font-semibold text-left">
            Welcome to the <span className="text-[#FF6F61]">FIRE</span>{" "}
            community
          </h1>
          <p className="text-left my-4">
            A special community for financial independence and early retirees to
            interact with each other
          </p>
          <div className="flex">
            <Button
              label="Get Started"
              primary
            ></Button>
            <Button
              label="See Commiunity"
              secondary
            ></Button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={commiunity}
            alt=""
          />
        </div>
      </div>
      {/* head-underSection  */}
      <div className="grid grid-cols-3 gap-5">
        <div className="flex  text-left items-start">
          <div className="mx-4 w-24 ">
            <img
              className=""
              src={ic1}
              alt=""
            />
          </div>
          <div>
            <h6 className="text-lg font-bold">Social Networking</h6>
            <p className="text-sm">
              Connect with other users, and share your tips and hobbies
            </p>
          </div>
        </div>
        <div className="flex  text-left items-start">
          <div className="mx-4 w-24 ">
            <img
              className=""
              src={ic2}
              alt=""
            />
          </div>
          <div>
            <h6 className="text-lg font-bold">Great Community</h6>
            <p className="text-sm">
              Join an amazing community and help each other among users
            </p>
          </div>
        </div>
        <div className="flex  text-left items-start">
          <div className="mx-4 w-24 ">
            <img
              className=""
              src={ic3}
              alt=""
            />
          </div>
          <div>
            <h6 className="text-lg font-bold">Marketplace</h6>
            <p className="text-sm">
              Sell your digital products and earn extra income
            </p>
          </div>
        </div>
      </div>
      {/* events  */}
      <div className="mt-24 mb-20">
        <div className="w-1/2 mx-auto">
          <h1 className="text-4xl my-4 font-semibold ">Upcoming Events</h1>
          <p className="my-4 text-sm">
            You can relay on our amazing features list and also our customer
            services will be great experience for you without doubt
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 my-8">
          <card className="text-left">
            <div>
              <img
                src={e1}
                alt=""
              />
            </div>
            <h6 className="font-bold my-2">
              You should have eagle’s eye on new trends and techonogies
            </h6>
            <p className="text-[#9CA3AF] text-sm mt-2 mb-5">
              Business Park, Opp. Corns Sam Restaurant, New Yoark, US
            </p>
            <div className="flex justify-between">
              <a
                className="text-[#FF6F61] font-semibold"
                href=""
              >
                Learn More
              </a>
              <p className="text-[#FF6F61] font-semibold ">»</p>
            </div>
          </card>
          <card className="text-left">
            <div>
              <img
                src={e2}
                alt=""
              />
            </div>
            <h6 className="font-bold my-2">
              New Seminar on Newest Food Recipe from World’s Best
            </h6>
            <p className="text-[#9CA3AF] text-sm mt-2 mb-5">
              Business Park, Opp. Corns Sam Restaurant, New Yoark, US
            </p>
            <div className="flex justify-between">
              <a
                className="text-[#FF6F61] font-semibold"
                href=""
              >
                Learn More
              </a>
              <p className="text-[#FF6F61] font-semibold ">»</p>
            </div>
          </card>
          <card className="text-left">
            <div>
              <img
                src={e3}
                alt=""
              />
            </div>
            <h6 className="font-bold my-2">
              Learn from small things to create something bigger.
            </h6>
            <p className="text-[#9CA3AF] text-sm mt-2 mb-5">
              Business Park, Opp. Corns Sam Restaurant, New Yoark, US
            </p>
            <div className="flex justify-between ">
              <a
                className="text-[#FF6F61] font-semibold"
                href=""
              >
                Learn More
              </a>
              <p className="text-[#FF6F61] font-semibold ">»</p>
            </div>
          </card>
        </div>
      </div>
      {/* featured product  */}
      <div className="flex items-center mt-10">
        <div className="w-1/2 p-2 text-justify">
          <h3 className="font-bold text-3xl">Featured Products</h3>
          <p className="text-[#6B7280] my-2">
            Don't miss out on this opportunity to expand your knowledge and
            achieve your goals. Get started with our Ebook and Course Bundle and
            unlock your full potential!
          </p>
          <Button
            label="See Marketplaces"
            primary
          ></Button>
        </div>
        <div className="w-1/2 grid grid-cols-2 gap-3 px-5">
          <div>
            <div>
              <img
                src={f1}
                alt=""
              />
            </div>
            <p className="text-[#4B5563] text-sm mt-2">
              Black Friday, E-Books, Improve
            </p>
            <h6 className="font-semibold">Money management for retirees</h6>
            <p>⭐⭐⭐⭐⭐</p>
            <p>
              <span className="text-[#374151] line-through">$15.00</span> $12.00
            </p>
          </div>
          <div>
            <div>
              <img
                src={f2}
                alt=""
              />
            </div>
            <p className="text-[#4B5563] text-sm mt-2">
              Black Friday, Course, Improve
            </p>
            <h6 className="font-semibold">MGrow your mind with mindset</h6>
            <p>⭐⭐⭐⭐⭐</p>
            <p>
              <span className="text-[#374151] line-through">$45.00</span> $30.00
            </p>
          </div>
        </div>
      </div>
      {/* communities  */}
      <div className="mt-20">
        <div className="w-1/2 mx-auto mb-5">
          <h3 className="text-2xl font-bold my-2">Community Highlights</h3>
          <p className="my-2 text-[#6B7280]">
            Highlights of various kinds of communities that are trending and
            widely discussed
          </p>
        </div>
        <div className="flex">
          <div className="w-1/2 p-10 text-justify">
            <h5 className="text-xl font-semibold my-3">Design With Pleasure</h5>
            <p className="text-[#374151]">
              ed vel tempor nisl, quis hendrerit ligula. Aenean mattis sapien in
              nibh consectetur, sed commodo erat vulputate. Morbi posuere eu
              nisi sit amet pretium. Nulla facilisi. Proin at nisl ipsum.
            </p>
            <div className="flex justify-between my-2">
              <div className="flex items-center">
                <div>
                  <img
                    src={p}
                    alt=""
                  />
                </div>
                <p className="mx-4">The Social Network</p>
              </div>
              <Button
                label=">"
                primary
              ></Button>
            </div>
          </div>
          <div className="w-1/2 p-10 text-justify">
            <h5 className="text-xl font-semibold my-3">Design With Pleasure</h5>
            <p className="text-[#374151]">
              ed vel tempor nisl, quis hendrerit ligula. Aenean mattis sapien in
              nibh consectetur, sed commodo erat vulputate. Morbi posuere eu
              nisi sit amet pretium. Nulla facilisi. Proin at nisl ipsum.
            </p>
            <div className="flex justify-between my-2">
              <div className="flex items-center">
                <div>
                  <img
                    src={p}
                    alt=""
                  />
                </div>
                <p className="mx-4">The Social Network</p>
              </div>
              <Button
                label=">"
                primary
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogedoutHome;
