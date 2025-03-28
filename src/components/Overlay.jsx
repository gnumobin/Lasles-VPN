import React from "react";

function Overlay({ show, state, active, setActive }) {
  const clickHandle = () => {
    state(!show);
    setActive(!active);
  };
  const defaultStyles = 'h-full w-full fixed bg-black z-15 -mt-30 duration-300 ';

  return (
    <>
      <div
        className={!show ? defaultStyles + 'opacity-60 visible' : defaultStyles + 'opacity-0 invisible'}
        onClick={clickHandle}
      >
        &nbsp;
      </div>
    </>
  );
}

export default Overlay;
