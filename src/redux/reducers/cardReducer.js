import {createSlice} from '@reduxjs/toolkit';

export const cardReducer = createSlice({
    name:"card",
    initialState:[
        {
            id:1, 
            title:"Reunión con Full Stack",         
            descripcion:'Importante',    
            fecha: "Hoy",   
            hora:"11:00",
            active:false,
            prioridad:"alta"
        },
        {
            id:2, 
            title:"Clase de Dispositivos móviles",  
            descripcion:'Clases',        
            fecha: "Hoy",   
            hora:"1:00",
            active:false,
            prioridad:"baja"
        }
    ],
    reducers:{
        setCards: (state, { payload }) => payload,
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
export const {setCards, taskComplete, deleteCard} = cardReducer.actions;
//Lectura
export default cardReducer.reducer;