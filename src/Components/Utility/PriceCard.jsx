/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const PricingCard = ({ title, price, description, isPrimary, features }) => {
  const cardBackgroundColor = isPrimary ? "white" : "#FF6F61";
  const color = isPrimary ? "black" : "white";
  const btnColor = isPrimary ? "white" : "black";
  const buttonBackgroundColor = isPrimary ? "#FF6F61" : "white";

  const cardStyle = {
    width: "300px",
    padding: "45px 18px",
    margin: "auto",
    textAlign: "center",
    borderRadius: "10px",
    color: color,
    backgroundColor: cardBackgroundColor,
  };
  const buttonStyle = {
    padding: "8px 15px",
    borderRadius: "8px",

    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "5px",
    textAlign: "center",
    color: btnColor,
    backgroundColor: buttonBackgroundColor,
    border: "1px solid #D1D5DB",
    transition: "background-color 0.5s",
  };

  return (
    <div
      className="pricing-card shadow-md shadow-gray-200"
      style={cardStyle}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="my-3">{description}</p>
      <div className="pricing-details">
        <h1 className="text-3xl font-bold my-4">
          $ {price} <span className="text-base">/Month</span>{" "}
        </h1>

        <ul className="text-left my-2 list-disc px-4 text-sm">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button style={buttonStyle}>Choose Plan</button>
      </div>
    </div>
  );
};

export default PricingCard;
