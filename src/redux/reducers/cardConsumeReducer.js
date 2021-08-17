import {createSlice} from '@reduxjs/toolkit';

export const cardConsumeReducer = createSlice({
    name:"cardConsume",
    initialState:[],
    reducers:{
        setCardsConsume: (state, { payload }) => payload,
        taskConsumeComplete: (state, action) => {
            const index = state.findIndex(
                (cardConsume) => cardConsume.id === action.payload.id
            );
            state[index].active = action.payload.active;
        },
        deleteCardConsume: (state, action) => {
          return state.filter((cardConsume) => cardConsume.id !== action.payload.id);
        },
    },
});

//Escritura
export const {setCardsConsume, taskConsumeComplete, deleteCardConsume} = cardConsumeReducer.actions
//Lectura
export default cardConsumeReducer.reducer;