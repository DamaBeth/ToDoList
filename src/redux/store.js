import { configureStore } from "@reduxjs/toolkit";
import cardConsumeReducer from "./reducers/cardConsumeReducer";
import cardReducer from "./reducers/cardReducer";

function initStore() {
  return configureStore({
    reducer: {
      cardConsume: cardConsumeReducer,
      card: cardReducer
    },
  });
}

const store = initStore();

export default store;