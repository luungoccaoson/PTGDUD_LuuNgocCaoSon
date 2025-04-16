import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './todoSlice';

export default function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return ( 
    <div className="flex flex-col items-center mx-50 min-h-screen bg-gray-100 p-4 mt-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">To-do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          Thêm
        </button>
      </div>
      <ul className="space-y-4">
        {todos.map(todo => (
          <li key={todo.id} className={`flex justify-between items-center ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            <span className='text-xl p-3'>{todo.text}</span>
            <div>
              <button
                onClick={() => dispatch(toggleTodo(todo.id))}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg mr-2"
              >
                {todo.completed ? 'Chưa xong' : 'Hoàn thành'}
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Xoá
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
