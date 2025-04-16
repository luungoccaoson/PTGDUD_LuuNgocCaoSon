import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';

const themeStore = configureStore({
  reducer: {
    theme: themeReducer
  }
});

export default themeStore;
