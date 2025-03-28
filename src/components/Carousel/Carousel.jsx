import "./Carousel.scss";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

export const Carousel = ({ children }) => {
  const [wWidth, setWWidth] = useState(window.innerWidth);

  window.addEventListener("resize", (e) => {
    setWWidth(e.target.innerWidth);
  });

  return (
    <>
      <Swiper
        className="mb-70 relative"
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={wWidth > 900 ? 2.5 : 1}
        navigation
      >
        {children}
      </Swiper>
    </>
  );
};

export default Carousel;
