// import assets
import { IoStar } from "react-icons/io5";
import "./Testimonial.scss";

function Testimonial({ active, data }) {
  const { author, picture, quote, score, address } = data;
  const containerBorderColor = active ? "primary" : "border";
  const activeStyles = active ? "shadow-xl shadow-[rgba(13,16,37,0.1)]" : "";
  return (
    <figure
      className={`border-2 border-${containerBorderColor} rounded-3xl p-10 space-y-5 ${activeStyles} h-full`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img src={picture} alt="" />
          <div className="author">
            <h5 className="text-black font-medium text-3xl">{author}</h5>
            <address className="text-xl">{address}</address>
          </div>
        </div>
        <div className="score flex items-center gap-3">
          <span className="text-2xl text-black">{score}</span>
          <IoStar size={16} color="#FEA250" />
        </div>
      </div>
      <figcaption className="text-black text-2xl leading-10">
        {quote}
      </figcaption>
    </figure>
  );
}

export default Testimonial;
