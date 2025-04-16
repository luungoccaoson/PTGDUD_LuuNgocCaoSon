// src/features/cart/cartStore.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const cartStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default cartStore;
