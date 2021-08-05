import React from "react";

export default function Button(props){
    const styles = {backgroundColor: "red", fontSize: "2ren", padding: "1ren"};

    if(true){
        styles.border   =   "2px yellow solid";
    }

    const action    =   () => {
        alert(props.name);
    };

    return (
    <button onClick={action} style={styles} type="button">
        {props.name}
    </button>
    );
}