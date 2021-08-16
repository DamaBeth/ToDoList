import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setCardsConsume } from "./redux/reducers/cardConsumeReducer";
import { setCards } from "./redux/reducers/cardReducer";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import CardsConsume from "./CardsConsume";
import CardsComplete from "./CardsComplete";
import FormCreate from "./FormCreate";
import getList from "./Provider";
import Cards from "./Cards";

export default function FormCard(){
    const cardsConsume = useSelector((state) => state.cardConsume);
    const cards = useSelector((state) => state.card);
    const dispatch = useDispatch();
    const [showForm, hideForm] = useState(false); //bool
    const styleButton = {
        color:"#242426"
    };
    const styles = {
        margin: "10px", 
        left: 0, 
        position: "relative", 
        fontSize: 30, 
        fontWeight: 'bold', 
        color: "white" 
    };
    
    const getListUI = async () => {
        const responseConsume = await getList();
        dispatch(setCardsConsume(responseConsume.data));
    };

    useEffect(() => {
        getListUI();
    }, []);

    return (
        <div>
            <p style={styles}>Mi día</p>
            <Cards cards={cards} setCards={setCards} />
            <CardsConsume cards={cardsConsume} setCards={setCardsConsume} />
            <p style={styles}>Completado</p>
            <CardsComplete />

            <div className="center">
                <IconButton onClick={() => hideForm(!showForm)}  aria-label="addcircleicon">
                    <AddCircleIcon style={styleButton} />
                </IconButton>
            </div>
            
            { showForm ? (
                <FormCreate cards={cards} />
            ) : (
                console.log("Formulario oculto")) 
            }
        </div> 
    );
}