/* eslint-disable no-unused-vars */
import React from "react";
import LogedoutHome from "./LogedoutHome";
import LogedinHome from "./LogedinHome";

const Home = () => {
  const user = "A";
  return (
    <>
      {user ? (
        <div>
          <LogedinHome></LogedinHome>
        </div>
      ) : (
        <div>
          <LogedoutHome></LogedoutHome>
        </div>
      )}
    </>
  );
};

export default Home;
