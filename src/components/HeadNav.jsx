import { useState } from "react";
import { disableScroll, enableScroll } from "../utils/scroll";
import Button from "./Button/Button";
import Overlay from "./Overlay";
import Humberger from "./Humberger/Hamberger";
// Import assets
import Logo from "../assets/logo.svg";
import UserPicture from "../assets/girl.jpg";

function HeadNav() {
  // Duplicate Styles for navigation list (ul tag)
  const navListStyles =
    "flex gap-[4rem] text-2xl lg:fixed lg:flex-col lg:h-[98dvh] top-2.5 lg:w-2/3 lg:bg-gray-100 lg:p-10 z-20 items-center lg:items-stretch navContainer";
  // Navigation Items Array
  const navItems = [
    { label: "About", link: "#" },
    { label: "Features", link: "#features" },
    { label: "Pricing", link: "#cards" },
    { label: "Testimonials", link: "#testimonials" },
    { label: "Help", link: "#footer" },
  ];
  // navigation container styles
  const navContainer =
    "w-full flex items-center justify-between fixed top-0 left-0 py-6 px-20 z-20 md:px-15 border-gray-200";
  // State of show menu
  const [showNavigation, setShowNavigation] = useState(false);
  // if menu state: open disable scroll option in web
  if (showNavigation) {
    disableScroll();
  } else enableScroll();

  // for not re-render
  const navStyle = showNavigation ? navContainer : `${navContainer} bg-white`;

  return (
    <>
      {/* print overlay */}
      <Overlay show={showNavigation} state={setShowNavigation} />
      {/* overall navigation container */}
      <nav className={navStyle}>
        {/* Logo Box: First Item of Navigation-Container */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="website logo" width={149} height={37} />
        </div>
        {/* List: Second Item of Navigation-Container */}
        <div
          className={
            showNavigation
              ? navListStyles + " lg:-translate-x-10"
              : navListStyles + " lg:-translate-x-350 "
          }
        >
          {/* user account part */}
          <div className="hidden lg:flex items-center gap-6 ">
            <div className="w-1/4 rounded-full">
              <img
                src={UserPicture}
                alt="picture of logged-in user "
                className="rounded-full border-2 border-[#ddd]"
                width={110}
                height={110}
              />
            </div>
            <div className="space-y-5">
              <p className="font-medium text-black text-3xl">Emily</p>
              <p className="text-xl flex gap-2 items-center">
                <span className="text-secondary -mt-1">●</span>
                <span className="uppercase select-none">Online</span>
              </p>
            </div>
          </div>
          <ul className="flex lg:flex-col gap-20 lg:gap-5">
            {/* Render Navigation items from external data */}
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  aria-label={item.label}
                  href={item.link}
                  className="lg:bg-white lg:p-8 lg:rounded-lg hover:text-black duration-200 border-b-1 border-transparent hover:border-black lg:block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Buttons! But just show on smaller screens as list item */}
          <div className="hidden lg:block text-center">
            <Button border={false} scale={true}>
              Sign In
            </Button>
            <Button border={true} scale={true}>
              Sign Up
            </Button>
          </div>
          <p className="text-center hidden lg:block uppercase mt-auto">
            Develop by:
            <a target="_blank" href="https://github.com/gnumobin">
              <strong className="text-blue-500 capitalize">GnuMobin</strong>
            </a>
          </p>
        </div>
        {/* Cta Buttons: Third Item of Navigation-Container */}
        <div className="lg:hidden items-center flex gap-2">
          {/* Secondary Button */}
          <Button border={false} scale={true}>
            Sign In
          </Button>
          {/* Primary Button */}
          <Button border={true} scale={true}>
            Sign Up
          </Button>
        </div>
        {/* Mobile Menu: Button */}
        <div
          // open/close menu handler state
          onClick={() => setShowNavigation(!showNavigation)}
          className="hidden lg:block"
        >
          <Humberger active={showNavigation} />
        </div>
      </nav>
      {/* cover navigation height size casue nav is fixed position */}
      <div className="mt-30">&nbsp;</div>
    </>
  );
}

export default HeadNav;
