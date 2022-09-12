import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import contactFixedReducer from '../features/ContactFixed/ContactFixedSlice';
import appReducer from '../AppSlice';

export const store = configureStore({
  reducer: {
    contactFixed: contactFixedReducer,
    app: appReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
