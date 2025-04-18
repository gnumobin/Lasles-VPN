import React from "react";

function HeadBox({ children, title, sequence, direction = "center" }) {
  // default paragraph styles
  const defaultDescriptionStyles =
    "text-2xl md:text-[1.4rem] leading-11 mb-20 text-gray mx-auto md:w-full ";
  return (
    // set text-align with props
    <div className={`text-${direction}`}>
      {/* set title styles */}
      <h2 className="text-black leading-20 font-medium text-6xl md:text-[2.8rem] md:leading-15 mb-10">
        {/* two section title approach */}
        {title} <br /> {sequence}
      </h2>
      {/* paragraph: if direction not center set with to full */}
      <p
        className={
          direction === "center"
            ? defaultDescriptionStyles + "w-1/2"
            : defaultDescriptionStyles
        }
      >
        {/* print paragraph */}
        {children}
      </p>
    </div>
  );
}

export default HeadBox;
