import React from 'react';
import { Grid } from '@material-ui/core';
import SimpleCardConsume from "./CardConsume";

export default function CardsConsume({cards, setCards}) {
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
                        <SimpleCardConsume 
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            descripcion={"Tareas"}
                            fecha={"Hoy"}
                            hora={"9:00 pm"}
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
