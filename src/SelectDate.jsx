import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      background: '#F07167',
      color:'#F2F4F4'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 230,
      fontSize: 12,
      background: '#F07167',
      color:'#F2F4F4'
    }
}));

export default function SelectDate({card,setCard}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <IconButton onClick={handleClickOpen}>
            <EventIcon style={{ color: "#CCD1D1" }} />
        </IconButton>
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle style={{ fontSize: 16, background:'#F07167' }}>
                Agregar fecha de vencimiento
            </DialogTitle>
            <DialogContent style={{background: '#F07167'}}>
            <form className={classes.container}>
                <FormControl className={classes.formControl}>
                    <TextField
                        type="date"
                        label="Fecha de vencimiento "
                        required
                        defaultValue="2021-08-16"
                        onChange={(ev) => setCard({...card, fecha: ev.target.value})}
                        fullWidth 
                        style={{ margin: 8 }} 
                        id="fecha"
                        variant="filled"
                        color="secondary"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
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
    )
}
