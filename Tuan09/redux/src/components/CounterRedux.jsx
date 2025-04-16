import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CounterRedux() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-center p-5 w-100">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Redux Counter</h1>
        <h2 className="text-4xl mb-4">{count}</h2>
        <div className="space-x-4">
            <button
            onClick={() => dispatch({ type: 'INCREMENT' })}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
            Tăng
            </button>
            <button
            onClick={() => dispatch({ type: 'DECREMENT' })}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded "
            >
            Giảm
            </button>
        </div>
    </div>

  );
}
