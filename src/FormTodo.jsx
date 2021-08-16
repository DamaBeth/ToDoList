import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setCardsConsume } from "./redux/reducers/cardConsumeReducer";
import { setCards } from "./redux/reducers/cardReducer";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
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
    const [showDayCards, hideDayCards] = useState(true);
    const [showCompleteCards, hideCompleteCards] = useState(true);
    const styleButton = { color:"#242426" };
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
            <div>
                <p style={styles}>Mi día
                <IconButton onClick={() => hideDayCards(!showDayCards)}  aria-label="addcircleicon">
                    { showDayCards ? (
                        <ExpandMoreIcon style={styleButton} />
                    ) : (
                        <ExpandLessIcon style={styleButton} />
                    ) 
                    }
                </IconButton>
                </p>
            </div>

            { showDayCards ? (
                <div>
                    <Cards cards={cards} setCards={setCards} />
                    <CardsConsume cards={cardsConsume} setCards={setCardsConsume} />
                </div>
            ) : (
                console.log("Tareas del día ocultas")
            )}

            <div>
                <p style={styles}>Completado
                    <IconButton onClick={() => hideCompleteCards(!showCompleteCards)}  aria-label="addcircleicon">
                        { showCompleteCards ? (
                            <ExpandMoreIcon style={styleButton} />
                        ) : (
                            <ExpandLessIcon style={styleButton} />
                        ) 
                        }
                    </IconButton>
                </p>
            </div>

            { showCompleteCards ? (
                <div>
                    <CardsComplete />
                </div>
            ) : (
                console.log("Tareas completadas ocultas")
            )}

            <FormCreate cards={cards} />
        </div> 
    );
}