/* eslint-disable no-const-assign */
/* eslint-disable no-dupe-keys */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Button = ({ label, primary, secondary, onClick }) => {
  const [backgroundColor, setBackgroundColor] = useState(
    primary ? "#FF6F61" : secondary ? "white" : "white"
  );
  const [color, setColor] = useState(primary ? "white" : "black");
  const buttonStyle = {
    padding: "8px 15px",
    borderRadius: "8px",

    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "5px",
    textAlign: "center",
    color: color,
    backgroundColor: backgroundColor,
    border: "1px solid #FF6F61",
    transition: "background-color 0.5s",
  };

  const handleHover = () => {
    setColor(primary ? "black" : "white");
    setBackgroundColor(primary ? "white" : secondary ? "#FF6F61" : "lightgray");
  };

  const handleLeave = () => {
    setColor(primary ? "white" : "black");
    setBackgroundColor(primary ? "#FF6F61" : secondary ? "white" : "white");
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {label}
    </button>
  );
};

export default Button;
