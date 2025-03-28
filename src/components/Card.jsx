import Button from "./Button/Button";
// import assets
import CardPicture from "../assets/card.png";

function Card({ active, data }) {
  const { title, list, price } = data;
  // Handle price: if price text has month seprate price string
  const showPrice = price.includes("/") ? price.split("/") : false;
  const defaultStyles = 'bg-white rounded-3xl py-22 px-15 space-y-15 xl:px-10 sm:w-5/6 sm:mx-auto card hover:-translate-y-3 duration-200 border-2 hover:border-transparent hover:shadow-2xl'
  const activeStyle = active ? ' border-primary' : ' border-[#ddd] ';
  
  return (
    <figure
      className={defaultStyles + activeStyle}
    >
      {/* image box */}
      <div className="w-1/2 mx-auto ">
        <img
          className="w-full pointer-events-none select-none"
          src={CardPicture}
          alt="celebration box"
        />
      </div>
      {/* content box: title */}
      <h4 className="text-black font-medium text-4xl">{title}</h4>
      {/* features list: handle by external style */}
      <ul className="text-xl list sm:text-2xl">
        {list.map((item, index) =>
          item ? (
            <li key={index} className="list__item">
              {item}
            </li>
          ) : (
            <li key={index} className="list__item--empty">
              &nbsp;
            </li>
          )
        )}
      </ul>
      {/* price box */}
      <div>
        <p className="text-black font-medium text-5xl mb-6">
          {showPrice ? showPrice[0] + "/" : price}
          <span className="text-gray-500">{showPrice[1]}</span>
        </p>
        {/* order button */}
        <Button
          type={"shop"}
          // if state is active set button styles to primary
          custom={
            active
              ? "bg-primary text-white shadow-2xl shadow-primary border-primary"
              : "text-primary"
          }
          scale={true}
          border={true}
        >
          Select
        </Button>
      </div>
    </figure>
  );
}

export default Card;
