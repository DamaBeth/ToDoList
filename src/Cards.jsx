import React from 'react';
import { Grid } from '@material-ui/core';
import SimpleCard from "./Card";

export default function Cards({cards, setCards}) {
    const deleteCard = (id) => {
        const newArrayCards = cards.filter(card => id !== card.id);
        setCards(newArrayCards);
        console.log(newArrayCards);
    }
    return (
        <Grid container>
            <Grid item xs={6} sm={12}>
                {cards.map(card => {
                    return (
                        <SimpleCard 
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            descripcion={card.descripcion}
                            fecha={card.fecha}
                            hora={card.hora}
                            active={card.active}
                            prioridad={card.prioridad}
                            deleteCard={deleteCard}
                            />
                        );
                    })}
            </Grid>
        </Grid>
    )
}
