import React from "react";
import HeadBox from "./HeadBox";
import Button from "./Button";

function CTA() {
  return (
    <section className="container">
      <div className="flex justify-between items-center shadow-2xl p-12 rounded-3xl">
        <HeadBox
          title={"Subscribe Now for"}
          sequence={"Get Special Features!"}
          direction="left"
        >
          Let's subscribe with us and find the fun.
        </HeadBox>
        {/* <h2 className="text-black font-medium text-6xl">
        Subscribe Now for Get Special Features!
      </h2>
      <p>Let's subscribe with us and find the fun.</p>
      <button>Subscribe Now</button> */}
        <Button type="cta" custom="h-25">
          Subscribe Now
        </Button>
      </div>
    </section>
  );
}

export default CTA;
