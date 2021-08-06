import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxHeight:150,
    background: '#212F3D',
    margin: "5px",
    borderTopColor:'#C70039',
    borderBottomColor: '#C70039',
    color:'#F2F4F4'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.5)',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  pos: {
    marginBottom: 6,
    fontSize: 10,
    color:'#CCD1D1'
  },
  hour: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#CCD1D1',
    textAlign: 'right'
  },
  buttonAction: {
      textAlign: 'left',
      alignItems: 'left',
      color: '#CCD1D1',

  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  const actionDelete    =   () => {
    alert("Tarea eliminada");
  };

  const actionEdit = () => {
      alert("Tarea editada");
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
            {props.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.descripcion}
          <Typography className={classes.hour} color="textSecondary">
            Hora: {props.hora}
          </Typography>
        </Typography>
        <CardActions>
              <IconButton className={classes.buttonAction} onClick={actionEdit} aria-label="edit">
                  <EditIcon />
              </IconButton>
              <IconButton className={classes.buttonAction} onClick={actionDelete} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </CardActions>
      </CardContent>
    </Card>
  );
}
