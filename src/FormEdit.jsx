import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

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
      background: '#242426',
      color:'white'
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
            <form onSubmit={(ev) => editCard(ev)} className={classes.root} noValidate id="addNewCard" autoComplete="off">
                <TextField 
                    type="text" 
                    required 
                    fullWidth 
                    style={{ margin: 8, color: 'white' }} 
                    id="nombre" 
                    label="Nombre" />
                <TextField 
                    type="text" 
                    required 
                    
                    fullWidth 
                    style={{ margin: 8 }} 
                    id="descripcion" 
                    label="Descripción" />
                <TextField 
                    type="text" 
                    required 
                    
                    fullWidth 
                    style={{ margin: 8 }} 
                    id="fecha" 
                    label="Fecha" />
                <TextField 
                    type="text" 
                    required 
                                    
                    style={{ margin: 8 }} 
                    id="hora" 
                    label="Hora" />
                
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
