import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

export default function CounterToolkit() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-3 w-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Redux Toolkit Counter</h1>
      <h2 className="text-4xl mb-6">{count}</h2>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-200"
        >
          Tăng
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-200"
        >
          Giảm
        </button>
      </div>
    </div>

  );
}
