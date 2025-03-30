import { useSwiper } from "swiper/react";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";

function SwiperNavButtons() {
  const swiper = useSwiper();

  return (
    <div className="absolute bottom-0 right-5 z-10 space-x-2">
      <button
        className="cursor-pointer bg-primary p-6 rounded-full text-white text-4xl"
        onClick={(_) => swiper.slidePrev()}
      >
        <IoArrowBackSharp />
      </button>
      <button
        className="cursor-pointer bg-primary p-6 rounded-full text-white text-4xl"
        onClick={(_) => swiper.slideNext()}
      >
        <IoArrowForward />
      </button>
    </div>
  );
}

export default SwiperNavButtons;
