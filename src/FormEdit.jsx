import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CustomizedInputs from './colortypes';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      background: '#242426'
    },
    textField: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      width: '25ch',
      background: '#242426'
    },
    addButton:{
        padding: "2ren",
        margin: "10px",
        background: '#C70039',
        color: '#CCD1D1'
    }
}));

export default function FormEdit() {
    const classes = useStyles();

    const editCard = (ev) => {
        ev.preventDefault();
        alert("Tarea editada");
    };

    return (
        <div >
            <CustomizedInputs/>
            <form onSubmit={(ev) => editCard(ev)} className={classes.root} noValidate id="addNewCard" autoComplete="off">
            <TextField 
                    type="text" 
                    required
                    fullWidth 
                    style={{ margin: 8, borderRadius: 4}} 
                    id="title" 
                    label="Nombre" 
                    variant="filled"
                    color="white"/>
                <TextField 
                    type="text" 
                    required
                    fullWidth 
                    style={{ margin: 8 }} 
                    id="descripcion" 
                    label="Descripción" 
                    variant="filled"
                    color="secondary"/>
                <TextField
                    type="date"
                    label="Fecha de vencimiento"
                    required
                    defaultValue="2021-08-13"
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
                <div  className="center">
                <Grid item xs={12}>
                    <Button  type="submit" variant="outlined" size="small" style={{ margin: 15 }} color="secondary"> Guardar </Button>
                </Grid>
                </div>
            </form>
        </div>
    );
}
