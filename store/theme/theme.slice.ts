import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store.config";

export type ThemeType = "light" | "dark";

interface SliceState {
  theme: ThemeType;
}

const initialState = {
  theme: "light",
} satisfies SliceState as SliceState;

const slice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { setTheme, toggleTheme } = slice.actions;
export default slice.reducer;

export const selectTheme = (state: RootState) => state.theme.theme;