import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./Carousel.scss";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";

export const Carousel = ({ children, total }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [count, setCount] = useState(1);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const totalArray = Array(total).fill("Yoohoo!", 0);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
      <div className="flex items-center justify-between mt-15">
        <div className="embla__dots">
          {totalArray.map((_, index) => (
            <div
              key={index}
              className={
                count === index + 1
                  ? "embla__dot embla__dot--active"
                  : "embla__dot embla__dot"
              }
            >
              &nbsp;
            </div>
          ))}
          {/* <div className="embla__dot embla__dot--active">&nbsp;</div> */}
        </div>
        <div className="flex">
          <div onClick={() => setCount(count > 1 ? count - 1 : count)}>
            <button
              className={
                count === 1
                  ? "embla__prev embla__prev--disabled"
                  : "embla__prev"
              }
              onClick={scrollPrev}
            >
              <IoArrowBackSharp />
            </button>
          </div>
          <div onClick={() => setCount(count < total ? count + 1 : count)}>
            <button
              className={
                count === total
                  ? "embla__prev embla__prev--disabled"
                  : "embla__prev"
              }
              onClick={scrollNext}
            >
              <IoArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
