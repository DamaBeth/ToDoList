import React from 'react';
import { useSelector } from 'react-redux';
//mport Grid from '@material-ui/core/Grid';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function CardsComplete() {
    const styles = {
        margin: "10px", 
        left: 0, 
        paddingTop: "10px",
        position: "relative", 
        fontSize: 30, 
        fontWeight: 'bold', 
        color: "white" 
    };
   
    const cardsCompleted = useSelector( (state) => state.card.filter((card)=> card.active === true) );
    const cardsConsumeCompleted = useSelector((state) => state.cardConsume.filter((cardConsume)=> cardConsume.active === true));

    return (
        <div>
            <p style={styles}>Completado: {cardsCompleted.length} </p>
            <p style={styles}>Completado: {cardsConsumeCompleted.length} </p>
        </div>
    );
}
