/* eslint-disable no-const-assign */
/* eslint-disable no-dupe-keys */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Button = ({ children, label, primary, secondary, onClick, full }) => {
  const [backgroundColor, setBackgroundColor] = useState(
    primary ? "#FF6F61" : secondary ? "white" : "white"
  );
  const [color, setColor] = useState(
    primary ? "white" : secondary ? "black" : "#ff6f61"
  );
  const buttonStyle = {
    padding: "8px 15px",
    borderRadius: "8px",
    width: full ? "100%" : "auto",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "5px",
    textAlign: "center",
    color: color,
    backgroundColor: backgroundColor,
    border: "1px solid #D1D5DB",
    transition: "background-color 0.5s",
  };

  const handleHover = () => {
    setColor(primary ? "black" : secondary ? "white" : "black");
    setBackgroundColor(primary ? "white" : secondary ? "#FF6F61" : "lightgray");
  };

  const handleLeave = () => {
    setColor(primary ? "white" : secondary ? "black" : "#ff6f61");
    setBackgroundColor(primary ? "#FF6F61" : secondary ? "white" : "white");
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {label} {children}
    </button>
  );
};

export default Button;
