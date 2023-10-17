/* eslint-disable no-unused-vars */
import React from "react";
import PriceCard from "../Utility/PriceCard";

const PriceSection = () => {
  const packs = [
    {
      title: "Free",
      description: "Suitable for those who just want to join or just try",
      price: 0,
      isPrmary: false,
      features: [
        "Basic profile creation ",
        "Access to community forums",
        "Limited access to blog",
        "Browse and view upcoming events",
      ],
    },
    {
      title: "Premium",
      description:
        "Suitable for those who want to enjoy all the features in full",
      price: 45,
      isPrmary: true,
      features: [
        "Advanced profile customization ",
        "Enhanced search functionality",
        "Access to premium blog & content",
        "Priority access to new events",
      ],
    },
  ];
  //   console.log(packs);
  return (
    <div>
      <div
        id="price-banner"
        className="pt-16 pb-56 rounded-3xl"
      >
        <h2 className="text-3xl font-semibold text-white my-5">
          Our pricing Plans
        </h2>
        <p className="my-5 text-white">
          We provide 2 types of members for you according to your needs and the
          features you want.
        </p>
      </div>
      <div className="w-full md:2/3 lg:w-3/5 mx-auto flex gap-10 flex-col md:flex-row lg:flex-row justify-center -mt-48">
        {packs?.map((pack) => (
          <PriceCard
            key={pack.title}
            title={pack.title}
            features={pack.features}
            description={pack.description}
            isPrimary={pack.isPrmary}
            price={pack.price}
          ></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceSection;
