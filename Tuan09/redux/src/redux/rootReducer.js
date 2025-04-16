import { combineReducers } from 'redux';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todos/todoSlice';
import themeReducer from '../features/theme/themeSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  theme: themeReducer
});

export default rootReducer;
