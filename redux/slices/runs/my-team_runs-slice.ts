import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface RunState {
  value: number;
}

const initialState: RunState = {
  value: 0,
};

export const myTeam_RunSlice = createSlice({
  name: "myTeam_RunsCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementBy } = myTeam_RunSlice.actions;
export default myTeam_RunSlice.reducer;
