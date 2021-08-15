import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import 'date-fns';
import CustomizedInputBase from './TextField';

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
                <CustomizedInputBase/>
                <TextField 
                    type="text" 
                    required
                    value={card.title}
                    onChange={(ev) => setCard({...card, title: ev.target.value})}       
                    fullWidth 
                    style={{ margin: 8, borderRadius: 4}} 
                    id="title" 
                    label="Nombre" 
                    variant="filled"
                    color="secondary"/>
                <TextField 
                    type="text" 
                    required
                    value={card.descripcion}
                    onChange={(ev) => setCard({...card, descripcion: ev.target.value})}  
                    fullWidth 
                    style={{ margin: 8 }} 
                    id="descripcion" 
                    label="Descripción" 
                    variant="filled"
                    color="secondary"/>
                <TextField
                    type="date"
                    label="Fecha de vencimiento "
                    required
                    defaultValue="2021-08-13"
                    onChange={(ev) => setCard({...card, fecha: ev.target.value})}
                    fullWidth 
                    style={{ margin: 8 }} 
                    id="fecha"
                    variant="filled"
                    color="secondary"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                <TextField
                    type="time"
                    label="Avísame a las: "
                    required
                    defaultValue="07:30"
                    onChange={(ev) => setCard({...card, hora: ev.target.value})}    
                    style={{ margin: 8 }} 
                    id="hora" 
                    variant="filled"
                    color="secondary"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                />
                <br/>
                <div className="right">
                    <Button    type="submit" variant="outlined" style={{ margin: 15 }} color="secondary"> Agregar </Button>
                </div>
            </form>
        </div>
    )
}
