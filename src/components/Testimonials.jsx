import React from "react";
import HeadBox from "./HeadBox";
import Testimonial from "./Testimonial";
import Carousel from "./Carousel/Carousel";

import FirstUserPicture from "../assets/user/user-1.jpg";
import SecondUserPicture from "../assets/user/user-2.jpeg";
import ThirdUserPicture from "../assets/user/user-3.png";

function Testimonials() {
  const testimonials = [
    {
      picture: FirstUserPicture,
      author: "Donald Trump",
      address: "Washington, USA",
      quote:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
      score: 4.5,
      active: true
    },
    {
      picture: SecondUserPicture,
      author: "Gnu Mobin",
      address: "Gorgan, Iran",
      quote:
        "Hey, I am the programmer of this website.",
      score: 4.5,
      active: false
    },
    {
      picture: ThirdUserPicture,
      author: "Yarify",
      address: "Madrid, Spain",
      quote:
        "I love Mobin, I'm willing to do anything to be with him.",
      score: 4.5,
      active: false
    },
  ];

  return (
    <section className="container">
      <HeadBox title="Trusted by Thousands of " sequence="Happy Customer">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </HeadBox>
      <div className="flex gap-8">
        <Carousel total={testimonials.length}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="embla__slide">
              <Testimonial data={testimonial} active={testimonial.active}/>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
