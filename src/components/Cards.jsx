import HeadBox from "./HeadBox";
import Card from "./Card";

function Cards() {
  const cards = [
    {
      title: "Free Plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        '',
        ''
      ],
      price: "Free",
      active: false
    },
    {
      title: "Standard Plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        ''
      ],
      price: "$9 / mo",
      active: false
    },
    {
      title: "Premium Plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Get New Features",
      ],
      price: "$12 / mo",
      active: true
    },
  ];

  return (
    <section className="text-center pt-25 container">
      <HeadBox title="Choose Your Plan">
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </HeadBox>
      {/* Cards container */}
      <div className="grid gap-40 mt-10 grid-cols-3 xl:gap-15 sm:grid-cols-1">
        {cards.map((card, index) => (
          <Card data={card} key={index} active={card.active}/>
        ))}
      </div>
    </section>
  );
}

export default Cards;
