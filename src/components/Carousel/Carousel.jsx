import { useState } from "react";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";
import "./Carousel.scss";

// import Swiper core and required modules and styles
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";

export const Carousel = ({ children }) => {
  // Get window width
  const [wWidth, setWWidth] = useState(window.innerWidth);
  // even page is resize set new window with again
  window.addEventListener("resize", (e) => setWWidth(e.target.innerWidth));

  // Swiper doesn't work correctly without react-fragment
  return (
    <>
      <Swiper
        className="mb-70 relative"
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={wWidth > 900 ? 2.5 : 1}
      >
        {children}
      </Swiper>
    </>
  );
};

export default Carousel;
