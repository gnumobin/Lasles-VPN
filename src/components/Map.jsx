import HeadBox from "./HeadBox";
// import assets
import MapPicture from "../assets/map.svg";

function Map() {
  return (
    <section className="container">
      <HeadBox title="Huge Global Network" sequence="of Fast VPN">
        See <strong>LaslesVPN</strong> everywhere to make it easier for you when
        you move locations.
      </HeadBox>
      <div className="w-[90%] mx-auto mt-30">
        <img
          src={MapPicture}
          alt="World Map"
          className="w-full pointer-events-none"
          width={1060}
          loading="lazy"
          height={539}
        />
      </div>
    </section>
  );
}

export default Map;
