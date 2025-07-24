import "./Button.scss";

function Button({
  children,
  border = false,
  type = "normal",
  onClick,
  custom = "",
  link = false,
  scale = false,
}) {
  // whats is custom prop? handle custom tailwind classes with props
  // Default styles for button
  const defaultBtn =
    "text-2xl font-medium cursor-pointer text-black relative z-1 inline-block active:translate-y-2 ";
  // if button type is menu padding not applied!
  const menuBtn = type === "menu" ? " " : " py-4.5 px-15";
  // if border is true that button has border and full rounded corner
  const borderBtn = border
    ? " border-2 rounded-full text-primary "
    : " second ";
  // if button type is cta button get background (primary-color) and saddle shadow
  const typeBtn =
    type === "cta"
      ? " bg-primary text-white rounded-xl shadow-2xl shadow-primary px-30 py-8 cta-animted"
      : " ";
  // for shop type apply: 66.6% width and bigger font-size
  const shopBtn =
    type === "shop"
      ? " block w-2/3 text-4xl border-2 rounded-full mx-auto "
      : " ";
  // for bordered button animation
  const scaleAnimation = scale ? " border-animated " : "";
  // apply all button style approach in this constant
  const executeBtn =
    defaultBtn +
    borderBtn +
    typeBtn +
    menuBtn +
    shopBtn +
    scaleAnimation +
    custom +
    " button";
  // Handle onclick event from props :)
  const eventHandle = (e) => {
    // if button not link disable anchor default behavior :)
    if (!link) e.preventDefault();
    // if onClick function has exist run that!
    onClick && onClick();
  };
  // print final button on screen
  return (
    <a
      href="#"
      className={executeBtn}
      onClick={eventHandle}
      aria-label={children}
    >
      {children}
      {/* this element just for border-animated class animation */}
      <span className="w-1/3 h-full bg-primary absolute top-1/2 left-1/2 rounded-full -translate-1/2 scale-0 duration-300 button__animation -z-1"></span>
    </a>
  );
}

export default Button;
