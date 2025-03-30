import React from "react";

function Overlay({ show, state }) {
  // default styles
  const defaultStyles = "h-full w-full fixed bg-black z-15 -mt-30 duration-300 ";

  return (
    <div
      // handle toggle beetwin show/unshow
      className={
        show
          ? defaultStyles + "opacity-60 visible"
          : defaultStyles + "opacity-100 invisible"
      }
      onClick={() => state(!show)}
    >
      &nbsp;
    </div>
  );
}

export default Overlay;
