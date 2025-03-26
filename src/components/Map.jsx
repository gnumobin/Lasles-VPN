import React from "react";
// import assets
import MapPicture from "../assets/map.png";
import HeadBox from "./HeadBox";

function Map() {
  return (
    <section className="bg-background">
      <div className="container">
        <HeadBox title="Huge Global Network" sequence='of Fast VPN'>
          See <strong>LaslesVPN</strong> everywhere to make it easier for you when you move
          locations.
        </HeadBox>
        <div className="w-[90%] mx-auto mt-30">
            <img src={MapPicture} alt="World Map" className="w-full"/>
        </div>
      </div>
    </section>
  );
}

export default Map;
