import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import AlarmIcon from '@material-ui/icons/Alarm';
import EventIcon from '@material-ui/icons/Event';
import Grid from '@material-ui/core/Grid';
import SelectCategory from './SelectCategory';

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
      height: 60,
      width: 60
    },
    dateText: {
      color:'#ADB5BD',
      colorItems:'#ADB5BD'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      background:'#242426',
      color:'#ADB5BD',
      height: 60,
    }
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  const abrirCal = (ev) => {
    ev.preventDefault();
  };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} variant="outlined">
                <Grid container>
                    <Grid item>
                        <IconButton className={classes.image}>
                            <AddIcon style={{ color: "#CCD1D1" }} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} sm container style={{ cursor: 'pointer' }}>
                        <Grid item xs container direction="column" >
                            <Grid item xs>
                                <InputBase
                                    fullWidth 
                                    className={classes.input}
                                    placeholder="Agregar una tarea"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <SelectCategory/>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.image}>
                            <EventIcon style={{ color: "#CCD1D1" }}/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.image}>
                            <AlarmIcon style={{ color: "#CCD1D1" }}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    
    );
}
