import React from "react";

function Overlay({ show, state }) {
  return (
    <>
      {!show && (
        <div
          className="h-full w-full fixed bg-black opacity-60 z-15 -mt-30"
          onClick={() => state(!show)}
        >
          &nbsp;
        </div>
      )}
    </>
  );
}

export default Overlay;
