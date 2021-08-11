import {createSlice} from '@reduxjs/toolkit';

export const pokemonReducer = createSlice({
    name:"pokemon",
    initialState:[],
    reducers:{
        setPokemons: (state, { payload }) => payload,
    },
});

//Escritura
export const {setPokemons} = pokemonReducer.actions
//Lectura
export default pokemonReducer.reducer;