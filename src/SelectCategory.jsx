import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    background: '#F07167',
    color:'#F2F4F4'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    fontSize: 12,
    background: '#F07167',
    color:'#F2F4F4'
  }
}));

export default function SelectCategory({card, setCard}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState(card.descripcion);

  const handleChange = (ev) => {
    setCategory(ev.target.value || '');
    setCard({...card, descripcion: ev.target.value});
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <IconButton onClick={handleClickOpen}>
            <HomeIcon style={{ color: "#CCD1D1" }} />
        </IconButton>
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle style={{ fontSize: 16, background:'#F07167' }}>Selecciona una lista</DialogTitle>
            <DialogContent style={{background: '#F07167'}}>
            <form className={classes.container}>
                <FormControl className={classes.formControl}>
                <InputLabel id="demo-dialog-select-label">Lista de categorías</InputLabel>
                <Select
                    labelId="demo-dialog-select-label"
                    id="descripcion" 
                    value={category}
                    onChange={handleChange}
                    input={<Input />}
                >
                    <MenuItem value="">
                    <em>Mi día</em>
                    </MenuItem>
                    <MenuItem value={"Clases"}>Clases</MenuItem>
                    <MenuItem value={"Importante"}>Importante</MenuItem>
                    <MenuItem value={"Planeado"}>Planeado</MenuItem>
                    <MenuItem value={"Tareas"}>Tareas</MenuItem>
                </Select>
                </FormControl>
            </form>
            </DialogContent>
            <DialogActions style={{ fontSize: 16, background:'#F07167' }}>
            <Button onClick={handleClose} color="secondary">
                Cancelar
            </Button>
            <Button onClick={handleClose} color="primary">
                Guardar
            </Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}
