/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import loginban from "../../assets/loginBan.png";
import logo from "../../assets/Logo.svg";
import Button from "../Utility/Button";
import { AuthContext } from "../Utility/Context";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const { createUser, loading, setLoading, facebookLogin } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState();
  const navigate = useNavigate();
  if (currentUser) {
    navigate("/");
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
    try {
      const { user } = await createUser(email, password);
      setCurrentUser(user);
    } catch (err) {
      console.log(err);
      setError("Invalid login info!");
    }
  };

  const handleFacebookLogin = async (e) => {
    try {
      const { user } = await facebookLogin();
      setCurrentUser(user);
    } catch (err) {
      console.log(err);
      setError("Something went wrong!");
    }
  };

  return (
    <div className="w-[95%] mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-center p-5">
      <div className="p-5 w-[95%] md:w-1/2 lg:w-[60%] mx-auto">
        <div>
          <img
            src={loginban}
            alt=""
          />
        </div>
        <div className="mt-5">
          <h5 className="text-2xl font-semibold">Join Community</h5>
          <p className="mt-2 md:px-8 lg:px-32 text-[#a3a7b0]">
            Join millions of community around yhe world and connect with each
            other
          </p>
        </div>
        <div className="mt-16 text-[#a3a7b0] flex flex-wrap justify-center">
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
          <button
            onClick={handleFacebookLogin}
            className="bg-[#2b33af] text-white p-2 rounded-lg mt-8 hover:bg-blue-500"
          >
            Login with Facebook
          </button>
          <div className="mt-4 flex items-center">
            <hr className="border border-[#a3a7b0] w-[45%]" />
            <p className="w-[10%] mx-auto text-[#a3a7b0]">OR</p>
            <hr className="border border-[#a3a7b0] w-[45%]" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col text-left gap-3 my-8">
                <label>Email:</label>
                <input
                  className="bg-[#f1f1f1] p-2 border-2 border-[#acaaaa] rounded-lg"
                  type="email"
                  placeholder="jhon@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="flex flex-col text-left gap-3 my-8">
                <label>Password:</label>
                <input
                  className="bg-[#f1f1f1] p-2 border-2 border-[#acaaaa] rounded-lg"
                  type="password"
                  placeholder="**********"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="flex justify-between my-5">
                <div>
                  <label>
                    <input
                      type="checkbox"
                      className="mx-1"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                    />
                    Remember Me
                  </label>
                </div>
                <button className="text-[#ff6f61]">Forgot Password</button>
              </div>
              {error && <p className="text-red-600 ">{error}</p>}
              <Button
                label="Sign Up"
                primary
                full
              ></Button>
            </form>
            <div className="mt-8">
              <p className="text-[#a3a7b0]">Don’t have an account yet?</p>
              <div className="">
                <Button label="Sign up as Seller"></Button>
                <Button label="Sign up as Member"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
