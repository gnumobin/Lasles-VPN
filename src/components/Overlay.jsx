import React from "react";

function Overlay({ show, state }) {
  // default styles
  const defaultStyles =
    "h-20 w-20 fixed bg-black z-15 -mt-30 duration-600 opacity-60 rounded-full top-35 right-10 ";

  return (
    <div
      // handle toggle beetwin show/unshow
      className={
        show ? defaultStyles + "scale-[100] " : defaultStyles + "scale-0"
      }
      onClick={() => state(!show)}
    >
      &nbsp;
    </div>
  );
}

export default Overlay;
