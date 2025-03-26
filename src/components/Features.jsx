import React from "react";
import MainPicture from "../assets/features.png";
import { IoCheckmarkCircle } from "react-icons/io5";
import HeadBox from "./HeadBox";

function Features() {
  return (
    <section className="mx-auto max-w-[128rem] pt-22 pb-22 px-15 flex items-center lg:flex-col lg:text-center gap-8 shadow-2xl shadow-gray-100">
      <div className="w-1/2 lg:w-2/3 lg:mb-20">
        <img
          src={MainPicture}
          alt="a happy guy when celebration behind laptop "
        />
      </div>
      <div className="w-1/2 space-y-10 lg:w-full">
        <HeadBox title='We Provide Many' sequence='Features You Can Use'>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </HeadBox>
        <ul className="text-[1.4rem] space-y-5 grid lg:grid-cols-2 md:text-xl sm:flex sm:flex-col lg:pl-60 sm:-ml-60">
          <li className="flex items-center gap-3">
            <IoCheckmarkCircle size={24} className="text-secondary" />
            <span>Powerfull online protection.</span>
          </li>
          <li className="flex items-center gap-3 ">
            <IoCheckmarkCircle size={24} className="text-secondary" />
            <span>Internet without borders.</span>
          </li>
          <li className="flex items-center gap-3 lg:w-1/2 ">
            <IoCheckmarkCircle size={24} className="text-secondary" />
            <span>Supercharged VPN</span>
          </li>
          <li className="flex items-center gap-3 lg:w-1/2 ">
            <IoCheckmarkCircle size={24} className="text-secondary" />
            <span>No specific time limits.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Features;
