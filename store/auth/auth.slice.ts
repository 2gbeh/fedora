import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store.config";
import { ICurrentUser } from "./auth.interface";

interface SliceState {
  currentUser: ICurrentUser | null;
}

const initialState = {
  currentUser: null,
} satisfies SliceState as SliceState;

const slice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    resetCurrentUser: (state) => {
      state.currentUser = null;
    },
    setCurrentUser: (state, action: PayloadAction<ICurrentUser>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { resetCurrentUser, setCurrentUser } = slice.actions;
export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
