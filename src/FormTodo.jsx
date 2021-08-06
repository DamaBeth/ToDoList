import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Container, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
//import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function FormCard(props){
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Agrega una tarea" />
            <TextField id="standard-basic" label="Descripción" />
            <TextField id="standard-basic" label="Hora" />
        </form>
    );
}
