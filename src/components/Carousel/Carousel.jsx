import { useState } from "react";
import "./Carousel.scss";
//import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperNavButtons from "./SwiperNavButtons";

export const Carousel = ({ children }) => {
  // Get window width
  const [wWidth, setWWidth] = useState(window.innerWidth);
  // even page is resize set new window with again
  window.addEventListener("resize", (e) => setWWidth(e.target.innerWidth));

  // Swiper doesn't work correctly without react-fragment
  return (
    <>
      <Swiper
        // install Swiper modules
        className="mb-70"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={wWidth > 900 ? 2.3 : 1.15}
        // pagination={{ clickable: true }}
      >
        <SwiperNavButtons />
        {children}
      </Swiper>
    </>
  );
};

export default Carousel;
