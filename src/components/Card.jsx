import React from "react";
// import assets
import CardPicture from "../assets/card.png";
import Button from "./Button";
import { IoCheckmarkSharp } from "react-icons/io5";

function Card() {
  return (
    <figure className="bg-white border-2 border-[#DDDDDD] rounded-3xl py-10 px-15 space-y-15">
      <div className="w-1/2 mx-auto">
        <img className="w-full" src={CardPicture} alt="celebration box" />
      </div>
      <h4 className="text-black font-medium text-4xl">Free Plan</h4>
      <ul className="text-xl space-y-5">
        <li className="flex gap-3">
          <IoCheckmarkSharp className="text-3xl text-secondary" />
          <span>Unlimited Bandwitch</span>
        </li>
        <li className="flex gap-3">
          <IoCheckmarkSharp className="text-3xl text-secondary" />
          <span>Encrypted Connection</span>
        </li>
        <li className="flex gap-3">
          <IoCheckmarkSharp className="text-3xl text-secondary" />
          <span>Works on All Devices</span>
        </li>
        <li className="flex gap-3">
          <IoCheckmarkSharp className="text-3xl text-secondary" />
          <span>Unlimited Bandwitch</span>
        </li>
      </ul>
      <div>
        <p className="text-black font-medium text-5xl mb-10">Free</p>
        <Button border={true} custom={'block w-2/3 text-4xl'}>Select</Button>
      </div>
    </figure>
  );
}

export default Card;
