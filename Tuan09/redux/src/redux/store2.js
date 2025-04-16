import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    rootReducer,
    cart: cartReducer,
    auth: authReducer,
  }
});

export default store;
