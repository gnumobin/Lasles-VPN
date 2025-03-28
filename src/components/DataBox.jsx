import React from "react";
import { Fragment } from "react";
import { IoCloud, IoLocationSharp, IoPerson } from "react-icons/io5";

function DataBox() {
  // All data items with they icons
  const items = [
    {
      label: "Users",
      number: "+90",
      component: <IoPerson className="text-primary" />,
    },
    {
      label: "Locations",
      number: "+30",
      component: <IoLocationSharp className="text-primary" />,
    },
    {
      label: "Servers",
      number: "+50",
      component: <IoCloud className="text-primary" />,
      noBorder: true,
    },
  ];
  return (
    <div className="flex justify-around md:justify-between p-16 mt-8 mx-auto shadow-2xl shadow-[rgba(13,16,37,0.1)] mb-10 rounded-3xl w-4/5 items-center md:w-[90%] sm:px-8 py-14 container">
      {/* Render data items from array */}
      {items.map((item, index) => (
        <Fragment key={index}>
          <div className="flex gap-8 items-center md:gap-4">
            {/* icon box */}
            <div className="bg-primary-light rounded-full p-4 flex items-center justify-center md:w-16 md:h-16 text-5xl md:text-2xl">
              {/* icon */}
              {item.component}
            </div>
            {/* content box */}
            <div>
              <p className="text-4xl text-black font-bold mb-1 md:text-xl">
                {item.number}
              </p>
              <p className="text-2xl md:text-xl">{item.label}</p>
            </div>
          </div>
          {/* if item has a border applu this (apply on all not last one) */}
          {!item.noBorder && (
            <div className="border-r-2 h-20 border-super-light">&nbsp;</div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default DataBox;
