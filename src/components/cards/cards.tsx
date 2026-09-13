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
        <div>
            
        </div>
    );
};

export default Cards;