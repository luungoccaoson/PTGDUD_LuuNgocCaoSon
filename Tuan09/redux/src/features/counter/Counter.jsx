import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

export default function Counter() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 mx-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Redux Counter</h1>
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">{count}</h2>
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
