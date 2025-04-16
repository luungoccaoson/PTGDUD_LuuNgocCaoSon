import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import cartReducer from '../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    rootReducer,
    cart: cartReducer,
  }
});

export default store;
