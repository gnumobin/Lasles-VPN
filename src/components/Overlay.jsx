import React from "react";

function Overlay({ show, state }) {
  return (
    <>
      {!show && (
        <div className="h-full w-full fixed bg-black opacity-75 z-10" onClick={() => state(!show)}>
          &nbsp;
        </div>
      )}
    </>
  );
}

export default Overlay;
