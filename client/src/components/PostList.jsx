import React, { useState, useEffect } from "react";
import background from "/public/assets/images/fam1.webp";
import Drop from "./Drop";
import Card from "./Card";

const mockCards = [
  {
    id: "card-1",
    name: "Owens Family",
    bio: "we Lost our jobs and we need help",
    buttonText1: "Clothing",
    buttonText2: "School Supplies",
  },
  {
    id: "card-2",
    name: "Duff Family",
    bio: "We're dope AF",
    buttonText1: "Clothing",
    buttonText2: "School Supplies",
  },
  {
    id: "card-3",
    name: "Salizar Family",
    bio: "We love nature",
    buttonText1: "Clothing",
    buttonText2: "School Supplies",
  },
];

const ViewPosts = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    // const res = await fetch('/cards').json()
    // if (res.ok) {
    // setCards(res.data)
    // }
  }, []);
  return (
    <div
      className="flex flex-col items-center"
      style={{
        backgroundImage: `url(${background})`,
        height: "844px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="mt" role="img">
        <img
          className="max-w-[200px] md:w-auto mt-10"
          src="assets/images/logo1.png"
          alt="logo"
        />
      </div>
      <div className="text-2xl text-red-600 mb-5">
        <h1>Select nearest location to help</h1>
      </div>
      <div className="">
        <Drop />
      </div>
      <div className="flex flex-col items-center w-4/5">
        {mockCards.map((cardData) => {
          return <Card key={cardData.id} cardData={cardData} />;
        })}
      </div>
    </div>
  );
};

export default ViewPosts;
