/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "../../InpageComponents/Slider";
import shape from "../../../assets/eventcardshape.png";
import Feeds from "./Feeds";
import Companies from "./Companies";

const LogedinHome = () => {
  const events = [
    {
      id: 1,
      cat: "Event",
      event: "Summer Music Festival",
      date: "2023-08-15",
    },
    {
      id: 2,
      cat: "Webiner",
      event: "Webiner Conference",
      date: "2023-09-20",
    },
    {
      id: 3,
      cat: "Event",
      event: "Art Gallery Opening",
      date: "2023-10-05",
    },
    {
      id: 4,
      cat: "Webiner",
      event: "Webiner Workshop",
      date: "2023-11-10",
    },
  ];

  const user = "A";
  return (
    <div className="w-[95%] mx-auto">
      <div className="mt-5">
        <Slider>
          {events.map((event) => (
            <div
              key={event.id}
              className="card  w-[60%] inline-block bg-white mx-5 rounded-md p-5"
            >
              <div className="flex justify-between">
                <div>
                  <p className="bg-[#ff6f61] w-1/2 text-white rounded-lg">
                    {event.cat}
                  </p>
                  <h6 className="my-2 font-bold text-left">{event.event}</h6>
                  <p className="bg-[#3b82f6] w-2/3 text-white rounded-full">
                    {event.date}
                  </p>
                </div>
                <div>
                  <img
                    src={shape}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Feeds></Feeds>
      <Companies></Companies>
    </div>
  );
};

export default LogedinHome;
