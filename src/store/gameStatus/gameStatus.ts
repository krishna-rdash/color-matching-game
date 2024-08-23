import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
type STATUS = "Won" | "Lost" | "Running";
interface GameStatusState {
  status: string;
}
const initialState: GameStatusState = {
  status: "running",
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
