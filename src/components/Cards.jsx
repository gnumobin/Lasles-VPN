import React from "react";
import HeadBox from "./HeadBox";
import Card from "./Card";

function Cards() {
  return (
    <section className="container text-center bg-[#F6F6F6]">
      <HeadBox title="Choose Your Plan">
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </HeadBox>
      <Card />
    </section>
  );
}

export default Cards;
