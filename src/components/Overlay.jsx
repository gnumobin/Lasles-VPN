import React from "react";

function Overlay({ show, state, active, setActive }) {
  // if overlay clicked: change mobile hamburger menu state
  const clickHandle = () => {
    state(!show);
    setActive(!active);
  };
  // default styles
  const defaultStyles =
    "h-full w-full fixed bg-black z-15 -mt-30 duration-300 ";

  return (
    <div
      // handle toggle beetwin show/unshow
      className={
        !show
          ? defaultStyles + "opacity-60 visible"
          : defaultStyles + "opacity-0 invisible"
      }
      onClick={clickHandle}
    >
      &nbsp;
    </div>
  );
}

export default Overlay;
