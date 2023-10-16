/* eslint-disable no-unused-vars */
import React from "react";
import commiunity from "../../assets/Community-cuate 1.svg";
import Button from "../Utility/Button";

const About = () => {
  return (
    <div>
      {/* head  */}
      <div className="flex">
        <div className="w-1/2">
          <h1>
            Welcome to the <span>FIRE</span> community
          </h1>
          <p>
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
    </div>
  );
};

export default About;
