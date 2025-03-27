import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./Carousel.scss";
import Testimonial from "../Testimonial/Testimonial";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";

export const Carousel = () => {
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
          <div className="embla__slide">
            <Testimonial />
          </div>
          <div className="embla__slide">
            <Testimonial />
          </div>
          <div className="embla__slide">
            <Testimonial />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-15">
        <div>&nbsp;</div>
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
