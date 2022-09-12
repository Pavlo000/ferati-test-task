import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ContactFixedState {
  lang: 'eng' | 'est';
}

const initialState: ContactFixedState = {
  lang: 'eng',
};

export const contactFixedSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<'eng' | 'est'>) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = contactFixedSlice.actions;

export default contactFixedSlice.reducer;
