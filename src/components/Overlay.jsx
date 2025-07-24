function Overlay({ show, state }) {
  // default styles
  const defaultStyles = "h-full w-full fixed bg-black z-15 -mt-30 opacity-60 ";

  return (
    <div
      // handle toggle between show/hidden
      className={
        show ? defaultStyles + "visible " : defaultStyles + "invisible"
      }
      onClick={() => state(!show)}
    >
      &nbsp;
    </div>
  );
}

export default Overlay;
