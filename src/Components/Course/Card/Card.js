import React from 'react';

const Card = (card) => {
    console.log(card)
    return (
        <div>
            <h1>{card.CardData.Name}</h1>
        </div>
    );
};

export default Card;