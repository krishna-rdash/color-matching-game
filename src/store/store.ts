import { configureStore } from "@reduxjs/toolkit";
import gameStatusReducer from "./gameStatus/gameStatus";
import gameVariableReduce from "./gameVariable/gameVariable";
export const store = configureStore({
  reducer: {
    gameStatus: gameStatusReducer,
    gameVariable: gameVariableReduce,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
