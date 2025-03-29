import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.scss";
// import assets
import Logo from "../../assets/logo.svg";

function Footer() {
  // all of navigation items: title and lists (anchors)
  const navigationLists = [
    {
      title: "Product",
      list: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"],
    },
    {
      title: "Engage",
      list: [
        "LaslesVPN ?",
        "FAQ",
        "Tutorials",
        "About Us",
        "Privacy Policy",
        "Terms of Service",
      ],
    },
    {
      title: "Earn Money",
      list: ["Affiliate", "Become Partner"],
    },
  ];

  return (
    <footer className="bg-background pt-85 md:pt-95">
      <div className="container flex justify-between md:flex-col-reverse gap-30">
        {/* Social section */}
        <div className="space-y-15 w-1/3 md:w-full">
          <img src={Logo} alt="website logo" />
          <p className="text-2xl leading-11 -mt-5">
            <strong>LaslesVPN</strong> is a private virtual network that has
            unique features and has high security.
          </p>
          {/* social section: logos */}
          <div className="flex gap-10">
            <a
              href="#"
              className="flex bg-white p-3 rounded-full justify-center items-center duration-200 text-primary text-4xl footer-icon"
            >
              <FaFacebookF className="relative z-10" />
              <span className="footer-icon__bg">&nbsp;</span>
            </a>
            <a
              href="#"
              className="flex bg-white p-3 rounded-full justify-center items-center text-primary text-4xl footer-icon"
            >
              <FaTwitter className="relative z-10" />
              <span className="footer-icon__bg">&nbsp;</span>
            </a>
            <a
              href="#"
              className="flex bg-white p-3 rounded-full justify-center items-center text-primary text-4xl footer-icon"
            >
              <FaInstagram className="relative z-10" />
              <span className="footer-icon__bg">&nbsp;</span>
            </a>
          </div>
          {/* Social section: copyright */}
          <p className="text-[#AFB5C0] text-2xl">
            ©2020Lasles<strong>VPN</strong>
          </p>
        </div>
        {/* footer navigation container */}
        <nav className="flex justify-between gap-50 lg:gap-30 sm:grid sm:grid-cols-2">
          {/* naviagtion list renderer */}
          {navigationLists.map((item, index) => (
            <div key={index}>
              {/* print title */}
              <p className="text-black font-medium text-[2rem] mb-12">
                {item.title}
              </p>
              {/* print list (anchors) */}
              <ul className="text-2xl space-y-8 footer-list">
                {item.list.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
