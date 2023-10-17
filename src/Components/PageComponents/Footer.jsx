/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/LogoF.png";

const Footer = () => {
  return (
    <div
      className="mt-24 bg-[#374151] "
      id="footer"
    >
      <div>
        <img
          src={logo}
          alt=""
        />
      </div>
      <div className="w-1/2 grid grid-cols-3 text-justify">
        <div>
          <p className="mb-5 text-[#9CA3AF]">Company</p>
          <ul>
            <li className="my-3">
              <a
                className="hover:text-[#FF6F61]"
                href=""
              >
                About
              </a>
            </li>
            <li className="my-3">
              <a
                className="hover:text-[#FF6F61]"
                href=""
              >
                Contact Us
              </a>
            </li>
            <li className="my-3">
              <a
                className="hover:text-[#FF6F61]"
                href=""
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-5 text-[#9CA3AF]">Feature</p>
          <ul>
            <li className="my-3">
              <a
                className="hover:text-[#FF6F61]"
                href=""
              >
                Community
              </a>
            </li>
            <li className="my-3">
              <a
                className="hover:text-[#FF6F61]"
                href=""
              >
                Pricing
              </a>
            </li>
            <li className="my-3">
              <a
                className="hover:text-[#FF6F61]"
                href=""
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-5 text-[#9CA3AF]">Follow Us</p>
          <ul>
            <li className="my-3">
              <a
                className="hover:text-[#FF6F61]"
                href=""
              >
                Facebook
              </a>
            </li>
            <li className="my-3">
              <a
                className="hover:text-[#FF6F61]"
                href=""
              >
                Instagram
              </a>
            </li>
            <li className="my-3">
              <a
                className="hover:text-[#FF6F61]"
                href=""
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
