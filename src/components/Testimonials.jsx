import React from "react";
import HeadBox from "./HeadBox";
import Testimonal from "./Testimonial/Testimonial";
import Carousel from "./Carousel/Carousel";

function Testimonials() {
  return (
    <section className="container">
      <HeadBox title="Trusted by Thousands of " sequence="Happy Customer">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </HeadBox>
      <div className="flex gap-8">
        <Carousel />
        {/* <Testimonal /> */}
        {/* <Testimonal /> */}
        {/* <Testimonal /> */}
      </div>
    </section>
  );
}

export default Testimonials;
