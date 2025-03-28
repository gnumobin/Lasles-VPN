import React from "react";
import Logo from "../assets/logo.svg";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-background pt-85">
      <div className="container">
        <div className="space-y-15">
          <img src={Logo} alt="website logo" />
          <p className="text-2xl leading-11 -mt-5">
            <strong>LaslesVPN</strong> is a private virtual network that <br />{" "}
            has unique features and has high security.
          </p>
          <div className="flex gap-10">
            <a
              href="#"
              className="flex bg-white p-3 rounded-full justify-center items-center"
            >
              <FaFacebookF className="text-primary text-4xl" />
            </a>
            <a
              href="#"
              className="flex bg-white p-3 rounded-full justify-center items-center"
            >
              <FaTwitter className="text-primary text-4xl" />
            </a>
            <a
              href="#"
              className="flex bg-white p-3 rounded-full justify-center items-center"
            >
              <FaInstagram className="text-primary text-4xl" />
            </a>
          </div>
          <p className="text-[#AFB5C0] text-2xl">
            ©2020Lasles<strong>VPN</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
