import { IoMenu, IoClose, IoBalloonSharp, IoPower } from "react-icons/io5";
import { useState } from "react";
import Button from "./Button/Button";
// Import assets
import Logo from "../assets/logo.svg";
import Overlay from "./Overlay";
import Humberger from "./Humberger/Hamberger";
import UserPicture from "../assets/user/user-2.jpeg";
import { useEffect } from "react";

function HeadNav() {
  const [active, setActive] = useState(false);

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
  // Duplicate Styles for navigation list (ul tag)
  const navListStyles =
    "flex gap-[4rem] text-2xl lg:fixed lg:flex-col h-full top-0 lg:w-2/3 lg:bg-gray-100 lg:p-10 cubic-bezier(.22,-0.21,.21,1.42) duration-500 z-20 rounded-t-3xl rounded-b-3xl";
  // Navigation Items Array
  const navItems = ["About", "Features", "Pricing", "Testimonials", "Help"];
  // navigation container styles
  const navContainer =
    "w-full flex items-center justify-between fixed top-0 left-0 py-6 px-20 z-20 md:px-15 border-gray-200 ";

  return (
    <>
      <Overlay
        show={showNavigation}
        state={setShowNavigation}
        active={active}
        setActive={setActive}
      />
      <nav
        className={showNavigation ? `${navContainer} bg-white` : navContainer}
      >
        {/* Logo Box: First Item of Navigation-Container */}
        <div className="flex items-center gap-4 ">
          <img src={Logo} alt="website logo" />
        </div>
        {/* List: Second Item of Navigation-Container */}
        <div
          className={
            showNavigation
              ? navListStyles + " lg:-translate-x-350"
              : navListStyles + " lg:-translate-x-20"
          }
        >
          <div className="hidden lg:flex items-center gap-6">
            <div className="w-1/4 rounded-full">
              <img
                src={UserPicture}
                alt="picture of logged-in user "
                className="rounded-full"
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
              <li
                className="lg:bg-white lg:p-8 rounded-lg hover:text-black duration-200"
                key={index}
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          {/* Buttons! But just show on smaller screens as list item */}
          <div className="hidden lg:block text-center ">
            <Button border={false}>Sign In</Button>
            <Button border={true}>Sign In</Button>
          </div>
        </div>
        {/* Cta Buttons: Third Item of Navigation-Container */}
        <div className="lg:hidden">
          {/* Secondary Button */}
          <Button border={false}>Sign In</Button>
          {/* Primary Button */}
          <Button border={true}>Sign Up</Button>
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
