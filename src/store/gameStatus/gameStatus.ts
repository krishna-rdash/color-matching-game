import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
type STATUS = "Won"|"Lost";
// Define a type for the slice state
interface GameStatusState {
  status: string;
}

// Define the initial state using that type
const initialState: GameStatusState = {
  status: "running",
};

export const gameStatusSlice = createSlice({
  name: "gameStatus",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setStatus:(state,action:PayloadAction<STATUS>)=>{
        state.status =action.payload;
    }
  },
});

export const { setStatus } = gameStatusSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGameStatus= (state: RootState) => state.gameStatus.status;

export default gameStatusSlice.reducer;
