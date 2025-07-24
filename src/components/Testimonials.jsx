import HeadBox from "./HeadBox";
// import Carousel from "./Carousel/Carousel";
// import assets
import FirstUserPicture from "../assets/user/user-1.jpg";
import SecondUserPicture from "../assets/user/user-2.jpg";
import ThirdUserPicture from "../assets/user/user-3.png";
import FourthUserPicture from "../assets/user/user-4.png";
import EmblaCarousel from "./Carousel/EmblaCarousel";

function Testimonials() {
  // all of testimonials
  const testimonials = [
    {
      picture: FirstUserPicture,
      author: "Donald Trump",
      address: "Washington, USA",
      quote:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
      score: 4.5,
      active: true,
    },
    {
      picture: SecondUserPicture,
      author: "Gnu Mobin",
      address: "Gorgan, Iran",
      quote: "Hey, I am the programmer of this website.",
      score: 4.5,
      active: false,
    },
    {
      picture: ThirdUserPicture,
      author: "Yarify",
      address: "Madrid, Spain",
      quote: "I love Mobin, I'm willing to do anything to be with him.",
      score: 4.5,
      active: false,
    },
    {
      picture: FourthUserPicture,
      author: "Didi Kurniawan",
      address: "Jakarta, Indonesia",
      quote:
        "Hey, I am the designer of this website, Thank you very much to Mobin for programming so well for my design.",
      score: 5,
      active: false,
    },
  ];

  return (
    <section className="container" id="testimonials">
      <HeadBox title="Trusted by Thousands of " sequence="Happy Customer">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </HeadBox>
      <div className="flex gap-8">
        <EmblaCarousel slides={testimonials} options={{}} />
      </div>
    </section>
  );
}

export default Testimonials;
