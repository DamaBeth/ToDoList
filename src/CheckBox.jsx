import React from "react";
import { useDispatch } from 'react-redux';
import { taskComplete } from './redux/reducers/cardReducer';
import { ListItemIcon } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

export default function CheckBoxCircle({ id, active }){
    const dispatch = useDispatch();
    
    const actionDone = () => {
        dispatch(
            taskComplete({ id: id, active: !active })
        );
    };

    return (
        <ListItemIcon>
            <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled />}
                onChange={actionDone}
            />
        </ListItemIcon>
    );
}