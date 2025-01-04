const featuresInfo = [
  {
    iconName: "time",
    heading: "FREE AND FAST DELIVERY",
    note: "Free delivery for all orders over $140",
  },
  {
    iconName: "headset",
    heading: "24/7 CUSTOMER SERVICE",
    note: "Friendly 24/7 customer support",
  },
  {
    iconName: "shield-checkmark",
    heading: "MONEY BACK GUARANTEE",
    note: "We return money within 30 days",
  },
];

function Features() {
  return (
    <div className="max-mobile:grid-cols-1 max-mobile:gap-y-10 mx-auto my-32 grid w-fit grid-cols-3 items-center justify-center gap-x-24 text-center">
      {featuresInfo.map(({ iconName, heading, note }) => {
        return (
          <div className key={heading}>
            <ion-icon name={`${iconName}-outline`} />
            <h3 className="my-3 text-3xl font-semibold leading-seven tracking-wider text-two">
              {heading}
            </h3>
            <p className="text-2xl leading-four">{note}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Features;
