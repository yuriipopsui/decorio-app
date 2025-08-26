import { configureStore } from '@reduxjs/toolkit';
import addToCartSlice from './addToCartSlice';

export const store = configureStore({
<<<<<<< HEAD
  reducer: {
    addToCart: addToCartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
=======
    reducer: {
        addToCart: addToCartSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
