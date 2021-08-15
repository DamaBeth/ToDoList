import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CheckBoxCircle from "./CheckBox";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DeleteIcon from '@material-ui/icons/Delete';
import RightBar from "./RightBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    margin: "5px",
    background: '#242426',
    color:'#F2F4F4'
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 18,
    marginTop: 5
  },
  pos: {
    fontSize: 11,
    color:'#ADB5BD',
    marginTop: 10
  }
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [valueEdit,setValueEdit] = useState(false);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined">
        <Grid container>
          <Grid item>
            <ButtonBase className={classes.image}>
              <CheckBoxCircle />
            </ButtonBase>
          </Grid>
        <Grid item xs={12} sm container style={{ cursor: 'pointer' }} onClick={() => setValueEdit(!valueEdit)}>
          <Grid item xs container direction="column" >
            <Grid item xs>
              <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                  {props.title}
              </Typography>
              <Typography color="textSecondary" className={classes.pos}>
                {props.descripcion} {bull} {props.fecha} {bull} {props.hora}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ButtonBase className={classes.image} onClick={() => props.deleteCard(props.id)}>
            <DeleteIcon style={{ color: "#CCD1D1" }}/>
          </ButtonBase>
        </Grid>
      </Grid>
      </Paper>
      
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
        {valueEdit ? (
          <RightBar valueEdit={valueEdit}/>
        ) : (
          console.log("Fuera de edición")
        ) }
        </Grid>
      </Grid>
    </div>
  );
}
