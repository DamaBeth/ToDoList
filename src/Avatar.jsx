import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import avatar4 from './avatar4.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft:15
    },
    paper: {
      background: '#242426',
      color:'#F2F4F4',
      border:0
    },
    image: {
      width: 35,
      height: 35,
      marginTop: 12,
      marginRight: 10
    },
    title: {
      fontSize: 11,
      marginBottom:0,
      marginLeft:10
    },
    titlet:{
        fontSize: 11,
        marginBottom:20
    },
    pos: {
      fontSize: 2,
      color:'#ADB5BD',
      marginTop: 0,
      marginLeft:10
    }
  }));

export default function AvatarName() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography variant="overline" display="block" gutterBottom className={classes.titlet}>
            React To Do
        </Typography>
        <Paper className={classes.paper} variant="outlined">
        <Grid container>
          <Grid item>
            <Avatar alt="Damaris Quiroz" src={avatar4} className={classes.image}/>
          </Grid>
        <Grid item xs={12} sm container style={{ cursor: 'pointer' }}>
          <Grid item xs container direction="column" >
            <Grid item xs>
              <Typography variant="overline" display="block" gutterBottom className={classes.title}>
                DAMARIS QUIROZ CUAUTLE
              </Typography>
              <Typography display="block" gutterBottom className={classes.pos}>
                damaris.quiroz@alumno.buap.mx
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}
