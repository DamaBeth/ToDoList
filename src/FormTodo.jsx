import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Grid } from '@material-ui/core';
import SimpleCard from "./Card";

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
    }
  }));

export default function FormCard(){
    const classes = useStyles();
    const styleButton = {color:"#C70039", textAlign: "center"};

    const actionAdd = () => {
        alert("Tarea añadida");
    }

    const initialCard = {
        id:'', 
        nombre:'', 
        descripcion:'',
        hora:''
    }

    const [cards, setCards] = useState([
        {id:1, nombre:"Reunión con Full Stack", descripcion:'Reunión de repaso', hora:"11:00 am"},
        {id:2, nombre:"Clase de Dispositivos móviles", descripcion:'Clase virtual', hora:"1:00 pm"}
    ]);

    const [card, setCard] = useState(initialCard);

    const addCard = (ev) => {
        ev.preventDefault();
        console.log(Math.max(...cards.map(card => card.id)) + 1);

        if(card.nombre === "" || card.descripcion === "") {return alert("Ingrese todos los datos para continuar")}
        setCards([
            ...cards,
            {
                ...card,
                id:Math.max(...cards.map(card => card.id)) + 1
            }
        ])
    };

    return (
        <div>
            <Grid container>
                <Grid item xs={6} sm={12}>
                    {cards.map(card => {
                        return (
                            <SimpleCard 
                            key={card.id}
                            id={card.id}
                            name={card.nombre}
                            descripcion={card.descripcion}
                            hora={card.hora}/>
                        );
                        
                    })}
                </Grid>
            </Grid>
            <IconButton onClick={actionAdd} style={styleButton} aria-label="addcircleicon">
                <AddCircleIcon />
            </IconButton>

            <form onSubmit={(ev) => addCard(ev)} className={classes.root} noValidate autoComplete="off">
                <TextField type="text" onChange={(ev) => setCard({...card, nombre: ev.target.value})}       fullWidth style={{ margin: 8 }} id="nombre" label="Nombre" />
                <TextField type="text" onChange={(ev) => setCard({...card, descripcion: ev.target.value})}  fullWidth style={{ margin: 8 }} id="descripcion" label="Descripción" />
                <TextField type="text" onChange={(ev) => setCard({...card, hora: ev.target.value})}                   style={{ margin: 8 }} id="hora" label="Hora" />
                <Button    type="submit" variant="outlined" style={{ margin: 15 }} color="secondary"> Agregar </Button>
            
            </form>
        </div> 
    );
}
