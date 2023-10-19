/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import LogedoutHome from "./LogedoutHome";
import LogedinHome from "./LogedinHome";
import { AuthContext } from "../../Utility/Context";

const Home = () => {
  const { user } = useContext(AuthContext);
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
