import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const todoStore = configureStore({
  reducer: {
    todos: todoReducer
  }
});

export default todoStore;
