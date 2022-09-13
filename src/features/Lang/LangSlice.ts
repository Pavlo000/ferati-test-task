import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LangState {
  lang: 'eng' | 'est';
}

const initialState: LangState = {
  lang: 'eng',
};

export const LangSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<'eng' | 'est'>) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = LangSlice.actions;

export default LangSlice.reducer;
