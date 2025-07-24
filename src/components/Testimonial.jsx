// import assets
import { IoStar } from "react-icons/io5";

function Testimonial({ data }) {
  const { author, picture, quote, score, address } = data;
  return (
    <figure
      className={"border-2 rounded-3xl p-14 space-y-5 select-none h-full"}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          {/* image box */}
          <div className="w-22 h-22 rounded-full overflow-hidden ">
            <img
              src={picture}
              alt="picture of author of quote"
              className="w-full object-cover h-full"
              width={110}
              height={100}
              loading="lazy"
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
