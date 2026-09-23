import React from 'react';
import type { Icards } from '../../types/cards';
import Cardsdesign from './Cardsdesign';

const AvailableCards = ({ cards }) => {
  console.log(cards, 'cards from available');

  return (
   
           <div className="col-span-3  grid grid-cols-3 gap-4 pl-15">
                {cards.map((card: Icards) => {
                  return <Cardsdesign key={card.name} card={ card}/>;
                })}
                </div>
                );
              };


  


export default AvailableCards;