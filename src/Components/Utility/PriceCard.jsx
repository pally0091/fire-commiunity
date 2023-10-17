/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const PricingCard = ({ title, price, description, isPrimary, features }) => {
  const cardBackgroundColor = isPrimary ? "lightgray" : "#FF6F61";
  const color = isPrimary ? "white" : "black";
  const buttonBackgroundColor = isPrimary ? "#FF6F61" : "lightgray";

  const cardStyle = {
    width: "200px",
    padding: "20px",
    margin: "10px",
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
    color: color,
    backgroundColor: buttonBackgroundColor,
    border: "1px solid #D1D5DB",
    transition: "background-color 0.5s",
  };

  return (
    <div
      className="pricing-card"
      style={cardStyle}
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>{description}</p>
      <div className="pricing-details">
        <h1 className="text-3xl">
          {price} <span className="text-base">/Month</span>{" "}
        </h1>

        <ul>
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
