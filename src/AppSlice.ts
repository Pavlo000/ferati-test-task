import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const MINWIDTH = 992;

export interface AppState {
  hasLargeScreen: boolean;
}

const initialState: AppState = {
  hasLargeScreen: window.innerWidth > MINWIDTH,
};

export const appSlice = createSlice({
  name: 'hasLargeScreen',
  initialState,
  reducers: {
    changeHasLargeScreen: (state, action: PayloadAction<boolean>) => {
      state.hasLargeScreen = action.payload;
    },
  },
});

export const { changeHasLargeScreen } = appSlice.actions;

export default appSlice.reducer;
