import { configureStore } from '@reduxjs/toolkit';
import addToCartSlice from './addToCartSlice';

export const store = configureStore({
  reducer: {
    addToCart: addToCartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
