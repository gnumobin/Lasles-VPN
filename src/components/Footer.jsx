import React from "react";
import Logo from "../assets/logo.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-background pt-85 md:pt-95">
      <div className="container flex justify-between md:flex-col-reverse gap-30">
        <div className="space-y-15 w-1/3 md:w-full">
          <img src={Logo} alt="website logo" />
          <p className="text-2xl leading-11 -mt-5">
            <strong>LaslesVPN</strong> is a private virtual network that has
            unique features and has high security.
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
        <nav className="flex justify-between gap-50 lg:gap-30 sm:grid sm:grid-cols-2">
          <div>
            <p className="text-black font-medium text-[2rem] mb-12">Product</p>
            <ul className="text-2xl space-y-8">
              <li>
                <a href="#">Download</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Server</a>
              </li>
              <li>
                <a href="#">Countries</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-black font-medium text-[2rem] mb-12">Engage</p>
            <ul className="text-2xl space-y-8">
              <li>
                <a href="#">LaslesVPN ? </a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-black font-medium text-[2rem] mb-12">
              Earn Money
            </p>
            <ul className="text-2xl space-y-8">
              <li>
                <a href="#">Affiliate</a>
              </li>
              <li>
                <a href="#">Become Partner</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
