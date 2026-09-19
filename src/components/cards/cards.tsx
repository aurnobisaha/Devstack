import React,{use} from 'react';
import type { Icards } from '../../types/cards';

interface cardsprops{
    cardspromise:Promise<Icards[]>
}

const Cards = ({cardspromise}:cardsprops) => {
    
    const cards=use(cardspromise);
    
      return (
    <div className="col-span-3 grid grid-cols-3 gap-4">
      {cards.map((card) => (
        <div key={card.name} className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <img
                src={card.icon}
                alt={card.name}
                className="w-12 h-12"
              />

              {card.badge && (
                <span className="badge badge-xs badge-warning">
                  {card.badge}
                </span>
              )}
            </div>
            

            <div className='px-4'>
              <h2 className='text-xl font-bold'>
                {card.name}
              </h2>
              <p className='text-sm mt-2'>
                {card.description}
              </p>
              </div>
              <div className='flex gap-2 px-4 mt-4'>
                <span className='badge badge-outline'>
                    {card.category}
                </span>
                <span className='badge badge-outline'>{card.difficulty}</span>
                 <span className='badge badge-ghost'>
                ⭐ {card.rating}
              </span>
              </div>

              <div className='flex justify-between items-center p-4 mt-2'>
              <button className="btn btn-primary btn-block">
                Add to Stack
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;