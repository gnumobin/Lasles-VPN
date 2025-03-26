import React from "react";

function HeadBox({ children, title, sequence }) {
  return (
    <div>
      <h2 className="text-black leading-20 font-medium text-6xl md:text-[2.8rem] md:leading-15 mb-10">
        {title} <br /> {sequence}
      </h2>
      <p className="text-2xl md:text-[1.4rem] leading-11 lg:mb-20">
        {children}
      </p>
    </div>
  );
}

export default HeadBox;
