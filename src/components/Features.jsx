import { IoCheckmarkCircle } from "react-icons/io5";
import HeadBox from "./HeadBox";
import MainPicture from "../assets/features.svg";


function Features() {
  const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits.",
  ];

  return (
    <section className="mx-auto max-w-[128rem] pt-22 pb-22 px-15 flex items-center lg:flex-col lg:text-center gap-8 shadow-2xl shadow-gray-100">
      {/* image box */}
      <div className="w-1/2 lg:w-2/3 lg:mb-20">
        <img
          src={MainPicture}
          alt="a happy guy when celebration behind laptop "
        />
      </div>
      {/* heading box */}
      <div className="w-1/2 space-y-10 lg:w-full">
        <HeadBox
          title="We Provide Many"
          sequence="Features You Can Use"
          direction="left"
        >
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </HeadBox>
        {/* list: features */}
        <ul className="text-[1.4rem] space-y-5 grid lg:grid-cols-2 md:text-xl sm:flex sm:flex-col lg:pl-60 sm:-ml-60">
          {/* print all features we have */}
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <IoCheckmarkCircle size={24} className="text-secondary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
