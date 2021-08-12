import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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

export default function FormCreate({cards, setCards}) {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-08-11T11:00:00'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

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
                <TextField 
                    type="text" 
                    required
                    value={card.title}
                    onChange={(ev) => setCard({...card, title: ev.target.value})}       
                    fullWidth 
                    style={{ margin: 8 }} 
                    id="title" 
                    label="Nombre" />
                <TextField 
                    type="text" 
                    required
                    value={card.descripcion}
                    onChange={(ev) => setCard({...card, descripcion: ev.target.value})}  
                    fullWidth 
                    style={{ margin: 8 }} 
                    id="descripcion" 
                    label="Descripción" />
                <TextField 
                    type="text" 
                    required
                    value={card.fecha}
                    onChange={(ev) => setCard({...card, fecha: ev.target.value})}  
                    fullWidth 
                    style={{ margin: 8 }} 
                    id="fecha" 
                    label="Fecha" />
                <TextField 
                    type="text" 
                    required
                    value={card.hora}
                    onChange={(ev) => setCard({...card, hora: ev.target.value})}                   
                    style={{ margin: 8 }} 
                    id="hora" 
                    label="Hora" />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                        <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Fecha de vencimiento"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                        <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Avísame a las "
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <br/>
                <div className="right">
                    <Button    type="submit" variant="outlined" style={{ margin: 15 }} color="secondary"> Agregar </Button>
                </div>
            </form>
        </div>
    )
}
