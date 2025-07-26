import { useState } from "react";
import { disableScroll, enableScroll } from "../utils/scroll";
import Button from "./Button/Button";
import Overlay from "./Overlay";
import Humberger from "./Humberger/Hamberger";
// Import assets
import Logo from "../assets/logo.png";
import UserPicture from "../assets/girl.jpg";
import { FaRegMoon } from "react-icons/fa";
import { useEffect } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiMoonBold, PiUserBold } from "react-icons/pi";

function HeadNav() {
  // Duplicate Styles for navigation list (ul tag)
  const navListStyles =
    "flex gap-[4rem] text-2xl lg:fixed lg:flex-col lg:h-[98dvh] top-3.5 lg:w-2/3 lg:bg-mobile-menu-bg lg:p-10 z-20 items-center lg:items-stretch navContainer";
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
    "w-full flex items-center justify-between py-6 px-20 z-20 md:px-15 border-gray-200";
  // State of show menu
  const [showNavigation, setShowNavigation] = useState(false);
  // if menu state: open disable scroll option in web
  if (showNavigation) {
    disableScroll();
  } else enableScroll();

  //
  const [darkTheme, setDarkTheme] = useState(false);
  //
  const ballStyleDefault = `bg-background w-40 h-40 rounded-full fixed -top-10 right-13 dark-mode-ball`;
  const ballStyle = darkTheme
    ? `${ballStyleDefault} scale-[30] xs:scale-[15]`
    : `${ballStyleDefault} scale-[0]`;

  //
  const changeThemeHandler = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    localStorage.setItem("dark", JSON.stringify(newTheme));
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("dark");
    if (storedTheme !== null) {
      setDarkTheme(JSON.parse(storedTheme));
    }
  }, []);

  useEffect(() => {
    const $ = document.documentElement.style;
    $.setProperty("--color-background", darkTheme ? "#0b132a" : "#f6f6f6");
    $.setProperty("--color-black", darkTheme ? "#eeeff2" : "#0b132a");
    $.setProperty("--color-gray", darkTheme ? "#dddddd" : "#4f5665");
    $.setProperty("--color-white", darkTheme ? "#121c30" : "white");
    $.setProperty("--color-super-gray", darkTheme ? "#4f5665" : "#dddddd");
    $.setProperty("--color-shadow-features", darkTheme ? "#101828" : "#f3f4f6");
    $.setProperty(
      "--color-shadow-databox",
      darkTheme ? "rgba(242, 239, 218, 0.1)" : "rgba(13, 16, 37, 0.1)"
    );
    $.setProperty("--color-mobile-menu-bg", darkTheme ? "#101828" : "#f3f4f6");
    $.setProperty("--color-primary-light", darkTheme ? "#121c30" : "#ffecec");
  }, [darkTheme]);

  return (
    <>
      <div className={ballStyle}></div>
      {/* print overlay */}
      <Overlay show={showNavigation} state={setShowNavigation} />
      {/* overall navigation container */}
      <nav className={navContainer}>
        {/* Logo Box: First Item of Navigation-Container */}
        <div className="flex items-center gap-4 z-1">
          <img src={Logo} alt="website logo" width={30} height={30} />
          <strong className="text-3xl text-black font-bolder">LaslesVPN</strong>
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
                  className="lg:bg-white lg:p-8 lg:rounded-lg duration-200 border-b-1 border-transparent block hover:text-black hover:scale-150 hover:skew-y-6"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Buttons! But just show on smaller screens as list item */}
          <div className="hidden lg:flex justify-center gap-2">
            {/* <Button border={false} scale={true}>
              Sign In
            </Button>
            <Button border={true} scale={true}>
              Sign Up
            </Button> */}
            <Button border={true} scale={true}>
              {/* Sign Up */}
              <PiUserBold />
            </Button>
            <Button
              border={true}
              scale={true}
              custom="border-black !text-black [&>span]:bg-black hover:!text-background hover:!border-black"
              onClick={changeThemeHandler}
            >
              {/* Dark Mode */}
              <PiMoonBold />
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
          {/* <Button border={false} scale={true}>
            Sign In
          </Button> */}
          {/* Primary Button */}
          <Button border={true} scale={true}>
            {/* Sign Up */}
            <PiUserBold />
          </Button>
          <Button
            border={true}
            scale={true}
            custom="border-black !text-black [&>span]:bg-black hover:!text-background hover:!border-black"
            onClick={changeThemeHandler}
          >
            {/* Dark Mode */}
            <PiMoonBold />
          </Button>
        </div>
        {/* Mobile Menu: Button */}
        <div
          // open/close menu handler state
          onClick={() => setShowNavigation(!showNavigation)}
          className="hidden lg:block absolute -top-7 right-0"
        >
          <Humberger active={showNavigation} className={"stroke-black"} />
        </div>
      </nav>
    </>
  );
}

export default HeadNav;
