import HeadBox from "./HeadBox";
import Button from "./Button/Button";

function CTA() {
  return (
    <section className="container absolute -top-[60%] translate-y-1/2 left-1/2 -translate-x-1/2 md:-top-[45%] sm:translate-y-[75%]">
      {/* simple box over on other elements */}
      <div className="flex justify-between items-center shadow-2xl p-15 rounded-3xl bg-white px-25 md:flex-col sm:pb-25">
        <HeadBox
          title={"Subscribe Now for"}
          sequence={"Get Special Features!"}
          direction="left"
        >
          Let's subscribe with us and find the fun.
        </HeadBox>

        <Button type="cta" custom="h-25">
          Subscribe Now
        </Button>
      </div>
    </section>
  );
}

export default CTA;
