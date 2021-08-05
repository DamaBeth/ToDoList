import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    background: '#FFC300',
    margin: "5px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.5)',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  pos: {
    marginBottom: 15,
    fontSize: 10
  },
  hour: {
    fontSize: 10,
    fontWeight: 'bold'
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const btnStyles = {background: '#C70039', fontSize: 9, fontWeight: 'bold'};

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
      </CardContent>
      <CardActions>
        <IconButton onClick={actionEdit} aria-label="edit">
            <EditIcon />
        </IconButton>
        <IconButton onClick={actionDelete} aria-label="delete">
            <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
