// import assets
import { IoStar } from "react-icons/io5";

function Testimonial({ active, data }) {
  const { author, picture, quote, score, address } = data;
  // default testimonial styles
  const defaultStyles =
    "border-2 rounded-3xl p-14 space-y-5 select-none h-full";
  // suddle shadow: just for active state
  const suddleShadow = " shadow-xl shadow-[rgba(13,16,37,0.1)]";
  return (
    <figure
      className={
        // if state is active add shadow and primary border color
        active
          ? defaultStyles + suddleShadow + " border-primary"
          : defaultStyles + " border-[#DDD]"
      }
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          {/* image box */}
          <div className="w-22 h-22 rounded-full overflow-hidden ">
            <img
              src={picture}
              alt="picture of author of qoute"
              className="w-full object-cover h-full"
            />
          </div>
          {/* author box */}
          <div className="author">
            <h5 className="text-black font-medium text-3xl">{author}</h5>
            <address className="text-xl">{address}</address>
          </div>
        </div>
        <div className="score flex items-center gap-3 justify-center">
          <span className="text-2xl text-black">{score}</span>
          <IoStar size={16} color="#FEA250" />
        </div>
      </div>
      {/* quote */}
      <figcaption className="text-black text-2xl leading-14 select-text">
        {quote}
      </figcaption>
    </figure>
  );
}

export default Testimonial;
