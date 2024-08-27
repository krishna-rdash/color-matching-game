import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { GameVariableState } from "../../type/interfaces";

const initialState: GameVariableState = {
  colorIndexArray: Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 6)
  ),
};

export const gameVariableSlice = createSlice({
  name: "gameVariable",
  initialState,
  reducers: {
    reInitializeColorIdx: (state) => {
      state.colorIndexArray = Array.from({ length: 100 }, () =>
        Math.floor(Math.random() * 6)
      );
    },
  },
});

export const { reInitializeColorIdx } = gameVariableSlice.actions;
export const selectGameVariable = (state: RootState) =>
  state.gameVariable.colorIndexArray;
export default gameVariableSlice.reducer;
