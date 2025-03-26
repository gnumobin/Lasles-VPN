import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import Button from "./Button";
// Import assets
import Logo from "../assets/logo.png";
import Overlay from "./Overlay";

function HeadNav() {
  // State of show menu
  const [showNavigation, setShowNavigation] = useState(true);
  // Handle Show menu for smaller screens
  const showNavigationHandle = () => setShowNavigation(!showNavigation);
  // Duplicate Styles for navigation list (ul tag)
  const navListStyles =
    "flex gap-[4rem] text-2xl lg:fixed lg:flex-col h-full top-0 lg:w-2/3 lg:bg-gray-100 lg:border-r border-gray-400 lg:p-10 ease-in-out duration-400 z-20";
  // Navigation Items Array
  const navItems = ["About", "Features", "Pricing", "Testimonials", "Help"];

  return (
    <>
    <Overlay show={showNavigation} state={setShowNavigation}/>
    <nav className="container flex items-center justify-between">
      {/* Logo Box: First Item of Navigation-Container */}
      <div className="flex items-center gap-4">
        <img src={Logo} alt="website logo" />
        {/* LogoBox Title */}
        <span className="text-4xl font-medium text-black">
          Lasles<strong className="font-extrabold">VPN</strong>
        </span>
      </div>
      {/* List: Second Item of Navigation-Container */}
      <ul
        className={
          showNavigation
            ? navListStyles + " -left-full"
            : navListStyles + " left-0"
        }
      >
        {/* Render Navigation items from external data */}
        {navItems.map((item) => (
          <li className="lg:bg-white lg:p-8 rounded-lg">
            <a href="#">{item}</a>
          </li>
        ))}
        {/* Buttons! But just show on smaller screens as list item */}
        <li className="hidden lg:block text-center ">
          <Button border={false}>Sign In</Button>
          <Button border={true}>Sign In</Button>
        </li>
      </ul>
      {/* Cta Buttons: Third Item of Navigation-Container */}
      <div className="lg:hidden">
        {/* Secondary Button */}
        <Button border={false}>Sign In</Button>
        {/* Primary Button */}
        <Button border={true}>Sign Up</Button>
      </div>
      {/* Mobile Menu: Button */}
      <div className="hidden lg:block relative z-30">
        <Button type="menu" onClick={showNavigationHandle}>
          {showNavigation ? <IoMenu size={32} /> : <IoClose size={32} className="text-primary-light" />}
        </Button>
      </div>
    </nav>
    </>
  );
}

export default HeadNav;
