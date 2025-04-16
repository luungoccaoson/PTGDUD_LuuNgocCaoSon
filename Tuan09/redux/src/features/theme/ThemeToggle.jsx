import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './themeSlice';

export default function ThemeToggle() { 
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className={`flex flex-col items-center p-15 rounded-lg mx-100 mt-5 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <h1 className="text-3xl font-bold mb-4">Toggle Theme</h1>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-200"
      >
        Chuyển chế độ {theme === 'light' ? 'Tối' : 'Sáng'}
      </button> 
    </div>
  );
}
