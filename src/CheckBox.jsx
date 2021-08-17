import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { taskComplete } from './redux/reducers/cardReducer';
import { ListItemIcon } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

export default function CheckBoxCircle({ id, active }){
    const dispatch = useDispatch();
    const [complete, incomplete] = useState(active);
    
    const actionDone = () => {
        dispatch(
            taskComplete({ id: id, active: !active })
        );
        incomplete(!complete);
    };

    return (
        <ListItemIcon>
            <Checkbox 
                checked={complete} 
                onChange={actionDone} 
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled />} 
            />
        </ListItemIcon>
    );
}