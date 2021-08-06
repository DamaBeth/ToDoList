import './App.css';
import React, { useState } from 'react';
import HeaderButton from "./Button";
import SimpleCard from "./Card";
import FormCard from "./FormTodo";
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Grid } from '@material-ui/core';

function App() {
  const styles = {margin: "10px", left: 0, position: "relative", fontSize: 25, fontWeight: 'bold' };
  const styleButton = {color:"#C70039", textAlign: "center"};

  const actionAdd = () => {
    alert("Tarea añadida");
  };

  return (
    <div className="App">
      <header className="App-header">
        <HeaderButton name="Login"/>
        <HeaderButton name="Registrarse" />
      </header>
      <main>
        <p style={styles}>Hoy</p>
        <Grid container>
          <Grid item xs={6} sm={12}>
            <SimpleCard name="Reunión con Full Stack" descripcion="Reunión de repaso" hora="11:00 am"/>
            <SimpleCard name="Clase de Base de datos" descripcion="Profesor Jose Alfredo" hora="1:00 pm"/>
          </Grid>
        </Grid>
        <IconButton onClick={actionAdd} style={styleButton} aria-label="addcircleicon">
            <AddCircleIcon />
        </IconButton>
        <FormCard />
      </main>
    </div>
  );
}

export default App;
