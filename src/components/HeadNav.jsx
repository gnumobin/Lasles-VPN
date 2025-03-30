import { IoBalloonSharp, IoPower } from "react-icons/io5";
import { useState, useEffect } from "react";
import Button from "./Button/Button";
import Overlay from "./Overlay";
import Humberger from "./Humberger/Hamberger";
// Import assets
import Logo from "../assets/logo.svg";
import UserPicture from "../assets/user/user-2.jpg";

function HeadNav() {
  // Duplicate Styles for navigation list (ul tag)
  const navListStyles =
    "flex gap-[4rem] text-2xl lg:fixed lg:flex-col h-full top-0 lg:w-2/3 lg:bg-gray-100 lg:p-10 cubic-bezier(.22,-0.21,.21,1.42) duration-500 z-20 rounded-t-3xl rounded-b-3xl items-center lg:items-stretch";
  // Navigation Items Array
  const navItems = [
    { label: "About", link: "#" },
    { label: "Features", link: "#features" },
    { label: "Pricing", link: "#cards" },
    { label: "Testimonials", link: "#testimonials" },
    { label: "Help", link: "#footer" },
  ];
  // navigation container styles
  let navContainer =
    "w-full flex items-center justify-between fixed top-0 left-0 py-6 px-20 z-20 md:px-15 border-gray-200";
  // for hamburger menu button
  const [active, setActive] = useState(false);
  // if menu state: open disable scroll option in web
  useEffect(() => {
    if (active) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [active]);

  // State of show menu
  const [showNavigation, setShowNavigation] = useState(true);
  // Handle Show menu for smaller screens
  const showNavigationHandle = () => {
    setShowNavigation(!showNavigation);
    setActive(!active);
  };

  return (
    <>
      {/* print overlay */}
      <Overlay
        show={showNavigation}
        state={setShowNavigation}
        active={active}
        setActive={setActive}
      />
      {/* overall navigation container */}
      <nav
        className={showNavigation ? `${navContainer} bg-white` : navContainer}
      >
        {/* Logo Box: First Item of Navigation-Container */}
        <div className="flex items-center gap-4 ">
          <img src={Logo} alt="website logo" width={149} height={37} />
        </div>
        {/* List: Second Item of Navigation-Container */}
        <div
          className={
            showNavigation
              ? navListStyles + " lg:-translate-x-350"
              : navListStyles + " lg:-translate-x-20 "
          }
        >
          {/* user account part */}
          <div className="hidden lg:flex items-center gap-6 ">
            <div className="w-1/4 rounded-full">
              <img
                src={UserPicture}
                alt="picture of logged-in user "
                className="rounded-full"
                width={110}
                height={110}
              />
            </div>
            <div className="space-y-5">
              <p className="font-medium text-black text-3xl">Gnu Mobin</p>
              <p className="text-xl flex gap-1 items-center">
                <IoBalloonSharp className="text-secondary" />
                <span className="uppercase">Online</span>
              </p>
            </div>
            <div className="ml-auto cursor-pointer">
              <IoPower size={28} className="text-primary" />
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
            Develop by:{" "}
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
        <div onClick={showNavigationHandle} className="hidden lg:block">
          <Humberger active={active} />
        </div>
      </nav>
      {/* cover navigation height size casue nav is fixed position */}
      <div className="mt-30">&nbsp;</div>
    </>
  );
}

export default HeadNav;
