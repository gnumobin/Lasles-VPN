import React from "react";
import HeadBox from "./HeadBox";
import Card from "./Card";

function Cards() {
  return (
    <section className="text-center pt-25 container">
      <HeadBox title="Choose Your Plan">
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </HeadBox>
      <div className="grid gap-40 mt-10 grid-cols-3 xl:gap-15 sm:grid-cols-1">
        <Card />
        <Card />
        <Card active={true}/>
      </div>
    </section>
  );
}

export default Cards;
