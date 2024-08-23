import { configureStore } from "@reduxjs/toolkit";
import gameStatusReducer from "./gameStatus/gameStatus";

export const store = configureStore({
  reducer: {
    gameStatus: gameStatusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
