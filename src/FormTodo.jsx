import React, { useEffect, useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import FormCreate from "./FormCreate";
import Cards from "./Cards";
import CardsConsume from "./CardsConsume";
import getList from "./Provider";

export default function FormCard(){
    const [showForm, hideForm] = useState(false); //bool
    
    const styleButton = {
        color:"#242426"
    };

    const [todos, setTodos] = useState([]);

    const [cards, setCards] = useState([
        {
            id:1, 
            title:"Reunión con Full Stack",         
            descripcion:'Reunión de repaso',    
            fecha: "Hoy",   
            hora:"11:00 am",
            active:false,
            prioridad:"alta"
        },
        {
            id:2, 
            title:"Clase de Dispositivos móviles",  
            descripcion:'Clase virtual',        
            fecha: "Hoy",   
            hora:"1:00 pm",
            active:true,
            prioridad:"baja"
        }
    ]);

    const styles = {margin: "10px", left: 0, position: "relative", fontSize: 30, fontWeight: 'bold', color: "white" };
    
    const getListUI = async () => {
        const response = await getList();
        //console.log(response.data);
        setTodos(response.data);
    };

    useEffect(() => {
        getListUI();
    }, []);
    

    return (
        <div>
            <p style={styles}>Mi día</p>
            <Cards cards={cards} setCards={setCards} />
            <CardsConsume cards={todos} setCards={setTodos} />

            <div className="center">
                <IconButton onClick={() => hideForm(!showForm)}  aria-label="addcircleicon">
                    <AddCircleIcon style={styleButton} />
                </IconButton>
            </div>

            { showForm ? (
                <FormCreate cards={cards} setCards={setCards} />
            ) : (
                console.log("Formulario oculto")) 
            }
        </div> 
    );
}