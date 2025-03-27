import React from "react";

function Overlay({ show, state, active, setActive }) {

  const clickHandle = () => {
    state(!show)
    setActive(!active)
  }
  return (
    <>
      {!show && (
        <div
          className="h-full w-full fixed bg-black opacity-60 z-15 -mt-30"
          onClick={clickHandle}
        >
          &nbsp;
        </div>
      )}
    </>
  );
}

export default Overlay;
