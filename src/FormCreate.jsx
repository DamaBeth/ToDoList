import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCards } from './redux/reducers/cardReducer';
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


export default function FormCreate({ cards }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [cardValue, setCardValue] = useState('');
    const initialCard = {
        id:'', 
        title:'', 
        descripcion:'',
        fecha:'',
        hora:'',
        active:false,
        prioridad:"baja"
    };

    const addCardSubmit = (ev) => {
        ev.preventDefault();

        if(cardValue.title.trim() === "" || cardValue.fecha.trim() === "") 
        {
            return alert("Ingrese todos los datos para continuar")
        }

        dispatch(
            addCards([
                ...cards,
                {
                    ...cardValue,
                    id: cards.length > 0 ? Math.max(...cards.map(cardValue => cardValue.id)) + 1 : 1
                }
            ])
        );
        
        setCardValue(initialCard);
    };

    return (
        <div>
            <form onSubmit={(ev) => addCardSubmit(ev)} className={classes.root} noValidate id="addNewCard" autoComplete="off">
                <AddCardBar card={cardValue} setCard={setCardValue} />
            </form>
        </div>
    );
}