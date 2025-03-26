import React from "react";
import { IoCloud, IoLocationSharp, IoPerson } from "react-icons/io5";

function DataBox() {
  // All data items with they icons
  const items = [
    {
      label: "Users",
      number: "+90",
      component: <IoPerson size={24} className="text-primary" />,
    },
    {
      label: "Locations",
      number: "+30",
      component: <IoLocationSharp size={24} className="text-primary" />,
    },
    {
      label: "Servers",
      number: "+50",
      component: <IoCloud size={24} className="text-primary" />,
    },
  ];
  return (
    <div className="flex justify-between p-22 mx-auto shadow-md mb-10 rounded-3xl w-4/5 items-center md:w-[90%]">
      {/* Render data items from array */}
      {items.map((item) => (
        <div className="flex gap-6 items-center md:gap-4">
          {/* icon box */}
          <div className="bg-primary-light rounded-full w-24 h-24 flex items-center justify-center md:w-16 md:h-16">
            {/* icon */}
            {item.component}
          </div>
          {/* content box */}
          <div>
            <p className="text-4xl text-black font-bold mb-2 md:text-3xl">
              {item.number}
            </p>
            <p className="text-2xl md:text-1xl">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataBox;
