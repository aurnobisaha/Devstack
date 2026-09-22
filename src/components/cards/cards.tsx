import React, { use, useState } from "react";
import type { Icards } from "../../types/cards";

interface cardsprops {
  cardspromise: Promise<Icards[]>;
  setStack: React.Dispatch<React.SetStateAction<Icards[]>>;
}

const Card = ({
  card,
  setStack,
}: {
  card: Icards;
  setStack: React.Dispatch<React.SetStateAction<Icards[]>>;
}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <img src={card.icon} alt={card.name} className="w-12 h-12" />

          {card.badge && <span>{card.badge}</span>}
        </div>

        <div className="px-4">
          <h2 className="text-xl font-bold">{card.name}</h2>
          <p className="text-sm mt-2 text-[#64748B]">{card.description}</p>
        </div>

        <div className="flex items-center gap-2 px-4 mt-4 min-w-0">
          <span className="btn btn-xs badge-ghost text-[#475569] text-xs whitespace-nowrap">
            {card.category}
          </span>

          <span className="btn btn-ghost text-[#64748B] text-xs">
            {card.difficulty}
          </span>

          <span className="ml-auto text-xs text-[#334155]">
            ⭐ {card.rating}
          </span>
        </div>

        <div className="flex justify-between items-center p-4 mt-2">
          <button
            onClick={() => {
              setIsSelected(true);
              setStack(prev => [...prev, card]);
            }}
            className="btn w-full btn-wide bg-black text-white border-black"
          >
            {isSelected === true ? "Selected" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Cards = ({ cardspromise, setStack }: cardsprops) => {
  const cards = use(cardspromise);

  return (
    <div className="col-span-3 grid grid-cols-3 gap-4 pl-25 mt-8">
      {cards.map((card) => (
        <Card
          key={card.name}
          card={card}
          setStack={setStack}
        />
      ))}
    </div>
  );
};

export default Cards;
