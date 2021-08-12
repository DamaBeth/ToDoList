import React from "react";
import { ListItemIcon } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

export default function CheckBoxCircle({complete}){
    const actionDone    =   () => {
        console.log("Tarea terminada");
    };

    return (
        <ListItemIcon>
            <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled />}
                onClick={actionDone}
            />
        </ListItemIcon>
    );
}