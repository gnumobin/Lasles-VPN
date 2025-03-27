import React from "react";
import HeadBox from "./HeadBox";
import Testimonial from "./Testimonial";
import Carousel from "./Carousel/Carousel";

import FirstUserPicture from "../assets/user/user-1.png";
import SecondUserPicture from "../assets/user/user-2.png";
import ThirdUserPicture from "../assets/user/user-3.png";

function Testimonials() {
  const testimonials = [
    {
      picture: FirstUserPicture,
      author: "Viezh Robert",
      address: "Warsaw, Poland",
      quote:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
      score: 4.5,
      active: true
    },
    {
      picture: SecondUserPicture,
      author: "Yessica Christy",
      address: "Shanxi, China",
      quote:
        "I like it because I like to travel far and still can connect with high speed.",
      score: 4.5,
      active: false
    },
    {
      picture: ThirdUserPicture,
      author: "Kim Young Jou",
      address: "Seoul, South Korea",
      quote:
        "This is very unusual for my business that currently requires a virtual private network that has high security.",
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
