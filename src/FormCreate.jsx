import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import AddCardBar from './AddCardBar';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      width: '25ch',
    },
    addButton:{
        padding: "2ren",
        margin: "10px",
        background: '#C70039',
        color: '#CCD1D1'
    },
    iconButton: {
        padding: 10
    }
}));

export default function FormCreate({cards, setCards}) {
    const classes = useStyles();

    const initialCard = {
        id:'', 
        title:'', 
        descripcion:'',
        fecha:'',
        hora:'',
        active:false,
        prioridad:"baja"
    }

    const [card, setCard] = useState(initialCard);

    const addCard = (ev) => {
        ev.preventDefault();
        
        if(card.title.trim() === "" || card.fecha.trim() === "") 
        {
            return alert("Ingrese todos los datos para continuar")
        }
        
        setCards([
            ...cards,
            {
                ...card,
                id: cards.length > 0 ? Math.max(...cards.map(card => card.id)) + 1 : 1
            }
        ])
        setCard(initialCard);
    };

    return (
        <div>
            <form onSubmit={(ev) => addCard(ev)} className={classes.root} noValidate id="addNewCard" autoComplete="off">
                <AddCardBar card={card} setCard={setCard} />
            </form>
        </div>
    )
}
