import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./reducers/pokemonReducer";

function initStore() {
  return configureStore({
    reducer: {
      pokemon: pokemonReducer,
    },
  });
}

const store = initStore();

export default store;