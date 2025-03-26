import React from "react";

function Button({ children, border = false, type = "normal", onClick, custom = '' }) {
  // Default styles for button
  const defaultBtn = "text-2xl font-medium cursor-pointer text-black";
  // whats is custom? handle custom tailwind classes with props
  // if button type is menu padding not applied!
  const menuBtn = type === "menu" ? "" : " py-4.5 px-15";
  // if border is true that button has border and full rounded corner
  const borderBtn = border ? " border-2 rounded-full text-primary" : "";
  // if button type is cta button get background (primary-color) and suddle shadow
  const typeBtn =
    type === "cta"
      ? " bg-primary text-white rounded-xl shadow-2xl shadow-red-500 px-30 py-8"
      : "";
  // apply all button style approach in this constant
  const executeBtn = defaultBtn + borderBtn + typeBtn + menuBtn + custom;
  // Hanlde onclick event from props :)
  return (
    <button className={executeBtn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
