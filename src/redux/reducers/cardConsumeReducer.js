import {createSlice} from '@reduxjs/toolkit';

export const cardConsumeReducer = createSlice({
    name:"cardConsume",
    initialState:[],
    reducers:{
        setCardsConsume: (state, { payload }) => payload,
    },
});

//Escritura
export const {setCardsConsume} = cardConsumeReducer.actions
//Lectura
export default cardConsumeReducer.reducer;