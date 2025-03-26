import React from "react";
// import assets
import CardPicture from "../assets/card.png";
import Button from "./Button";

function Card({ active }) {
  const containerStyle =
    "bg-white border-2 rounded-3xl py-10 px-15 space-y-15 xl:px-10 sm:w-4/5 sm:mx-auto";
  const activeStyle = active
    ? `${containerStyle} border-primary`
    : `${containerStyle} border-[#DDDDDD]`;
  return (
    <figure className={activeStyle}>
      <div className="w-1/2 mx-auto">
        <img className="w-full" src={CardPicture} alt="celebration box" />
      </div>
      <h4 className="text-black font-medium text-4xl">Free Plan</h4>
      <ul className="text-xl list sm:text-2xl">
        <li className="list__item">Unlimited Bandwitch</li>
        <li className="list__item">Encrypted Connection</li>
        <li className="list__item">Works on All Devices</li>
        <li className="list__item">Unlimited Bandwitch</li>
      </ul>
      <div>
        <p className="text-black font-medium text-5xl mb-6">Free</p>
        <Button
          type={"shop"}
          custom={
            active
              ? "bg-primary text-white shadow-2xl shadow-primary border-primary"
              : "text-primary"
          }
        >
          Select
        </Button>
      </div>
    </figure>
  );
}

export default Card;
