import React from 'react';
import { useSelector } from 'react-redux';
import { setCardsConsume } from "./redux/reducers/cardConsumeReducer";
import { setCards } from "./redux/reducers/cardReducer";
import Cards from "./Cards";
import CardsConsume from "./CardsConsume";

export default function CardsComplete() {
    const cardsCompleted = useSelector( (state) => state.card.filter((card)=> card.active === true) );
    const cardsConsumeCompleted = useSelector((state) => state.cardConsume.filter((cardConsume)=> cardConsume.active === true));

    return (
        <div>
            <Cards cards={cardsCompleted} setCards={setCards} />
            <CardsConsume cards={cardsConsumeCompleted} setCards={setCardsConsume} />
        </div>
    );
}
