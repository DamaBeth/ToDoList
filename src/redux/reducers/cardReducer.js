import {createSlice} from '@reduxjs/toolkit';

export const cardReducer = createSlice({
    name:"card",
    initialState:[
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
            active:false,
            prioridad:"baja"
        }
    ],
    reducers:{
        setCards: (state, { payload }) => payload,
        addCards: (state, action) => {
            const initialCard = {
                key: action.payload.id, 
                id: action.payload.id, 
                title: action.payload.title, 
                descripcion: action.payload.descripcion,
                fecha: action.payload.fecha,
                hora: action.payload.hora,
                active:false,
                prioridad:"baja"
            };
            state.push(initialCard);
        },
        taskComplete: (state, action) => {
            const index = state.findIndex(
                (card) => card.id === action.payload.id
            );
            state[index].active = action.payload.active;
        },
        deleteCard: (state, action) => {
          return state.filter((card) => card.id !== action.payload.id);
        },
    },
});

//Escritura
export const {setCards, addCards, taskComplete, deleteCard} = cardReducer.actions;
//Lectura
export default cardReducer.reducer;