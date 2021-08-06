import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

export default function HeaderButton(props){
    const styles = {padding: "2ren", margin: "10px"};
    const {name} = props;
    /*
    if(true){
        styles.border   =   "2px yellow solid";
    }
    */
    const classes = useStyles();

    const action    =   () => {
        alert(name);
    };

    return (
        <Button onClick={action} style={styles} variant="outlined" color="primary">
            {name}
        </Button>
        
        /*
    <button onClick={action} style={styles} type="button">
        {props.name}
    </button>*/
    );
}