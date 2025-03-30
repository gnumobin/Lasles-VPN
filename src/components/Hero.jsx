import Button from "./Button/Button";
// Import Assets
import HeroPicture from "../assets/hero.svg";

function Hero() {
  return (
    <section className="container flex gap-8 justify-between lg:flex-col-reverse lg:items-center">
      {/* ContentBox */}
      <div className="w-1/2 lg:w-full lg:text-center">
        {/* Heading And description for website */}
        <h1 className="leading-24 text-7xl my-6 mb-10 font-bold text-black md:text-5xl md:leading-20">
          Want anything to be <br /> easy with{" "}
          <strong className="font-extrabold">LaslesVPN</strong>.
        </h1>
        <p className="leading-11 mb-20 text-2xl md:text-[1.4rem] lg:w-3/4 mx-auto">
          Provide a network for all your needs with ease and fun using{" "}
          <strong>LaslesVPN</strong> discover interesting features from us.
        </p>
        {/* Call to action button (from custom component) */}
        <Button type={"cta"} link={true}>
          Get Started
        </Button>
      </div>
      {/* ImageBox */}
      <div className="w-1/2 lg:w-3/4 lg:mb-20">
        <img
          className="w-full"
          src={HeroPicture}
          alt="a guy vector when he working with laptop"
        />
      </div>
    </section>
  );
}

export default Hero;
