import { configureStore } from "@reduxjs/toolkit";
import myTeam_RunSlice from "../slices/runs/my-team_runs-slice";
export const store = configureStore({
  reducer: {
    myTeam_RunSlice: myTeam_RunSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
