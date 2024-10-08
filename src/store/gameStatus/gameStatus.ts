import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { STATUS } from "../../type/custom-type";
import { GameStatusState } from "../../type/interfaces";

const initialState: GameStatusState = {
  status: "Running",
};

export const gameStatusSlice = createSlice({
  name: "gameStatus",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<STATUS>) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = gameStatusSlice.actions;
export const selectGameStatus = (state: RootState) => state.gameStatus.status;

export default gameStatusSlice.reducer;
