import React, { use } from "react";
import type { Icards } from "../../types/cards";
import AvailableCards from "./AvailableCards";

interface cardsprops {
  cardspromise: Promise<Icards[]>;
  //setStack: React.Dispatch<React.SetStateAction<Icards[]>>;
}



const Cards = ({ cardspromise }: cardsprops) => {
  const cards = use(cardspromise);

  return (
    <div className="col-span-3 grid grid-cols-3 gap-4 mt-8" > 
      <AvailableCards cards={cards} />
     
    </div>
  );
};

export default Cards;
