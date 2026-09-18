import React,{use} from 'react';
import type { Icards } from '../../types/cards';

interface cardsprops{
    cardspromise:Promise<Icards[]>
}

const Cards = ({cardspromise}:cardsprops) => {
    console.log(cardspromise);
    const cards=use(cardspromise);
    console.log(cards,"cards")
    return (
        <div className='col-span-3 grid grid-cols-3 gap-4'>
            {
                cards.map((card)=>(
                    <div key={card.name}>
                        <h2>{card.name}</h2>
                        <p>{card.description}</p>
                    </div>
                ))
            }
            
        </div>
    );
};

export default Cards;