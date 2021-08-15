import { configureStore } from "@reduxjs/toolkit";
import cardConsumeReducer from "./reducers/cardConsumeReducer";

function initStore() {
  return configureStore({
    reducer: {
      cardConsume: cardConsumeReducer,
    },
  });
}

const store = initStore();

export default store;