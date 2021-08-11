import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LeftBar from "./LeftBar";
import FormEdit from "./FormEdit";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#242426',
    color:'white'
  }
}));

export default function RightForm(props) {
  const classes = useStyles();
  const styles = {
      background: '#242426',
      color:'white'
    }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={2} md={7}>
          <LeftBar />
      </Grid>
      <Grid item xs={12} sm={8} md={5} style={styles} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography gutterBottom variant="h5" component="h2">
            #Nombre de la tarea
          </Typography>
          <FormEdit />
        </div>
      </Grid>
    </Grid>
  );
}