/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";

const Slider = () => {
  const slider = useRef(null);

  const handleMouseScroll = (e) => {
    if (slider.current) {
      slider.current.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };
  useEffect(() => {
    if (slider.current) {
      slider.current.addEventListener("wheel", handleMouseScroll, {
        passive: false,
      });
    }
    return () => {
      if (slider.current) {
        slider.current.removeEventListener("wheel", handleMouseScroll);
      }
    };
  }, []);
  return (
    <div className="flex flex-row gap-10">
      <div
        className="w-[90%] mx-auto overflow-x-auto whitespace-nowrap scrollbar"
        ref={slider}
      >
        <div className="card w-[60%] inline-block bg-white mx-5 rounded-md p-2">
          <h2>Card 1</h2>
          <p>This is the content for Card 1.</p>
        </div>
        <div className="card w-[60%] inline-block bg-white mx-5 rounded-md p-2">
          <h2>Card 2</h2>
          <p>This is the content for Card 2.</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
