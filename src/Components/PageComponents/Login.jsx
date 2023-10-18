/* eslint-disable no-unused-vars */
import React from "react";
import loginban from "../../assets/loginBan.png";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row h-screen items-center justify-center p-5">
      <div className="p-5 w-[95%] md:w-1/2 lg:w-[60%] mx-auto">
        <div>
          <img
            src={loginban}
            alt=""
          />
        </div>
      </div>
      <div className="p-5 w-[95%] md:w-1/2 lg:w-[40%] mx-auto">
        <p>form</p>
      </div>
    </div>
  );
};

export default Login;
