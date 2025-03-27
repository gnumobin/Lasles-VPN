import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./Carousel.scss";
import Testimonial from "../Testimonial/Testimonial";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";

export const Carousel = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {children}
        </div>
      </div>
      <div className="flex items-center justify-between mt-15">
        <div className="embla__dots">
          <div className="embla__dot embla__dot--active">&nbsp;</div>
          <div className="embla__dot">&nbsp;</div>
          <div className="embla__dot">&nbsp;</div>
          <div className="embla__dot">&nbsp;</div>
        </div>
        <div>
          <button className="embla__prev" onClick={scrollPrev}>
            <IoArrowBackSharp />
          </button>
          <button className="embla__next" onClick={scrollNext}>
            <IoArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
