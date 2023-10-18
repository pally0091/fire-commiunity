/* eslint-disable no-unused-vars */
import React from "react";
import loginban from "../../assets/loginBan.png";
import logo from "../../assets/Logo.svg";

const Login = () => {
  return (
    <div className="w-[95%] mx-auto flex flex-col md:flex-row lg:flex-row h-screen items-center justify-center p-5">
      <div className="p-5 w-[95%] md:w-1/2 lg:w-[60%] mx-auto">
        <div>
          <img
            src={loginban}
            alt=""
          />
        </div>
        <div className="mt-5">
          <h5 className="text-2xl font-semibold">Join Community</h5>
          <p className="mt-2 px-32 text-[#a3a7b0]">
            Join millions of community around yhe world and connect with each
            other
          </p>
        </div>
        <div className="mt-16 text-[#a3a7b0]">
          <a
            className="mx-4"
            href=""
          >
            About
          </a>
          <a
            className="mx-4"
            href=""
          >
            Term & Condition
          </a>
          <a
            className="mx-4"
            href=""
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="p-5 w-[95%] md:w-1/2 lg:w-[40%] mx-auto">
        <div className="flex flex-col justify-center">
          <div className="w-24 mx-auto mt-5 mb-8">
            <img
              className="w-full"
              src={logo}
              alt=""
            />
          </div>

          <div>
            <h6 className="text-2xl font-bold">Welcome Back</h6>
            <p className="mt-2 px-16 text-[#a3a7b0]">
              Keep up with the latest developments from your community
            </p>
          </div>
          <button className="bg-[#2b33af] text-white p-2 rounded-lg mt-8 hover:bg-blue-500">
            Login with Facebook
          </button>
          <div className="mt-4 flex items-center">
            <hr className="border border-[#a3a7b0] w-[45%]" />
            <p className="w-[10%] mx-auto text-[#a3a7b0]">OR</p>
            <hr className="border border-[#a3a7b0] w-[45%]" />
          </div>
          <div>
            <p>Login Form</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
